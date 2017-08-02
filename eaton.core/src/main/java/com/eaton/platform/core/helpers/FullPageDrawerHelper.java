package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.FullPageDrawerModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class FullPageDrawerHelper.
 */
public class FullPageDrawerHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(FullPageDrawerHelper.class);
    
    /** The full page drawer sling model. */
    private FullPageDrawerModel fullPageDrawerSlingModel;
    
    /** The country title. */
    private String countryTitle;
    
    /** The language title. */
    private String languageTitle;

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("FullPageDrawerHelper :: setComponentValues() :: Start");
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		if(StringUtils.isNotBlank(homePagePath)){
			Page homePage = pageManager.getPage(homePagePath);
			languageTitle = homePage.getTitle();
			countryTitle = homePage.getParent().getTitle();
			String fullPageDrawerResPath = homePagePath.concat("/jcr:content/root/header/full-page-drawer");
			Resource fullPageDrawerRes = resourceResolver.getResource(fullPageDrawerResPath);
			if(fullPageDrawerRes!= null) {
				fullPageDrawerSlingModel = fullPageDrawerRes.adaptTo(FullPageDrawerModel.class);
			}
		}
		LOGGER.debug("FullPageDrawerHelper :: setComponentValues() :: Exit");
	}

	/**
	 * Gets the full page drawer sling model.
	 *
	 * @return the full page drawer sling model
	 */
	public FullPageDrawerModel getFullPageDrawerSlingModel() {
		return fullPageDrawerSlingModel;
	}

	/**
	 * Gets the country title.
	 *
	 * @return the country title
	 */
	public String getCountryTitle() {
		return countryTitle;
	}

	/**
	 * Gets the language title.
	 *
	 * @return the language title
	 */
	public String getLanguageTitle() {
		return languageTitle;
	}
	
}
