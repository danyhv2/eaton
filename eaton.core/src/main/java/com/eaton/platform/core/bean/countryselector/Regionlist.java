package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

/**
 * The Class Regionlist.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class Regionlist implements Serializable {
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1409656172706414694L;

    /** The regionname. */
    @JsonProperty(value="regionName")
    private String regionname;
    
    /** The region ID. */
    private String regionID;
    
    /** The countrylist. */
    @JsonProperty(value="countryList")
    private List<Countrylist> countrylist;
    
    /**
     * Sets the regionname.
     *
     * @param regionname the new regionname
     */
    public void setRegionname(String regionname) {
         this.regionname = regionname;
     }
     
     /**
      * Gets the regionname.
      *
      * @return the regionname
      */
     public String getRegionname() {
         return regionname;
     }

    /**
     * Sets the countrylist.
     *
     * @param countrylist the new countrylist
     */
    public void setCountrylist(List<Countrylist> countrylist) {
         this.countrylist = countrylist;
     }
     
     /**
      * Gets the countrylist.
      *
      * @return the countrylist
      */
     public List<Countrylist> getCountrylist() {
         return countrylist;
     }
	
	/**
	 * Gets the region ID.
	 *
	 * @return the region ID
	 */
	public String getRegionID() {
		String regionNameVal = this.regionname;
		this.regionID = StringUtils.replaceChars(regionNameVal, "", "-");
		return regionID;
	}
	
	/**
	 * Sets the region ID.
	 *
	 * @param regionID the new region ID
	 */
	public void setRegionID(String regionID) {
		this.regionID = regionID;
	}
     
}