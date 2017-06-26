package com.eaton.platform.core.helpers;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.RangeIterator;
import com.day.cq.dam.api.Asset;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.LinkListBean;

/**
 * <html> Description: This class is used in sightly to provide
 * result links list bean for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class LinkListHelper extends BaseComponent {

	private static final Logger LOG = LoggerFactory.getLogger(LinkListHelper.class); 
	
	private LinkListBean linkListBean;
	private List<LinkListTypeBean> typeList;
	
	@Override
	public void activate() {
		
		linkListBean = getResource().adaptTo(LinkListBean.class);
		typeList = new ArrayList<LinkListTypeBean>();
		
		ResourceResolver resResolver=  getResource().getResourceResolver();
		PageManager pageManager = resResolver.adaptTo(PageManager.class);
		String listType = linkListBean.getListType();
		setViewContent(resResolver, pageManager, listType);
		// sort the list when author has either selected Parent Page or Tag
		if(StringUtils.equalsIgnoreCase(listType, CommonConstants.TAGS) || StringUtils.equalsIgnoreCase(listType, CommonConstants.CHILD_PAGES)){
			if(StringUtils.equals(linkListBean.getView(),"verical-link-list") || StringUtils.equals(linkListBean.getView(), "horizontal-link-list") || (StringUtils.equals(linkListBean.getView(), "primary-nav") &&  StringUtils.equalsIgnoreCase(listType, CommonConstants.CHILD_PAGES))) {
				getSortedList();
			}
		}
		
	}

	private void setViewContent(ResourceResolver resResolver, PageManager pageManager, String listType) {
		LinkListTypeBean listTypeBean;
		DateFormat simpleDate = new SimpleDateFormat();
		DateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH);
		if(StringUtils.equalsIgnoreCase(listType, CommonConstants.CHILD_PAGES)) {
			String parentPagePath = linkListBean.getParentPage();
			
			if(StringUtils.equals(linkListBean.getView(),"verical-link-list") || StringUtils.equals(linkListBean.getView(), "horizontal-link-list") || StringUtils.equals(linkListBean.getView(), "primary-nav")) {
				Page parentPage = pageManager.getPage(parentPagePath);
				
				if(parentPage != null){
					Iterator<Page> childPages = parentPage.listChildren(new PageFilter(getRequest()));
					while(childPages.hasNext()){
						listTypeBean = new LinkListTypeBean();
						Page childPage = childPages.next();
						
						listTypeBean.setLinkTitle(childPage.getTitle());
						listTypeBean.setLinkPagePath(childPage.getPath());
						listTypeBean.setTemplateName(childPage.getTemplate().getName());
						if(StringUtils.isNotEmpty(childPage.getProperties().get(CommonConstants.PUBLICATION_DATE,"").toString()))
							listTypeBean.setPublicationDate(publicationDateFormat.format(childPage.getProperties().get(CommonConstants.PUBLICATION_DATE,GregorianCalendar.class).getTimeInMillis()));
						listTypeBean.setLastModifiedDate(Long.toString(childPage.getLastModified().getTimeInMillis()));
						listTypeBean.setCreatedDate(simpleDate.format(childPage.getProperties().get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis()));
						listTypeBean.setNavName(childPage.getName());
						listTypeBean.setNavTitle(childPage.getTitle());
						typeList.add(listTypeBean);
						// the list contains data based on the count size mentioned in dialog
						if(typeList.size() >= linkListBean.getCount()){
							break;
						}
					}
				}
			}
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.TAGS)) {

			TagManager tagManager = resResolver.adaptTo(TagManager.class);
            RangeIterator<Resource> tagsIt = tagManager.find(linkListBean.getTags());
             
            while (tagsIt.hasNext()) { 
                Resource tagResource = (Resource)tagsIt.next(); 
                
                if(StringUtils.equals(linkListBean.getView(), "verical-link-list") || StringUtils.equals(linkListBean.getView(), "horizontal-link-list")) {
    			Page tagPage = pageManager.getPage(StringUtils.removeEnd(tagResource.getPath(), CommonConstants.JCR_CONTENT));
    			
	    			if(tagPage != null){
	    					listTypeBean = new LinkListTypeBean();
	    					if(!tagPage.isHideInNav() && typeList.size() < linkListBean.getCount()){
	    						listTypeBean.setLinkTitle(tagPage.getTitle());
	    						listTypeBean.setLinkPagePath(tagPage.getPath());
	    						listTypeBean.setTemplateName(tagPage.getTemplate().getName());
	    						typeList.add(listTypeBean);
	    					}
	    			}
                }
            }
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.FIXED_LIST)) {
			
			Resource fixedPath = linkListBean.getFixedLinks();
			Node fixedNodes = fixedPath.adaptTo(Node.class);
			try {
				NodeIterator itemNodes = fixedNodes.getNodes();
				while(itemNodes.hasNext()){
					listTypeBean = new LinkListTypeBean();
					Node itemNode = itemNodes.nextNode();
					if(StringUtils.equals(linkListBean.getView(),"verical-link-list") || StringUtils.equals(linkListBean.getView(), "horizontal-link-list")) {
						if(itemNode.hasProperty(CommonConstants.LINK_PATH)) {
							String fixedPagePath = itemNode.getProperty(CommonConstants.LINK_PATH).getString();
							Page fixedPage = pageManager.getPage(fixedPagePath);
							if(!fixedPage.isHideInNav()){
								listTypeBean.setLinkTitle(fixedPage.getTitle());
								listTypeBean.setLinkPagePath(fixedPage.getPath());
								typeList.add(listTypeBean);
							}
						}
					}
				}
				
			} catch (RepositoryException e) {
				LOG.error("Exception occured to not able to access repository - ", e);
			}
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.MANUAL_LIST)) {
			Resource manualPath = linkListBean.getManualLinks();
			try {
				if(StringUtils.equals(linkListBean.getView(),"verical-link-list") || StringUtils.equals(linkListBean.getView(), "horizontal-link-list") || StringUtils.equals(linkListBean.getView(), "primary-nav")) {
					Node manualNode = manualPath.adaptTo(Node.class);
					NodeIterator itemNodes = manualNode.getNodes();
					while(itemNodes.hasNext()){
						listTypeBean = new LinkListTypeBean();
						Node itemNode = itemNodes.nextNode();
						if(itemNode.hasProperty("pageLink")) {
							String pathType = itemNode.getProperty("pageLink").getString();
							if(!StringUtils.startsWith(pathType, "/content/dam/")){
								if(itemNode.hasProperty("transLinkTitle")) {
									listTypeBean.setLinkTitle(itemNode.getProperty("transLinkTitle").getString());
								} else {
									Page manualPage = pageManager.getPage(itemNode.hasProperty("pageLink") ? itemNode.getProperty("pageLink").getString() : " ");
									if(manualPage != null){
										listTypeBean.setLinkTitle(manualPage.getNavigationTitle() != null? manualPage.getNavigationTitle() : manualPage.getPageTitle() != null ? manualPage.getPageTitle() : manualPage.getTitle());
									}
									
								}
								listTypeBean.setCssLinkTitle(itemNode.hasProperty("transLinkTitle") ? itemNode.getProperty("transLinkTitle").getString().replaceAll("\\s","") : " ");
								listTypeBean.setLinkPagePath(itemNode.hasProperty("pageLink") ? itemNode.getProperty("pageLink").getString() : " ");
								listTypeBean.setDescription(itemNode.hasProperty("transDescription") ? itemNode.getProperty("transDescription").getString() : " ");
								listTypeBean.setOverlayPath(itemNode.hasProperty("overlayPath") ? itemNode.getProperty("overlayPath").getString() : " ");
								listTypeBean.setNewWindowManual(itemNode.hasProperty("newWindowManual") ?itemNode.getProperty("newWindowManual").getString() : " ");
								typeList.add(listTypeBean);
							}
						}
					}
				} else if(StringUtils.equals(linkListBean.getView(),"download-list-view") || StringUtils.equals(linkListBean.getView(), "download-list-view-with-description")) {
					Iterator<Resource> items = manualPath.listChildren();
					while(items.hasNext()) {
						listTypeBean = new LinkListTypeBean();
						Resource item = items.next();
						ValueMap properties = item.adaptTo(ValueMap.class);
						if(item != null) {
							Resource assetRes = getResourceResolver().getResource(properties.get("assetPath", StringUtils.EMPTY));
							ValueMap assetProperties = assetRes.adaptTo(ValueMap.class);

							if(StringUtils.equals(assetProperties.get("jcr:primaryType").toString(),"dam:Asset")) {
									if(StringUtils.isNotEmpty((properties.get("transLinkTitle", StringUtils.EMPTY).toString())))
										listTypeBean.setLinkTitle(properties.get("transLinkTitle", StringUtils.EMPTY));
									else
										listTypeBean.setLinkTitle(assetRes.getName());
									if(StringUtils.isNotEmpty((properties.get("transDescription", StringUtils.EMPTY).toString())))
										listTypeBean.setAssetDescription(properties.get("transDescription", StringUtils.EMPTY));
									else
										listTypeBean.setAssetDescription(assetRes.getChild("jcr:content/metadata").getValueMap().get("dc:description").toString());
									listTypeBean.setAssetLink(properties.get("assetPath", StringUtils.EMPTY));
									Asset asset = assetRes.adaptTo(Asset.class);
									if(asset != null) {
										listTypeBean.setAssetSize((long)(asset.getOriginal().getSize()/Math.pow(10, 6)));
										if(StringUtils.equals(asset.getMetadata().get("dc:format").toString(), "application/pdf")) {
											listTypeBean.setAssetType("PDF");
										} else if(StringUtils.equals(asset.getMetadata().get("dc:format").toString(), "image/jpeg")) {
											listTypeBean.setAssetType("JPEG");
										} else if(StringUtils.equals(asset.getMetadata().get("dc:format").toString(), "image/png")) {
											listTypeBean.setAssetType("PNG");
										}
									}
									typeList.add(listTypeBean);
							}
						}
					}
				}
			} catch (RepositoryException e) {
				LOG.error("Exception occured due to not able to access repository - ", e);
			}
		} 
		
		
		if(StringUtils.equals(linkListBean.getView(), "social-list")) {
			Resource socialLink = linkListBean.getSocialLinks();
			if(socialLink != null) {
				Iterator<Resource> items = socialLink.listChildren();
				if(items != null){
					while(items.hasNext()) {
						Resource item = items.next();
						if(item != null) {
							listTypeBean = new LinkListTypeBean();
							ValueMap properties = item.adaptTo(ValueMap.class);
							listTypeBean.setSocialSite(properties.get("social-sites", StringUtils.EMPTY));
							listTypeBean.setSocialLink(properties.get("social-links", StringUtils.EMPTY));
							typeList.add(listTypeBean);
						}
					}
				}
			}
		}
	}
	
	/**
	 * this method is sorting the list based on the author selection
	 */
	private void getSortedList() {
		Collections.sort(typeList, new Comparator<LinkListTypeBean>() {
			public int compare(LinkListTypeBean linkList1,	LinkListTypeBean linkList2) {
				
				if(StringUtils.equals(linkListBean.getSort(), CommonConstants.TITLE)) {
					return linkList1.getLinkTitle().compareTo(linkList2.getLinkTitle());
				}
				else if(StringUtils.equals(linkListBean.getSort(), CommonConstants.PUBLISH_DATE)){
					DateFormat format = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH, Locale.ENGLISH);
					try {
						Date date1 = format.parse(linkList1.getPublicationDate());
						Date date2 = format.parse(linkList2.getPublicationDate());
						return -date1.compareTo(date2);
					} catch (ParseException e) {
						LOG.error("Exception occured while parsing to date format - ", e);
					}
				}
				else if(StringUtils.equals(linkListBean.getSort(), CommonConstants.CREATED_DT)) {
					return -linkList1.getCreatedDate().compareTo(linkList2.getCreatedDate());
				}
				else if(StringUtils.equals(linkListBean.getSort(), CommonConstants.LAST_MOD_DT)) {
					return -linkList1.getLastModifiedDate().compareTo(linkList2.getLastModifiedDate());
				}
				else if(StringUtils.equals(linkListBean.getSort(), CommonConstants.TEMPLATE)) {
					return linkList1.getTemplateName().compareTo(linkList2.getTemplateName());
				}
				return 0;
			}
	    });
	}
	

	public LinkListBean getLinkListBean() {
		return linkListBean;
	}

	public List<LinkListTypeBean> getTypeList() {
		return typeList;
	}
}
