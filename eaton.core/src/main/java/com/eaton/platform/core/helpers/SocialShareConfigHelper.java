package com.eaton.platform.core.helpers;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;


public class SocialShareConfigHelper extends BaseComponent {
		
	private static final Logger LOG = LoggerFactory.getLogger(SocialShareConfigHelper.class);
	
	/* variable 
	 * pubID
	 */
	private String pubID;
	
	/**
	 * variable allowedTemplate
	 */
	private Boolean allowedTemplate = false;
	
	@Override
	public void activate() throws Exception {
		
		// get current page resource
		ResourceResolver adminReadResourceResolver = null;
		ResourceResolverFactory resolverFactory = getSlingScriptHelper().getService(ResourceResolverFactory.class);
		Resource currentPageRes = getResourceResolver().resolve(getCurrentPage().getPath());
		Map<String, Object> param = new HashMap<String, Object>();
		param.put(ResourceResolverFactory.SUBSERVICE, CommonConstants.RESOURCE_RESOLVER_READ_SERVICE);
		
		try {
			adminReadResourceResolver = resolverFactory.getServiceResourceResolver(param);
			
		} catch (LoginException exception) {
			LOG.error("Exception occured while getting the read service", exception);
		}
		
		Resource socialshareconfigResource = null;
		Resource socialshareconfigpageJCRResource = null;
		// get brightcove cloud configuration object
		ConfigurationManagerFactory configManagerFctry = null;
		configManagerFctry = getSlingScriptHelper().getService(ConfigurationManagerFactory.class);
		// get configObj using BrightcoveUtil method for configPage socialshare
		Configuration configObj = CommonUtil.getCloudConfigObj(configManagerFctry,
									adminReadResourceResolver,  currentPageRes, CommonConstants.SOCIAL_SHARE_CLOUD_CONFIG);
	
		// if cloud config object is not null, get the details
		if(null != configObj){
			socialshareconfigResource = adminReadResourceResolver.resolve(configObj.getPath());
			socialshareconfigpageJCRResource = socialshareconfigResource.getChild(CommonConstants.JCR_CONTENT_STR);
	        pubID = CommonUtil.getStringProperty(socialshareconfigpageJCRResource.getValueMap(), CommonConstants.SOCIAL_SHARE_PUB_ID);
		}
		
		// get current page's template to check if social share is applicable
		String template = null;
		if(null != currentPageRes){
			template = CommonUtil.getStringProperty(currentPageRes.getChild(CommonConstants.JCR_CONTENT_STR).getValueMap(),
						CommonConstants.CQ_TEMPLATE_PROPERTY);
		}
		// social share is allowed on Article Page, Product Family Page 
		// and SKU page: Needs to be updated in Release 2 to allow on Product Family & SKU pages
		if(null != template && StringUtils.equalsIgnoreCase(template, CommonConstants.ARTICLE_TEMPLATE_PATH)){
			allowedTemplate = true;
		}
		
		LOG.info("in SocialShareConfigHelper activate() method errorMsg :::");

	}

	/**
	 * @return the pubID
	 */
	public String getPubID() {
		return pubID;
	}

	/**
	 * @return the allowedTemplate
	 */
	public Boolean getAllowedTemplate() {
		return allowedTemplate;
	}

	
}


