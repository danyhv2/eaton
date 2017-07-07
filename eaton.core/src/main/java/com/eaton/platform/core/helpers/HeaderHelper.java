package com.eaton.platform.core.helpers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Template;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;


/**
 * <html>This file check the level of the page and return the status of the page</html>
 * @author TCS
 * @since 2017
 * @version1.0
 */
public class HeaderHelper extends BaseComponent{
	
	private static final Logger lOG = LoggerFactory.getLogger(HeaderHelper.class);
	
	
	/**
	 * 
	 * @return Boolean
	 * @param void
	 * This function checks the pages level and return true if page level is home page and return
	 * false if page is not equal to home page.
	 */
	public boolean getHomePagelevel(){
		lOG.debug("-----------------In HeaderHelper------------------" );
		int depth = getCurrentPage().getDepth();
		if(depth==4)
			return true;
		else
			return false;
	}
	public boolean getTemplatePath(){
		lOG.debug("-----------------In template------------------" );
		String  template = getCurrentPage().getPath();
		if(template.contains(CommonConstants.CQ_TEMPLATE_PROPERTY_INITIAL)|| template.contains(CommonConstants.CQ_TEMPLATE_PROPERTY_STRUCRTURE)){
			return true;
		}else{
			return false;
		}
		
			
	}

}
