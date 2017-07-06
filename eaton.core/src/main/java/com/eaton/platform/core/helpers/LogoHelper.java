package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.util.CommonUtil;

public class LogoHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(LogoHelper.class);
    
    private String logoView;
    private String logoImagePath;
    private String logoImageAltText;
    private String logoImageTitle;
    private String logoLinkPath;
    
    private static final String HEADER_LOGO_SELECTOR = "header-logo";

	@Override
	public void setComponentValues() {
		LOGGER.debug("Entered into setComponentValues method");
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
				ValueMap logoResVM = logoRes.getValueMap();
				logoView = CommonUtil.getStringProperty(logoResVM, "view");
				logoImagePath = CommonUtil.getStringProperty(logoResVM, "logoReference");
				logoImageAltText = "Eaton Logo";
				logoImageTitle = CommonUtil.getStringProperty(logoResVM, "transLogoTitle");
				logoLinkPath = CommonUtil.getHomePagePath(currentPage);
			}
		}		
		LOGGER.debug("Exoted from setComponentValues method");
		
	}

	public String getLogoView() {
		return logoView;
	}

	public String getLogoImagePath() {
		return logoImagePath;
	}

	public String getLogoImageAltText() {
		return logoImageAltText;
	}

	public String getLogoImageTitle() {
		return logoImageTitle;
	}

	public String getLogoLinkPath() {
		return logoLinkPath;
	}

}
