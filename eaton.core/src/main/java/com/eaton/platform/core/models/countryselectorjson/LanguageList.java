package com.eaton.platform.core.models.countryselectorjson;

/**
 * This class is for Language List.
 * @author TCS
 *
 */
public class LanguageList
{
    private String languagePath;

    private String languageName;

    public String getLanguagePath ()
    {
        return languagePath;
    }

    public void setLanguagePath (String languagePath)
    {
        this.languagePath = languagePath;
    }

    public String getLanguageName ()
    {
        return languageName;
    }

    public void setLanguageName (String languageName)
    {
        this.languageName = languageName;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [languagePath = "+languagePath+", languageName = "+languageName+"]";
    }
}
