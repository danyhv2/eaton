package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown=true)
public class CountrySelectorBean implements Serializable {
	private static final long serialVersionUID = -1409656172706414692L;

    @JsonProperty(value="regionList")
    private List<Regionlist> regionList;

	public List<Regionlist> getRegionList() {
		return regionList;
	}

	public void setRegionList(List<Regionlist> regionList) {
		this.regionList = regionList;
	}

}