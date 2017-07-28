package com.eaton.platform.core.models;

import java.util.GregorianCalendar;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables = Resource.class)
public class TitleBean {

	@Inject @Optional 
	private GregorianCalendar byLineDate;

	@Inject @Optional @Named("jcr:title")
	private String title;
	
	@Inject @Optional 
	private String transByLineText;
	
	/**
	 * 
	 * @return byLineDate
	 */
	public GregorianCalendar getByLineDate() {
		return byLineDate;
	}

	/**
	 * 
	 * @return title
	 */
	public String getTitle() {
		return title;
	}
	
	/**
	 * 
	 * @return transByLineText
	 */
	public String getTransByLineText() {
		return transByLineText;
	}
	
}
