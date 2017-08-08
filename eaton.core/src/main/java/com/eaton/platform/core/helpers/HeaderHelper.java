package com.eaton.platform.core.helpers;

import java.util.Calendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.WCMMode;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to determine the edit Mode as edit for home page
 *  and disabled for other pages</html>.
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 * 
 */
public class HeaderHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(HeaderHelper.class);
    
    /** The Constant COPYRIGHT_ICON. */
    private static final String COPYRIGHT_ICON = "\u00a9";
    /** The homePage. */
    private boolean homePage;
    
    /** The editMode. */
    private String editMode;

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("HeaderHelper :: setComponentValues() :: Start");	
		homePage = CommonUtil.isHomePagePath(currentPage);
		WCMMode currentMode = WCMMode.fromRequest(getRequest());
		if(homePage && (WCMMode.EDIT == currentMode)){
			editMode = CommonConstants.EDIT;
		} else {
			editMode = CommonConstants.DISABLED;
		}
			
		LOGGER.debug("HeaderHelper :: setComponentValues() :: Exit");
	}

	/**
	 * Checks if is home page.
	 *
	 * @return homePage.
	 */
	public boolean isHomePage() {
		return homePage;
	}

	/**
	 * Gets the edit mode.
	 *
	 * @return the editMode
	 */
	public String getEditMode() {
		return editMode;
	}
	
	/**
	 * Gets the copy right text.
	 *
	 * @return copyright text along with current year
	 */
	public String getCopyRightText() {
		Calendar currentDate = Calendar.getInstance();   // Gets the current date and time
		return COPYRIGHT_ICON + CommonConstants.BLANK_SPACE + currentDate.get(Calendar.YEAR);
	}

}
