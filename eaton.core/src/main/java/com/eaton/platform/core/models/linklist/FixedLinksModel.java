package com.eaton.platform.core.models.linklist;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.day.cq.dam.api.Asset;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This Sling Model used in ViewContentList class
 *  to load Fixed links multifield for Generic views</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FixedLinksModel {

	/** The link title. */
	@Inject @Named("fixedLinkTitle")
	private String linkTitle;
	
	/** The page link. */
	@Inject @Named("linkPath")
	private String pageLink;
	
	/** The new window. */
	@Inject @Named("newWindowFixed")
	private String newWindow;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

	/**
	 * Gets the link title.
	 *
	 * @return the link title
	 */
	public String getLinkTitle() {
		String linkTitle = this.linkTitle;
		if(null == linkTitle) {
			linkTitle = CommonUtil.getLinkTitle(null, this.pageLink, this.resourceResolver);
		}
		return linkTitle;
	}

	/**
	 * Gets the page link.
	 *
	 * @return the page link
	 */
	public String getPageLink() {
		return CommonUtil.dotHtmlLink(this.pageLink);
	}

	/**
	 * Gets the new window.
	 *
	 * @return the new window
	 */
	public String getNewWindow() {
		String newWindow = StringUtils.EMPTY;
		if(StringUtils.equals(CommonConstants.TRUE, this.newWindow)) {
			newWindow = CommonConstants.TARGET_BLANK;
		}
		return newWindow;
	}
	
	/**
	 * Gets the checks if is external.
	 *
	 * @return the checks if is external
	 */
	public String getIsExternal() {
		String isExternal = CommonConstants.FALSE;
		if(null != this.pageLink && StringUtils.startsWithIgnoreCase(this.pageLink, CommonConstants.HTTP)) {
			isExternal = CommonConstants.TRUE;
		}
		return isExternal;
	}

	/**
	 * Checks if is asset path.
	 *
	 * @return true, if is asset path
	 */
	public boolean getIsAssetLink() {
		boolean isAssetPath = false;
		if(StringUtils.startsWith(this.pageLink, CommonConstants.CONTENT_DAM)) {
			isAssetPath = true;
		}
		return isAssetPath;
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
		return this.resourceResolver.getResource(this.pageLink);
	}
}
