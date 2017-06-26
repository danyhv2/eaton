package com.eaton.platform.core.models.countryselectorjson;

/**
 * This class is for Country Selector List.
 * @author TCS
 *
 */
public class CountrySelectorJSON {
	private RegionList[] regionList;

    public RegionList[] getRegionList ()
    {
        return regionList;
    }

    public void setRegionList (RegionList[] regionList)
    {
        this.regionList = regionList;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [regionList = "+regionList+"]";
    }

}
