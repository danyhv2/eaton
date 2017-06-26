package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.query.Query;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.LanguageUtil;
import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.MegaMenuService;

/**
 * <html> Description: This class is used to links the overlay pages for manual and child pages navigation dynamically
 * result overlaypage display on presentation layer for navigation pages</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
@Component(immediate= true)
@Service


public class MegaMenuHelper implements MegaMenuService  {

	private static final Logger LOG = LoggerFactory.getLogger(MegaMenuHelper.class); 
	Page child = null;
	String overlay = null;
	String root = null;
	String roothPath = null;
	List<String> list =null;
	
	
	/**
	 * this method return list of the mega menu overlay based on author selection on type of list
	 * 
	 * @param resResolver
	 * @param pageManager
	 * @throws RepositoryException 
	 * @throws LoginException 
	 */
	@Override
	public void setMenuOverlayPages(ResourceResolver resourceResolver,Page currentPage) throws RepositoryException {


		roothPath = LanguageUtil.getLanguageRoot(currentPage.getPath());
		
		Resource primaryNavResource = resourceResolver.resolve(roothPath+ CommonConstants.PRIMARY_NAV_PATH);


		if (primaryNavResource.getValueMap().get("listType").toString().equals(CommonConstants.MANUAL_LIST)) {
			LOG.info("----manual---");
			Resource rr1 = resourceResolver.resolve(roothPath+ CommonConstants.PRIMARY_NAV_PATH+"/manualLinks");
			Node relativeNode = rr1.adaptTo(Node.class);

			NodeIterator itemNodes = relativeNode.getNodes();
			list = new ArrayList<String>();
			while (itemNodes.hasNext()) {

				Node itemNode = itemNodes.nextNode();
				if (itemNode.hasProperty("transLinkTitle")) {

					root = itemNode.getProperty("transLinkTitle").getString();

				}
				if (itemNode.hasProperty("overlayPath")) {

					overlay = itemNode.getProperty("overlayPath").getString()+ CommonConstants.OVERLAY_NAV_PATH;

				}
				LOG.info(root);
				LOG.info(overlay);
				
				list.add(root.replaceAll("\\s","")+","+overlay);
			}
		} else {
			LOG.info("----childpage---");
			Page navRootPage = currentPage.getAbsoluteParent(3);
			Iterator<Page> children = navRootPage.listChildren();
			list = new ArrayList<String>();

			while (children.hasNext()) {
				child = children.next();
				String queryNav = CommonConstants.QUERY_BASE+roothPath+ "/"+child.getName() + CommonConstants.QUERY_HIDEIN;
				Iterator<Resource> resultNav = resourceResolver
						.findResources(queryNav, Query.JCR_SQL2);

				if (resultNav.hasNext()) {
				} else {
					List<String> nodes = new ArrayList<String>();
					String query = CommonConstants.QUERY_BASE+roothPath+"/eaton-overlays]) and nodes.titlePath='"+roothPath+"/"+child.getName() + "'";
					Iterator<Resource> result = resourceResolver.findResources(
							query, Query.JCR_SQL2);

					while (result.hasNext()) {

						Node relativeNode = result.next().adaptTo(Node.class);

						String[] parts = relativeNode.getPath().split(CommonConstants.JCR_CONTENT);
						String query1 = CommonConstants.QUERY_BASE+ parts[0] +CommonConstants.QUERY_HIDEIN ;
						Iterator<Resource> result1 = resourceResolver
								.findResources(query1, Query.JCR_SQL2);

						if (result1.hasNext()) {
						} else {
							nodes.add(relativeNode.getPath());
							overlay = nodes.get(0);

						}
					}
					root = child.getName();
					list.add(root+","+overlay);
				}
			}
		}
	}
		
	public List<String> getOverlay(){
		return list;
	}
	
}
