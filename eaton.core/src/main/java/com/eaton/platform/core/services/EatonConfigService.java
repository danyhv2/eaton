package com.eaton.platform.core.services;

import com.eaton.platform.core.bean.ConfigServiceBean;

/**
 * The Interface EatonConfigService.
 */
public interface EatonConfigService {
	
    /** The Constant COUNTRYSELECTOR_FOLDER_PATH. */
    public static final String COUNTRYSELECTOR_FOLDER_PATH = "countryselector.folder.path";
    
    /** The Constant LOV_ICON_LIST_PATH_ARRAY. */
    public static final String LOV_ICON_LIST_PATH_ARRAY = "lov.icon.list.path";
    
    /**
     * Gets the config service bean.
     *
     * @return the config service bean
     */
    public ConfigServiceBean getConfigServiceBean();
}
