package com.eaton.platform.core.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
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
import org.osgi.service.cm.ConfigurationAdmin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.EmptyDataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;

/**
 * This servlet pre-populates the Image Transformation Content Id drop-down field
 * author - TCS.
 */
@SlingServlet(resourceTypes = "/ecom/content/imageTransform", metatype = false)

public class ImageTranformDropDownServlet extends SlingSafeMethodsServlet {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(BCContentIdDropDownServlet.class);
	
	/** The admin service. */
	@Reference
	AdminService adminService;
	
	/**  Service to get OSGi configurations. */
    @Reference
    private ConfigurationAdmin configAdmin;
    
    /** The Constant NAME_PROPERTY. */
    private static final String NAME_PROPERTY = "name";
    
    /** The Constant CONFIG_PATH. */
    private static final String CONFIG_PATH = "/apps/system/config";
		
	/* (non-Javadoc)
	 * @see org.apache.sling.api.servlets.SlingSafeMethodsServlet#doGet(org.apache.sling.api.SlingHttpServletRequest, org.apache.sling.api.SlingHttpServletResponse)
	 */
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.debug("ImageTranformDropDownServlet :: doGet() :: Start");
		// get admin resource resolver to resolve resource under /etc/cloudservices
		ResourceResolver adminResourceResolver = adminService.getReadService();
		// set fallback
		request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());
		List<Resource> namedImageConfigList = new ArrayList<Resource>();
		// configuration resource
		Resource configRes = adminResourceResolver.getResource(CONFIG_PATH);
		if(null != configRes && configRes.hasChildren()){
			Iterator<Resource> configResItr = configRes.listChildren();
			if(null != configResItr){
				while(configResItr.hasNext()){
					Resource configItemRes = configResItr.next();
					if(null != configItemRes && configItemRes.getName().contains("com.adobe.acs.commons.images.impl.NamedImageTransformerImpl")){
						namedImageConfigList.add(configItemRes.getChild("jcr:content"));
					}
				}
			}
		}
		ValueMap vm = null;
		StringWriter writer = null;
		List<String> namePropList = new ArrayList<String>();
		for(Resource namedImageConfigRes : namedImageConfigList){
			writer = new StringWriter();
			vm = namedImageConfigRes.getValueMap();
			if(vm.containsKey("jcr:data")){
                InputStream stream = (InputStream) vm.get("jcr:data");
                IOUtils.copy(stream, writer, "UTF-8");
			}
			if(null != writer.toString()){
				String configContent = writer.toString();
				String nameProp = StringUtils.EMPTY;
				nameProp = StringUtils.substringAfter(configContent, "name=\"");
				nameProp = StringUtils.substringBefore(nameProp, "transforms=");
				nameProp = StringUtils.remove(nameProp, "\"");
				if(StringUtils.isNotBlank(nameProp)){
					namePropList.add(nameProp);
				}
			}
		}
		
		
		// Create an ArrayList to hold data
		List<Resource> dropdownList = new ArrayList<Resource>();

		ValueMap valueMap = null;
		if(!namePropList.isEmpty()){
			for(String item : namePropList){
				// allocate memory to the Map instance
				valueMap = new ValueMapDecorator(new HashMap<String, Object>());

				// Specify the value and text values
				String dropDownValue = item;
				String dropDownText = item;

				// populate the map
				valueMap.put(CommonConstants.VALUE, dropDownValue);
				valueMap.put(CommonConstants.TEXT, dropDownText);

				dropdownList.add(new ValueMapResource(adminResourceResolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
			}
			
			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(dropdownList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
		}
		LOG.debug("ImageTranformDropDownServlet :: doGet() :: Exit");
	}
	
}