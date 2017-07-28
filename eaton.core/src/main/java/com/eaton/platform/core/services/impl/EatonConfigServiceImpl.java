package com.eaton.platform.core.services.impl;

import java.util.List;
import java.util.Map;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Deactivate;
import org.apache.felix.scr.annotations.Modified;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.PropertyUnbounded;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.commons.osgi.PropertiesUtil;
import org.osgi.framework.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.ConfigServiceBean;
import com.eaton.platform.core.services.EatonConfigService;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class ConfigServiceImpl.
 */
@Component(metatype = false, immediate = true, enabled = true)
@Service
@Properties({
		@Property(name = Constants.SERVICE_DESCRIPTION, value = " Config Properties"),
        @Property(name = Constants.SERVICE_VENDOR, value = ""),
        @Property(name = "process.label", value = "EatonConfigServiceImpl"),
        @Property(label="Country Selector Folder Path", name = "countryselector.folder.path", value = ""),
        @Property(unbounded = PropertyUnbounded.ARRAY, label = "LOV Icon List path",
        	description = "Icon LOVs List Path", name = "lov.icon.list.path", value = {})
		})

public class EatonConfigServiceImpl implements EatonConfigService {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(EatonConfigServiceImpl.class);

	/** The service reference. */
    ConfigServiceBean configServiceBean;

    @Activate
    protected final void activate(final Map<String, Object> props) throws Exception {
        this.configServiceBean = new ConfigServiceBean();
        initializeConfigurations(props);
    }
    
    /**
     * Update.
     * @param props the props
     */
    @Modified
    protected void update(final Map<String, Object> props) {
        this.configServiceBean = new ConfigServiceBean();
        initializeConfigurations(props);
    }

	/**
     * Deactivate.
     */
    @Deactivate
    protected void deactivate() {
        this.configServiceBean = null;
    }

    private void initializeConfigurations(Map<String, Object> properties) {
    	LOGGER.debug("Entered into initializeConfigurations method");
        if (properties.containsKey(COUNTRYSELECTOR_FOLDER_PATH)) {
            String countrySelectorFolderPath =
                    PropertiesUtil.toString(properties.get(COUNTRYSELECTOR_FOLDER_PATH), "");
            this.configServiceBean.setCountryselectorFolderPath(countrySelectorFolderPath);
        }
        if (properties.containsKey(LOV_ICON_LIST_PATH_ARRAY)) {
            String[] lovIconListPathArray =
                    PropertiesUtil.toStringArray(properties.get(LOV_ICON_LIST_PATH_ARRAY));            
            List<String> lovIconListPath = CommonUtil.getListFromStringArray(lovIconListPathArray);
            this.configServiceBean.setLovIconListPagePathList(lovIconListPath);
        }
		
	}

	public ConfigServiceBean getConfigServiceBean() {
		return configServiceBean;
	}
    
}
