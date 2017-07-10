package com.eaton.platform.core.servlets;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

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
		List<Node> iconList = new ArrayList<Node>();
		Resource imageResource = resolver.getResource(CommonConstants.ICON_IMAGE_ROOT);
		try {
			if(imageResource != null){
				Node imageNode = imageResource.adaptTo(Node.class);
				NodeIterator allIcons = imageNode.getNodes();
				iconList = new ArrayList<Node>();
				while (allIcons.hasNext()) {
					// add the icons images node names in the iconList
					iconList.add(allIcons.nextNode());
				}
	
				// Add icon path values to Graphic drop down!
				for (int index = 0; index < iconList.size(); index++) {
	
					// allocate memory to the Map instance
					valueMap = new ValueMapDecorator(new HashMap<String, Object>());
	
					// Specify the value and text values
					String dropDownValue = iconList.get(index).getPath();
					String dropDownText = iconList.get(index).getName();
	
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
		} catch (RepositoryException repositoryExcep) {
			LOG.error("Exception occured as repository is not accessible -",	repositoryExcep);
		}
	}
}