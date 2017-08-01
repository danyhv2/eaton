package com.eaton.platform.core.models;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used in MegaMenuModel class to store content </html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MegaMenuModel {
	
	/** The view. */
	@Inject
	private String titlePath;
	
	/** The topline. */
	@Inject
	private String newWindow;

	@Inject
	private String mergecolumn;

	@Inject
	private String transTitleText;

	/**
	 * @return the titlePath
	 */
	public String getTitlePath() {
		String[] parts = titlePath.split("/");
		return parts[parts.length-1];
	}
	
	/**
	 * @return the transTitleText
	 */
	public String getTransTitleText() {
		return transTitleText;
	}

	/**
	 * @return the newWindow
	 */
	public String getNewWindow() {
		return newWindow;
	}

	/**
	 * @return the mergecolumn
	 */
	public String getMergecolumn() {
		return mergecolumn;
	}
	
}
