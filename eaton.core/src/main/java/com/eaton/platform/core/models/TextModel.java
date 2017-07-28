package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used in LinkListHelper class to store content </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TextModel {
	
	@Inject
	private String view;
	
	@Inject
	private String text;
	
	@Inject
	private String topline;

	/**
	 * @return the view
	 */
	public String getView() {
		return view;
	}

	/**
	 * @return the text
	 */
	public String getText() {
		return text;
	}

	/**
	 * @return the topline
	 */
	public String getTopline() {
		return topline;
	}
	
	
	
	
}
