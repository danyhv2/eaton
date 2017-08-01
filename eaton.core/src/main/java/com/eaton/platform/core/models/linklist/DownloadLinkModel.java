package com.eaton.platform.core.models.linklist;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This Sling Model used in DownloadListModel class
 *  to load Manual links multifield for Download and Download with Description view</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class DownloadLinkModel {

	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(DownloadLinkModel.class);
    
	/** The asset link title. */
	@Inject @Named("transLinkTitle")
	private String assetLinkTitle;

	/** The description. */
	@Inject @Named("transDescription")
	private String description;
	
	/** The asset path. */
	@Inject @Named("path")
	private String assetPath;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
    
	/**
	 * Gets the asset link title.
	 *
	 * @return the asset link title
	 */
	public String getAssetLinkTitle() {
		String linkTitle = this.assetLinkTitle;
		if(null == linkTitle) {
			if (null != getAsset() && getAsset().getMetadata().containsKey(DamConstants.DC_TITLE)) {
				linkTitle = getAsset().getMetadataValue(DamConstants.DC_TITLE);
			}
			else {
				linkTitle = getAssetResource().getName();
			}
		}
		return linkTitle;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		String assetDescription = this.description;
		if(null == assetDescription) {
			if (null != getAsset()) {
				assetDescription = getAsset().getMetadataValue(DamConstants.DC_DESCRIPTION);
			} else {
				assetDescription = StringUtils.EMPTY;
			}
		}
		return assetDescription;
	}

	/**
	 * Gets the asset path.
	 *
	 * @return the asset path
	 */
	public String getAssetPath() {
		String assetLinkPath = StringUtils.EMPTY;
		if (StringUtils.equals(CommonUtil.getStringProperty(getAssetResource().getValueMap(), CommonConstants.JCR_PRIMARY_TYPE), DamConstants.NT_DAM_ASSET)) {
			assetLinkPath = this.assetPath;
		}
		return assetLinkPath;
	}
	
	/**
	 * Gets the asset size.
	 *
	 * @return the asset size
	 */
	public String getAssetSize() {
		return CommonUtil.getAssetSize(getAsset());
	}

	/**
	 * Gets the asset.
	 *
	 * @return the asset
	 */
	private Asset getAsset() {
		return CommonUtil.getAsset(getAssetResource());
	}

	/**
	 * Gets the asset resource.
	 *
	 * @return the asset resource
	 */
	private Resource getAssetResource() {
		Resource assetResource = null;
		try {
			assetResource = this.resourceResolver.getResource(URLDecoder.decode(this.assetPath, CommonConstants.UTF_8));
		} catch (UnsupportedEncodingException e) {
			LOGGER.error("DownloadLinkModel | Exception occured due to improper image name - ", e);
		}
		return assetResource;
	}
	
	/**
	 * Checks if is asset path.
	 *
	 * @return true, if is asset path
	 */
	public boolean getIsAssetLink() {
		boolean isAssetPath = false;
		if(StringUtils.startsWith(this.assetPath, CommonConstants.CONTENT_DAM)) {
			isAssetPath = true;
		}
		return isAssetPath;
	}
}
