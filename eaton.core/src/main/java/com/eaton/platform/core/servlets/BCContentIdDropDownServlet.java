package com.eaton.platform.core.servlets;

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
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.BCAccountBean;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.BrightcoveUtil;

/**
 * This servlet pre-populates the Brightcove Content Id drop-down field
 * author - TCS
 */
@SlingServlet(resourceTypes = "/bin/dropdown/bccontentid", metatype = false)

public class BCContentIdDropDownServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(BCContentIdDropDownServlet.class);
	
	// ConfigurationManagerFactory reference
	@Reference
	ConfigurationManagerFactory configManagerFctry;
	
	// AdminService reference
	@Reference
	AdminService adminService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.debug("******** BCContentIdDropDownServlet servlet execution started ***********");
		//local variables
		Resource brightcoveConfigRes = null;
		// set fallback
		request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());
		// get admin resource resolver to resolve resource under /etc/cloudservices
		ResourceResolver adminResourceResolver = adminService.getReadService();
		// get refererURL from request since current page is not available in fixed path servelts
		String refererURL = BrightcoveUtil.getRefererURL(request);
		//get content path
		String resourcePath = BrightcoveUtil.getContentPath(adminResourceResolver, refererURL);
		Resource currentPageRes = adminResourceResolver.resolve(resourcePath);
		brightcoveConfigRes = BrightcoveUtil.getBCConfigResource(configManagerFctry,
				adminResourceResolver, currentPageRes);
		
		// invoke getBCAccounts method to get account details
		BCAccountBean bcAcctBean = BrightcoveUtil.getBCAccounts(brightcoveConfigRes);
		
		// Create an ArrayList to hold data
		List<Resource> bcAcctList = new ArrayList<Resource>();

		ValueMap valueMap = null;
		if(null != brightcoveConfigRes){
				
				// allocate memory to the Map instance
				valueMap = new ValueMapDecorator(new HashMap<String, Object>());

				// Specify the value and text values
				String dropDownValue = bcAcctBean.getAccNumber();
				String dropDownText = bcAcctBean.getAccName();

				// populate the map
				valueMap.put(CommonConstants.VALUE, dropDownValue);
				valueMap.put(CommonConstants.TEXT, dropDownText);

				bcAcctList.add(new ValueMapResource(adminResourceResolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));

			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(bcAcctList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
		}
		
		LOG.debug("******** BCContentIdDropDownServlet servlet execution ended ***********");
	}

	
}