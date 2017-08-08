package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

/**
 * The Class Languagelist.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class Languagelist implements Serializable {
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = -1409656172706414693L;

    /** The languagename. */
    @JsonProperty(value="languageName")
    private String languagename;
    
    /** The languagepath. */
    @JsonProperty(value="languagePath")
    private String languagepath;
    
    /**
     * Sets the languagename.
     *
     * @param languagename the new languagename
     */
    public void setLanguagename(String languagename) {
         this.languagename = languagename;
     }
     
     /**
      * Gets the languagename.
      *
      * @return the languagename
      */
     public String getLanguagename() {
         return languagename;
     }

    /**
     * Sets the languagepath.
     *
     * @param languagepath the new languagepath
     */
    public void setLanguagepath(String languagepath) {
         this.languagepath = languagepath;
     }
     
     /**
      * Gets the languagepath.
      *
      * @return the languagepath
      */
     public String getLanguagepath() {
         return languagepath;
     }

}