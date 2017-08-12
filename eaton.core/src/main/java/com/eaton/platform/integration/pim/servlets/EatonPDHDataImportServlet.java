/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.eaton.platform.integration.pim.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;

import org.apache.commons.lang.StringUtils;
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
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.cq.commons.jcr.JcrConstants;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.util.CommonUtil;

/**
 * Servlet that writes some sample content into the response. It is mounted for
 * all resources of a specific Sling resource type. The
 * {@link SlingSafeMethodsServlet} shall be used for HTTP methods that are
 * idempotent. For write operations use the {@link SlingAllMethodsServlet}.
 */
 @Component(immediate = true, description = "Eaton PDH Data Import Servlet", metatype=true)
@Service(value = javax.servlet.Servlet.class)
@Properties(value = {@Property(name = "sling.servlet.extensions", value = {"json"}),
        @Property(name = "sling.servlet.methods", value = {"GET"}),
        @Property(name = "sling.servlet.paths", value = {"/eaton/productfamilypagedata"})})
public class EatonPDHDataImportServlet extends SlingSafeMethodsServlet {
	
	 /** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(EatonPDHDataImportServlet.class);
	
	/** The admin service. */
	@Reference
	AdminService adminService;
	
	/** The Constant PROPERTY_JCR_TITLE. */
	private final static String PROPERTY_JCR_TITLE = "jcr:title";
	
	/** The Constant PROPERTY_PROD_FAMILY_DESC. */
	private final static String PROPERTY_PROD_FAMILY_DESC = "DESCRIPTION";
	
	private final static String REQUEST_PARAM = "p";
	
	private final static String PROPERTY_PDH_VALUE_CQ_DATA = "ValueCQDATA";
	
	private final static String PROPERTY_PDH_LABEL = "LABEL";
	
	private final static String NODE_PRODUCT_NAME = "product_name";
	
	private final static String NODE_PDH_MKTG_DESC = "xxpdh_prd_fm_mar_ag";
	
	private final static String NODE_MKTG_DESC = "product_marketing_description";
		
    @Override
    protected void doGet(final SlingHttpServletRequest req,
            final SlingHttpServletResponse resp) throws ServletException, IOException {
    	LOG.info("******** EatonPDHDataImportServlet execution started ***********");
    	// local variables
    	String productName = StringUtils.EMPTY;
		String marDesc = StringUtils.EMPTY;
		String coreFeatures = StringUtils.EMPTY;
		String supportInfo = StringUtils.EMPTY;
		String primaryImgName = StringUtils.EMPTY;
		String inventoryItemId = StringUtils.EMPTY;
		String prodFamilyIdentifier = StringUtils.EMPTY;
		List<String> featureList = new ArrayList<String>();
		List<String> countryList = new ArrayList<String>();
		List<String> labelList = new ArrayList<String>();
		List<String> valueList  = new ArrayList<String>();
		ValueMap valueMap = null;
		List<Resource> dropdownList = new ArrayList<Resource>();
		// get imported pdh record as parameter
        String extnId = req.getParameter(REQUEST_PARAM);
        JSONObject jsonObject = new JSONObject();
        // get service resource resolver
        ResourceResolver adminResourceResolver = adminService.getReadService();
        Resource extnIdResource = adminResourceResolver.getResource(extnId);
       /* Start: SKU Card Attribute dropdown: not complete, need to find alternate solution */
        if(null != extnIdResource){
        	Iterator<Resource> txnmyAttrResourceList = extnIdResource.listChildren();
    		
			while(txnmyAttrResourceList.hasNext()){
				Resource attrItem = txnmyAttrResourceList.next();
				if(null != attrItem){
					// allocate memory to the Map instance
					valueMap = new ValueMapDecorator(new HashMap<String, Object>());
					
					// populate the map
					valueMap.put(CommonConstants.VALUE, CommonUtil.getStringProperty(attrItem.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA));
					valueMap.put(CommonConstants.TEXT, CommonUtil.getStringProperty(attrItem.getValueMap(), PROPERTY_PDH_LABEL));
			
					dropdownList.add(new ValueMapResource(adminResourceResolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap));
				}
			}
			
			// Create a DataSource that is used to populate the drop-down control
			// DataSource dataSource = new SimpleDataSource(dropdownList.iterator());
			req.setAttribute("taxAttrList", dropdownList);
			/* End: SKU Card Attribute dropdown: not complete, need to find alternate solution */
            
			// get product name from PDH
        	Resource prodNameRes = extnIdResource.getChild(NODE_PRODUCT_NAME);
        	if(null != prodNameRes){
        		productName = CommonUtil.getStringProperty(prodNameRes.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA);
        	}
        	
        	// get taxonomy attribute resource
        	Resource txnmyAttrRes = extnIdResource.getParent().getParent();
        	// get inventory item id resource
        	Resource inventoryItemIdRes = txnmyAttrRes.getParent();
        	
        	// get core features resource
        	Resource coreFeaturesRes = txnmyAttrRes.getChild("xxpdh_prd_fm_feature_ag");
        	
        	if(null != coreFeaturesRes){
        		Iterator<Resource> coreFeaturesResList = coreFeaturesRes.listChildren();
        		
    			while(coreFeaturesResList.hasNext()){
    				Resource resourceItem = coreFeaturesResList.next();
    				Resource prodFeatureRes = resourceItem.getChild("product_feature");
    				if(null != prodFeatureRes){
    					coreFeatures += CommonUtil.getStringProperty(prodFeatureRes.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA).concat(";");
    				}
    			}
        		
        	}
        	
        	// get support info resource
        	Resource supportInfoRes = txnmyAttrRes.getChild("xxpdh_prd_fm_tech_support");
        	
        	if(null != supportInfoRes){
        		Iterator<Resource> supportInfoResList = supportInfoRes.listChildren();
        		
    			while(supportInfoResList.hasNext()){
    				Resource resourceItem = supportInfoResList.next();
    				Resource SupportRes = resourceItem.getChild("technical_support_contact");
    				if(null != SupportRes){
    					supportInfo += CommonUtil.getStringProperty(SupportRes.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA).concat("|");
    				}
    			}
        		
        	}
        	
        	// get primary image resource
        	Resource imgPrimaryRes = adminResourceResolver.resolve(inventoryItemIdRes.getPath().concat("/imgs/image_primary/image_primary_500x500_72dpi"));
        	if(null != imgPrimaryRes){
        		primaryImgName = CommonUtil.getStringProperty(imgPrimaryRes.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA);
        	}
        	
        	// populate inventory item id used to create node
        	inventoryItemId = inventoryItemIdRes.getName();
        	prodFamilyIdentifier = CommonUtil.getStringProperty(inventoryItemIdRes.getValueMap(), PROPERTY_PROD_FAMILY_DESC);
        	
        	// get PDH marketing description
        	Resource pdhMktDescRes = txnmyAttrRes.getChild(NODE_PDH_MKTG_DESC);
        	if(null != pdhMktDescRes){
        		Iterator<Resource> resourceList = pdhMktDescRes.listChildren();
        		
    			while(resourceList.hasNext()){
    				Resource resourceItem = resourceList.next();
    				Resource mktDescRes = resourceItem.getChild(NODE_MKTG_DESC);
    				if(null != mktDescRes){
    					marDesc += CommonUtil.getStringProperty(mktDescRes.getValueMap(), PROPERTY_PDH_VALUE_CQ_DATA).concat(";");
    				}
    			}
        	}
            
        }
        
        // form json response
        try {
        		jsonObject.put("inventoryItemId", inventoryItemId);
        		jsonObject.put("prodFamilyIdentifier", prodFamilyIdentifier);
        		jsonObject.put("pdhTitle", productName);
	        	jsonObject.put("pdhMarDesc", marDesc);
	        	jsonObject.put("primaryImgName", primaryImgName);
	        	jsonObject.put("supportInfo", supportInfo);
	        	jsonObject.put("coreFeatures", coreFeatures);
	        	
	        } catch(JSONException exception){
	        	
	        }
        resp.setContentType("application/json");
        resp.getWriter().print(jsonObject.toString());
        
        LOG.info("******** EatonPDHDataImportServlet execution completed ***********");
    }
}
