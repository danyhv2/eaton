package com.eaton.platform.core.models;

import java.util.Calendar;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used in LinkListHelper class to store content </html> .
 * 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TitleModel {

	/** The by line date. */
	@Inject 
	private Calendar byLineDate;

	/** The title. */
	@Inject @Named("jcr:title")
	private String title;
	
	/** The trans by line text. */
	@Inject 
	private String transByLineText;
	
	/** The toggle inner grid. */
	@Inject 
	private String toggleInnerGrid;
	
	/** The  type. */
	@Inject 
	private String type;
	
	/** The view. */
	@Inject 
	private String view;
	
	/** The trans cat label. */
	@Inject 
	private String transCatLabel;
	
	/** The alignment. */
	@Inject 
	private String alignment;
	
	/**
	 * Gets the by line date.
	 *
	 * @return byLineDate
	 */
	public Calendar getByLineDate() {
		return byLineDate;
	}

	/**
	 * Gets the title.
	 *
	 * @return title
	 */
	public String getTitle() {
		return title;
	}
	
	/**
	 * Gets the trans by line text.
	 *
	 * @return transByLineText
	 */
	public String getTransByLineText() {
		return transByLineText;
	}

	/**
	 * Gets the toggle inner grid.
	 *
	 * @return the toggle inner grid
	 */
	public String getToggleInnerGrid() {
		return toggleInnerGrid;
	}

	/**
	 * Gets the header type.
	 *
	 * @return the header type
	 */
	public String getType() {
		return type;
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
	 * Gets the trans cat label.
	 *
	 * @return the trans cat label
	 */
	public String getTransCatLabel() {
		return transCatLabel;
	}

	public String getAlignment() {
		return alignment;
	}

	
	
}
