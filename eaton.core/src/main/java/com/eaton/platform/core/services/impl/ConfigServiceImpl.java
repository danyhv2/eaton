package com.eaton.platform.core.services.impl;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import org.osgi.framework.Constants;
import org.osgi.framework.ServiceReference;
import org.osgi.service.component.ComponentContext;

import com.eaton.platform.core.services.ConfigService;

/**
 * The Class ConfigServiceImpl.
 */
@Component(metatype = false, immediate = true, enabled = true)
@Service
@Properties({@Property(name = Constants.SERVICE_DESCRIPTION, value = " Config Properties"),
        @Property(name = Constants.SERVICE_VENDOR, value = ""),
        @Property(name = "process.label", value = "ConfigServiceImpl")})

public class ConfigServiceImpl implements ConfigService {

	/** The service reference. */
    ServiceReference serviceReference = null;

    @Activate
    protected final void activate(final ComponentContext componentContext) throws Exception {
        serviceReference = componentContext.getBundleContext().getServiceReference(ConfigService.class.getName());
    }

    @Override
    public String getProperty(String propertyName) {
        Object val = serviceReference.getProperty(propertyName);
        return val == null ? "" : (String) val;
    }

    @Override
    public String[] getPropertyList(String propertyName) {
        Object val = serviceReference.getProperty(propertyName);
        return (String[]) (val == null ? "" : (String[]) val);
    }

}
