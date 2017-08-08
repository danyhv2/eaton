package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.LogoModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide
 * logo details from sling model for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class LogoHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(LogoHelper.class);
    
    /** The logoLinkPath. */
    private String logoLinkPath;
    
    /** The LogoModel. */
    private LogoModel logoModel;
    
    /** The Constant HEADER_LOGO_SELECTOR. */
    private static final String HEADER_LOGO_SELECTOR = "header-logo";

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("LogoHelper :: setComponentValues() :: Start");
		// local variables
		String selector = null;
		// get selector from header & footer passed while including linklist component
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		String logoResPath = null;
		if(StringUtils.isNotBlank(homePagePath)){
			if(null != selector && StringUtils.equals(HEADER_LOGO_SELECTOR, selector)){
				logoResPath = homePagePath.concat("/jcr:content/root/header/header-logo");
			} else {
				logoResPath = homePagePath.concat("/jcr:content/root/footer/footer-logo");
			}
			
			Resource logoRes = resourceResolver.getResource(logoResPath);
			if(logoRes!= null) {
				logoModel = logoRes.adaptTo(LogoModel.class);
				logoLinkPath = CommonUtil.getHomePagePath(currentPage);
			}
		}		
		LOGGER.debug("LogoHelper :: setComponentValues() :: Exit");
		
	}

	/**
	 * Gets the logo link path.
	 *
	 * @return the logoLinkPath.
	 */
	public String getLogoLinkPath() {
		return CommonUtil.dotHtmlLink(logoLinkPath);
	}

	/**
	 * Gets the logo model.
	 *
	 * @return the logoModel.
	 */
	public LogoModel getLogoModel() {
		return logoModel;
	}

}
