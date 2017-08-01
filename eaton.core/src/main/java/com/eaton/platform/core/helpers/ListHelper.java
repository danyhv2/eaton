package com.eaton.platform.core.helpers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.RangeIterator;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.NameConstants;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.bean.ListTypeBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.ListModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide
 * result links list for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class ListHelper extends EatonAbstractUseBean {

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ListHelper.class); 

	/** The Constant LINKS_VIEW. */
	private static final String LINKS_VIEW = "links";

	/** The Constant ARTICLE_LIST_SINGLE_FEATURE_VIEW. */
	private static final String ARTICLE_LIST_SINGLE_FEATURE_VIEW = "article-list-single-feature";
	
	/** The listModel bean. */
	private ListModel listModel;
	
	/** The type list. */
	private List<ListTypeBean> typeList;
	
	/** The link view list. */
	private List<List<ListTypeBean>> linkViewList;
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOG.debug("ListHelper :: setComponentValues() :: Started");
		listModel = res.adaptTo(ListModel.class);
		String listType = listModel.getListType();
		typeList = new ArrayList<ListTypeBean>();
		// set the bean in the typeList
		setListContent(resourceResolver, pageManager, listType);
		
		// sort the list when author has either selected Parent Page or Tag
		if(StringUtils.equals(CommonConstants.TAGS, listType) || StringUtils.equals(CommonConstants.CHILD_PAGES, listType)){
			getSortedList();
		}
		
		// Once 10 links fill the first column, the remaining links are carried over into the next column.
		// 10 links per column is recommended with a max of 40, 
		// but should the number of links exceed 40 then the total number of links should be equally distributed among the 4 columns.
		if(StringUtils.equals(LINKS_VIEW, listModel.getView())) {
			getColumnLinksList();
		}
		LOG.debug("ListHelper :: setComponentValues() :: Exit");
	}

	/**
	 * this method prepares the list based on author selection on type of list.
	 *
	 * @param resResolver the res resolver
	 * @param pageManager the page manager
	 * @param listType the list type
	 */
	private void setListContent(ResourceResolver resResolver, PageManager pageManager, String listType) {
		LOG.debug("ListHelper :: setListContent() :: Started");
		SimpleDateFormat simpleDate = new SimpleDateFormat();
		SimpleDateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH);
		
		// based on the type of view set the bean elements in the typeList for presentation layer
		if(StringUtils.equals(CommonConstants.CHILD_PAGES, listType)) {
			String parentPagePath = listModel.getParentPage();
			Resource parentResource = resResolver.getResource(parentPagePath);
			
			if(null != parentResource){
				Iterator<Resource> childrenResource = parentResource.listChildren();
				while(childrenResource.hasNext()){
					Resource childResource = childrenResource.next();
					if(StringUtils.equals(CommonUtil.getStringProperty(childResource.getValueMap(), JcrConstants.JCR_PRIMARYTYPE), NameConstants.NT_PAGE)){
						Resource jcrResource = childResource.getChild(JcrConstants.JCR_CONTENT);
						if(null != jcrResource) {
							ValueMap pageProperties = jcrResource.getValueMap();
							if(StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(pageProperties, NameConstants.PN_HIDE_IN_NAV)) && typeList.size() < listModel.getCount()) {
								setFieldsInList(resResolver, simpleDate, publicationDateFormat, childResource, pageProperties, listType, pageProperties);
							}
						}
					}
				}
			}
			
		} else if(StringUtils.equals(CommonConstants.TAGS, listType)) {

			TagManager tagManager = resResolver.adaptTo(TagManager.class);
            RangeIterator<Resource> tagsIt = tagManager.find(listModel.getTags());
            
            if(null != tagsIt) {
	            while (tagsIt.hasNext()) { 
	                Resource tagResource = (Resource)tagsIt.next(); 
	    			if(null != tagResource && StringUtils.startsWith(tagResource.getPath(), CommonConstants.CONTENT_ROOT_FOLDER)){
	    					ValueMap pageProperties = tagResource.getValueMap();
	    					if(StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(pageProperties, NameConstants.PN_HIDE_IN_NAV)) && typeList.size() < listModel.getCount()){
	    						setFieldsInList(resResolver, simpleDate, publicationDateFormat, tagResource, pageProperties, listType, pageProperties);
	    					}
	    			}
	            }
            }
		} else if(StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {
			
			Resource fixedPath = listModel.getFixedLinks();
				if(null != fixedPath) {
					Iterator<Resource> items = fixedPath.listChildren();
					while(items.hasNext()){
						Resource item = items.next();
						ValueMap properties = item.getValueMap();
						if(properties.containsKey(CommonConstants.LINK_PATH)) {
							Resource fixedPageResource = resResolver.getResource(CommonUtil.getStringProperty(properties, CommonConstants.LINK_PATH));
							if(null != fixedPageResource){
								Resource jcrResource = fixedPageResource.getChild(JcrConstants.JCR_CONTENT);
								ValueMap pageProperties = jcrResource.getValueMap();
								if(null != jcrResource && StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(pageProperties, NameConstants.PN_HIDE_IN_NAV))) {
									setFieldsInList(resResolver, simpleDate, publicationDateFormat, fixedPageResource, pageProperties, listType, properties);
								}
							}
						}
					}
				}
		}
		LOG.debug("ListHelper :: setListContent() :: Exit");
	}

	/**
	 * Sets the fields in list.
	 *
	 * @param resResolver the res resolver
	 * @param simpleDate the simple date
	 * @param publicationDateFormat the publication date format
	 * @param pageResource the page resource
	 * @param properties the properties
	 * @param listType the list type
	 */
	private void setFieldsInList(ResourceResolver resResolver,
			SimpleDateFormat simpleDate,
			SimpleDateFormat publicationDateFormat, Resource pageResource,
			ValueMap properties, String listType, ValueMap pageProperties) {
		ListTypeBean listTypeBean = new ListTypeBean();
		if(StringUtils.equals(ARTICLE_LIST_SINGLE_FEATURE_VIEW, listModel.getView())) {
			String imagePath = CommonUtil.getStringProperty(properties, CommonConstants.TEASER_IMAGE_PATH);
			String teaserTitle = CommonUtil.getStringProperty(properties, CommonConstants.TEASER_TITLE);
			listTypeBean.setTeaserImage(imagePath);
			listTypeBean.setHeadline(StringUtils.isNotBlank(teaserTitle) ? teaserTitle : CommonUtil.getLinkTitle(null, StringUtils.removeEnd(pageResource.getPath(), JcrConstants.JCR_CONTENT), this.resourceResolver));
			listTypeBean.setPagePath(StringUtils.removeEnd(pageResource.getPath(), JcrConstants.JCR_CONTENT));
			listTypeBean.setEyebrow(CommonUtil.getStringProperty(properties, CommonConstants.EYEBROW_TITLE));
			listTypeBean.setDescriptionFeature(CommonUtil.getStringProperty(properties, CommonConstants.TEASER_DESCRIPTION));
			listTypeBean.setAltTxt(CommonUtil.getAssetAltText(resResolver, imagePath));
		} else if(StringUtils.equals(LINKS_VIEW, listModel.getView())) {
			listTypeBean.setEyebrow(CommonUtil.getLinkTitle(null, StringUtils.removeEnd(pageResource.getPath(), JcrConstants.JCR_CONTENT), this.resourceResolver));
		}
		if(StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {
			listTypeBean.setWindowFixed(StringUtils.equals(CommonUtil.getStringProperty(pageProperties, CommonConstants.NEW_WINDOW_FIXED), CommonConstants.TRUE) ? CommonConstants.TARGET_BLANK : StringUtils.EMPTY);
		}
		listTypeBean.setPagePath(StringUtils.removeEnd(pageResource.getPath(), JcrConstants.JCR_CONTENT));
		listTypeBean.setPublicationDate(CommonUtil.getDateProperty(properties, CommonConstants.PUBLICATION_DATE, publicationDateFormat).toString());
		listTypeBean.setLastModifiedDate(CommonUtil.getDateProperty(properties, NameConstants.PN_PAGE_LAST_MOD, simpleDate).toString());
		listTypeBean.setCreatedDate(CommonUtil.getDateProperty(properties, CommonConstants.JCR_CREATED, simpleDate).toString());
		listTypeBean.setTemplateName(CommonUtil.getStringProperty(properties, CommonConstants.TEMPLATE_PROP_KEY));
		typeList.add(listTypeBean);
	}

	/**
	 * this method is sorting the list based on the author selection.
	 *
	 * @return the sorted list
	 */
	private void getSortedList() {
		LOG.debug("ListHelper :: getSortedList() :: Started");

			Collections.sort(typeList, new Comparator<ListTypeBean>() {
				public int compare(ListTypeBean list1,	ListTypeBean list2) {
						int comparisonValue = 0;
						switch(listModel.getSort()) {
							case CommonConstants.TITLE : {
								comparisonValue = list1.getEyebrow().compareToIgnoreCase(list2.getEyebrow());
								break;
							}
							case CommonConstants.PUBLISH_DATE : {
								if(StringUtils.isNotBlank(list1.getPublicationDate()) && StringUtils.isNotBlank(list2.getPublicationDate())) {
									DateFormat simpleDate = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH);
									Date date1;
									Date date2;
									try {
										date1 = simpleDate.parse(list1.getPublicationDate());
										date2 = simpleDate.parse(list2.getPublicationDate());
										comparisonValue = -date1.compareTo(date2);
									} catch (ParseException e) {
										LOG.error("ListHelper | Unable to parse the date "+ e);
									}
								}
								break;
							}
							case CommonConstants.CREATED_DT : {
								comparisonValue = -list1.getCreatedDate().compareTo(list2.getCreatedDate());
								break;
							}
							case CommonConstants.LAST_MOD_DT : {
								comparisonValue = -list1.getLastModifiedDate().compareTo(list2.getLastModifiedDate());
								break;
							}
							case CommonConstants.TEMPLATE : {
								comparisonValue = list1.getTemplateName().compareToIgnoreCase(list2.getTemplateName());
								break;
							}
							default : {
								comparisonValue = 0;
							}
						}
						return comparisonValue;
					}
			});
		LOG.debug("ListHelper :: getSortedList() :: Exit");
	}

	/**
	 * Gets the column links list.
	 *
	 * @return the column links list
	 */
	private void getColumnLinksList() {
		linkViewList = new ArrayList<List<ListTypeBean>>();
		int columnCount = typeList.size()/4;
		if(columnCount < 11) {
			columnCount = 10; 
		}
		if(typeList.size()< columnCount+1) {
			linkViewList.add(typeList);
		} else if(typeList.size() > columnCount && typeList.size() < 2*columnCount+1) {
			linkViewList.add(typeList.subList(0, columnCount));
			linkViewList.add(typeList.subList(columnCount, typeList.size()));
		} else if((typeList.size()> 2*columnCount) && typeList.size() < 3*columnCount+1) {
			linkViewList.add(typeList.subList(0, columnCount));
			linkViewList.add(typeList.subList(columnCount,2*columnCount));
			linkViewList.add(typeList.subList(2*columnCount, typeList.size()));
		} else if(typeList.size()> 3*columnCount) {
			linkViewList.add(typeList.subList(0, columnCount));
			linkViewList.add(typeList.subList(columnCount,2*columnCount));
			linkViewList.add(typeList.subList(2*columnCount,3*columnCount));
			linkViewList.add(typeList.subList(3*columnCount, typeList.size()));
		}
	}
	
	/**
	 * Gets the type list.
	 *
	 * @return typeList
	 */
	public List<ListTypeBean> getTypeList() {
		return typeList;
	}

	/**
	 * Gets the link view list.
	 *
	 * @return the link view list
	 */
	public List<List<ListTypeBean>> getLinkViewList() {
		return linkViewList;
	}

}
