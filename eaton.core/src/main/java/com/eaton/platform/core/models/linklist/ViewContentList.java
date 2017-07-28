package com.eaton.platform.core.models.linklist;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.GregorianCalendar;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.day.cq.commons.RangeIterator;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.bean.LinkListTypeBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This Sling Model used in LinkListHelper class. </html>
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ViewContentList extends LinkListModel {

	/** The manual links list. */
	public List<ManualLinksModel> manualLinksList;
	
	/** The fixed links list. */
	public List<FixedLinksModel> fixedLinksList;
	
	/** The child page links list. */
	public List<LinkListTypeBean> childPageAndTagsLinksList;
	
	/** The list type. */
	@Inject 
	private String listType;
	
	/** The parent page. */
	@Inject
	private String parentPage;
	
	/** The tags. */
	@Inject
	private String tags;
	
	/** The fixed links. */
	@Inject
	private Resource fixedLinks;
	
	/** The manual links. */
	@Inject 
	private Resource manualLinks;
	
	/** The count. */
	@Inject
	private int count;
	
	/** The sort. */
	@Inject
	private String sort;
	
    /** The alignment. */
    @Inject
	private String alignment;
    
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		switch(listType) {
			case CommonConstants.CHILD_PAGES : {
					childPageAndTagsLinksList = new ArrayList<LinkListTypeBean>();
					if (null != this.parentPage) {
						populateParentModel(this.childPageAndTagsLinksList, this.parentPage);
						// sort the list when author has either selected Parent Page or Tag
						getSortedList(this.childPageAndTagsLinksList);
					}
					break;
			}
			case CommonConstants.TAGS : {
					childPageAndTagsLinksList = new ArrayList<LinkListTypeBean>();
					if (null != this.tags) {
						populateTagsModel(this.childPageAndTagsLinksList, this.tags);
						// sort the list when author has either selected Parent Page or Tag
						getSortedList(this.childPageAndTagsLinksList);
					}
					break;
			}
			case CommonConstants.FIXED_LIST : {
					this.fixedLinksList = new ArrayList<FixedLinksModel>();
					if (null != this.fixedLinks) {
						populateFixedLinkModel(this.fixedLinksList, this.fixedLinks);
					}
					break;
			}
			case CommonConstants.MANUAL_LIST : {
					this.manualLinksList = new ArrayList<ManualLinksModel>();
					if (null != this.manualLinks) {
						populateManualLinkModel(this.manualLinksList, this.manualLinks);
					}
					break;
			}
		}
	}
	
	/**
	 * Populate parent model.
	 *
	 * @param childPageAndTagsLinksList the child page and tags links list
	 * @param parentPagePath the parent page path
	 * @return the list
	 */
	public List<LinkListTypeBean> populateParentModel(List<LinkListTypeBean> childPageAndTagsLinksList, String parentPagePath) {
		if (StringUtils.equals(CommonConstants.CHILD_PAGES, listType)) {
			
					PageManager pageManager = this.resourceResolver.adaptTo(PageManager.class);
					Page parentPage = pageManager.getPage(parentPagePath);
	
					if (null != parentPage) {
						Iterator<Page> childPages = parentPage.listChildren();
						while (childPages.hasNext()) {
							Page childPage = childPages.next();
								setFields(childPageAndTagsLinksList, childPage);
						}
					}
		}
		return childPageAndTagsLinksList;
	}

	/**
	 * Populate tags model.
	 *
	 * @param childPageAndTagsLinksList the child page and tags links list
	 * @param tags the tags
	 * @return the list
	 */
	public List<LinkListTypeBean> populateTagsModel(List<LinkListTypeBean> childPageAndTagsLinksList, String tags) {
		if (StringUtils.equals(CommonConstants.TAGS, listType)) {

			TagManager tagManager = this.resourceResolver.adaptTo(TagManager.class);
			RangeIterator<Resource> tagsIterator = tagManager.find(tags);
			if(null != tagsIterator) {
				while (tagsIterator.hasNext()) {
					Resource tagResource = (Resource) tagsIterator.next();
					PageManager pageManager = this.resourceResolver.adaptTo(PageManager.class);
						Page tagPage = pageManager.getPage(StringUtils.removeEnd(tagResource.getPath(), JcrConstants.JCR_CONTENT));
	
						if (null != tagPage && StringUtils.startsWith(tagResource.getPath(), CommonConstants.CONTENT_ROOT_FOLDER)) {
								setFields(childPageAndTagsLinksList, tagPage);
						}
					}
				}
			}
		return childPageAndTagsLinksList;
	}
	
	 /**
 	 * Populate manual link model.
 	 *
 	 * @param manualLinksList the manual links list
 	 * @param resource the resource
 	 * @return the list
 	 */
	public List<ManualLinksModel> populateManualLinkModel(List<ManualLinksModel> manualLinksList, Resource resource) {
			if (null != resource) {
				Iterator<Resource> linkResources = resource.listChildren();
				while (linkResources.hasNext()) {
					ManualLinksModel manualLink = linkResources.next().adaptTo(ManualLinksModel.class);
					if (null != manualLink)
						manualLinksList.add(manualLink);
				}
			}
			return manualLinksList;
	}

	 /**
 	 * Populate fixed link model.
 	 *
 	 * @param fixedLinksList the fixed links list
 	 * @param resource the resource
 	 * @return the list
 	 */
	public List<FixedLinksModel> populateFixedLinkModel(List<FixedLinksModel> fixedLinksList, Resource resource) {
			if (null != resource) {
				Iterator<Resource> linkResources = resource.listChildren();
				while (linkResources.hasNext()) {
					FixedLinksModel fixedLink = linkResources.next().adaptTo(FixedLinksModel.class);
					if (null != fixedLink)
						fixedLinksList.add(fixedLink);
				}
			}
			return fixedLinksList;
	}

	/**
	 * Sets the fields.
	 *
	 * @param array the array
	 * @param page the page
	 */
	private void setFields(List<LinkListTypeBean> array, Page page) {
		LinkListTypeBean listTypeBean = new LinkListTypeBean();
		if (!page.isHideInNav() && childPageAndTagsLinksList.size() < this.count) {
			listTypeBean.setLinkTitle(CommonUtil.getLinkTitle(null, page.getPath(), this.resourceResolver));
			listTypeBean.setPageLink(page.getPath());
			listTypeBean.setTemplateName(page.getProperties().get(CommonConstants.TEMPLATE_PROP_KEY, StringUtils.EMPTY).toString());
			if (page.getProperties().containsKey(CommonConstants.PUBLICATION_DATE))
				listTypeBean.setPublicationDate(page.getProperties().get(CommonConstants.PUBLICATION_DATE, GregorianCalendar.class).getTimeInMillis());
			listTypeBean.setLastModifiedDate(Long.toString(page.getLastModified().getTimeInMillis()));
			listTypeBean.setCreatedDate(page.getProperties().get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis());
			listTypeBean.setNavName(page.getName());
			listTypeBean.setNavTitle(page.getTitle());
			array.add(listTypeBean);
		}
	}
	
	/**
	 * this method is sorting the list based on the author selection.
	 *
	 * @param list the list
	 * @return the sorted list
	 */
	private void getSortedList(List<LinkListTypeBean> list) {
		Collections.sort(list, new Comparator<LinkListTypeBean>() {
			public int compare(LinkListTypeBean linkList1, LinkListTypeBean linkList2) {
				int comparisonValue = 0;
				switch(sort) {
					case CommonConstants.TITLE : {
						comparisonValue = linkList1.getLinkTitle().compareTo(linkList2.getLinkTitle());
						break;
					}
					case CommonConstants.PUBLISH_DATE : {
						if (null != linkList1.getPublicationDate() && null != linkList2.getPublicationDate()) {
							comparisonValue = -linkList1.getPublicationDate().compareTo(linkList2.getPublicationDate());
						}
						break;
					}
					case CommonConstants.CREATED_DT : {
						comparisonValue = -linkList1.getCreatedDate().compareTo(linkList2.getCreatedDate());
						break;
					}
					case CommonConstants.LAST_MOD_DT : {
						comparisonValue = -linkList1.getLastModifiedDate().compareTo(linkList2.getLastModifiedDate());
						break;
					}
					case CommonConstants.TEMPLATE : {
						comparisonValue = linkList1.getTemplateName().compareTo(linkList2.getTemplateName());
						break;
					}
					default : {
						comparisonValue = 0;
					}
				}
				return comparisonValue;
			}
		});
	}

	/**
	 * Gets the alignment.
	 *
	 * @return the alignment
	 */
	public String getAlignment() {
		return alignment;
	}

	/**
	 * Gets the list type.
	 *
	 * @return the list type
	 */
	public String getListType() {
		return listType;
	}

	/**
	 * Gets the list type array.
	 *
	 * @return the list type array
	 */
	public List<?> getListTypeArray() {
		List<?> viewList = new ArrayList<>();
		if(StringUtils.equals(CommonConstants.CHILD_PAGES, listType) || StringUtils.equals(CommonConstants.TAGS, listType)) {
			viewList = childPageAndTagsLinksList;
		} else if(StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {
			viewList = fixedLinksList;
		} else if(StringUtils.equals(CommonConstants.MANUAL_LIST, listType)) {
			viewList = manualLinksList;
		}
		return viewList;
	}
}
