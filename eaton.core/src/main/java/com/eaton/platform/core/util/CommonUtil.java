package com.eaton.platform.core.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.zip.CRC32;

import javax.jcr.RepositoryException;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.xss.XSSAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.inherit.HierarchyNodeInheritanceValueMap;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.dam.commons.handler.StandardImageHandler;
import com.day.cq.dam.handler.standard.pdf.PdfHandler;
import com.day.cq.i18n.I18n;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.day.cq.wcm.webservicesupport.Configuration;
import com.day.cq.wcm.webservicesupport.ConfigurationManager;
import com.day.cq.wcm.webservicesupport.ConfigurationManagerFactory;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.exception.EatonApplicationException;

/**
 * The Class CommonUtil.
 */
public final class CommonUtil {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(CommonUtil.class);
    /** The Constant LOCATION. */
    private static final String LOCATION = "location";
    /** The Constant CAMPAIGN_PATH. */
    private static final String CAMPAIGN_PATH = "/content/campaigns/";
    /** The Constant JCR_CONTENT. */
    public static final String JCR_CONTENT = "jcr:content";
    /** The Constant STAR_CHAR. */
    private static final char STAR_CHAR = '*';
    /** The Constant STAR_ESCAPE_CHAR. */
    private static final String STAR_ESCAPE_CHAR = "%2A";
    /** The Constant SPACE_ESCAPE_CHAR1. */
    private static final String SPACE_ESCAPE_CHAR1 = "%20";
    /** The Constant PLUS_CHAR. */
    private static final char PLUS_CHAR = '+';
    /** The Constant PERCENTAGE_CHAR. */
    private static final char PERCENTAGE_CHAR = '%';
    /** The Constant SEVEN_CHAR. */
    private static final char SEVEN_CHAR = '7';
    /** The Constant E_CHAR. */
    private static final char E_CHAR = 'E';
    /** The Constant TILD_CHAR. */
    private static final char TILD_CHAR = '~';
    /** The Constant SPACE_STRING. */
    public static final String SPACE_STRING = " ";
    /** The Constant BACKSLASH_SINGLE_QUOTE. */
    public static final String BACKSLASH_SINGLE_QUOTE = "\\'";
    /** The Constant SINGLE_QUOTE. */
    public static final String SINGLE_QUOTE = "'";
    /** The Constant REG_EXPR. */
    private static final String REG_EXPR = "(?s)<[^>]*>(\\s*<[^>]*>)*";
    /** The Constant EMPTY_ARRAY. */
    private static final String[] EMPTY_ARRAY = new String[0];
    
    /**
     * Instantiates a new common util.
     */
    private CommonUtil() {
        LOGGER.debug("Inside CommonUtil constructor");
    }

    /**
     * Gets the string property.
     * @param valueMap the value map
     * @param key the key
     * @param xssAPI the xss api
     * @return the string property
     */
    public static String getStringProperty(ValueMap valueMap, String key, XSSAPI xssAPI) {
    	LOGGER.debug("CommonUtil :: getStringProperty() :: Start");
        String returnVal = StringUtils.EMPTY;
        if (valueMap.containsKey(key)) {
            returnVal = (String) valueMap.get(key);
            // Remove XSS issues
            returnVal = xssAPI.getValidHref(returnVal);
        }
        LOGGER.debug("CommonUtil :: getStringProperty() :: Exit");
        return returnVal;
    }

    /**
     * Gets the string property.
     * @param valueMap the value map
     * @param propKey the prop key
     * @return the string property
     */
    public static String getStringProperty(final ValueMap valueMap, final String propKey) {
    	LOGGER.debug("CommonUtil :: getStringProperty() :: Start");
        String retVal = StringUtils.EMPTY;
        if (valueMap.containsKey(propKey)) {
            retVal = (String) valueMap.get(propKey);
        }
        LOGGER.debug("CommonUtil :: getStringProperty() :: Exit");
        return retVal;
    }
    
    /**
     * Gets the string property.
     *
     * @param map the map
     * @param propKey the prop key
     * @return the string property
     */
    public static String getStringProperty(final Map<String, Object> map, final String propKey) {
    	LOGGER.debug("CommonUtil :: getStringProperty() :: Start");
        String retVal = StringUtils.EMPTY;
        if (map.containsKey(propKey)) {
            retVal = (String) map.get(propKey);
        }
        LOGGER.debug("CommonUtil :: getStringProperty() :: Exit");
        return retVal;
    }

    /**
     * Gets the date property in a string format.
     * @param valueMap the value map
     * @param propKey the prop key
     * @return the date property in string format This method can be re-factored after the utility is run on all the
     *         environments.
     */
    public static String getDateStringProperty(final ValueMap valueMap, final String propKey) {
    	LOGGER.debug("CommonUtil :: getDateStringProperty() :: Start");
        Object datepublished = StringUtils.EMPTY;
        String strDate = StringUtils.EMPTY;
        if (valueMap.containsKey(propKey)) {
            datepublished = (Object) valueMap.get(propKey);
            /* if the utility fails to update any record, below code would handle the valid date format scenario */
            if (datepublished instanceof Calendar) {
                SimpleDateFormat frmt = new SimpleDateFormat("mm/dd/yy");
                strDate = format((Calendar) datepublished, frmt);
            } else {
                strDate = datepublished.toString();
            }
        }
        LOGGER.debug("CommonUtil :: getDateStringProperty() :: Exit");
        return strDate;
    }

    /**
     * Gets the date property.
     * @param valueMap the value map
     * @param propKey the prop key
     * @return the date property
     */
    public static Calendar getDateProperty(final ValueMap valueMap, final String propKey) {
    	LOGGER.debug("CommonUtil :: getDateProperty() :: Start");
        Calendar dateVal = null;
        if (valueMap.containsKey(propKey)) {
            dateVal = (Calendar) valueMap.get(propKey);
        }
        LOGGER.debug("CommonUtil :: getDateProperty() :: Exit");
        return dateVal;
    }

    /**
     * Gets the date property.
     * @param valueMap the value map
     * @param propKey the prop key
     * @param simpleDateFormat the simple date format
     * @return the date property
     */
    public static String getDateProperty(final ValueMap valueMap, final String propKey,
            final SimpleDateFormat simpleDateFormat) {
    	LOGGER.debug("CommonUtil :: getDateProperty() :: Start");
        String formattedDateVal = StringUtils.EMPTY;
        if (valueMap.containsKey(propKey)) {
            Calendar dateVal = (Calendar) valueMap.get(propKey);
            formattedDateVal = format(dateVal, simpleDateFormat);
        }
        LOGGER.debug("CommonUtil :: getDateProperty() :: Exit");
        return formattedDateVal;
    }

    /**
     * Format.
     * @param date the date
     * @param simpleDateFormat the simple date format
     * @return the string
     */
    public static String format(Calendar date, SimpleDateFormat simpleDateFormat) {
    	LOGGER.debug("CommonUtil :: format() :: Start");
        simpleDateFormat.setCalendar(date);
        String dateFormatted = simpleDateFormat.format(date.getTime());
        LOGGER.debug("CommonUtil :: format() :: Exit");
        return dateFormatted;
    }

    /**
     * Gets the string array property.
     * @param valueMap the value map
     * @param key the key
     * @return the string array property
     */
    public static String[] getStringArrayProperty(ValueMap valueMap, String key) {
    	LOGGER.debug("CommonUtil :: getStringArrayProperty() :: Start");
        String[] returnVal = EMPTY_ARRAY;
        if (valueMap.containsKey(key)) {
            returnVal = (String[]) valueMap.get(key);
        }
        LOGGER.debug("CommonUtil :: getStringArrayProperty() :: Exit");
        return returnVal;
    }

    /**
     * Gets the string inherited property.
     * @param inheritanceValueMap the inheritance value map
     * @param propKey the prop key
     * @return the string inherited property
     */
    public static String getStringInheritedProperty(final InheritanceValueMap inheritanceValueMap,
            final String propKey) {
    	LOGGER.debug("CommonUtil :: getStringInheritedProperty() :: Start");
        String retVal = inheritanceValueMap.getInherited(propKey, StringUtils.EMPTY);
        LOGGER.debug("CommonUtil :: getStringInheritedProperty() :: Exit");
        return retVal;
    }

    /**
     * Gets the string array inherited property.
     * @param inheritanceValueMap the inheritance value map
     * @param propKey the prop key
     * @return the string array inherited property
     */
    public static String[] getStringArrayInheritedProperty(final InheritanceValueMap inheritanceValueMap,
            final String propKey) {
    	LOGGER.debug("CommonUtil :: getStringArrayInheritedProperty() :: Start");
        String[] returnVal = inheritanceValueMap.getInherited(propKey, EMPTY_ARRAY);
        LOGGER.debug("CommonUtil :: getStringArrayInheritedProperty() :: Exit");
        return returnVal;
    }
    
    /**
     * Escape html.
     * @param htmlString the html string
     * @return the string
     */
    public static String escapeHTML(final String htmlString) {
    	LOGGER.debug("CommonUtil :: escapeHTML() :: Start");
        String output = htmlString;
        if (output != null) {
            output = output.replaceAll(REG_EXPR, SPACE_STRING)
                    .replaceAll(BACKSLASH_SINGLE_QUOTE, SINGLE_QUOTE).replaceAll(".html", "").trim();
        }
        LOGGER.debug("CommonUtil :: escapeHTML() :: Exit");
        return output;
    }

    /**
     * Gets the i18 n from user source.
     * @param slingRequest the sling request
     * @param key the key
     * @return the i18 n from user source
     */
    public static String getI18NFromUserSource(SlingHttpServletRequest slingRequest, String key) {
    	LOGGER.debug("CommonUtil :: getI18NFromUserSource() :: Start");
        I18n i18n = new I18n(slingRequest);
        String retVal = i18n.get(key);
        LOGGER.debug("CommonUtil :: getI18NFromUserSource() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from resource bundle.
     * @param slingRequest the sling request
     * @param currentPage the current page
     * @param key the key
     * @return the i18 n from resource bundle
     */
    public static String getI18NFromResourceBundle(SlingHttpServletRequest slingRequest, Page currentPage, String key) {
    	LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Start");
        Locale pageLang = currentPage.getLanguage(false);        
        String retVal = getI18NFromLocale(slingRequest, key, pageLang);
        LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from locale.
     *
     * @param slingRequest the sling request
     * @param currentPage the current page
     * @param key the key
     * @param args the args
     * @return the i18 n from locale
     */
    public static String getI18NFromResourceBundle(SlingHttpServletRequest slingRequest, Page currentPage, String key,
            Object... args) {
    	LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Start");
        Locale pageLang = currentPage.getLanguage(false);
        String retVal = getI18NFromLocale(slingRequest, key, pageLang, args);
        LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from locale.
     *
     * @param slingRequest the sling request
     * @param key the key
     * @param pageLang the page lang
     * @param args the args
     * @return the i18 n from locale
     */
    public static String getI18NFromLocale(SlingHttpServletRequest slingRequest, String key, Locale pageLang,
            Object... args) {
    	LOGGER.debug("CommonUtil :: getI18NFromLocale() :: Start");
        ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLang);
        String retVal = I18n.get(resourceBundle, key, null, args);
        LOGGER.debug("CommonUtil :: getI18NFromLocale() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from locale.
     * @param slingRequest the sling request
     * @param key the key
     * @param pageLang the page lang
     * @return the i18 n from locale
     */
    public static String getI18NFromLocale(SlingHttpServletRequest slingRequest, String key, Locale pageLang) {
    	LOGGER.debug("CommonUtil :: getI18NFromLocale() :: Start");
        ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLang);
        I18n i18n = new I18n(resourceBundle);
        String retVal = i18n.get(key);
        LOGGER.debug("CommonUtil :: getI18NFromLocale() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from user source.
     * @param slingRequest the sling request
     * @param key the key
     * @param defaultValue the default value
     * @return the i18 n from user source
     */
    public static String getI18NFromUserSource(SlingHttpServletRequest slingRequest, String key, String defaultValue) {
    	LOGGER.debug("CommonUtil :: getI18NFromUserSource() :: Start");
        String retVal = getI18NFromUserSource(slingRequest, key);
        if (StringUtils.isBlank(retVal) || StringUtils.equals(key, retVal)) {
            retVal = defaultValue;
        }
        LOGGER.debug("CommonUtil :: getI18NFromUserSource() :: Exit");
        return retVal;
    }

    /**
     * Gets the i18 n from resource bundle.
     * @param slingRequest the sling request
     * @param currentPage the current page
     * @param key the key
     * @param defaultValue the default value
     * @return the i18 n from resource bundle
     */
    public static String getI18NFromResourceBundle(SlingHttpServletRequest slingRequest, Page currentPage, String key,
            String defaultValue) {
    	LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Start");
        String retVal = getI18NFromResourceBundle(slingRequest, currentPage, key);
        if (StringUtils.isBlank(retVal) || StringUtils.equals(key, retVal)) {
            retVal = defaultValue;
        }
        LOGGER.debug("CommonUtil :: getI18NFromResourceBundle() :: Exit");
        return retVal;
    }

    /**
     * Generate hash value.
     * @param pagePath the page path
     * @return the string
     */
    public static String generateHashValue(final String pagePath) {
    	LOGGER.debug("CommonUtil :: generateHashValue() :: Start");
        CRC32 crc32Obj = new CRC32();
        crc32Obj.update(pagePath.getBytes());
        String retVal = Long.toHexString(crc32Obj.getValue());
        if (StringUtils.isBlank(retVal)) {
            retVal = StringUtils.EMPTY;
        }
        LOGGER.debug("CommonUtil :: generateHashValue() :: Exit");
        return retVal;
    }

    /**
     * Encode.
     *
     * @param value the value
     * @param encType the enc type
     * @return the string
     * @throws EatonApplicationException the eaton application exception
     */
    public static String encode(final String value, final String encType) throws EatonApplicationException {
    	LOGGER.debug("CommonUtil :: encode() :: Start");
        String encoded = null;
        StringBuilder buf = new StringBuilder();
        try {
            encoded = URLEncoder.encode(value, encType);
            if (encoded == null) {
                LOGGER.error("Unable to get encoded value. encoded var is null. Hence returning empty buf");
                return buf.toString();
            }
            final int length = encoded.length();
            buf = new StringBuilder(length);
            for (int i = 0; i < length; i++) {
                char focus = encoded.charAt(i);
                if (focus == STAR_CHAR) {
                    buf.append(STAR_ESCAPE_CHAR);
                } else if (focus == PLUS_CHAR) {
                    buf.append(SPACE_ESCAPE_CHAR1);
                } else if (focus == PERCENTAGE_CHAR && (i + 1) < length && encoded.charAt(i + 1) == SEVEN_CHAR
                        && encoded.charAt(i + 2) == E_CHAR) {
                    buf.append(TILD_CHAR);
                    i += 2;
                } else {
                    buf.append(focus);
                }
            }
        } catch (UnsupportedEncodingException exception) {
            // ideally never supposed to occur.
            LOGGER.error("Encoding exception for " + value + " and coding type" + encType, exception.getMessage());
            throw new EatonApplicationException("", exception);
        } catch (Exception exception) {
            LOGGER.error("Unknown exception for " + value + " and coding type" + encType, exception.getMessage());
            throw new EatonApplicationException("", exception);
        }
        LOGGER.debug("CommonUtil :: encode() :: Exit");
        return buf.toString();
    }

    /**
     * Days between.
     * @param d1 the d1
     * @param d2 the d2
     * @return the int
     */
    public static int daysBetween(Date d1, Date d2) {
        return (int) ((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24));
    }

    /**
     * Gets the original page.
     * @param currentPage the current page
     * @param resolver the resolver
     * @return the original page
     */
    public static Page getOriginalPage(final Page currentPage, final ResourceResolver resolver) {
    	LOGGER.debug("CommonUtil :: getOriginalPage() :: Start");
        LOGGER.debug("currentPage Path - " + currentPage.getPath());
        Page originalPage = currentPage;
        if (currentPage != null && currentPage.getPath().startsWith(CAMPAIGN_PATH)) {
            ValueMap pageProp = currentPage.getProperties();
            if (pageProp.containsKey(LOCATION)) {
                String locationVal = (String) pageProp.get(LOCATION);
                String orginalPagePath = locationVal.substring(0, locationVal.indexOf(JCR_CONTENT));
                PageManager pageManager = resolver.adaptTo(PageManager.class);
                originalPage = pageManager.getPage(orginalPagePath);
            }
        }
        LOGGER.debug("result Page Path - " + originalPage.getPath());
        LOGGER.debug("CommonUtil :: getOriginalPage() :: Exit");
        return originalPage;
    }
    /**
     * Gets the list from string array.
     * @param inputStringArray the input string array
     * @return the list from string array
     */
    public static List<String> getListFromStringArray(String[] inputStringArray) {
    	LOGGER.debug("CommonUtil :: getListFromStringArray() :: Start");
        List<String> outputStringList = null;
        if (inputStringArray != null && inputStringArray.length > 0) {
            outputStringList = Arrays.<String> asList(inputStringArray);
        }
        LOGGER.debug("CommonUtil :: getListFromStringArray() :: Exit");
        return outputStringList;
    }
    /**
     * Gets the list from string array.
     * @param inputStringArray the input string array
     * @return the list from string array
     */
    public static Map<String, String> getListFromStringMap(String[] inputStringArray) {
    	LOGGER.debug("CommonUtil :: getListFromStringMap() :: Start");
        Map<String, String> outputStringMap = new HashMap<String, String>();
        if (inputStringArray != null && inputStringArray.length > 0) {
            for(String outputString : inputStringArray) {
            	String[] outputStringArray = StringUtils.split(outputString, "~");
            	 if (outputStringArray != null && outputStringArray.length > 0) {
            		 outputStringMap.put(outputStringArray[0], outputStringArray[1]);
            	 }
            }
        }
        LOGGER.debug("CommonUtil :: getListFromStringMap() :: Exit");
        return outputStringMap;
    }
    
    /**
     * Gets the sling request string attribute.
     *
     * @param slingRequest the sling request
     * @param attrKey the attr key
     * @return the sling request string attribute
     */
    public static String getSlingRequestStringAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
    	LOGGER.debug("CommonUtil :: getSlingRequestStringAttribute() :: Start");
		String attrValue = StringUtils.EMPTY;
		if(slingRequest.getAttribute(attrKey) != null){
			attrValue = (String) slingRequest.getAttribute(attrKey);
		}
		LOGGER.debug("CommonUtil :: getSlingRequestStringAttribute() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request parameter.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request parameter
	 */
	public static String getSlingRequestParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestParameter() :: Start");
		String attrValue = StringUtils.EMPTY;
		if(slingRequest.getParameter(attrKey) != null){
			attrValue = slingRequest.getParameter(attrKey);
		}
		LOGGER.debug("CommonUtil :: getSlingRequestParameter() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request integer attribute.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request integer attribute
	 */
	public static Integer getSlingRequestIntegerAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestIntegerAttribute() :: Start");
		Integer attrValue = 0;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Integer.parseInt(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestIntegerAttribute() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request integer parameter.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request integer parameter
	 */
	public static Integer getSlingRequestIntegerParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestIntegerParameter() :: Start");
		Integer attrValue = 0;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Integer.parseInt(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestIntegerParameter() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request double attribute.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request double attribute
	 */
	public static Double getSlingRequestDoubleAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestDoubleAttribute() :: Start");
		Double attrValue = 0.0;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Double.parseDouble(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestDoubleAttribute() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request double parameter.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request double parameter
	 */
	public static Double getSlingRequestDoubleParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestDoubleParameter() :: Start");
		Double attrValue = 0.0;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Double.parseDouble(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestDoubleParameter() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request boolean attribute.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request boolean attribute
	 */
	public static Boolean getSlingRequestBooleanAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestBooleanAttribute() :: Start");
		Boolean attrValue = false;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Boolean.parseBoolean(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestBooleanAttribute() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the sling request boolean parameter.
	 *
	 * @param slingRequest the sling request
	 * @param attrKey the attr key
	 * @return the sling request boolean parameter
	 */
	public static Boolean getSlingRequestBooleanParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		LOGGER.debug("CommonUtil :: getSlingRequestBooleanParameter() :: Start");
		Boolean attrValue = false;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Boolean.parseBoolean(attrStringValue);
			}
		}
		LOGGER.debug("CommonUtil :: getSlingRequestBooleanParameter() :: Exit");
		return attrValue;
	}
	
	/**
	 * Gets the link title.
	 *
	 * @param linkTitle the link title
	 * @param link the link
	 * @param resourceResolver the resource resolver
	 * @return title
	 */
	public static String getLinkTitle(String linkTitle, String link, ResourceResolver resourceResolver) {
		LOGGER.debug("CommonUtil :: getLinkTitle() :: Start");
		String titleValue = linkTitle;
		if(null == linkTitle){
			if(null != link && StringUtils.startsWith(link, CommonConstants.CONTENT_ROOT_FOLDER)){
					Page linkPage = resourceResolver.getResource(link).adaptTo(Page.class);
					titleValue = null != linkPage.getNavigationTitle()? linkPage.getNavigationTitle() : null != linkPage.getPageTitle() ? linkPage.getPageTitle() : linkPage.getTitle();
			} else {
				titleValue = StringUtils.EMPTY;
			}
		}
		LOGGER.debug("CommonUtil :: getLinkTitle() :: Exit");
		return titleValue;
	}

	/**
	 * This method returns the cloud configuration page object.
	 *
	 * @param configManagerFctry the config manager fctry
	 * @param resolver the resolver
	 * @param pageResource the page resource
	 * @param configName the config name
	 * @return the cloud config obj
	 */
	public static Configuration getCloudConfigObj(ConfigurationManagerFactory configManagerFctry, 
			ResourceResolver resolver, Resource pageResource, String configName) {
		LOGGER.debug("CommonUtil :: getCloudConfigObj() :: Start");
		// inherited page properties of the current page.
		InheritanceValueMap currentPageInheritedProp = new HierarchyNodeInheritanceValueMap(pageResource);
		String[] services = getStringArrayInheritedProperty(currentPageInheritedProp,
		                    CommonConstants.CLOUD_SERVICES);
		ConfigurationManager configMgr = configManagerFctry.getConfigurationManager(resolver);
		Configuration configObj = configMgr.getConfiguration(configName, services);
		LOGGER.debug("CommonUtil :: getCloudConfigObj() :: Exit");
		return configObj;
	}
	
	/**
     * Gets the home page path.
     * @param page the page
     * @return the home page path
     */
    public static String getHomePagePath(Page page) {
    	LOGGER.debug("CommonUtil :: getHomePagePath() :: Start");
        LOGGER.debug("Depth - " + page.getDepth());
        String homepagePath = StringUtils.EMPTY;
        if (StringUtils.startsWith(page.getPath(), CommonConstants.CONTENT_ROOT_FOLDER) && page.getDepth() > CommonConstants.COUNTRY_PAGE_DEPTH) {
            homepagePath = page.getAbsoluteParent(CommonConstants.LANGUAGE_PAGE_DEPTH-1).getPath();
        }
        LOGGER.debug("CommonUtil :: getHomePagePath() :: Exit");
        return homepagePath;
    }
    
    /**
     * This method gets the home page.
     *
     * @param page the page
     * @return the home page
     */
    public static Page getHomePage(Page page) {
    	LOGGER.debug("CommonUtil :: getHomePage() :: Start");
        LOGGER.debug("Depth - " + page.getDepth());
        Page homePage = null;
        if (StringUtils.startsWith(page.getPath(), CommonConstants.CONTENT_ROOT_FOLDER) && page.getDepth() > CommonConstants.COUNTRY_PAGE_DEPTH) {
            homePage = page.getAbsoluteParent(CommonConstants.LANGUAGE_PAGE_DEPTH-1);
        }
        LOGGER.debug("CommonUtil :: getHomePage() :: Exit");
        return homePage;
    }
    
    /**
     * This method checks if it is a home page.
     *
     * @param page the page
     * @return isHomepage
     */
    public static boolean isHomePagePath(Page page) {
    	LOGGER.debug("CommonUtil :: isHomePagePath() :: Start");
        LOGGER.debug("Depth - " + page.getDepth());
        boolean isHomepage = false;
        if (StringUtils.startsWith(page.getPath(), CommonConstants.CONTENT_ROOT_FOLDER) && page.getDepth() == CommonConstants.LANGUAGE_PAGE_DEPTH) {
        	isHomepage = true;
        }
        LOGGER.debug("CommonUtil :: isHomePagePath() :: Exit");
        return isHomepage;
    }
    
    /**
     * This method reads the jcr:data of file and returns the response.
     *
     * @param adminResourceResolver the admin resource resolver
     * @param filePath the file path
     * @return response from file
     * @throws IOException Signals that an I/O exception has occurred.
     * @throws RepositoryException the repository exception
     */
    public static String getResponseStringFromFile(ResourceResolver adminResourceResolver, String filePath) throws IOException, RepositoryException {
    	LOGGER.debug("CommonUtil :: getResponseStringFromFile() :: Start");
		StringWriter writer = new StringWriter();
		
		Resource res = adminResourceResolver.getResource(filePath.concat("/jcr:content/renditions/original/jcr:content"));
		if(res != null) {
			ValueMap resvm = res.getValueMap();
			if(resvm.containsKey("jcr:data")){
				InputStream stream = (InputStream) resvm.get("jcr:data");
				IOUtils.copy(stream, writer, "UTF-8");
			}
		}
		LOGGER.debug("CommonUtil :: getResponseStringFromFile() :: Exit");
		return writer.toString();
	}
    
    /**
     * This method appends the .html if link is internal
     *
     * @param link the link
     * @return the link
     */
    public static String dotHtmlLink(String link) {
    	LOGGER.debug("CommonUtil :: dotHtmlLink() :: Start");
    	String linkPath = link;
    	if(null != linkPath) {
			if(StringUtils.startsWith(linkPath, CommonConstants.CONTENT_ROOT_FOLDER)){
				linkPath = linkPath + CommonConstants.HTML_EXTN;
			} else if(StringUtils.startsWith(linkPath, CommonConstants.WWW)) {
				linkPath = CommonConstants.HTTP_SLASH + linkPath ;
			}
    	} else {
    		linkPath = StringUtils.EMPTY;
    	}
    	LOGGER.debug("CommonUtil :: dotHtmlLink() :: Exit");
		return linkPath;
	}
    
    /**
     * This method returns the alternate txt from DAM asset.
     *
     * @param resourceResolver the resource resolver
     * @param imagePath the image path
     * @return asset alternate text
     */
    public static String getAssetAltText(ResourceResolver resourceResolver, String imagePath) {
    	LOGGER.debug("CommonUtil :: getAssetAltText() :: Start");
		String assetAltText = StringUtils.EMPTY;
		Resource assetResource = null;
		try {
			assetResource = resourceResolver.getResource(URLDecoder.decode(imagePath, CommonConstants.UTF_8));

			if(null != assetResource) {
				Resource jcrResource = assetResource.getChild(JcrConstants.JCR_CONTENT);
				
				if(null != jcrResource) {
					Resource metaDataResource =  jcrResource.getChild(DamConstants.METADATA_FOLDER);
					ValueMap properties = metaDataResource.getValueMap();
					assetAltText = !StringUtils.equals(StringUtils.EMPTY, CommonUtil.getStringProperty(properties, DamConstants.DC_TITLE)) ? CommonUtil.getStringProperty(properties, DamConstants.DC_TITLE) : assetResource.getName();
				}
			}
		} catch (UnsupportedEncodingException e) {
			LOGGER.error("Exception occured due to improper image name - ", e);
		}
		LOGGER.debug("CommonUtil :: getAssetAltText() :: Exit");
		return assetAltText;
	}
    
    /**
     * Gets the asset size.
     *
     * @param asset the asset
     * @return the asset size
     */
    public static String getAssetSize(Asset asset) {
		String assetSize = StringUtils.EMPTY;
		if (null != asset) {
			String spaceUnit = StringUtils.EMPTY;
			// get the asset size in Bytes unit
			long sizeOfAsset = (long) (asset.getOriginal().getSize() / Math.pow(10, 6));

			// set the asset size unit
			if (sizeOfAsset < 1) {
				sizeOfAsset = (long) (asset.getOriginal().getSize() / Math.pow(10, 3));
				spaceUnit = CommonConstants.KB;
				if (sizeOfAsset < 1) {
					sizeOfAsset = (long) (asset.getOriginal().getSize());
					spaceUnit = CommonConstants.B;
				}
			} else {
				spaceUnit = CommonConstants.MB;
			}

			assetSize = getType(asset) + CommonConstants.BLANK_SPACE + sizeOfAsset + CommonConstants.BLANK_SPACE + spaceUnit;
		}
		return assetSize;
	}
    
	/**
	 * Gets the type.
	 *
	 * @return the type
	 */
    public static String getType(Asset asset) {
		String assetType = StringUtils.EMPTY;
		if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
				PdfHandler.CONTENT_MIMETYPE))
			assetType = CommonConstants.PDF;
		else if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
				StandardImageHandler.JPEG_MIMETYPE))
			assetType = CommonConstants.JPEG;
		else if (StringUtils.equals(asset.getMetadata().get(DamConstants.DC_FORMAT).toString(),
				DamConstants.THUMBNAIL_MIMETYPE))
			assetType = CommonConstants.PNG;
		return assetType;
	}
	
    /**
     * Gets the asset.
     *
     * @param assetResource the asset resource
     * @return the asset
     */
    public static Asset getAsset(Resource assetResource) {
		Asset asset = null;
		if(null != assetResource) {
			if (StringUtils.equals(CommonUtil.getStringProperty(assetResource.getValueMap(), CommonConstants.JCR_PRIMARY_TYPE), DamConstants.NT_DAM_ASSET)) {
				asset = assetResource.adaptTo(Asset.class);
			}
		}
		return asset;
	}
}