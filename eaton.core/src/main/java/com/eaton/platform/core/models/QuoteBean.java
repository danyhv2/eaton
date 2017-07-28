package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;


/**
 * This class is used to inject the dialog properties.
 * @author TCS
 *
 */
@Model(adaptables = Resource.class)
public class QuoteBean {
	
	@Inject 
	private String transAuthorName;
	
	@Inject
	private String transDesignation;
	
	@Inject @Optional
	private String quote;
	
	public String getTransAuthorName() {
		transAuthorName= transAuthorName.trim();
		return transAuthorName;
	}
	public void setTransAuthorName(String transAuthorName) {
		this.transAuthorName = transAuthorName;
	}
	public String getTransDesignation() {
		transDesignation= transDesignation.trim();
		return transDesignation;
	}
	public void setTransDesignation(String transDesignation) {
	this.transDesignation= transDesignation;
		
	}
	public String getQuote() {
		return quote;
	}
	public void setQuote(String quote) {
		this.quote = quote;
	}
	
	

}
