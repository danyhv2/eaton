package com.eaton.platform.core.helpers;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

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
 * result links list bean for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class ListHelper extends EatonAbstractUseBean {

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(ListHelper.class); 
	
	/** The listModel bean. */
	private ListModel listModel;
	
	/** The type list. */
	private List<ListTypeBean> typeList;
	
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
								setFieldsInList(resResolver, simpleDate, publicationDateFormat, childResource, pageProperties, listType);
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
	    					ValueMap properties = tagResource.getValueMap();
	    					if(StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(properties, NameConstants.PN_HIDE_IN_NAV)) && typeList.size() < listModel.getCount()){
	    						setFieldsInList(resResolver, simpleDate, publicationDateFormat, tagResource, properties, listType);
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
									setFieldsInList(resResolver, simpleDate, publicationDateFormat, fixedPageResource, pageProperties, listType);
								}
							}
						}
					}
				}
		}
		LOG.debug("ListHelper :: setListContent() :: Exit");
	}

	private void setFieldsInList(ResourceResolver resResolver,
			SimpleDateFormat simpleDate,
			SimpleDateFormat publicationDateFormat, Resource tagResource,
			ValueMap properties, String listType) {
		ListTypeBean listTypeBean = new ListTypeBean();
		String imagePath = CommonUtil.getStringProperty(properties, CommonConstants.TEASER_IMAGE_PATH);
		
		listTypeBean.setTeaserImage(imagePath);
		listTypeBean.setHeadline(CommonUtil.getStringProperty(properties, CommonConstants.TEASER_TITLE));
		listTypeBean.setPublicationDate(CommonUtil.getDateProperty(properties, CommonConstants.PUBLICATION_DATE, publicationDateFormat).toString());
		listTypeBean.setPagePath(StringUtils.removeEnd(tagResource.getPath(), JcrConstants.JCR_CONTENT));
		listTypeBean.setEyebrow(CommonUtil.getStringProperty(properties, CommonConstants.EYEBROW_TITLE));
		listTypeBean.setLastModifiedDate(CommonUtil.getDateProperty(properties, NameConstants.PN_PAGE_LAST_MOD, simpleDate).toString());
		listTypeBean.setCreatedDate(CommonUtil.getDateProperty(properties, CommonConstants.JCR_CREATED, simpleDate).toString());
		listTypeBean.setDescriptionFeature(CommonUtil.getStringProperty(properties, CommonConstants.TEASER_DESCRIPTION));
		listTypeBean.setTemplateName(CommonUtil.getStringProperty(properties, CommonConstants.TEMPLATE_PROP_KEY));
		listTypeBean.setAltTxt(CommonUtil.getAssetAltText(resResolver, imagePath));
		if(StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {
			listTypeBean.setWindowFixed(StringUtils.equals(CommonUtil.getStringProperty(properties, CommonConstants.NEW_WINDOW_FIXED), CommonConstants.TRUE) ? CommonConstants.TARGET_BLANK : StringUtils.EMPTY);
		}
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
				public int compare(ListTypeBean linkList1, ListTypeBean linkList2) {
					
					int comparisonValue = 0;
					switch(listModel.getSort()) {
						case CommonConstants.TITLE : {
							comparisonValue = linkList1.getEyebrow().compareTo(linkList2.getEyebrow());
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
		LOG.debug("ListHelper :: getSortedList() :: Exit");
	}

	/**
	 * Gets the type list.
	 *
	 * @return typeList
	 */
	public List<ListTypeBean> getTypeList() {
		return typeList;
	}

	public ListModel getListModel() {
		return listModel;
	}

}
