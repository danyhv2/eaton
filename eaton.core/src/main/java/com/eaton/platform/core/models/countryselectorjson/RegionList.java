package com.eaton.platform.core.models.countryselectorjson;

import java.util.List;

/**
 * This class is for Region List.
 * @author TCS
 *
 */
public class RegionList
{
    private List<CountryList> countryList;

    private String regionName;

    public List<CountryList> getCountryList() {
		return countryList;
	}

	public void setCountryList(List<CountryList> countryList) {
		this.countryList = countryList;
	}

	public String getRegionName ()
    {
        return regionName;
    }

    public void setRegionName (String regionName)
    {
        this.regionName = regionName;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [countryList = "+countryList+", regionName = "+regionName+"]";
    }
}