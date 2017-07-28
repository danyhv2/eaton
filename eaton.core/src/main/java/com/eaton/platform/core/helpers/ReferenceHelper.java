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
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

public class ReferenceHelper {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(ReferenceHelper.class);
	private static final String LIST_TYPE = "listType";
	
	public static List<String> getMegaMenuReference(ResourceResolver resourceResolver, Page currentPage) {
		LOGGER.debug("Entered into getMegaMenuReference method");
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
					getReferenceListFromManualList(resourceResolver, megaMenuReferenceList, primaryNavRes);
				} else {					
					getReferenceFromChildNodes(resourceResolver, currentPage, megaMenuReferenceList);					
				}
			}
		}
        LOGGER.debug("Exited from getMegaMenuReference method");
		return megaMenuReferenceList;		
	}

	private static void getReferenceFromChildNodes(ResourceResolver resourceResolver, Page currentPage,
			List<String> megaMenuReferenceList) {
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
									.concat("AND s.[jcr:content/menuoverlay/sling:resourceType]='eaton/components/structure/menu-overlay' ")
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
	}

	private static void getReferenceListFromManualList(ResourceResolver resourceResolver,
			List<String> megaMenuReferenceList, Resource primaryNavRes) {
		Resource manualLinksRes = primaryNavRes.getChild("/manualLinks");
		if(manualLinksRes != null) {
			Iterator<Resource> childManualLiksResList = manualLinksRes.listChildren();
			if(childManualLiksResList != null) {
				while (childManualLiksResList.hasNext()) {
		            Resource manualLinksResource = childManualLiksResList.next();
		            ValueMap manualLinksResourceVM = manualLinksResource.getValueMap();
		            String primaryNavPagePath  = CommonUtil.getStringProperty(manualLinksResourceVM, "pageLink");
		            String overlayPagePath  = CommonUtil.getStringProperty(manualLinksResourceVM, "overlayPath");
		            Resource navigationRes = resourceResolver.getResource(primaryNavPagePath);
		            Resource overlayPathRes = resourceResolver.getResource(overlayPagePath.concat("_jcr_content/menuoverlay"));
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
	
	public static String getFullPageDrawerReference(ResourceResolver resourceResolver, Page currentPage) {
		String countrySelectorRefPath = StringUtils.EMPTY;
		String fullPageDrawerResPath = getReference(resourceResolver, currentPage, "/jcr:content/root/header/full-page-drawer");
		Resource fullPageDrawerResource = resourceResolver.getResource(fullPageDrawerResPath);
		if(fullPageDrawerResource != null) {
			ValueMap fullPageDrawerResourceVM = fullPageDrawerResource.getValueMap();
			countrySelectorRefPath = CommonUtil.getStringProperty(fullPageDrawerResourceVM, "reference");
		}
		return countrySelectorRefPath;
	}
	
	public static String getReference(ResourceResolver resourceResolver, Page currentPage, String nodePath) {
		String reference = StringUtils.EMPTY;
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		if(StringUtils.isNotBlank(homePagePath)) {
			String resourcePath = homePagePath.concat(nodePath);
			Resource fullPageDrawerResource = resourceResolver.getResource(resourcePath);
			if(fullPageDrawerResource != null) {
				reference = resourcePath;
			}
		}
		return reference;
	}
}
