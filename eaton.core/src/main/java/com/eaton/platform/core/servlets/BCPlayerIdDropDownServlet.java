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
import com.eaton.platform.core.models.sitemap.BCAccountBean;
import com.eaton.platform.core.models.sitemap.BCPlayerBean;
import com.eaton.platform.core.util.BrightcoveUtil;

/**
 * This servlet pre-populate the player id drop-down field
 * author - TCS
 */
@Component(immediate = true, description = "Brightcove Player Id Dropdown List")
@Service(value = javax.servlet.Servlet.class)
@Properties(value = {@Property(name = "sling.servlet.extensions", value = {"json"}),
        @Property(name = "sling.servlet.methods", value = {"GET"}),
        @Property(name = "sling.servlet.paths", value = {"/bin/dropdown/bcplayeridlist"})})
public class BCPlayerIdDropDownServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(BCPlayerIdDropDownServlet.class);
	
	@Reference
	ConfigurationManagerFactory configManagerFctry;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		LOG.debug("******** BCPlayerIdDropDownServlet servlet execution started ***********");
		//local variables
		Resource brightcoveconfigJCRResource = null;
		ResourceResolver resolver = request.getResource().getResourceResolver();
		// get refererURL from request since current page is not available in fixed path servelts
		String refererURL = BrightcoveUtil.getRefererURL(request);
		//get content path
		String resourcePath = BrightcoveUtil.getContentPath(resolver, refererURL);
		Resource currentPageRes = resolver.resolve(resourcePath);
		brightcoveconfigJCRResource = BrightcoveUtil.getBCConfigJcrResource(configManagerFctry,
										 resolver, currentPageRes);
		// invoke getBCAccounts method to get account details
		List<BCAccountBean> bcAcctBeanList = BrightcoveUtil.getBCAccounts(brightcoveconfigJCRResource);
		// Create an ArrayList to hold data
		List<Resource> bcPlayerList = new ArrayList<Resource>();
		
		List<BCPlayerBean> bcPlayerBeanList = null;

		ValueMap valueMap = null;
		if(null != brightcoveconfigJCRResource){
				
			// Add Brightcove account details to Graphic drop down!
			for (BCAccountBean bcAccountBean : bcAcctBeanList) {

				bcPlayerBeanList = bcAccountBean.getPlayerDetails();
				for(BCPlayerBean bcPlayerBean : bcPlayerBeanList){
					// allocate memory to the Map instance
					valueMap = new ValueMapDecorator(new HashMap<String, Object>());

					// Specify the value and text values
					String dropDownValue = bcPlayerBean.getPlayerId();
					String dropDownText = bcPlayerBean.getPlayerName();

					// populate the map
					valueMap.put(CommonConstants.VALUE, dropDownValue);
					valueMap.put(CommonConstants.TEXT, dropDownText);

					bcPlayerList.add(new ValueMapResource(resolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
				}
				
			}

			// Create a DataSource that is used to populate the drop-down control
			DataSource dataSource = new SimpleDataSource(bcPlayerList.iterator());
			request.setAttribute(DataSource.class.getName(), dataSource);
			
			LOG.debug("******** BCContentIdDropDownServlet servlet execution ended ***********");
		}
	}
}