package com.eaton.platform.core.models.ttillist;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This is a Sling Model for Feature Story, Tile and 6 Column Image Views.</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TtilListFeaturedStoryModel {
	
	/** The image path. */
	@Inject
	private String imagePath;
	
	/** The image alt text. */
	@Inject
	private String imageAltText;
	
	/** The title text. */
	@Inject
	private String titleText;
	
	/** The linkTitle. */
	@Inject
	private String linkTitle;
	
	/** The link destination. */
	@Inject
	private String linkDestination;
	
	/** The new window. */
	@Inject
	private String newWindow;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
    
	/**
	 * Gets the image alt text.
	 *
	 * @return the image alt text
	 */
	public String getImageAltText() {
		String imageAltText = this.imageAltText;
		if(null == imageAltText) {
			imageAltText = CommonUtil.getAssetAltText(this.resourceResolver, this.imagePath);
		}
		return imageAltText;
	}

	/**
	 * Gets the image path.
	 *
	 * @return the image path
	 */
	public String getImagePath() {
		return imagePath;
	}

	/**
	 * Gets the link destination.
	 *
	 * @return the link destination
	 */
	public String getLinkDestination() {
		return CommonUtil.dotHtmlLink(linkDestination);
	}

	/**
	 * Gets the new window.
	 *
	 * @return the new window
	 */
	public String getNewWindow() {
		String newWindow = StringUtils.EMPTY;
		if(StringUtils.equals(CommonConstants.TRUE, this.newWindow) || StringUtils.equals(CommonConstants.TRUE, getIsExternal())) {
			newWindow = CommonConstants.TARGET_BLANK;
		}
		return newWindow;
	}

	/**
	 * Gets the title text.
	 *
	 * @return the title text
	 */
	public String getTitleText() {
		return titleText;
	}

	/**
	 * Gets the linkTitle.
	 *
	 * @return the linkTitle
	 */
	public String getLinkTitle() {
		return CommonUtil.getLinkTitle(this.linkTitle, this.linkDestination, this.resourceResolver);
	}
	
	/**
	 * Gets the checks if is external.
	 *
	 * @return the checks if is external
	 */
	public String getIsExternal() {
		String isExternal = CommonConstants.FALSE;
		if(null != this.linkDestination) {
			if(StringUtils.startsWith(this.linkDestination, CommonConstants.HTTP) || StringUtils.startsWith(this.linkDestination, CommonConstants.HTTPS)) {
				isExternal = CommonConstants.TRUE;
			}
		}
		return isExternal;
	}
}
