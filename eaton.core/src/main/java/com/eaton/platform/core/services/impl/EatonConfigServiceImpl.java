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
        	description = "Icon LOVs List Path", name = "lov.icon.list.path", value = {}),
        @Property(unbounded = PropertyUnbounded.ARRAY, name = "linklist.dropdown.option", label = "Link List View Option", value = "", description="This defines text and value of view as dropdown option"),
        @Property(label="Number Of Days To Publish", name =  "number.of.days.publish", value = ""),
        @Property(unbounded = PropertyUnbounded.ARRAY, label = "Middle Tab list path",description = "Middle Tab list path", name = "middle.tab.config", value = {})
		})
public class EatonConfigServiceImpl implements EatonConfigService {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(EatonConfigServiceImpl.class);

	/** The service reference. */
    ConfigServiceBean configServiceBean;

    /**
     * Activate.
     *
     * @param props the props
     * @throws Exception the exception
     */
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

    /**
     * Initialize configurations.
     *
     * @param properties the properties
     */
    private void initializeConfigurations(Map<String, Object> properties) {
    	LOGGER.debug("EatonConfigServiceImpl :: initializeConfigurations() :: Start");
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
        if (properties.containsKey(DROPDOWN_OPTION_SELECT)) {
            String[] dropDownNameArray = PropertiesUtil.toStringArray(properties.get(DROPDOWN_OPTION_SELECT));
            List<String> dropDownName = CommonUtil.getListFromStringArray(dropDownNameArray);
            this.configServiceBean.setLinkListViews(dropDownName);
        }
        if (properties.containsKey(ICONLIST_PROOFPOINT_SYMBOLS)) {
            String[] proofPointSymbolsArray = PropertiesUtil.toStringArray(properties.get(ICONLIST_PROOFPOINT_SYMBOLS));
            List<String> proofPointSymbols = CommonUtil.getListFromStringArray(proofPointSymbolsArray);
            this.configServiceBean.setProofPointSymbols(proofPointSymbols);;
        }
        if (properties.containsKey(NUMBER_OF_DAYS_TO_PUBLISH)) {
            String numberOfDaysToPublish =
                    PropertiesUtil.toString(properties.get(NUMBER_OF_DAYS_TO_PUBLISH), "");
            this.configServiceBean.setNumofDaysToPublish(numberOfDaysToPublish);
        }
        if(properties.containsKey(MIDDLE_TAB_PATH_ARRAY)){
        	String[] middleTabListPathArray =  PropertiesUtil.toStringArray(properties.get(MIDDLE_TAB_PATH_ARRAY));
        	 List<String> middleTabList = CommonUtil.getListFromStringArray(middleTabListPathArray);
        	this.configServiceBean.setMiddleTabListPagePathList(middleTabList);        	
        }
        LOGGER.debug("EatonConfigServiceImpl :: initializeConfigurations() :: Exit");
	}

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.services.EatonConfigService#getConfigServiceBean()
	 */
	public ConfigServiceBean getConfigServiceBean() {
		return configServiceBean;
	}
    
}
