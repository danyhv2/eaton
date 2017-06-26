package com.eaton.platform.core.services;

import java.util.List;

import javax.jcr.RepositoryException;

import org.apache.sling.api.resource.ResourceResolver;

import com.day.cq.wcm.api.Page;


public interface MegaMenuService  {
	
    public void setMenuOverlayPages(ResourceResolver resourceResolver,Page currentPage) throws RepositoryException;
    
    public List<String> getOverlay();
}
