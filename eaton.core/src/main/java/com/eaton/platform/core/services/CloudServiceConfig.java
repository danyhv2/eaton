/**
 * 
 */
package com.eaton.platform.core.services;

import java.util.List;

import com.day.cq.wcm.webservicesupport.Configuration;


public interface CloudServiceConfig {
	
	public Configuration getConfiguration();
	
	public String getConfigServiceStrProp(String propKey);
	
	public List<String> getConfigServiceListProp(String propKey);
}
