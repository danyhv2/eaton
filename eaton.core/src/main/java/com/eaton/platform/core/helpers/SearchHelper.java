package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.SearchBean;
import com.eaton.platform.core.util.CommonUtil;

public class SearchHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(SearchHelper.class);
    private static final String SEARCH_HEADER_SELECTOR = "search-header";
    private static final String SEARCH_HEADER_MOBILE_SELECTOR = "search-mobile";
    private static final String SEARCH_HEADER_BAR_SELECTOR = "search-bar";
    private static final String SEARCH_HEADER_COMPONENT = "/jcr:content/root/header/search-comp";
    
    private SearchBean searchModel;

	@Override
	public void setComponentValues() {
		LOGGER.debug("SearchHelper :: setComponentValues() :: Start");
		Resource searchRes = null;
		String searchResPath = null;
		String selector = null;
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		Boolean isHomePage = CommonUtil.isHomePagePath(currentPage);
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		
		if(isHomePage){
			searchResPath = homePagePath.concat(SEARCH_HEADER_COMPONENT);
			searchRes = resourceResolver.getResource(searchResPath);
		} else {
			searchRes = res;
		}
		
		if(null != selector){
			if( StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_SELECTOR) || StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_MOBILE_SELECTOR) || StringUtils.equalsIgnoreCase(selector, SEARCH_HEADER_BAR_SELECTOR) ){
				searchRes = resourceResolver.getResource(homePagePath.concat(SEARCH_HEADER_COMPONENT));
			}
		} else {
			searchRes = res;
		}
		
		
		if(null != searchRes) {
			searchModel = searchRes.adaptTo(SearchBean.class);
		}
		LOGGER.debug("SearchHelper :: setComponentValues() :: Exit");
		
	}

	public SearchBean getSearchModel() {
		return searchModel;
	}
}
