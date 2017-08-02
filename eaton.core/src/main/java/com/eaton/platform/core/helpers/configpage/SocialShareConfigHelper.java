package com.eaton.platform.core.helpers.configpage;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.CommonUtil;


/**
 * The Class SocialShareConfigHelper.
 */
public class SocialShareConfigHelper extends EatonAbstractUseBean {
		
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(SocialShareConfigHelper.class);
	
	/** The pub ID. */
	private String pubID;
	
	/** The allowed template. */
	private Boolean allowedTemplate = false;
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("SocialShareConfigHelper :: setComponentValues() :: Start");
		
		try {
			AdminService adminService = slingHelper.getService(AdminService.class);
			// get admin resoure resolver to resolve resources under /etc/cloudservices
			ResourceResolver adminReadResourceResolver = adminService.getReadService();	
			
			Resource socialshareconfigResource = null;
			Resource currentPageRes = resourceResolver.resolve(currentPage.getPath());
			
			// get brightcove cloud configuration object
			ConfigurationManagerFactory configManagerFctry = null;
			configManagerFctry = getSlingScriptHelper().getService(ConfigurationManagerFactory.class);
			// get configObj using BrightcoveUtil method for configPage socialshare
			Configuration configObj = CommonUtil.getCloudConfigObj(configManagerFctry,
					adminReadResourceResolver,  currentPageRes, CommonConstants.SOCIAL_SHARE_CLOUD_CONFIG);
			
			Page socialShareConfigPage = null;
			String[] allowedTemplates = CommonConstants.EMPTY_ARRAY;
			// if cloud config object is not null, get the details
			if(null != configObj){
				socialshareconfigResource = adminReadResourceResolver.resolve(configObj.getPath().concat(CommonConstants.SLASH_STRING).concat(CommonConstants.JCR_CONTENT_STR));
				socialShareConfigPage = socialshareconfigResource.getParent().adaptTo(Page.class);
			    pubID = CommonUtil.getStringProperty(socialshareconfigResource.getValueMap(), CommonConstants.SOCIAL_SHARE_PUB_ID);
			    allowedTemplates = socialShareConfigPage.getProperties().get(CommonConstants.ALLOWED_TEMPLATE_PROPERTY, String[].class); 
			}
			
			// get current page type to check if social share is applicable
			String currentPageType = null;
			if(null != currentPageRes){
				currentPageType = CommonUtil.getStringProperty(currentPageRes.getChild(CommonConstants.JCR_CONTENT_STR).getValueMap(),
							CommonConstants.PAGE_TYPE);
			}
			
			// social share is allowed on Article Page, Product Family Page 
					// and SKU page: Needs to be updated in Release 2 to allow on Product Family & SKU pages
			if(allowedTemplates.length > 0){
				for(String configuredPageTypeItem : allowedTemplates){
					if(null != currentPageType && StringUtils.equalsIgnoreCase(configuredPageTypeItem, currentPageType)){
						allowedTemplate = true;
					}
				}
			}
			
		} catch (Exception exception) {
			LOGGER.error("Exception occured while getting the reader service", exception);
		}
		LOGGER.debug("SocialShareConfigHelper :: setComponentValues() :: Exit");
	}

	/**
	 * Gets the pub ID.
	 *
	 * @return the pubID
	 */
	public String getPubID() {
		return pubID;
	}

	/**
	 * Gets the allowed template.
	 *
	 * @return the allowedTemplate
	 */
	public Boolean getAllowedTemplate() {
		return allowedTemplate;
	}

	
}


