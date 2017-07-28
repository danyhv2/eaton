package com.eaton.platform.core.util;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.BCAccountBean;
import com.eaton.platform.core.models.BCPlayerBean;

/**
 * The Class BrightcoveUtil.
 */
public final class BrightcoveUtil {
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(BrightcoveUtil.class);
	
    
    private BrightcoveUtil() {
        LOGGER.debug("Inside BrightcoveUtil constructor");
    }

    
    /**
     * This method populates Brightcove account details like
     * account name, number and invokes populatePlayerList 
     * method to fetch player list
     * @param bcConfigJcrRes
     * @return
     */
    public static BCAccountBean getBCAccounts(Resource bcConfigRes) {
        LOGGER.debug("Entered into getBCAccounts method");
        // local variables
        BCAccountBean bcAccBean = new BCAccountBean();
        String[] bcPlayers = null;
        
        Page bcConfigPage = null;
        // check if brightcove accounts are configured
        if(null != bcConfigRes){
        	bcConfigPage = bcConfigRes.getParent().adaptTo(Page.class);
        	bcPlayers = bcConfigPage.getProperties().get(CommonConstants.BC_PLAYERS_FIELD_NAME, String[].class);
        	ValueMap bcConfigResVM = bcConfigRes.getValueMap();
        	try {
        		// set brightcove account name and account number
        		bcAccBean.setAccName(CommonUtil.getStringProperty(bcConfigResVM, CommonConstants.BC_ACC_NAME_FIELD_NAME));
        		bcAccBean.setAccNumber(CommonUtil.getStringProperty(bcConfigResVM, CommonConstants.BC_ACC_NUMBER_FIELD_NAME));
        		// invoke populatePlayerList method to fetch list of 
        		// players configured for each account
    			populatePlayerList(bcPlayers, bcAccBean);
    		} catch (Exception e) {
    			LOGGER.error("Exception occured while getting brightcove account details", e);
    		}
        }
        
        LOGGER.debug("Exited from getBCAccounts method");
        return bcAccBean;
    }
    
    /**
	 * This method populates player id, player name for
	 * list of players configured under a Brightcove account
	 * @param accRes
	 * @param bcAccBean
	 */
    private static void populatePlayerList(String[] bcPlayers, BCAccountBean bcAccBean) {
		LOGGER.debug("Entered into populatePlayerList method");
		List<BCPlayerBean> playerList = new ArrayList<BCPlayerBean>();
		JSONObject playerObj = null;
		BCPlayerBean bcPlayerBean = null;
		// check if brightcove accounts are configured
		try {
			// check if players are configured under the account, if yes, get player list
			if(null != bcPlayers){
				// loop through player list to get player details
				for(String playerStr : bcPlayers){
					playerObj = new JSONObject(playerStr);
					bcPlayerBean = new BCPlayerBean();
					// check if player name is configured and get it
					if(playerObj.has(CommonConstants.BC_PLAYER_ID_FIELD_NAME)){
						bcPlayerBean.setPlayerId(playerObj.getString(CommonConstants.BC_PLAYER_ID_FIELD_NAME));
					}
					// check if player id is configured and get it
					if(playerObj.has(CommonConstants.BC_PLAYER_NAME_FIELD_NAME)){
						bcPlayerBean.setPlayerName(playerObj.getString(CommonConstants.BC_PLAYER_NAME_FIELD_NAME));
					}
					// populate player list with configured player details
					playerList.add(bcPlayerBean);
				}
				// set player details in brightcove account bean 
				bcAccBean.setPlayerDetails(playerList);
				// set number of players configured under an account
				bcAccBean.setNumOfPlayers(playerList.size());
	        }
			
			
		} catch (JSONException e) {
			LOGGER.error("JSONException occured while getting brightcove player details", e);
		}
		
		
    }

    
    /**
     * This method returns the referer url from request header.
     * @param request
     * @return
     */
    public static String getRefererURL(final SlingHttpServletRequest request) {
        String refererURL;
        // get current page url from referer of the request header
        refererURL = request.getHeader(CommonConstants.REFERER_URL);
        return refererURL;
    }
    
    /**
     * This method gets the referer url from request header and returns the page path.
     * @param refererURL the referer url
     * @return path
     */
    public static String getContentPath(ResourceResolver resolver, String refererURL) {
        String path = null;
            try {
                URL pageURL = new URL(refererURL);
                path = StringUtils.remove(pageURL.getPath(), "editor.html");
                path = StringUtils.remove(path, ".html");
                path = StringUtils.remove(path, ".htm");
                Resource pageResource = resolver.resolve(path);
                path = pageResource.getPath();
            } catch (MalformedURLException ex) {
            	LOGGER.error(
                        "Error in parsing the Referrer URL :: " + refererURL + " :: Exception :: " + ex.getMessage());
            }

        return path;
    }
    
    /**
     * This method returns Brightcove cloud configuration
     * page's jcr:content resource
     * @param configManagerFctry
     * @param request
     * @param resolver
     * @return
     */
    public static Resource getBCConfigResource(ConfigurationManagerFactory configManagerFctry, 
    		ResourceResolver resolver, Resource pageResource) {
		Resource brightcoveconfigJCRResource = null;
		// get brightcove cloud configuration object
		Configuration configObj = CommonUtil.getCloudConfigObj(configManagerFctry, resolver, pageResource, CommonConstants.BC_CLOUD_CONFIG_NODE_NAME);

		// if cloud config object is not null, get the details
		if(null != configObj){
			brightcoveconfigJCRResource = resolver.resolve(configObj.getPath().concat(CommonConstants.SLASH_STRING).concat(CommonConstants.JCR_CONTENT_STR));
		}
		return brightcoveconfigJCRResource;
	}
    
    /**
     * This method returns Brightcove custom error message to be displayed
     * when video id is invalid
     * @param brightcoveConfigRes
     * @return
     */
    public static String getBCErrorMessage(Resource brightcoveConfigRes){
		// get error message configured in brightcove config page
		String errorMsg = CommonUtil.getStringProperty(brightcoveConfigRes.getValueMap(), CommonConstants.BC_ERROR_MSG_FIELD_NAME);
		
		return errorMsg;
    }

    
}