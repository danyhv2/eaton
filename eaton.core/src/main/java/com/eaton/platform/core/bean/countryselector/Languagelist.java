package com.eaton.platform.core.bean.countryselector;
import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown=true)
public class Languagelist implements Serializable {
	private static final long serialVersionUID = -1409656172706414693L;

    @JsonProperty(value="languageName")
    private String languagename;
    @JsonProperty(value="languagePath")
    private String languagepath;
    public void setLanguagename(String languagename) {
         this.languagename = languagename;
     }
     public String getLanguagename() {
         return languagename;
     }

    public void setLanguagepath(String languagepath) {
         this.languagepath = languagepath;
     }
     public String getLanguagepath() {
         return languagepath;
     }

}