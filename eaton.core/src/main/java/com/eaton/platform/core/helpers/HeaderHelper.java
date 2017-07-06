package com.eaton.platform.core.helpers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.WCMMode;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.util.CommonUtil;

public class HeaderHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(HeaderHelper.class);
    
    private boolean homePage;
    
    private String editMode;

	@Override
	public void setComponentValues() {
		LOGGER.debug("Entered into setComponentValues method");
		homePage = CommonUtil.isHomePagePath(currentPage);
		WCMMode currentMode = WCMMode.fromRequest(getRequest());
		if(homePage && currentMode == WCMMode.EDIT){
			editMode = "edit";
		} else {
			editMode = "disabled";
		}
			
		LOGGER.debug("Exoted from setComponentValues method");
	}

	public boolean isHomePage() {
		return homePage;
	}

	/**
	 * @return the editMode
	 */
	public String getEditMode() {
		return editMode;
	}

		
	
}
