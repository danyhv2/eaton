package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.GregorianCalendar;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.RangeIterator;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.dam.commons.handler.StandardImageHandler;
import com.day.cq.dam.handler.standard.pdf.PdfHandler;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageFilter;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.bean.LinkListTypeBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.LinkListBean;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide result links
 * list bean for the display on presentation layer</html>
 * 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class LinkListHelper  extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(LinkListHelper.class);

	private static final String DOWNLOAD_LIST_VIEW_DESCRIPTION = "download-list-view-with-description";
	private static final String SOCIAL_LIST = "social-list";
	private static final String DEFAULT_ON_DARK = "default-on-dark";
	private static final String DEFAULT = "default";
	private static final String TNC_LINK_LIST = "tnc-link-list";
	private static final String PRIMARY_NAV_SELECTOR = "primary-nav";
	private static final String FOOTER_LINK_LIST_1_SELECTOR = "footer-link-list1";
	private static final String FOOTER_LINK_LIST_2_SELECTOR = "footer-link-list2";
	private static final String FOOTER_SOCIAL_MEDIA_SELECTOR = "footer-social-media";
	private static final String FOOTER_PRIMARY_LINK_LIST_SELECTOR = "footer-primary-link-list";
	private static final String PRIMARY_NAVIGATION = "primary-nav";
	private static final String PAGE_LINK = "pageLink";
	private static final String OVERLAY_PATH = "overlayPath";
	private static final String NEW_WINDOW_MANUAL = "newWindowManual";
	private static final String ASSET_PATH = "assetPath";
	private static final String SOCIAL_SITES = "social-sites";
	private static final String SOCIAL_LINKS = "social-links";
	private static final String PDF = "PDF";
	private static final String JPEG = "JPEG";
	private static final String PNG = "PNG";
	private static final String LINK_TITLE = "transLinkTitle";
	private static final String FIXED_LINK_TITLE = "fixedLinkTitle";
	private static final String ASSET_LINK_TITLE = "assetLinkTitle";
	private static final String ESCAPE_S = "\\s";
	private static final String CONTENT_DAM = "/content/dam/";
	private static final String TRUE = "true";
	private static final String FALSE = "false";
	private static final String MB = "MB";
	private static final String KB = "KB";
	private static final String B = "B";
	private static final String BLANK_SPACE = " ";

	private LinkListBean linkListBean;
	private List<LinkListTypeBean> typeList;

	@Override
	public void setComponentValues() {
		
		typeList = new ArrayList<LinkListTypeBean>();
		// local variables
		String selector = null;
		Resource linkListRes = null;
		Page homePage = CommonUtil.getHomePage(currentPage);

		ResourceResolver resResolver = getResource().getResourceResolver();
		PageManager pageManager = resResolver.adaptTo(PageManager.class);
		
		// get selector from header & footer passed while including linklist component
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		// if selector is available, component is statically included in header or footer of home page template,
		// in pages other than homepage, listlink component needs to be derived programmatically because linklist 
		// resources are not present under page resources but inherited from home page
		if(null != selector){
			if(StringUtils.equalsIgnoreCase(selector, PRIMARY_NAV_SELECTOR)){
				linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/header/primary-nav"));
			} else if(StringUtils.equalsIgnoreCase(selector, FOOTER_LINK_LIST_1_SELECTOR)){
				linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-link-list1"));
			} else if(StringUtils.equalsIgnoreCase(selector, FOOTER_LINK_LIST_2_SELECTOR)){
				linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-link-list2"));
			} else if(StringUtils.equalsIgnoreCase(selector, FOOTER_PRIMARY_LINK_LIST_SELECTOR)){
				linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-primary-link-list"));
			} else if(StringUtils.equalsIgnoreCase(selector, FOOTER_SOCIAL_MEDIA_SELECTOR)){
				linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-social-media"));
			}
		} else {
			linkListRes = res;
		}
		
		linkListBean = linkListRes.adaptTo(LinkListBean.class);

		String viewType = linkListBean.getView();
		String listType = linkListBean.getListType();
		LOGGER.debug("LinkListHelper | View Type is - ", viewType);
		LOGGER.debug("LinkListHelper | List Type is - ", listType);

		// Default, Default on dark, TnC and Primary Navigation view
		typeList = setViewContent(resResolver, pageManager, listType, viewType, typeList, linkListBean, slingRequest);

		// Download View
		if (StringUtils.equals(DOWNLOAD_LIST_VIEW_DESCRIPTION, viewType)) {
			typeList = setDownloadListView(resResolver, typeList, linkListBean);
		}

		// Social List View
		if (StringUtils.equals(SOCIAL_LIST, viewType)) {
			typeList = setSocialListView(typeList, linkListBean);
		}

		// sort the list when author has either selected Parent Page or Tag
		if (null != listType || null != viewType) {
			if (StringUtils.equals(CommonConstants.TAGS, listType)
					|| StringUtils.equals(CommonConstants.CHILD_PAGES, listType)) {
				if (StringUtils.equals(DEFAULT_ON_DARK, viewType) || StringUtils.equals(DEFAULT, viewType)
						|| StringUtils.equals(TNC_LINK_LIST, viewType)) {
					getSortedList(typeList, linkListBean);
				}
			}
		}
	}

	/**
	 * this method is sorting the list based on the author selection
	 */
	private void getSortedList(List<LinkListTypeBean> typeList, LinkListBean linkListBean) {
		Collections.sort(typeList, new Comparator<LinkListTypeBean>() {
			public int compare(LinkListTypeBean linkList1, LinkListTypeBean linkList2) {

				if (StringUtils.equals(CommonConstants.TITLE, linkListBean.getSort())) {
					return linkList1.getLinkTitle().compareTo(linkList2.getLinkTitle());
				} else if (StringUtils.equals(CommonConstants.PUBLISH_DATE, linkListBean.getSort())) {
					if (null != linkList1.getPublicationDate() && null != linkList2.getPublicationDate())
						return -linkList1.getPublicationDate().compareTo(linkList2.getPublicationDate());
				} else if (StringUtils.equals(CommonConstants.CREATED_DT, linkListBean.getSort())) {
					return -linkList1.getCreatedDate().compareTo(linkList2.getCreatedDate());
				} else if (StringUtils.equals(CommonConstants.LAST_MOD_DT, linkListBean.getSort())) {
					return -linkList1.getLastModifiedDate().compareTo(linkList2.getLastModifiedDate());
				} else if (StringUtils.equals(CommonConstants.TEMPLATE, linkListBean.getSort())) {
					return linkList1.getTemplateName().compareTo(linkList2.getTemplateName());
				}
				return 0;
			}
		});
	}

	/**
	 * this method prepares the List typeList containing the set bean
	 * 
	 * @param resResolver
	 * @param pageManager
	 * @param listType
	 */
	public static List<LinkListTypeBean> setViewContent(ResourceResolver resResolver, PageManager pageManager,
			String listType, String viewType, List<LinkListTypeBean> typeList, LinkListBean linkListBean,
			SlingHttpServletRequest slingRequest) {
		LinkListTypeBean listTypeBean;
		if (StringUtils.equals(CommonConstants.CHILD_PAGES, listType)) {
			String parentPagePath = linkListBean.getParentPage();

			if(null != parentPagePath) {
				if (StringUtils.equals(DEFAULT_ON_DARK, viewType) || StringUtils.equals(DEFAULT, viewType)
						|| StringUtils.equals(TNC_LINK_LIST, viewType)
						|| StringUtils.equals(PRIMARY_NAVIGATION, viewType)) {
					Page parentPage = pageManager.getPage(parentPagePath);
	
					if (null != parentPage) {
						Iterator<Page> childPages = parentPage.listChildren(new PageFilter(slingRequest));
						while (childPages.hasNext()) {
							listTypeBean = new LinkListTypeBean();
							Page childPage = childPages.next();
	
							listTypeBean.setLinkTitle(CommonUtil.getLinkTitle(null, childPage.getPath(), resResolver));
							listTypeBean.setLinkPagePath(childPage.getPath());
							listTypeBean.setTemplateName(childPage.getProperties()
									.get(CommonConstants.TEMPLATE_PROP_KEY, StringUtils.EMPTY).toString());
							if (childPage.getProperties().containsKey(CommonConstants.PUBLICATION_DATE))
								listTypeBean.setPublicationDate(childPage.getProperties()
										.get(CommonConstants.PUBLICATION_DATE, GregorianCalendar.class).getTimeInMillis());
							listTypeBean.setLastModifiedDate(Long.toString(childPage.getLastModified().getTimeInMillis()));
							listTypeBean.setCreatedDate(childPage.getProperties()
									.get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis());
							listTypeBean.setNavName(childPage.getName());
							listTypeBean.setNavTitle(childPage.getTitle());
							typeList.add(listTypeBean);
							// the list contains data based on the count size
							// mentioned in dialog
							if (typeList.size() >= linkListBean.getCount()) {
								break;
							}
						}
					}
				}
			}
		} else if (StringUtils.equals(CommonConstants.TAGS, listType)) {

			TagManager tagManager = resResolver.adaptTo(TagManager.class);
			RangeIterator<Resource> tagsIt = tagManager.find(linkListBean.getTags());
			if(null != tagsIt) {
				while (tagsIt.hasNext()) {
					Resource tagResource = (Resource) tagsIt.next();
	
					if (StringUtils.equals(DEFAULT_ON_DARK, viewType) || StringUtils.equals(DEFAULT, viewType)
							|| StringUtils.equals(TNC_LINK_LIST, viewType)) {
						Page tagPage = pageManager
								.getPage(StringUtils.removeEnd(tagResource.getPath(), JcrConstants.JCR_CONTENT));
	
						if (null != tagPage && StringUtils.startsWith(tagResource.getPath(), CommonConstants.CONTENT_ROOT_FOLDER)) {
							listTypeBean = new LinkListTypeBean();
							if (!tagPage.isHideInNav() && typeList.size() < linkListBean.getCount()) {
								listTypeBean.setLinkTitle(CommonUtil.getLinkTitle(null, tagPage.getPath(), resResolver));
								listTypeBean.setLinkPagePath(tagPage.getPath());
								listTypeBean.setTemplateName(tagPage.getProperties()
										.get(CommonConstants.TEMPLATE_PROP_KEY, StringUtils.EMPTY).toString());
								if (tagPage.getProperties().containsKey(CommonConstants.PUBLICATION_DATE))
									listTypeBean.setPublicationDate(tagPage.getProperties()
											.get(CommonConstants.PUBLICATION_DATE, GregorianCalendar.class)
											.getTimeInMillis());
								listTypeBean
										.setLastModifiedDate(Long.toString(tagPage.getLastModified().getTimeInMillis()));
								listTypeBean.setCreatedDate(tagPage.getProperties()
										.get(CommonConstants.JCR_CREATED, GregorianCalendar.class).getTimeInMillis());
								typeList.add(listTypeBean);
							}
						}
					}
				}
			}
		} else if (StringUtils.equals(CommonConstants.FIXED_LIST, listType)) {

			Resource fixedPath = linkListBean.getFixedLinks();
			if (null != fixedPath) {
				Iterator<Resource> items = fixedPath.listChildren();
				if (null != items) {
					while (items.hasNext()) {
						Resource item = items.next();
						if (null != item && StringUtils.equals(DEFAULT_ON_DARK, viewType)
								|| StringUtils.equals(DEFAULT, viewType)
								|| StringUtils.equals(TNC_LINK_LIST, viewType)) {
							listTypeBean = new LinkListTypeBean();
							ValueMap properties = item.getValueMap();
							String fixedPagePath = CommonUtil.getStringProperty(properties, CommonConstants.LINK_PATH);
							Page fixedPage = pageManager.getPage(fixedPagePath);
							if (null != fixedPage && !fixedPage.isHideInNav()) {
								if (StringUtils.isNotBlank(CommonUtil.getStringProperty(properties, FIXED_LINK_TITLE))) {
									listTypeBean.setLinkTitle(CommonUtil.getStringProperty(properties, FIXED_LINK_TITLE));
								} else {
									listTypeBean.setLinkTitle(CommonUtil.getLinkTitle(null, fixedPage.getPath(), resResolver));
								}
								listTypeBean.setLinkPagePath(fixedPage.getPath());
								listTypeBean.setNewWindowManual(StringUtils.equals(CommonUtil.getStringProperty(properties, CommonConstants.NEW_WINDOW_FIXED), CommonConstants.TRUE) ? CommonConstants.TARGET_BLANK : StringUtils.EMPTY);
								typeList.add(listTypeBean);
							}
						}
					}
				}
			}
		} else if (StringUtils.equals(CommonConstants.MANUAL_LIST, listType)) {
			Resource manualPath = linkListBean.getManualLinks();
			if (StringUtils.equals(DEFAULT_ON_DARK, viewType) || StringUtils.equals(DEFAULT, viewType)
					|| StringUtils.equals(TNC_LINK_LIST, viewType)
					|| StringUtils.equals(PRIMARY_NAVIGATION, viewType)) {
				if (null != manualPath) {
					Iterator<Resource> items = manualPath.listChildren();
					while (items.hasNext()) {
						listTypeBean = new LinkListTypeBean();
						Resource item = items.next();
						ValueMap properties = item.getValueMap();
						if (null != item && StringUtils.isNotBlank(CommonUtil.getStringProperty(properties, PAGE_LINK))) {
							String pathType = CommonUtil.getStringProperty(properties, PAGE_LINK);
							if (!StringUtils.startsWith(CONTENT_DAM, pathType)) {
								if (StringUtils.isNotBlank(CommonUtil.getStringProperty(properties, LINK_TITLE))) {
									listTypeBean.setLinkTitle(CommonUtil.getStringProperty(properties, LINK_TITLE));
								} else {
									listTypeBean.setLinkTitle(CommonUtil.getLinkTitle(null, pathType, resResolver));
								}
								listTypeBean.setCssLinkTitle(CommonUtil.getStringProperty(properties, LINK_TITLE).replaceAll(ESCAPE_S, StringUtils.EMPTY));
								listTypeBean.setLinkPagePath(CommonUtil.getStringProperty(properties, PAGE_LINK));

								if (StringUtils.startsWithIgnoreCase(listTypeBean.getLinkPagePath(), CommonConstants.HTTP)) {
									listTypeBean.setIsExternal(TRUE);
								} else {
									listTypeBean.setIsExternal(FALSE);
								}
								listTypeBean.setDescription(CommonUtil.getStringProperty(properties, CommonConstants.DESCRIPTION));
								listTypeBean.setOverlayPath(CommonUtil.getStringProperty(properties, OVERLAY_PATH));
								listTypeBean.setNewWindowManual(StringUtils.equals(CommonUtil.getStringProperty(properties, NEW_WINDOW_MANUAL), CommonConstants.TRUE) ? CommonConstants.TARGET_BLANK : StringUtils.EMPTY);
								typeList.add(listTypeBean);
							}
						}
					}
				}
			}
		}
		return typeList;
	}

	/**
	 * This method set the Social List View
	 * 
	 */
	public static List<LinkListTypeBean> setSocialListView(List<LinkListTypeBean> typeList, LinkListBean linkListBean) {
		LinkListTypeBean listTypeBean;
		Resource socialLink = linkListBean.getSocialLinks();
		if (null != socialLink) {
			Iterator<Resource> socialItems = socialLink.listChildren();
			if (null != socialItems) {
				while (socialItems.hasNext()) {
					Resource item = socialItems.next();
					if (null != item) {
						listTypeBean = new LinkListTypeBean();
						ValueMap properties = item.getValueMap();
						listTypeBean.setSocialSite(CommonUtil.getStringProperty(properties, SOCIAL_SITES));
						listTypeBean.setSocialLink(CommonUtil.getStringProperty(properties, SOCIAL_LINKS));
						typeList.add(listTypeBean);
					}
				}
			}
		}
		return typeList;
	}

	/**
	 * This method set the download list view
	 * 
	 */
	public static List<LinkListTypeBean> setDownloadListView(ResourceResolver resResolver,
			List<LinkListTypeBean> typeList, LinkListBean linkListBean) {
		LinkListTypeBean listTypeBean;
		Resource downloadlLink = linkListBean.getDownloadLinks();
		if (null != downloadlLink) {
			Iterator<Resource> items = downloadlLink.listChildren();
			while (items.hasNext()) {
				listTypeBean = new LinkListTypeBean();
				Resource item = items.next();
				ValueMap properties = item.adaptTo(ValueMap.class);
				if (null != item) {
					Resource assetRes = resResolver.getResource(CommonUtil.getStringProperty(properties, ASSET_PATH));

					Asset asset = assetRes.adaptTo(Asset.class);
					if (StringUtils.equals(CommonUtil.getStringProperty(assetRes.getValueMap(), CommonConstants.JCR_PRIMARY_TYPE),
							DamConstants.NT_DAM_ASSET)) {

						if (StringUtils.isNotBlank(CommonUtil.getStringProperty(properties, ASSET_LINK_TITLE))) {
							listTypeBean.setLinkTitle(properties.get(ASSET_LINK_TITLE, StringUtils.EMPTY));
						}
						else if (asset.getMetadata().containsKey(DamConstants.DC_TITLE)) {
							listTypeBean.setLinkTitle(asset.getMetadataValue(DamConstants.DC_TITLE));
						}
						else {
							listTypeBean.setLinkTitle(assetRes.getName());
						}

						if (StringUtils.isNotBlank(CommonUtil.getStringProperty(properties, CommonConstants.DESCRIPTION))) {
							listTypeBean.setAssetDescription(CommonUtil.getStringProperty(properties, CommonConstants.DESCRIPTION));
						}
						else if (asset.getMetadata().containsKey(DamConstants.DC_DESCRIPTION)) {
							listTypeBean.setAssetDescription(asset.getMetadataValue(DamConstants.DC_DESCRIPTION));
						}
						
						listTypeBean.setAssetLink(CommonUtil.getStringProperty(properties, ASSET_PATH));
						if (null != asset) {
							String spaceUnit = StringUtils.EMPTY;
							// get the asset size in Bytes unit
							long assetSize = (long) (asset.getOriginal().getSize() / Math.pow(10, 6));

							// set the asset size unit
							if (assetSize < 1) {
								assetSize = (long) (asset.getOriginal().getSize() / Math.pow(10, 3));
								spaceUnit = KB;
								if (assetSize < 1) {
									assetSize = (long) (asset.getOriginal().getSize());
									spaceUnit = B;
								}
							} else {
								spaceUnit = MB;
							}

							if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
									PdfHandler.CONTENT_MIMETYPE))
								listTypeBean.setAssetType(PDF);
							else if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
									StandardImageHandler.JPEG_MIMETYPE))
								listTypeBean.setAssetType(JPEG);
							else if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
									DamConstants.THUMBNAIL_MIMETYPE))
								listTypeBean.setAssetType(PNG);

							listTypeBean.setAssetSize(listTypeBean.getAssetType() + BLANK_SPACE + assetSize + BLANK_SPACE + spaceUnit);
						}
						typeList.add(listTypeBean);
					}
				}
			}
		}
		return typeList;
	}

	/**
	 * 
	 * @return linkListBean
	 */
	public LinkListBean getLinkListBean() {
		return linkListBean;
	}

	/**
	 * 
	 * @return typeList
	 */
	public List<LinkListTypeBean> getTypeList() {
		return typeList;
	}
}
