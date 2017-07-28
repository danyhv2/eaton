package com.eaton.platform.core.models.ttillist;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This is a Sling Model for Feature List View.</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TtilListFeaturedListModel {

	/** The image alt text. */
	@Inject
	private String imageAltText;
	
	/** The image path. */
	@Inject
	private String imagePath;
	
	/** The link destination. */
	@Inject
	private String linkDestination;
	
	/** The new window. */
	@Inject
	private String newWindow;
	
	/** The description. */
	@Inject
	private String description;
	
	/** The title text. */
	@Inject
	private String titleText;
	
	/** The linkTitle. */
	@Inject
	private String linkTitle;

	/**
	 * Gets the image alt text.
	 *
	 * @return the image alt text
	 */
	public String getImageAltText() {
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
		if(StringUtils.equals(CommonConstants.TRUE, this.newWindow)) {
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
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Gets the link title.
	 *
	 * @return the link title
	 */
	public String getLinkTitle() {
		return linkTitle;
	}

}
