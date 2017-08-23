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
	
	/** The Constant DROPDOWN_OPTION_SELECT. */
    public static final String DROPDOWN_OPTION_SELECT = "linklist.dropdown.option";
    
    /** The Constant NUMBER_OF_DAYS_TO_PUBLISH. */
    public static final String NUMBER_OF_DAYS_TO_PUBLISH = "number.of.days.publish";
    
    /** The Constant MIDDLE_TAB_PATH_ARRAY. */
    public static final String MIDDLE_TAB_PATH_ARRAY = "middle.tab.config";

    /** The Constant ICONLIST_PROOFPOINT_SYMBOLS. */
    public static final String ICONLIST_PROOFPOINT_SYMBOLS = "iconlist.proofpoint.symbols";
    
    /**
     * Gets the config service bean.
     *
     * @return the config service bean
     */
    public ConfigServiceBean getConfigServiceBean();
}
