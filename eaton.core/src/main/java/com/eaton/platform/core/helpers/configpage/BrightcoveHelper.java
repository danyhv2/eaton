package com.eaton.platform.core.helpers.configpage;

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

/**
 * The Class BrightcoveHelper.
 */
public class BrightcoveHelper extends EatonAbstractUseBean {
		
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(BrightcoveHelper.class);
	
	/** variable errorMsg. */
	private String errorMsg;
	
	/** variable playerUniqueId. */
	private String playerUniqueId;
	
	/** The bc comp model. */
	private BCComponentModel bcCompModel;
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	public void setComponentValues() {
		LOG.debug("BrightcoveHelper :: setComponentValues() :: Start");
		// get current page resource
		ResourceResolver adminReadResourceResolver = null;
		// get admin service
		AdminService adminService = slingHelper.getService(AdminService.class);
		Resource currentPageRes = resourceResolver.resolve(currentPage.getPath());
		
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
		
		LOG.debug("BrightcoveHelper :: setComponentValues() :: Exit");
	
	}

	/**
	 * Gets the error msg.
	 *
	 * @return the errorMsg
	 */
	public String getErrorMsg() {
		return errorMsg;
	}

	/**
	 * Gets the player unique id.
	 *
	 * @return the playerUniqueId
	 */
	public String getPlayerUniqueId() {
		return playerUniqueId;
	}

	/**
	 * Gets the bc comp model.
	 *
	 * @return the bcCompModel
	 */
	public BCComponentModel getBcCompModel() {
		return bcCompModel;
	}
	
}
