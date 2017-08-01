package com.eaton.platform.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class FullPageDrawerLinkListModel.
 */
@Model(adaptables = Resource.class)
public class FullPageDrawerLinkListModel {

	/** The link path. */
	@Inject
	@Optional
	private String linkPath;

	/** The trans link title. */
	@Inject
	@Optional
	private String transLinkTitle;

	/** The icons. */
	@Inject
	@Optional
	private String icons;

	/** The new window. */
	@Inject
	@Optional
	private String newWindow;
    
	/**
	 * Gets the link path.
	 *
	 * @return the link path
	 */
	public String getLinkPath() {
		return linkPath;
	}

	/**
	 * Sets the link path.
	 *
	 * @param linkPath the new link path
	 */
	public void setLinkPath(String linkPath) {
		this.linkPath = linkPath;
	}
	
	/**
	 * Gets the trans link title.
	 *
	 * @return the trans link title
	 */
	public String getTransLinkTitle() {
		return transLinkTitle;
	}
	
	/**
	 * Gets the icons.
	 *
	 * @return the icons
	 */
	public String getIcons() {
		return icons;
	}

	/**
	 * Gets the new window.
	 *
	 * @return the new window
	 */
	public String getNewWindow() {
		return newWindow;
	}

	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		if (getLinkPath() != null) {
			setLinkPath(CommonUtil.dotHtmlLink(getLinkPath()));
		}
	}

}