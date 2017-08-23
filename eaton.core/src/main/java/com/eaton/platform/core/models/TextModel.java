package com.eaton.platform.core.models;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used in TitleHelper class to store content </html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TextModel {
	
	/** The view. */
	@Inject
	private String view;
	
	/** The text. */
	@Inject @Named("transText")
	private String text;
	
	/** The topline. */
	@Inject
	private String topline;

	@Inject
	private String toggleInnerGrid;
	
	
	public String getToggleInnerGrid() {
		return toggleInnerGrid;
	}

	/**
	 * Gets the view.
	 *
	 * @return the view
	 */
	public String getView() {
		return view;
	}

	/**
	 * Gets the text.
	 *
	 * @return the text
	 */
	public String getText() {
		return text;
	}

	/**
	 * Gets the topline.
	 *
	 * @return the topline
	 */
	public String getTopline() {
		return topline;
	}
	
}
