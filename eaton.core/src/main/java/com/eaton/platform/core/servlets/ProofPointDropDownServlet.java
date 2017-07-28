package com.eaton.platform.core.servlets;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang.StringUtils;
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
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.eaton.platform.core.constants.CommonConstants;

/**
 * This servlet pre-populate the drop-down field,Graphic with a list of icon images 
 * author - TCS
 */
@SlingServlet(resourceTypes = "/bin/dropdown/icons", metatype = false)
public class ProofPointDropDownServlet extends SlingSafeMethodsServlet {

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(ProofPointDropDownServlet.class);

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {

		LOG.debug("******** ProofPointDropDownServlet servlet execution started ***********");
		// set fallback
		request.setAttribute(DataSource.class.getName(), EmptyDataSource.instance());
		ResourceResolver resolver = request.getResource().getResourceResolver();

		// Create an ArrayList to hold data
		List<Resource> iconsResourceList = new ArrayList<Resource>();

		ValueMap valueMap = null;
		List<Resource> iconList = new ArrayList<Resource>();
		Resource imageResource = resolver.getResource(CommonConstants.ICON_IMAGE_ROOT);
			if(imageResource != null){
				Iterator<Resource> allIcons = imageResource.listChildren();
				iconList = new ArrayList<Resource>();
				while (allIcons.hasNext()) {
					// add the icons images node names in the iconList
					iconList.add(allIcons.next());
				}
	
				// Add icon path values to Graphic drop down!
				for (Resource iconResource : iconList) {
	
					// allocate memory to the Map instance
					valueMap = new ValueMapDecorator(new HashMap<String, Object>());
	
					// Specify the value and text values
					String dropDownValue = iconResource.getPath();
					String dropDownText = StringUtils.EMPTY;
					
					Asset iconAsset = iconResource.adaptTo(Asset.class);
					if(iconAsset.getMetadata().containsKey(DamConstants.DC_TITLE))
						dropDownText = iconAsset.getMetadataValue(DamConstants.DC_TITLE);
					else
						dropDownText = iconResource.getName();
	
					// populate the map
					valueMap.put(CommonConstants.VALUE, dropDownValue);
					valueMap.put(CommonConstants.TEXT, dropDownText);
	
					iconsResourceList.add(new ValueMapResource(resolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
				}
	
				// Create a DataSource that is used to populate the drop-down control
				DataSource dataSource = new SimpleDataSource(iconsResourceList.iterator());
				request.setAttribute(DataSource.class.getName(), dataSource);

				LOG.debug("******** ProofPointDropDownServlet servlet execution ended ***********");
			}
	}
}