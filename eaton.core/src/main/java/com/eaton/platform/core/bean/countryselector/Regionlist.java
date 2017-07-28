package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Regionlist implements Serializable {
	private static final long serialVersionUID = -1409656172706414694L;

    @JsonProperty(value="regionName")
    private String regionname;
    private String regionID;
    @JsonProperty(value="countryList")
    private List<Countrylist> countrylist;
    public void setRegionname(String regionname) {
         this.regionname = regionname;
     }
     public String getRegionname() {
         return regionname;
     }

    public void setCountrylist(List<Countrylist> countrylist) {
         this.countrylist = countrylist;
     }
     public List<Countrylist> getCountrylist() {
         return countrylist;
     }
	public String getRegionID() {
		String regionNameVal = this.regionname;
		this.regionID = StringUtils.replaceChars(regionNameVal, "", "-");
		return regionID;
	}
	public void setRegionID(String regionID) {
		this.regionID = regionID;
	}
     
}