package com.eaton.platform.integration.pim.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.EmptyDataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.cq.commons.jcr.JcrConstants;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.CommonUtil;
import com.eaton.platform.integration.pim.bean.GlobalAttrModel;

/**
 * This servlet pre-populates the Image Transformation Content Id drop-down field
 * author - TCS
 */

@SlingServlet(resourceTypes = "/eaton/content/skucardattributes", metatype = false)

public class SKUCardDropDownServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(SKUCardDropDownServlet.class);
	
	// AdminService reference
	@Reference
	AdminService adminService;
	
	/** The global attr import path. */
	private final static String GLOBAL_ATTR_IMPORT_PATH = "/etc/commerce/pdh/global-attributes";
	
	/** The Constant GLOBAL_ATTR_NAME. */
	private final static String GLOBAL_ATTR_NAME = "attributeName";
	
	/** The Constant GLOBAL_ATTR_DISPLAY_NAME. */
	private final static String GLOBAL_ATTR_DISPLAY_NAME = "attributeDisplayName";
	
    /** The Global list page path list. */
    List<String> GlobalListPagePathList = new ArrayList<String>();
		
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.info("******** SKUCardDropDownServlet execution started ***********");
		// Create an ArrayList to hold data
		List<Resource> dropdownList = new ArrayList<Resource>();
		ValueMap valueMap = null;
		
		ResourceResolver adminResourceResolver = adminService.getReadService();
		Resource globalAttributeResource = adminResourceResolver.getResource(GLOBAL_ATTR_IMPORT_PATH);
		
		// set fallback
		request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());
			
		if(globalAttributeResource != null){
			Iterator<Resource> resourceList = globalAttributeResource.listChildren();
		
			while(resourceList.hasNext()){
				Resource resourceItem = resourceList.next();
				GlobalAttrModel item = resourceItem.adaptTo(GlobalAttrModel.class);
				
				// allocate memory to the Map instance
				valueMap = new ValueMapDecorator(new HashMap<String, Object>());
				
				// populate the map
				valueMap.put(CommonConstants.VALUE, CommonUtil.getStringProperty(resourceItem.getValueMap(), GLOBAL_ATTR_NAME));
				valueMap.put(CommonConstants.TEXT, CommonUtil.getStringProperty(resourceItem.getValueMap(), GLOBAL_ATTR_DISPLAY_NAME));
		
				dropdownList.add(new ValueMapResource(adminResourceResolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
			}
			
		}
			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(dropdownList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
		LOG.info("******** SKUCardDropDownServlet execution ended ***********");
	}

}