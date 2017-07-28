package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Countrylist implements Serializable {
	private static final long serialVersionUID = -1409656172706414691L;

    @JsonProperty(value="countryName")
    private String countryname;
    @JsonProperty(value="countryImagePath")
    private String countryimagepath;
    @JsonProperty(value="countryImageAltText")
    private String countryimagealttext;
    @JsonProperty(value="languageList")
    private List<Languagelist> languagelist;
    public void setCountryname(String countryname) {
         this.countryname = countryname;
     }
     public String getCountryname() {
         return countryname;
     }

    public void setCountryimagepath(String countryimagepath) {
         this.countryimagepath = countryimagepath;
     }
     public String getCountryimagepath() {
         return countryimagepath;
     }

    public void setCountryimagealttext(String countryimagealttext) {
         this.countryimagealttext = countryimagealttext;
     }
     public String getCountryimagealttext() {
         return countryimagealttext;
     }
	public List<Languagelist> getLanguagelist() {
		return languagelist;
	}
	public void setLanguagelist(List<Languagelist> languagelist) {
		this.languagelist = languagelist;
	}
}