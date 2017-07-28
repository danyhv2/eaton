package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;
import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

/**
 * The Class Countrylist.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class Countrylist implements Serializable {
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1409656172706414691L;

    /** The countryname. */
    @JsonProperty(value="countryName")
    private String countryname;
    
    /** The countryimagepath. */
    @JsonProperty(value="countryImagePath")
    private String countryimagepath;
    
    /** The countryimagealttext. */
    @JsonProperty(value="countryImageAltText")
    private String countryimagealttext;
    
    /** The languagelist. */
    @JsonProperty(value="languageList")
    private List<Languagelist> languagelist;
    
    /**
     * Sets the countryname.
     *
     * @param countryname the new countryname
     */
    public void setCountryname(String countryname) {
         this.countryname = countryname;
     }
     
     /**
      * Gets the countryname.
      *
      * @return the countryname
      */
     public String getCountryname() {
         return countryname;
     }

    /**
     * Sets the countryimagepath.
     *
     * @param countryimagepath the new countryimagepath
     */
    public void setCountryimagepath(String countryimagepath) {
         this.countryimagepath = countryimagepath;
     }
     
     /**
      * Gets the countryimagepath.
      *
      * @return the countryimagepath
      */
     public String getCountryimagepath() {
         return countryimagepath;
     }

    /**
     * Sets the countryimagealttext.
     *
     * @param countryimagealttext the new countryimagealttext
     */
    public void setCountryimagealttext(String countryimagealttext) {
         this.countryimagealttext = countryimagealttext;
     }
     
     /**
      * Gets the countryimagealttext.
      *
      * @return the countryimagealttext
      */
     public String getCountryimagealttext() {
         return countryimagealttext;
     }
	
	/**
	 * Gets the languagelist.
	 *
	 * @return the languagelist
	 */
	public List<Languagelist> getLanguagelist() {
		return languagelist;
	}
	
	/**
	 * Sets the languagelist.
	 *
	 * @param languagelist the new languagelist
	 */
	public void setLanguagelist(List<Languagelist> languagelist) {
		this.languagelist = languagelist;
	}
}