package com.eaton.platform.core.models;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class IconListInfoModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class IconListInfoModel {
	
	/** The icon. */
	@Inject
	private String icon;
	
	/** The link path. */
	@Inject
	private String linkPath;
	
	/** The title. */
	@Inject
	private String title;
	
	/** The description. */
	@Inject
	private String description;
	
	/** The additonal info. */
	@Inject
	private String additonalInfo;
	/**
	 * Gets the icon.
	 *
	 * @return the icon
	 */
	public String getIcon() {
		return icon;
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
	 * Gets the link path.
	 *
	 * @return the link path
	 */
	public String getLinkPath() {
		return linkPath;
	}

	/**
	 * Gets the title.
	 *
	 * @return the title
	 */
	public String getTitle() {
		return title;
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
	 * Gets the additonal info.
	 *
	 * @return the additonal info
	 */
	public String getAdditonalInfo() {
		return additonalInfo;
	}


	/**
	 * Inits
	 */
	@PostConstruct
	protected void init() {
		if (getLinkPath() != null) {
			setLinkPath(CommonUtil.dotHtmlLink(getLinkPath()));
		}
	}

}
