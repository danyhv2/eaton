package com.eaton.platform.core.helpers;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.RangeIterator;
import com.day.cq.dam.api.Asset;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.TTILListBean;

/**
 * <html> Description: This class is used in sightly to provide
 * result links list bean for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class TTILListHelper extends BaseComponent {

	private static final Logger LOG = LoggerFactory.getLogger(TTILListHelper.class); 
	private TTILListBean ttilBean;
	private List<TTILListTypeBean> typeList;
	
	@Override
	public void activate() {
		
		ttilBean = getResource().adaptTo(TTILListBean.class);
		ResourceResolver resResolver = getResource().getResourceResolver();
		PageManager pageManager = resResolver.adaptTo(PageManager.class);
		String listType = ttilBean.getListType();
		typeList = new ArrayList<TTILListTypeBean>();
		
		// set the bean in the typeList
		setListContent(resResolver, pageManager, listType);
		
		// sort the list when author has either selected Parent Page or Tag
		if(StringUtils.equalsIgnoreCase(listType, CommonConstants.TAGS) || StringUtils.equalsIgnoreCase(listType, CommonConstants.CHILD_PAGES)){
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
		DateFormat simpleDate = new SimpleDateFormat();
		DateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH);
		if(StringUtils.equalsIgnoreCase(listType, CommonConstants.CHILD_PAGES)) {
			String parentPagePath = ttilBean.getParentPage();
			Page parentPage = pageManager.getPage(parentPagePath);
			
			if(parentPage != null){
				Iterator<Page> childPages = parentPage.listChildren();
				while(childPages.hasNext()){
					listTypeBean = new TTILListTypeBean();
					Page childPage = childPages.next();
					
					if(!childPage.isHideInNav() && typeList.size() < ttilBean.getCount()){
						listTypeBean.setHeadline(childPage.getProperties().get(CommonConstants.TEASER_TITLE,"").toString());
						if(StringUtils.isNotEmpty(childPage.getProperties().get(CommonConstants.PUBLICATION_DATE,"").toString()))
							listTypeBean.setPublicationDate(publicationDateFormat.format(childPage.getProperties().get(CommonConstants.PUBLICATION_DATE,GregorianCalendar.class).getTimeInMillis()));
						listTypeBean.setPagePath(childPage.getPath());
						listTypeBean.setEyebrow(childPage.getProperties().get(CommonConstants.EYEBROW_TITLE,"").toString());
						listTypeBean.setTeaserImage(childPage.getProperties().get(CommonConstants.TEASER_IMAGE_PATH,"").toString());
						listTypeBean.setLastModifiedDate(Long.toString(childPage.getLastModified().getTimeInMillis()));
						listTypeBean.setCreatedDate(simpleDate.format(childPage.getProperties().get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis()));
						listTypeBean.setDescriptionFeature(childPage.getProperties().get(CommonConstants.TEASER_DESCRIPTION,"").toString());
						listTypeBean.setTemplateName(childPage.getTemplate().getName());
						typeList.add(listTypeBean);
					}
				}
			}
			
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.TAGS)) {

			TagManager tagManager = resResolver.adaptTo(TagManager.class);
            RangeIterator<Resource> tagsIt = tagManager.find(ttilBean.getTags());
            
            if(tagsIt != null) {
	            while (tagsIt.hasNext()) { 
	                Resource tagResource = (Resource)tagsIt.next(); 
	    			Page tagPage = pageManager.getPage(StringUtils.removeEnd(tagResource.getPath(), CommonConstants.JCR_CONTENT));
	    			
	    			if(tagPage != null){
	    					listTypeBean = new TTILListTypeBean();
	    					if(!tagPage.isHideInNav() && typeList.size() < ttilBean.getCount()){
	    						listTypeBean.setHeadline(tagPage.getProperties().get(CommonConstants.TEASER_TITLE,"").toString());
	    						if(StringUtils.isNotEmpty(tagPage.getProperties().get(CommonConstants.PUBLICATION_DATE,"").toString()))
	    							listTypeBean.setPublicationDate(publicationDateFormat.format(tagPage.getProperties().get(CommonConstants.PUBLICATION_DATE,GregorianCalendar.class).getTimeInMillis()));
	    						listTypeBean.setPagePath(tagPage.getPath());
	    						listTypeBean.setEyebrow(tagPage.getProperties().get(CommonConstants.EYEBROW_TITLE,"").toString());
	    						listTypeBean.setTeaserImage(tagPage.getProperties().get(CommonConstants.TEASER_IMAGE_PATH,"").toString());
	    						listTypeBean.setLastModifiedDate(Long.toString(tagPage.getLastModified().getTimeInMillis()));
	    						listTypeBean.setCreatedDate(simpleDate.format(tagPage.getProperties().get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis()));
	    						listTypeBean.setDescriptionFeature(tagPage.getProperties().get(CommonConstants.TEASER_DESCRIPTION,"").toString());
	    						listTypeBean.setTemplateName(tagPage.getTemplate().getName());
	    						typeList.add(listTypeBean);
	    					}
	    			}
	            }
            }
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.FIXED_LIST)) {
			
			Resource fixedPath = ttilBean.getFixedLinks();
			Node fixedNodes = fixedPath.adaptTo(Node.class);
			try {
				NodeIterator itemNodes = fixedNodes.getNodes();
				while(itemNodes.hasNext()){
					listTypeBean = new TTILListTypeBean();
					Node itemNode = itemNodes.nextNode();
					if(itemNode.hasProperty(CommonConstants.LINK_PATH)) {
						String fixedPagePath = itemNode.getProperty(CommonConstants.LINK_PATH).getString();
						Page fixedPage = pageManager.getPage(fixedPagePath);
						if(!fixedPage.isHideInNav()){
							listTypeBean.setHeadline(fixedPage.getProperties().get(CommonConstants.TEASER_TITLE,"").toString());
    						if(StringUtils.isNotEmpty(fixedPage.getProperties().get(CommonConstants.PUBLICATION_DATE,"").toString()))
    						listTypeBean.setPublicationDate(publicationDateFormat.format(fixedPage.getProperties().get(CommonConstants.PUBLICATION_DATE,GregorianCalendar.class).getTimeInMillis()));
							listTypeBean.setPagePath(fixedPage.getPath());
							listTypeBean.setEyebrow(fixedPage.getProperties().get(CommonConstants.EYEBROW_TITLE,"").toString());
							listTypeBean.setTeaserImage(fixedPage.getProperties().get(CommonConstants.TEASER_IMAGE_PATH,"").toString());
							listTypeBean.setDescriptionFeature(fixedPage.getProperties().get(CommonConstants.TEASER_DESCRIPTION,"").toString());
							if(itemNode.hasProperty(CommonConstants.NEW_WINDOW_FIXED)) {
								listTypeBean.setWindowFixed(itemNode.getProperty(CommonConstants.NEW_WINDOW_FIXED).getString());
							}
							typeList.add(listTypeBean);
						}
					}
				}
				
			} catch (RepositoryException e) {
				LOG.error("Exception occured to not able to access repository - ", e);
			}
		} else if(StringUtils.equalsIgnoreCase(listType, CommonConstants.MANUAL_LIST)) {
			Resource manualPath = ttilBean.getManualLinks();
			Node manualNode = manualPath.adaptTo(Node.class);
			try {
				NodeIterator itemNodes = manualNode.getNodes();
				while(itemNodes.hasNext()){
					listTypeBean = new TTILListTypeBean();
					Node itemNode = itemNodes.nextNode();
						listTypeBean.setHeadline(itemNode.hasProperty(CommonConstants.TRANS_HEADlINE) ? itemNode.getProperty(CommonConstants.TRANS_HEADlINE).getString() : " ");
						listTypeBean.setPagePath(itemNode.hasProperty(CommonConstants.LINK_DESTINATION) ? itemNode.getProperty(CommonConstants.LINK_DESTINATION).getString() : " ");
						listTypeBean.setEyebrow(itemNode.hasProperty(CommonConstants.EYEBROW) ? itemNode.getProperty(CommonConstants.EYEBROW).getString() : " ");
						listTypeBean.setTeaserImage(itemNode.hasProperty(CommonConstants.FEATURE_IMAGE) ? itemNode.getProperty(CommonConstants.FEATURE_IMAGE).getString() : " ");
						listTypeBean.setDescriptionFeature(itemNode.hasProperty(CommonConstants.DESCRIPTION) ?itemNode.getProperty(CommonConstants.DESCRIPTION).getString() : " ");
						
						if(itemNode.hasProperty(CommonConstants.PUB_DATE)){
							Date publicationDate = new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE).parse(itemNode.getProperty(CommonConstants.PUB_DATE).getString());
							listTypeBean.setPublicationDate(new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE_FORMAT).format(publicationDate));
						}
						
						if(itemNode.hasProperty(CommonConstants.ALT_TXT)){
							listTypeBean.setAltTxt(itemNode.getProperty(CommonConstants.ALT_TXT).getString());
						} else {
							Asset imageAsset;
							try {
								if(itemNode.hasProperty(CommonConstants.FEATURE_IMAGE)){
									imageAsset = resResolver.getResource(URLDecoder.decode(itemNode.getProperty(CommonConstants.FEATURE_IMAGE).getString(), CommonConstants.UTF_8)).adaptTo(Asset.class);
									if(imageAsset != null)
										listTypeBean.setAltTxt(imageAsset.getName());
									else
										listTypeBean.setAltTxt(" ");
								}
							} catch (UnsupportedEncodingException e) {
								LOG.error("Exception occured due to improper image name - ", e);
							}
						}
						typeList.add(listTypeBean);
				}
				
			} catch (RepositoryException e) {
				LOG.error("Exception occured due to not able to access repository - ", e);
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
				
				if(StringUtils.equals(ttilBean.getSort(), CommonConstants.TITLE)) {
					return ttilList1.getEyebrow().compareTo(ttilList2.getEyebrow());
				}
				else if(StringUtils.equals(ttilBean.getSort(), CommonConstants.PUBLISH_DATE)){
					DateFormat format = new SimpleDateFormat(CommonConstants.DATE_FORMAT_PUBLISH, Locale.ENGLISH);
					try {
						Date date1 = format.parse(ttilList1.getPublicationDate());
						Date date2 = format.parse(ttilList2.getPublicationDate());
						return -date1.compareTo(date2);
					} catch (ParseException e) {
						LOG.error("Exception occured while parsing to date format - ", e);
					}
				}
				else if(StringUtils.equals(ttilBean.getSort(), CommonConstants.CREATED_DT)) {
					return -ttilList1.getCreatedDate().compareTo(ttilList2.getCreatedDate());
				}
				else if(StringUtils.equals(ttilBean.getSort(), CommonConstants.LAST_MOD_DT)) {
					return -ttilList1.getLastModifiedDate().compareTo(ttilList2.getLastModifiedDate());
				}
				else if(StringUtils.equals(ttilBean.getSort(), CommonConstants.TEMPLATE)) {
					return ttilList1.getTemplateName().compareTo(ttilList2.getTemplateName());
				}
				return 0;
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
