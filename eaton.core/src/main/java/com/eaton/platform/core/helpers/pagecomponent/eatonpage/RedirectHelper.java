/**
 * 
 */
package com.eaton.platform.core.helpers.pagecomponent.eatonpage;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.WCMMode;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.util.CommonUtil;

/**
 * @author C9926198
 *
 */
public class RedirectHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(RedirectHelper.class);	
    /** The Constant REDIRECT_TARGET. */
    private static final String REDIRECT_TARGET = "redirectTarget";
    
    private boolean isRedirect;
    private String location;

	@Override
	public void setComponentValues() {
		LOGGER.debug("Entered into setComponentValues method");
		location = CommonUtil.getStringProperty(currentPageProperties, REDIRECT_TARGET);
		if (WCMMode.PREVIEW != WCMMode.fromRequest(slingRequest) || WCMMode.DISABLED != WCMMode.fromRequest(slingRequest)) {
			if (currentPage != null && StringUtils.isNotBlank(location) && !StringUtils.equals(location, currentPage.getPath())) {
				isRedirect = true;
			}
		}
		LOGGER.debug("Exoted from setComponentValues method");
	}
	
	/**
     * Gets the configure response.
     * @return the configure response
     */
    public void getConfigureResponse() {
    	LOGGER.debug("Entered into getConfigureResponse method");
    	if(isRedirect) {
            response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
            response.setHeader("Location", location);
            response.setHeader("Connection", "close");
    	}
    	LOGGER.debug("Exoted from getConfigureResponse method");
    	return;
    }

}
