package com.eaton.platform.core.helpers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.UsernamePasswordCredentials;
import org.apache.commons.httpclient.auth.AuthScope;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceProvider;
import org.apache.sling.api.resource.ResourceResolver; 
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.apache.sling.commons.json.JSONArray;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.day.cq.commons.jcr.JcrConstants;

import com.day.cq.commons.Externalizer;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.countryselectorjson.CountryList;
import com.eaton.platform.core.models.countryselectorjson.LanguageList;
import com.eaton.platform.core.models.countryselectorjson.RegionList;
import com.eaton.platform.core.services.impl.CountrySelectorServiceImpl;

/**
 * <html> Description: This class is used in sightly to provide
 * list of countries and languages for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class CountrySelectorHelper extends BaseComponent {
	
	private String isoCode;
	private String fullJsonPath;
	private List<RegionList> regionListArr;
	private String jsonLocation;
	private String serverUrl;
	
	@Inject
	ResourceResolverFactory resourceResolverFactory;
	@Inject
	ResourceResolver resourceResolver = null;

	private static final Logger lOG = LoggerFactory.getLogger(CountrySelectorHelper.class); 
	
	@Override
	public void activate() throws Exception {
		lOG.info("languageListJson activate");
		setIsoCode(getCurrentPage().getLanguage(true).toString());
		CountrySelectorServiceImpl countrySelectorServiceImpl = getSlingScriptHelper().getService(CountrySelectorServiceImpl.class);
		setFullJsonPath(countrySelectorServiceImpl.getJsonPath() + "/" + getIsoCode() + "/" + "location.json");
		//countrySelectorBean = getResource().adaptTo(CountrySelectorBean.class);
		/*if(countrySelectorBean.getView().equalsIgnoreCase("index")){

		}*/
		try {
			if(getReadJson() != null && getReadJson() != ""){
				JSONObject json = new JSONObject(getReadJson());
				regionListArr = new ArrayList<RegionList>();
				JSONArray regionListJsons   = json.getJSONArray("regionList");
				/* This loop is for setting regionList */
				for (int i = 0; i < regionListJsons.length(); i++) {
					JSONObject regionListJsonObj = regionListJsons.getJSONObject(i);
					JSONArray countryListJsons   = regionListJsonObj.getJSONArray("countryList");
					final List<CountryList> countryListArr = new ArrayList<CountryList>();
					/* This loop is for setting countryList */
					for (int j = 0; j < countryListJsons.length(); j++) {
						JSONObject countryListJsonObj = countryListJsons.getJSONObject(j);
						JSONArray languageListJsons   = countryListJsonObj.getJSONArray("languageList");
						final List<LanguageList> languageListArr = new ArrayList<LanguageList>();
						/* This loop is for setting languageList */
						for (int k = 0; k < languageListJsons.length(); k++) {
							JSONObject languageListJsonObj = languageListJsons.getJSONObject(k);
							LanguageList languageListBean = new LanguageList();
							languageListBean.setLanguageName(languageListJsonObj.getString("languageName"));
							languageListBean.setLanguagePath(languageListJsonObj.getString("languagePath"));
							languageListArr.add(languageListBean);
						}
						CountryList countryListBean = new CountryList();
						countryListBean.setCountryName(countryListJsonObj.getString("countryName"));
						countryListBean.setCountryImagePath(countryListJsonObj.getString("countryImagePath"));
						countryListBean.setCountryImageAltText(countryListJsonObj.getString("countryImageAltText"));
						countryListBean.setLanguageList(languageListArr);
						countryListArr.add(countryListBean);
					}
					RegionList regionListBean = new RegionList();
					regionListBean.setRegionName(regionListJsonObj.getString("regionName"));
					regionListBean.setCountryList(countryListArr);
					regionListArr.add(regionListBean);
				}
			}

		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 
	 * @return serverUrl String
	 */
	public String getServerUrl() {
		return serverUrl;
	}

	/**
	 * 
	 * @return region List
	 */
	public List<RegionList> getRegionListArr() {
		return regionListArr;
	}
	/**
	 * 
	 * @return relative json path
	 */
	public String getFullJsonPath() {
		return fullJsonPath;
	}

	public void setFullJsonPath(String fullJsonPath) {
		this.fullJsonPath = fullJsonPath;
	}
	/**
	 * 
	 * @return isoCode String
	 */
	public String getIsoCode() {
		return isoCode;
	}
	public void setIsoCode(String isoCode) {
		this.isoCode = isoCode;
	}
	
	/**
	 * 
	 * @return jsonLocation String
	 */
	public String getJsonLocation() {
		return jsonLocation;
	}
	
	/**
	 * This method is used to read JSON from DAM
	 */
	public String getReadJson() throws LoginException, RepositoryException, IOException{
		String jsonStr = null;
		
		resourceResolver=  getResource().getResourceResolver();
        Externalizer externalizer = resourceResolver.adaptTo(Externalizer.class);
        serverUrl = externalizer.authorLink(resourceResolver, "");
        jsonLocation = serverUrl + getFullJsonPath();
        Resource resource = resourceResolver.getResource("/"+getFullJsonPath());
        Node node = resource.adaptTo(Node.class);
        NodeIterator itemNodes = node.getNodes();
        while(itemNodes.hasNext()){
        	Node itemNode = itemNodes.nextNode();
        	InputStream jsonStream = itemNode.getProperty(JcrConstants.JCR_DATA).getBinary().getStream();
        	BufferedReader bReader = new BufferedReader(new InputStreamReader(jsonStream));
            StringBuffer sbfFileContents = new StringBuffer();
            String line = null;
            while( (line = bReader.readLine()) != null){
                    sbfFileContents.append(line);
            }
            jsonStr = sbfFileContents.toString();
        }
        
		/*HttpClient httpClient = new HttpClient();
		httpClient.getState().setCredentials(
				new AuthScope("localhost", 4502),
				new UsernamePasswordCredentials("admin", "admin")
				);
		GetMethod getRequest = new GetMethod(jsonLocation);
		getRequest.setDoAuthentication( true );

		getRequest.addRequestHeader("accept", "application/json");
		try
		{
			int status = httpClient.executeMethod(getRequest);

			if (status != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + status);
			}
			return getRequest.getResponseBodyAsString() ;
		}
    	catch (Exception e)
		{
			e.printStackTrace() ; 
		}
		finally {
			getRequest.releaseConnection();
		}*/
		return jsonStr;
	}
		
}

