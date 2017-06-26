package com.eaton.platform.core.services.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationManager;
import com.eaton.platform.core.services.CloudServiceConfig;
import com.eaton.platform.core.util.CommonUtil;

public class CloudServiceConfigImpl implements CloudServiceConfig{
    /** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(CloudServiceConfigImpl.class);
    /** The Constant CLOUD_SERVICE_CONFIG_PROP. */
    private static final String CLOUD_SERVICE_CONFIG_PROP = "cq:cloudserviceconfigs";
    /** The Constant EMPTY_ARRAY. */
    private static final String[] EMPTY_ARRAY = new String[0];
    /** The config obj. */
    Configuration configObj;

    
    @SuppressWarnings("unused")
    private CloudServiceConfigImpl() {
        LOGGER.debug("Entered into CloudServiceConfig method");
        // Remove default initialization functionality by creating default constructor
        LOGGER.debug("Exited from CloudServiceConfig method");
    }

    /**
     * Instantiates a new  cloud service config.
     * @param resolver the resolver
     * @param sling the sling
     * @param inheritedPageProp the inherited page prop
     * @param serviceName the service name
     */
    public CloudServiceConfigImpl(SlingScriptHelper sling, InheritanceValueMap inheritedPageProp, String serviceName) {
        LOGGER.debug("Entered into CloudServiceConfig method");
        LOGGER.debug("inheritedPageProp - " + inheritedPageProp);
        String[] services =
                CommonUtil.getStringArrayInheritedProperty(inheritedPageProp, CLOUD_SERVICE_CONFIG_PROP);
        if (services != null) {
            LOGGER.debug("Connected to " + serviceName);
            ConfigurationManager configManager = sling.getService(ConfigurationManager.class);
            configObj = configManager.getConfiguration(serviceName, services);
        } else {
            LOGGER.warn("Could not able to connect " + serviceName);
        }
        LOGGER.debug("Exited from CloudServiceConfig method");
    }

    /**
     * Gets the config service str prop.
     * @param propKey the prop key
     * @return the config service str prop
     */
    public String getConfigServiceStrProp(String propKey) {
        LOGGER.debug("Entered into getConfigServiceStrProp method");
        String retVal = StringUtils.EMPTY;
        if (configObj != null) {
            retVal = configObj.getInherited(propKey, StringUtils.EMPTY);
        }
        LOGGER.debug("Exited from getConfigServiceStrProp method");
        return retVal;
    }

    /**
     * Gets the config service list prop.
     * @param propKey the prop key
     * @return the config service list prop
     */
    public List<String> getConfigServiceListProp(String propKey) {
        LOGGER.debug("Entered into getConfigServiceListProp method");
        List<String> retVal = new ArrayList<String>();
        if (configObj != null) {
            String[] strArrVal = configObj.getInherited(propKey, EMPTY_ARRAY);
            retVal = Arrays.asList(strArrVal);
        }
        LOGGER.debug("Exited from getConfigServiceListProp method");
        return retVal;
    }

    /**
     * Gets the configuration.
     * @return the configuration
     */
    public Configuration getConfiguration() {
        return configObj;
    }
}
