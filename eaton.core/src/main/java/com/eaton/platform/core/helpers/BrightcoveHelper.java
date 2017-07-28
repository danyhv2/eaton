package com.eaton.platform.core.helpers;

import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.BCComponentModel;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.BrightcoveUtil;

public class BrightcoveHelper extends EatonAbstractUseBean {
		
	private static final Logger LOG = LoggerFactory.getLogger(BrightcoveHelper.class);
	/**
	 * variable errorMsg
	 */
	private String errorMsg;
	/**
	 * variable playerUniqueId
	 */
	private String playerUniqueId;
	
	private BCComponentModel bcCompModel;
	
	public void setComponentValues() {
		// get current page resource
		ResourceResolver adminReadResourceResolver = null;
		// get admin service
		AdminService adminService = slingHelper.getService(AdminService.class);
		Resource currentPageRes = resourceResolver.resolve(getCurrentPage().getPath());
		
		try {
			// get admin resoure resolver to resolve resources under /etc/cloudservices
			adminReadResourceResolver = adminService.getReadService();		
			// get brightcove configuration page jcr resource
			Resource brightcoveConfigRes = BrightcoveUtil.getBCConfigResource(
					slingHelper.getService(ConfigurationManagerFactory.class),
						adminReadResourceResolver, currentPageRes);
			// get error message configured in brightcove config page
			errorMsg = BrightcoveUtil.getBCErrorMessage(brightcoveConfigRes);
			LOG.info("in BrightcoveHelper activate() method errorMsg :::"+errorMsg);
			
			// unique identifier for Brightcove component, required to get a handle of the player
			playerUniqueId = UUID.randomUUID().toString().replaceAll(CommonConstants.HYPHEN, StringUtils.EMPTY);
			
			bcCompModel = res.adaptTo(BCComponentModel.class);
			
		} catch (Exception exception) {
			LOG.error("Exception occured while getting the reader service", exception);
		}
		
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

	/**
	 * @return the bcCompModel
	 */
	public BCComponentModel getBcCompModel() {
		return bcCompModel;
	}

	
}
