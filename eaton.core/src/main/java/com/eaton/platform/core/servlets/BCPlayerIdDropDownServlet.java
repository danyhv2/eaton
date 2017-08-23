package com.eaton.platform.core.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
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
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.BCAccountBean;
import com.eaton.platform.core.models.BCPlayerBean;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.BrightcoveUtil;
import com.eaton.platform.core.util.CommonUtil;

/**
 * This servlet pre-populate the player id drop-down field
 * author - TCS.
 */
@Component(immediate = true, description = "Brightcove Player Id Dropdown List")
@Service(value = javax.servlet.Servlet.class)
@Properties(value = {@Property(name = "sling.servlet.extensions", value = {"json"}),
        @Property(name = "sling.servlet.methods", value = {"GET"}),
        @Property(name = "sling.servlet.paths", value = {"/ecom/dropdown/bcplayeridlist"})})
public class BCPlayerIdDropDownServlet extends SlingSafeMethodsServlet {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(BCPlayerIdDropDownServlet.class);
	
	/** The config manager fctry. */
	// ConfigurationManagerFactory reference
	@Reference
	ConfigurationManagerFactory configManagerFctry;
	
	/** The admin service. */
	// AdminService reference
	@Reference
	AdminService adminService;

	/* (non-Javadoc)
	 * @see org.apache.sling.api.servlets.SlingSafeMethodsServlet#doGet(org.apache.sling.api.SlingHttpServletRequest, org.apache.sling.api.SlingHttpServletResponse)
	 */
	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.debug("BCPlayerIdDropDownServlet :: doGet() :: Start");
		//local variables
		Resource brightcoveConfigRes = null;
		// get admin resource resolver to resolve resource under /etc/cloudservices
		ResourceResolver adminResourceResolver = adminService.getReadService();
		// get refererURL from request since current page is not available in fixed path servelts
		String refererURL = CommonUtil.getRefererURL(request);
		//get content path
		String resourcePath = CommonUtil.getContentPath(adminResourceResolver, refererURL);
		Resource currentPageRes = adminResourceResolver.resolve(resourcePath);
		brightcoveConfigRes = BrightcoveUtil.getBCConfigResource(configManagerFctry,
				adminResourceResolver, currentPageRes);
		// invoke getBCAccounts method to get account details
		BCAccountBean bcAcctBean = BrightcoveUtil.getBCAccounts(brightcoveConfigRes);
		// Create an ArrayList to hold data
		List<Resource> bcPlayerList = new ArrayList<Resource>();
		
		List<BCPlayerBean> bcPlayerBeanList = null;

		if(null != brightcoveConfigRes){
				
			bcPlayerBeanList = bcAcctBean.getPlayerDetails();
			for(BCPlayerBean bcPlayerBean : bcPlayerBeanList){
				// allocate memory to the Map instance
				ValueMap valueMap = new ValueMapDecorator(new HashMap<String, Object>());

				// Specify the value and text values
				String dropDownValue = bcPlayerBean.getPlayerId();
				String dropDownText = bcPlayerBean.getPlayerName();

				// populate the map
				valueMap.put(CommonConstants.VALUE, dropDownValue);
				valueMap.put(CommonConstants.TEXT, dropDownText);

				bcPlayerList.add(new ValueMapResource(adminResourceResolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
			}
				
			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(bcPlayerList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
		}
		LOG.debug("BCPlayerIdDropDownServlet :: doGet() :: Exit");
	}
}