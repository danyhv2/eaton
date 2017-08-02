package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.SearchModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class SearchHelper.
 */
public class SearchHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(SearchHelper.class);
    
    /** The Constant SEARCH_HEADER_SELECTOR. */
    private static final String SEARCH_HEADER_SELECTOR = "search-header";
    
    /** The Constant SEARCH_HEADER_MOBILE_SELECTOR. */
    private static final String SEARCH_HEADER_MOBILE_SELECTOR = "search-mobile";
    
    /** The Constant SEARCH_HEADER_BAR_SELECTOR. */
    private static final String SEARCH_HEADER_BAR_SELECTOR = "search-bar";
    
    /** The Constant SEARCH_HEADER_COMPONENT. */
    private static final String SEARCH_HEADER_COMPONENT = "/jcr:content/root/header/search-comp";
    
    /** The search model. */
    private SearchModel searchModel;

	/* 
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("SearchHelper :: setComponentValues() :: Start");
		Resource searchRes = null;
		String selector = null;
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		
		
		if((null != selector && ( StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_SELECTOR) || StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_MOBILE_SELECTOR) || StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_BAR_SELECTOR) )) ){
			searchRes = resourceResolver.getResource(homePagePath.concat(SEARCH_HEADER_COMPONENT));
		} else {
			searchRes = res;
		}
		
		if(null != searchRes) {
			searchModel = searchRes.adaptTo(SearchModel.class);
		}
		LOGGER.debug("SearchHelper :: setComponentValues() :: Exit");
		
	}

	/**
	 * Gets the search model.
	 *
	 * @return the search model
	 */
	public SearchModel getSearchModel() {
		return searchModel;
	}
}
