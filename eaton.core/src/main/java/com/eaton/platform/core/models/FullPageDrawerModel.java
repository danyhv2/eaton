package com.eaton.platform.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
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
public class FullPageDrawerModel {
    	
	/** The links. */
	public List<FullPageDrawerLinkListModel> links;
    
	/** The reference. */
	@Inject  @Optional
    private String reference;
    
	/** The link list. */
	@Inject @Optional
    private Resource linkList;
	
    /**
     * Gets the reference.
     *
     * @return reference
     */
	public String getReference() {
		return reference;
	}
	
	/**
	 * Sets the reference.
	 *
	 * @param reference the new reference
	 */
	public void setReference(String reference) {
		this.reference = reference;
	}
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		links = new ArrayList<FullPageDrawerLinkListModel>();
		if (linkList != null) {
			populateModel(links, linkList);
		}
	}
	
	/**
	 * Populate model.
	 *
	 * @param array the array
	 * @param resource the resource
	 * @return the list
	 */
	public  List<FullPageDrawerLinkListModel> populateModel(List<FullPageDrawerLinkListModel> array, Resource resource) {
		if (resource != null) {
			Iterator<Resource> linkResources = resource.listChildren();
			while (linkResources.hasNext()) {
				FullPageDrawerLinkListModel link = linkResources.next().adaptTo(FullPageDrawerLinkListModel.class);
				if (link != null)
					array.add(link);
			}
		}
		return array;
	}
		
    
}
