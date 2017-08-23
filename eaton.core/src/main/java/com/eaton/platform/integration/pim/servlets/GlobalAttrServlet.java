package com.eaton.platform.integration.pim.servlets;
 
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.felix.scr.annotations.sling.SlingServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.services.AdminService;
 
@Service(GlobalAttrServlet.class)
@SlingServlet(paths = {"/eaton/content/GlobalAt"}, generateComponent = false)
@Component(label = "Global Attributes Dropdown Servlet", description = "This servlet provides list of PDH global attributes in drop down",
enabled = true, immediate = true, metatype = false)
public class GlobalAttrServlet extends SlingSafeMethodsServlet {
 
	private static final long serialVersionUID = 1L;
	private static final Logger LOGGER = LoggerFactory.getLogger(GlobalAttrServlet.class);
 
 // AdminService reference
 	@Reference
 	AdminService adminService;
 	
 	String PATH = "/etc/commerce/pdh/global-attributes";
 	String value;
 	String text;

     List<String> GlobalListPagePathList = new ArrayList<String>();
     
    
    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) {
    	
    	ResourceResolver resourceResolver = adminService.getReadService();
    	Resource resource = resourceResolver.getResource(PATH);
    	Iterator<Resource> resourceList = resource.listChildren();
    	
        try {
            JSONObject eachOption;
            JSONArray optionsArray = new JSONArray();
            
            while(resourceList.hasNext()){
        		Resource resourceItem = resourceList.next();
        		//GlobalAttrModel item = resourceItem.adaptTo(GlobalAttrModel.class);
        		ValueMap valuemap = resourceItem.getValueMap();
        		
        		text = (String) valuemap.get("attributeDisplayName");
        		value = (String) valuemap.get("attributeName");
        	
            
                eachOption = new JSONObject();
                
                eachOption.put("text", text);
                eachOption.put("value", value);
                optionsArray.put(eachOption);
            }
 
            JSONObject finalJsonResponse = new JSONObject();
            //Adding this finalJsonResponse object to showcase optionsRoot property functionality
            finalJsonResponse.put("root", optionsArray);
 
            response.getWriter().println(finalJsonResponse.toString());
        } catch (JSONException e) {
            LOGGER.error("Json Exception occured while adding data to JSON Object : ", e);
        } catch (IOException e) {
            LOGGER.error("IOException occured while getting Print Writer from SlingServletResponse : ", e);
        }
    }
}