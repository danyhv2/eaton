package com.eaton.platform.core.services;

import org.apache.sling.api.resource.ResourceResolver;

public interface AdminService {
	
    public ResourceResolver getReadService();

    public ResourceResolver getWriteService();

}
