package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.linklist.DownloadListModel;
import com.eaton.platform.core.models.linklist.LinkListModel;
import com.eaton.platform.core.models.linklist.ViewContentList;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide result links
 * list bean for the display on presentation layer</html>.
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class LinkListHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(LinkListHelper.class);

	/** The Constant DOWNLOAD_LIST_VIEW_DESCRIPTION. */
	private static final String DOWNLOAD_LIST_VIEW_DESCRIPTION = "download-list-desc";
	
	/** The Constant DOWNLOAD_LIST_VIEW_. */
	private static final String DOWNLOAD_LIST_VIEW = "download-list";
	
	/** The Constant VERTICAL. */
	private static final String VERTICAL = "vertical";
	
	/** The Constant HORIZONTAL. */
	private static final String HORIZONTAL = "horizontal";
	
	/** The Constant PRIMARY_NAV_SELECTOR. */
	private static final String PRIMARY_NAV_SELECTOR = "primary-nav";
	
	/** The Constant FOOTER_LINK_LIST_1_SELECTOR. */
	private static final String FOOTER_LINK_LIST_1_SELECTOR = "footer-link-list1";
	
	/** The Constant FOOTER_LINK_LIST_2_SELECTOR. */
	private static final String FOOTER_LINK_LIST_2_SELECTOR = "footer-link-list2";
	
	/** The Constant FOOTER_PRIMARY_LINK_LIST_SELECTOR. */
	private static final String FOOTER_PRIMARY_LINK_LIST_SELECTOR = "footer-primary-link-list";
	
	/** The link list model. */
	private LinkListModel linkListModel;
	
	/** The download list model. */
	private DownloadListModel downloadListModel;
	
	/** The view content list model. */
	private ViewContentList viewContentListModel;
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("LinkListHelper :: setComponentValues() :: Start");
		// local variables
		String selector = null;
		Resource linkListRes = null;
		Page homePage = CommonUtil.getHomePage(currentPage);
		
		// get selector from header & footer passed while including linklist component
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		// if selector is available, component is statically included in header or footer of home page template,
		// in pages other than homepage, listlink component needs to be derived programmatically because linklist 
		// resources are not present under page resources but inherited from home page
		if(null != selector){
			switch(selector) {
				case PRIMARY_NAV_SELECTOR : {
					linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/header/primary-nav"));
					break;
				} 
				case FOOTER_LINK_LIST_1_SELECTOR : {
					linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-link-list1"));
					break;
				} 
				case FOOTER_LINK_LIST_2_SELECTOR : {
					linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-link-list2"));
					break;
				} 
				case FOOTER_PRIMARY_LINK_LIST_SELECTOR : {
					linkListRes = resourceResolver.getResource(homePage.getPath().concat("/jcr:content/root/footer/footer-primary-link-list"));
					break;
				} 
			}
		} else {
			linkListRes = res;
		}
		
		linkListModel = linkListRes.adaptTo(LinkListModel.class);
		String viewType = linkListModel.getView();
		LOGGER.debug("LinkListHelper | View Type is - ", viewType);
		
		// Default, Default on dark, TnC and Primary Navigation view
		if (StringUtils.equals(VERTICAL, viewType)
				|| StringUtils.equals(HORIZONTAL, viewType)
				|| StringUtils.equals(CommonConstants.PRIMARY_NAVIGATION, viewType)) {
			viewContentListModel = linkListRes.adaptTo(ViewContentList.class);
		}
		
		// Download View
		if (StringUtils.equals(DOWNLOAD_LIST_VIEW_DESCRIPTION, viewType) || StringUtils.equals(DOWNLOAD_LIST_VIEW, viewType)) {
			downloadListModel = linkListRes.adaptTo(DownloadListModel.class);
		}

		LOGGER.debug("LinkListHelper :: setComponentValues() :: End");
	}

	/**
	 * Gets the link list bean.
	 *
	 * @return linkListBean
	 */
	public LinkListModel getLinkListBean() {
		return linkListModel;
	}

	/**
	 * Gets the download list model.
	 *
	 * @return the download list model
	 */
	public DownloadListModel getDownloadListModel() {
		return downloadListModel;
	}

	/**
	 * Gets the view content list model.
	 *
	 * @return the view content list model
	 */
	public ViewContentList getViewContentListModel() {
		return viewContentListModel;
	}

}
