package com.eaton.platform.core.helpers;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.BrightcoveUtil;
import com.eaton.platform.core.util.CommonUtil;

public class BrightcoveHelper extends BaseComponent {
		
	private static final Logger LOG = LoggerFactory.getLogger(BrightcoveHelper.class);
	/**
	 * variable errorMsg
	 */
	private String errorMsg;
	/**
	 * variable playerUniqueId
	 */
	private String playerUniqueId;
	
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
			LOG.error("LoginException occured while getting the reader service", exception);
		}
		// get brightcove configuration page jcr resource
		Resource brightcoveconfigJCRResource = BrightcoveUtil.getBCConfigJcrResource(
				getSlingScriptHelper().getService(ConfigurationManagerFactory.class),
					adminReadResourceResolver, currentPageRes);
		// get error message configured in brightcove config page
		errorMsg = CommonUtil.getStringProperty(brightcoveconfigJCRResource.getValueMap(), CommonConstants.BC_ERROR_MSG_FIELD_NAME);
		LOG.info("in BrightcoveHelper activate() method errorMsg :::"+errorMsg);
		
		// unique identifier for Brightcove component, required to get a handle of the player
		playerUniqueId = UUID.randomUUID().toString().replaceAll(CommonConstants.HYPHEN, StringUtils.EMPTY);
		
	}

	/**
	 * @return the errorMsg
	 */
	public String getErrorMsg() {
		return errorMsg;
	}

	/**
	 * @return the playerUniqueId
	 */
	public String getPlayerUniqueId() {
		return playerUniqueId;
	}

	
}
