package com.eaton.platform.core.helpers;

import java.io.IOException;

import javax.jcr.RepositoryException;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ValueMap;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.bean.countryselector.CountrySelectorBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.services.AdminService;
import com.eaton.platform.core.services.EatonConfigService;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class CountrySelectorHelper.
 */
public class CountrySelectorHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(CountrySelectorHelper.class);
    
    /** The country selector bean. */
    private CountrySelectorBean countrySelectorBean;
    
    /** The view. */
    private String view;

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("CountrySelectorHelper :: setComponentValues() :: Start");		
		countrySelectorBean = new CountrySelectorBean();
		EatonConfigService configService = slingHelper.getService(EatonConfigService.class);
		AdminService adminService = slingHelper.getService(AdminService.class);
		try {
			String countrySelectorFolderPath = configService.getConfigServiceBean().getCountryselectorFolderPath();
			ValueMap countrySelectorResVM = res.getValueMap();
			view = CommonUtil.getStringProperty(countrySelectorResVM, "view");
			if(currentPage.getDepth() > CommonConstants.COUNTRY_PAGE_DEPTH || StringUtils.equals("index", view)) { 
				String countrySelectorFilePath = StringUtils.EMPTY;
				if(currentPage.getDepth() > CommonConstants.COUNTRY_PAGE_DEPTH) {
					String languagePageName = currentPage.getAbsoluteParent(CommonConstants.LANGUAGE_PAGE_DEPTH-1).getName();
					countrySelectorFilePath = countrySelectorFolderPath.concat(CommonConstants.SLASH_STRING).concat(languagePageName).concat(CommonConstants.SLASH_STRING).concat("location.json");
				} else {
					countrySelectorFilePath = countrySelectorFolderPath.concat(CommonConstants.SLASH_STRING).concat("en-us").concat(CommonConstants.SLASH_STRING).concat("location.json");
				}
				if(StringUtils.isNotBlank(countrySelectorFolderPath)) {
					String reqJsonString = CommonUtil.getResponseStringFromFile(adminService.getReadService(), countrySelectorFilePath);
					if(StringUtils.isNotBlank(reqJsonString)) {
						JSONParser parser = new JSONParser();
						JSONObject countrySelectorJsonObject = (JSONObject) parser.parse(reqJsonString);
						ObjectMapper mapper = new ObjectMapper();
						countrySelectorBean = mapper.readValue(countrySelectorJsonObject.toJSONString(), countrySelectorBean.getClass());
						LOGGER.debug("region list size - " + countrySelectorBean.getRegionList().size());
					}
				}
			}
		} catch (IOException e) {
			LOGGER.error("Error in reading file", e);
		} catch (RepositoryException e) {
			LOGGER.error("Repository Exception", e);
		} catch (ParseException e) {
			LOGGER.error("Parse Exception", e);
		}
		LOGGER.debug("CountrySelectorHelper :: setComponentValues() :: Exit");	
		
	}

	/**
	 * Gets the country selector bean.
	 *
	 * @return the country selector bean
	 */
	public CountrySelectorBean getCountrySelectorBean() {
		return countrySelectorBean;
	}

	/**
	 * Gets the view.
	 *
	 * @return the view
	 */
	public String getView() {
		return view;
	}
	
}

