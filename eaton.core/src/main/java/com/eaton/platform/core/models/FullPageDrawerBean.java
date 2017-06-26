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
public class FullPageDrawerBean {

	@Inject  @Optional
    private String reference;
    @Inject @Optional
    private Resource linkList;
    
    /**
	 * @return reference
	 */
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	/**
	 * @return linkList
	 */
	public Resource getLinkList() {
		return linkList;
	}
	public void setLinkList(Resource linkList) {
		this.linkList = linkList;
	}
    
    
}
