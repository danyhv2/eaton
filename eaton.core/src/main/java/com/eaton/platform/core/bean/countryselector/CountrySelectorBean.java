package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

/**
 * The Class CountrySelectorBean.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class CountrySelectorBean implements Serializable {
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1409656172706414692L;

    /** The region list. */
    @JsonProperty(value="regionList")
    private List<Regionlist> regionList;

	/**
	 * Gets the region list.
	 *
	 * @return the region list
	 */
	public List<Regionlist> getRegionList() {
		return regionList;
	}

	/**
	 * Sets the region list.
	 *
	 * @param regionList the new region list
	 */
	public void setRegionList(List<Regionlist> regionList) {
		this.regionList = regionList;
	}

}