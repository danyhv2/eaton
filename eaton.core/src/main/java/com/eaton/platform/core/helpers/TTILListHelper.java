package com.eaton.platform.core.helpers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
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
import com.eaton.platform.core.bean.TTILListTypeBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.TTILListBean;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide
 * result links list bean for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class TTILListHelper extends EatonAbstractUseBean {

	private static final Logger LOG = LoggerFactory.getLogger(TTILListHelper.class); 
	private TTILListBean ttilBean;
	private List<TTILListTypeBean> typeList;
	
	@Override
	public void setComponentValues() {
		
		ttilBean = res.adaptTo(TTILListBean.class);
		String listType = ttilBean.getListType();
		typeList = new ArrayList<TTILListTypeBean>();
		
		// set the bean in the typeList
		setListContent(resourceResolver, pageManager, listType);
		
		// sort the list when author has either selected Parent Page or Tag
		if(StringUtils.equals(CommonConstants.TAGS, listType) || StringUtils.equals(CommonConstants.CHILD_PAGES, listType)){
			getSortedList();
		}
		
	}

	/**
	 * this method prepares the list based on author selection on type of list
	 * 
	 * @param resResolver
	 * @param pageManager
	 * @param listType
	 */
	private void setListContent(ResourceResolver resResolver, PageManager pageManager, String listType) {
		
		TTILListTypeBean listTypeBean;
		SimpleDateFormat simpleDate = new SimpleDateFormat();
		SimpleDateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH);
		
		// based on the type of view set the bean elements in the typeList for presentation layer
		if(StringUtils.equals(CommonConstants.CHILD_PAGES, listType)) {
			String parentPagePath = ttilBean.getParentPage();
			Resource parentResource = resResolver.getResource(parentPagePath);
			
			if(null != parentResource){
				Iterator<Resource> childrenResource = parentResource.listChildren();
				while(childrenResource.hasNext()){
					Resource childResource = childrenResource.next();
					if(StringUtils.equals(CommonUtil.getStringProperty(childResource.getValueMap(), JcrConstants.JCR_PRIMARYTYPE), NameConstants.NT_PAGE)){
						Resource jcrResource = childResource.getChild(JcrConstants.JCR_CONTENT);
						if(null != jcrResource) {
							ValueMap pageProperties = jcrResource.getValueMap();
							if(StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(pageProperties, NameConstants.PN_HIDE_IN_NAV)) && typeList.size() < ttilBean.getCount()) {
								listTypeBean = new TTILListTypeBean();
								String imagePath = CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_IMAGE_PATH);
								
								listTypeBean.setTeaserImage(imagePath);
								listTypeBean.setHeadline(CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_TITLE));
								listTypeBean.setPublicationDate(CommonUtil.getDateProperty(pageProperties, CommonConstants.PUBLICATION_DATE, publicationDateFormat).toString());
								listTypeBean.setPagePath(childResource.getPath());
								listTypeBean.setEyebrow(CommonUtil.getStringProperty(pageProperties, CommonConstants.EYEBROW_TITLE));
								listTypeBean.setLastModifiedDate(CommonUtil.getDateProperty(pageProperties, NameConstants.PN_PAGE_LAST_MOD, simpleDate).toString());
								listTypeBean.setCreatedDate(CommonUtil.getDateProperty(pageProperties, CommonConstants.JCR_CREATED, simpleDate).toString());
								listTypeBean.setDescriptionFeature(CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_DESCRIPTION));
								listTypeBean.setTemplateName(CommonUtil.getStringProperty(pageProperties, CommonConstants.TEMPLATE_PROP_KEY));
								listTypeBean.setAltTxt(CommonUtil.getAssetAltText(resResolver, imagePath));

								typeList.add(listTypeBean);
							}
						}
					}
				}
			}
			
		} else if(StringUtils.equals(CommonConstants.TAGS, listType)) {

			TagManager tagManager = resResolver.adaptTo(TagManager.class);
            RangeIterator<Resource> tagsIt = tagManager.find(ttilBean.getTags());
            
            if(null != tagsIt) {
	            while (tagsIt.hasNext()) { 
	                Resource tagResource = (Resource)tagsIt.next(); 
	    			if(null != tagResource && StringUtils.startsWith(tagResource.getPath(), CommonConstants.CONTENT_ROOT_FOLDER)){
	    					ValueMap properties = tagResource.getValueMap();
	    					if(StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(properties, NameConstants.PN_HIDE_IN_NAV)) && typeList.size() < ttilBean.getCount()){
	    						listTypeBean = new TTILListTypeBean();
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

								typeList.add(listTypeBean);
	    					}
	    			}
	            }
            }
		} else if(StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {
			
			Resource fixedPath = ttilBean.getFixedLinks();
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
									listTypeBean = new TTILListTypeBean();
									String imagePath = CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_IMAGE_PATH);
	
									listTypeBean.setTeaserImage(imagePath);
									listTypeBean.setHeadline(CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_TITLE));
		    						listTypeBean.setPublicationDate(CommonUtil.getDateProperty(pageProperties, CommonConstants.PUBLICATION_DATE, publicationDateFormat).toString());
									listTypeBean.setPagePath(fixedPageResource.getPath());
									listTypeBean.setEyebrow(CommonUtil.getStringProperty(pageProperties, CommonConstants.EYEBROW_TITLE));
									listTypeBean.setDescriptionFeature(CommonUtil.getStringProperty(pageProperties, CommonConstants.TEASER_DESCRIPTION));
									listTypeBean.setWindowFixed(StringUtils.equals(CommonUtil.getStringProperty(properties, CommonConstants.NEW_WINDOW_FIXED), CommonConstants.TRUE) ? CommonConstants.TARGET_BLANK : StringUtils.EMPTY);
									listTypeBean.setAltTxt(CommonUtil.getAssetAltText(resResolver, imagePath));
	
									typeList.add(listTypeBean);
								}
							}
						}
					}
				}
		} else if(StringUtils.equals(CommonConstants.MANUAL_LIST, listType)) {
			Resource manualPath = ttilBean.getManualLinks();
			try {
				if(null != manualPath) {
					Iterator<Resource> items = manualPath.listChildren();
					while(items.hasNext()) {
						listTypeBean = new TTILListTypeBean();
						Resource item = items.next();
						ValueMap properties = item.getValueMap();
							
							String imagePath = CommonUtil.getStringProperty(properties, CommonConstants.FEATURE_IMAGE);
	
							listTypeBean.setTeaserImage(imagePath);
							listTypeBean.setHeadline(CommonUtil.getStringProperty(properties, CommonConstants.TRANS_HEADlINE));
							listTypeBean.setPagePath(CommonUtil.getStringProperty(properties, CommonConstants.LINK_DESTINATION));
							listTypeBean.setNewWindowManual(CommonUtil.getStringProperty(properties, CommonConstants.NEW_WINDOW_MANUAL));
							listTypeBean.setEyebrow(CommonUtil.getStringProperty(properties, CommonConstants.EYEBROW));
							listTypeBean.setDescriptionFeature(properties.get(CommonConstants.DESCRIPTION, StringUtils.EMPTY));
							
							if(properties.containsKey(CommonConstants.PUB_DATE)){
								Date publicationDate = new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE).parse(CommonUtil.getStringProperty(properties, CommonConstants.PUB_DATE));
								listTypeBean.setPublicationDate(new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE_FORMAT).format(publicationDate));
							}
							
							if(properties.containsKey(CommonConstants.ALT_TXT)){
								listTypeBean.setAltTxt(CommonUtil.getStringProperty(properties, CommonConstants.ALT_TXT));
							} else {
								listTypeBean.setAltTxt(CommonUtil.getAssetAltText(resResolver, imagePath));
							}
							typeList.add(listTypeBean);
					}
				}
			} catch (ParseException e) {
				LOG.error("Exception occured due to not able to parse - ", e);
			}
		}
	}

	/**
	 * this method is sorting the list based on the author selection
	 */
	private void getSortedList() {
		Collections.sort(typeList, new Comparator<TTILListTypeBean>() {
			public int compare(TTILListTypeBean ttilList1,	TTILListTypeBean ttilList2) {
				int sortedResult = 0;
				if(StringUtils.equals(CommonConstants.TITLE, ttilBean.getSort())) {
					sortedResult =  ttilList1.getEyebrow().compareTo(ttilList2.getEyebrow());
				}
				else if(StringUtils.equals(CommonConstants.PUBLISH_DATE, ttilBean.getSort())){
					sortedResult = -ttilList1.getPublicationDate().compareTo(ttilList2.getPublicationDate());
				}
				else if(StringUtils.equals(CommonConstants.CREATED_DT, ttilBean.getSort())) {
					sortedResult = -ttilList1.getCreatedDate().compareTo(ttilList2.getCreatedDate());
				}
				else if(StringUtils.equals(CommonConstants.LAST_MOD_DT, ttilBean.getSort())) {
					sortedResult = -ttilList1.getLastModifiedDate().compareTo(ttilList2.getLastModifiedDate());
				}
				else if(StringUtils.equals(CommonConstants.TEMPLATE, ttilBean.getSort())) {
					sortedResult = ttilList1.getTemplateName().compareTo(ttilList2.getTemplateName());
				}
				return sortedResult;
			}
	    });
	}

	/**
	 * 
	 * @return typeList
	 */
	public List<TTILListTypeBean> getTypeList() {
		return typeList;
	}

	/**
	 * 
	 * @return ttilBean
	 */
	public TTILListBean getTtilBean() {
		return ttilBean;
	}

}
