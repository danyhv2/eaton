package com.eaton.platform.core.services;

public interface ConfigService {
	
	/**
     * Gets the property.
     * @param propertyName the property name
     * @return the property
     */
    public String getProperty(String propertyName);

    /**
     * Gets the property list.
     * @param propertyName the property name
     * @return the property list
     */
    public String[] getPropertyList(String propertyName);

}
