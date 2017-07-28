package com.eaton.platform.core.services;

import com.eaton.platform.core.bean.ConfigServiceBean;

public interface EatonConfigService {
	
    public static final String COUNTRYSELECTOR_FOLDER_PATH = "countryselector.folder.path";
    public static final String LOV_ICON_LIST_PATH_ARRAY = "lov.icon.list.path";
    
    public ConfigServiceBean getConfigServiceBean();
}
