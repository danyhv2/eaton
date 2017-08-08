package com.eaton.platform.core;

import java.util.Locale;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.constants.CommonConstants;

/***
 * <html>Description: This class is used as a parent class for all the sightly java class.</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class BaseComponent extends WCMUsePojo{
	

	Page page = null;
	Locale locale = null;
	String etnLocale=null;
	@Override
	public void activate() throws Exception {
		// TODO Auto-generated method stub
		
	}
	/**
	 * <html> Description: This function return the home page path </html>
	 * @return Home Page path
	 * 
	 */
	public String getHomePath() {
		page =null;
		String path = null;
		page  = getCurrentPage().getAbsoluteParent(CommonConstants.HOME_LEVEL);
		path = page.getPath();
		return path;
	}
	/**
	 * <html> Description: This function return the locale </html>
	 * @return Locale
	 */
	public String getLocale() {
		locale  = getCurrentPage().getLanguage(false);
		etnLocale = locale.getLanguage();
		return etnLocale;
	}
	
}
