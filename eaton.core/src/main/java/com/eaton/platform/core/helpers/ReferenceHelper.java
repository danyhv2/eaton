package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.InvalidQueryException;
import javax.jcr.query.Query;
import javax.jcr.query.QueryManager;
import javax.jcr.query.QueryResult;
import javax.jcr.query.Row;
import javax.jcr.query.RowIterator;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.drew.lang.StringUtil;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class ReferenceHelper.
 */
public class ReferenceHelper {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(ReferenceHelper.class);
	
	/** The Constant LIST_TYPE. */
	private static final String LIST_TYPE = "listType";

	/**
	 * Gets the mega menu reference.
	 *
	 * @param resourceResolver the resource resolver
	 * @param currentPage the current page
	 * @return the mega menu reference
	 */
	public static List<String> getMegaMenuReference(ResourceResolver resourceResolver, Page currentPage) {
		LOGGER.debug("ReferenceHelper :: getMegaMenuReference() :: Start");
		List<String> megaMenuReferenceList = new ArrayList<String>();
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		if(StringUtils.isNotBlank(homePagePath)){
			String primaryNavPath = homePagePath.concat(CommonConstants.PRIMARY_NAV_PATH);
			Resource primaryNavRes = resourceResolver.getResource(primaryNavPath);
			if(primaryNavRes != null) {
				//TODO: convert to primary nav sling model -starts
				ValueMap primaryNavResVM = primaryNavRes.getValueMap();
				String primaryNavListType = CommonUtil.getStringProperty(primaryNavResVM, LIST_TYPE);
				if(StringUtils.equals(CommonConstants.MANUAL_LIST, primaryNavListType)) {		
					getReferenceListFromManualList(resourceResolver, megaMenuReferenceList, primaryNavPath);
				} else {					
					getReferenceFromChildNodes(resourceResolver, currentPage, megaMenuReferenceList);					
				}
			}
		}
		LOGGER.debug("ReferenceHelper :: getMegaMenuReference() :: Exit");
		return megaMenuReferenceList;		
	}

	/**
	 * Gets the reference from child nodes.
	 *
	 * @param resourceResolver the resource resolver
	 * @param currentPage the current page
	 * @param megaMenuReferenceList the mega menu reference list
	 * @return the reference from child nodes
	 */
	private static void getReferenceFromChildNodes(ResourceResolver resourceResolver, Page currentPage,
			List<String> megaMenuReferenceList) {
		LOGGER.debug("ReferenceHelper :: getReferenceFromChildNodes() :: Start");
		Page homePage = CommonUtil.getHomePage(currentPage);
		if(homePage != null) {
			ValueMap homepageVM = homePage.getProperties();
			String languageOverlayPath = CommonUtil.getStringProperty(homepageVM, "overlay-path");
			if(StringUtils.isNotBlank(languageOverlayPath)) {
				Iterator<Page> primaryNavPagesList = homePage.listChildren();
				while (primaryNavPagesList.hasNext()) {
					Page primaryNavPage = primaryNavPagesList.next();
					ValueMap primaryPageProp = primaryNavPage.getProperties();
					String hideInNav = CommonUtil.getStringProperty(primaryPageProp, "hideInNav");
					if(StringUtils.isBlank(hideInNav)) {
						try {
							//TODO: This Query needs to be dynamic - Overlay root path to be dynamic
							String queryNav = "SELECT * FROM [nt:base] AS s WHERE "
									.concat("ISDESCENDANTNODE(s,'"+ languageOverlayPath +"') ")
									.concat("AND s.[jcr:content/menuoverlay/titlePath]='").concat(primaryNavPage.getPath()).concat("' ")
									.concat("AND s.[jcr:content/hideInNav] IS NULL");
							LOGGER.info("queryNav - " + queryNav);
							Session session = resourceResolver.adaptTo(Session.class);
							QueryManager queryManager = session.getWorkspace().getQueryManager();
							Query query = queryManager.createQuery(queryNav, Query.JCR_SQL2);
							QueryResult queryResult = query.execute();
							if (queryResult != null) {
								RowIterator rowIterator = queryResult.getRows(); // Iteration of the rows returned from the query.
								String megaMenuRefPagePath = StringUtils.EMPTY;
								while (rowIterator.hasNext()) {
									Row row = rowIterator.nextRow();
									String megaMenuPagePath = row.getPath();
									megaMenuRefPagePath = megaMenuPagePath.concat("/_jcr_content/menuoverlay");			                        
									megaMenuReferenceList.add(primaryNavPage.getName().concat(",").concat(megaMenuRefPagePath));
								}
							}
						} catch (InvalidQueryException e) {
							LOGGER.error("Query is not valid for this scenario.", e);
						} catch (RepositoryException e) {
							LOGGER.error("Repository Exception - ", e);
						}
					}
				}
			}
		}
		LOGGER.debug("ReferenceHelper :: getReferenceFromChildNodes() :: Exit");
	}

	/**
	 * Gets the reference list from manual list.
	 *
	 * @param resourceResolver the resource resolver
	 * @param megaMenuReferenceList the mega menu reference list
	 * @param primaryNavRes the primary nav res
	 * @return the reference list from manual list
	 */
	private static void getReferenceListFromManualList(ResourceResolver resourceResolver,
			List<String> megaMenuReferenceList, String primaryNavPath) {		
		LOGGER.debug("ReferenceHelper :: getReferenceListFromManualList() :: Start");
	    Resource manualLinksRes = resourceResolver.getResource(primaryNavPath+"/manualLinks");
		if(manualLinksRes != null) {
			Iterator<Resource> childManualLiksResList = manualLinksRes.listChildren();
			if(childManualLiksResList != null) {
				while (childManualLiksResList.hasNext()) {
					Resource manualLinksResource = childManualLiksResList.next();
					ValueMap manualLinksResourceVM = manualLinksResource.getValueMap();
					
					String primaryNavPagePath  = CommonUtil.getStringProperty(manualLinksResourceVM, "path");
					String overlayPagePath  = CommonUtil.getStringProperty(manualLinksResourceVM, "overlayPath");
					
					Resource navigationRes = resourceResolver.getResource(primaryNavPagePath);
					 if(primaryNavPagePath!=StringUtils.EMPTY && overlayPagePath!=StringUtils.EMPTY){
						Resource overlayPathRes = resourceResolver.getResource(overlayPagePath.concat("/jcr:content/menuoverlay"));
						
						String css = StringUtils.EMPTY;
						String ref = StringUtils.EMPTY;
						if(navigationRes != null) {
							css = navigationRes.getName();                                	
						}
						if(overlayPathRes != null) {
							ref = overlayPathRes.getPath();
						}
						megaMenuReferenceList.add(css.concat(",").concat(ref));
						}
				}
			}						
		}
		LOGGER.debug("ReferenceHelper :: getReferenceListFromManualList() :: Exit");
	}

	/**
	 * Gets the full page drawer reference.
	 *
	 * @param resourceResolver the resource resolver
	 * @param currentPage the current page
	 * @return the full page drawer reference
	 */
	public static String getFullPageDrawerReference(ResourceResolver resourceResolver, Page currentPage) {
		LOGGER.debug("ReferenceHelper :: getFullPageDrawerReference() :: Start");
		String countrySelectorRefPath = StringUtils.EMPTY;
		String fullPageDrawerResPath = getReference(resourceResolver, currentPage, "/jcr:content/root/header/full-page-drawer");
		Resource fullPageDrawerResource = resourceResolver.getResource(fullPageDrawerResPath);
		if(fullPageDrawerResource != null) {
			ValueMap fullPageDrawerResourceVM = fullPageDrawerResource.getValueMap();
			countrySelectorRefPath = CommonUtil.getStringProperty(fullPageDrawerResourceVM, "reference");
		}
		LOGGER.debug("ReferenceHelper :: getFullPageDrawerReference() :: Exit");
		return countrySelectorRefPath;
	}

	/**
	 * Gets the reference.
	 *
	 * @param resourceResolver the resource resolver
	 * @param currentPage the current page
	 * @param nodePath the node path
	 * @return the reference
	 */
	public static String getReference(ResourceResolver resourceResolver, Page currentPage, String nodePath) {
		LOGGER.debug("ReferenceHelper :: getReference() :: Start");
		String reference = StringUtils.EMPTY;
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		if(StringUtils.isNotBlank(homePagePath)) {
			String resourcePath = homePagePath.concat(nodePath);
			Resource fullPageDrawerResource = resourceResolver.getResource(resourcePath);
			if(fullPageDrawerResource != null) {
				reference = resourcePath;
			}
		}
		LOGGER.debug("ReferenceHelper :: getReference() :: Exit");
		return reference;
	}
}
