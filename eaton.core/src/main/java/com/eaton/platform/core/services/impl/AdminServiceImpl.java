package com.eaton.platform.core.services.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Deactivate;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.framework.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;

/**
 * <html> Description: This class is used to get the user session.
 * We have to create the user  name with "readService"  & "writeService"  </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */


@Component(metatype = false, immediate = true, enabled = true)
@Service
@Properties({@Property(name = Constants.SERVICE_DESCRIPTION, value = "Admin Service"),
        @Property(name = Constants.SERVICE_VENDOR, value = "Eaton"),
        @Property(name = "process.label", value = "AdminServiceImpl")})


public class AdminServiceImpl implements AdminService {
	
	
	private static final Logger LOG = LoggerFactory.getLogger(AdminServiceImpl.class);
    
    
    private Map<String, Object> param = new HashMap<String, Object>();
    /** The resolver factory. */
    @Reference(policy = ReferencePolicy.STATIC)
    protected ResourceResolverFactory resolverFactory;
    
    ResourceResolver adminReadResourceResolver;
    ResourceResolver adminWriteResourceResolver;
    
    /**
     * Called when the Scheduler is activated/updated.
     * @param componentContext ComponentContext
     * @throws Exception Exception
     */
    @Activate
    protected final void activate(final Map<String, Object> properties) throws Exception {
    	LOG.info("******** activate *********4**");
        Map<String, Object> readParam = new HashMap<String, Object>();
	    readParam.put(ResourceResolverFactory.SUBSERVICE, CommonConstants.RESOURCE_RESOLVER_READ_SERVICE);
	    this.adminReadResourceResolver = resolverFactory.getServiceResourceResolver(readParam);
	    
	    Map<String, Object> writeParam = new HashMap<String, Object>();
	    writeParam.put(ResourceResolverFactory.SUBSERVICE, CommonConstants.RESOURCE_RESOLVER_WRITE_SERVICE);
	    this.adminWriteResourceResolver = resolverFactory.getServiceResourceResolver(writeParam);
	     
    }
    
    @Deactivate
    protected void deactivate() {
    	if (this.adminReadResourceResolver != null && this.adminReadResourceResolver.isLive()) {
			this.adminReadResourceResolver.close();
			this.adminReadResourceResolver = null;
		}
    	
    	if (this.adminWriteResourceResolver != null && this.adminWriteResourceResolver.isLive()) {
			this.adminWriteResourceResolver.close();
			this.adminWriteResourceResolver = null;
		}
    }


    @Override
	public ResourceResolver getReadService() {
		LOG.info("******** ReadService Start ***********");
		param.put(ResourceResolverFactory.SUBSERVICE, CommonConstants.RESOURCE_RESOLVER_READ_SERVICE);
		
		try {
			if(this.adminReadResourceResolver == null) {
				this.adminReadResourceResolver = resolverFactory.getServiceResourceResolver(param);
			}
		} catch (LoginException exception) {
			LOG.error("Exception occured while getting the reader service", exception.getMessage());
		}
		return this.adminReadResourceResolver;
	}

	@Override
	public ResourceResolver getWriteService() {
		LOG.info("******** WriteService Start ***********");
		param.put(ResourceResolverFactory.SUBSERVICE, CommonConstants.RESOURCE_RESOLVER_WRITE_SERVICE);
		try {
			if(this.adminWriteResourceResolver == null) {
				this.adminWriteResourceResolver = resolverFactory.getServiceResourceResolver(param);
			}
		} catch (LoginException exception) {
			LOG.error("Exception occured while getting the write service", exception.getMessage());
		}
		
		return this.adminWriteResourceResolver;
	}

}
