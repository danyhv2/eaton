package com.eaton.platform.integration.pim.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.osgi.service.cm.ConfigurationAdmin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.EmptyDataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.cq.commons.jcr.JcrConstants;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.services.EatonConfigService;

/**
 * This servlet pre-populates the Middle tab drop-down field
 * author - TCS
 */


@SlingServlet(resourceTypes = "/eaton/content/middletab", metatype = false)

public class MiddletabDropDownServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(MiddletabDropDownServlet.class);
	
	/** The admin service. */
	@Reference
	AdminService adminService;
	
	/** Service to get OSGi configurations */
    @Reference
    private ConfigurationAdmin configAdmin;
    
    /** The eaton config service. */
    @Reference
	EatonConfigService eatonConfigService;
    
    /** The middle tab list page path list. */
    List<String> middleTabListPagePathList = new ArrayList<String>();
    
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.info("******** MiddletabDropDownServlet execution started ***********");
		// Create an ArrayList to hold data
		List<Resource> dropdownList = new ArrayList<Resource>();
		ValueMap valueMap = null;

		middleTabListPagePathList = eatonConfigService.getConfigServiceBean().getMiddleTabListPagePathList();

		// set fallback
		request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());
		
		if(null != middleTabListPagePathList){
			for (String element : middleTabListPagePathList) {
				// allocate memory to the Map instance
				valueMap = new ValueMapDecorator(new HashMap<String, Object>());
			
				// populate the map
				valueMap.put(CommonConstants.VALUE, element);
				valueMap.put(CommonConstants.TEXT, element);

				dropdownList.add(new ValueMapResource(null, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
				}
		}
	
			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(dropdownList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
		LOG.info("******** MiddletabDropDownServlet execution ended ***********");
	}

}