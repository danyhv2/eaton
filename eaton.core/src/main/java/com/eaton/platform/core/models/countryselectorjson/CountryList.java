package com.eaton.platform.core.models.countryselectorjson;

import java.util.List;

import com.eaton.platform.core.models.sitemap.SitemapBean;

/**
 * This class is for Country List .
 * @author TCS
 *
 */
public class CountryList
{
    private String countryImagePath;

    private String countryName;

    private String countryImageAltText;

    private List<LanguageList> languageList;

    public String getCountryImagePath ()
    {
        return countryImagePath;
    }

    public void setCountryImagePath (String countryImagePath)
    {
        this.countryImagePath = countryImagePath;
    }

    public String getCountryName ()
    {
        return countryName;
    }

    public void setCountryName (String countryName)
    {
        this.countryName = countryName;
    }

    public String getCountryImageAltText ()
    {
        return countryImageAltText;
    }

    public void setCountryImageAltText (String countryImageAltText)
    {
        this.countryImageAltText = countryImageAltText;
    }

    
    public List<LanguageList> getLanguageList() {
		return languageList;
	}

	public void setLanguageList(List<LanguageList> languageList) {
		this.languageList = languageList;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [countryImagePath = "+countryImagePath+", countryName = "+countryName+", countryImageAltText = "+countryImageAltText+", LanguageList = "+languageList+"]";
    }
}
		
