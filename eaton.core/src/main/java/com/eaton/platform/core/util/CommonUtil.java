package com.eaton.platform.core.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.NumberFormat;
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
        LOGGER.debug("Entered into getStringProperty method");
        String returnVal = StringUtils.EMPTY;
        if (valueMap.containsKey(key)) {
            returnVal = (String) valueMap.get(key);
            // Remove XSS issues
            returnVal = xssAPI.getValidHref(returnVal);
        }
        LOGGER.debug("Exited from getStringProperty method");
        return returnVal;
    }

    /**
     * Gets the string property.
     * @param valueMap the value map
     * @param propKey the prop key
     * @return the string property
     */
    public static String getStringProperty(final ValueMap valueMap, final String propKey) {
        LOGGER.debug("Entered into getStringProperty method");
        String retVal = StringUtils.EMPTY;
        if (valueMap.containsKey(propKey)) {
            retVal = (String) valueMap.get(propKey);
        }
        LOGGER.debug("Exited from getStringProperty method");
        return retVal;
    }
    
    public static String getStringProperty(final Map<String, Object> map, final String propKey) {
        LOGGER.debug("Entered into getStringProperty method");
        String retVal = StringUtils.EMPTY;
        if (map.containsKey(propKey)) {
            retVal = (String) map.get(propKey);
        }
        LOGGER.debug("Exited from getStringProperty method");
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
        LOGGER.debug("Entered into getDateStringProperty method");
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
        LOGGER.debug("Exited from getDateStringProperty method");
        return strDate;
    }

    /**
     * Gets the date property.
     * @param valueMap the value map
     * @param propKey the prop key
     * @return the date property
     */
    public static Calendar getDateProperty(final ValueMap valueMap, final String propKey) {
        LOGGER.debug("Entered into getDateProperty method");
        Calendar dateVal = null;
        if (valueMap.containsKey(propKey)) {
            dateVal = (Calendar) valueMap.get(propKey);
        }
        LOGGER.debug("Exited from getDateProperty method");
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
        LOGGER.debug("Entered into getDateProperty method");
        String formattedDateVal = StringUtils.EMPTY;
        if (valueMap.containsKey(propKey)) {
            Calendar dateVal = (Calendar) valueMap.get(propKey);
            formattedDateVal = format(dateVal, simpleDateFormat);
        }
        LOGGER.debug("Exited from getDateProperty method");
        return formattedDateVal;
    }

    /**
     * Format.
     * @param date the date
     * @param simpleDateFormat the simple date format
     * @return the string
     */
    public static String format(Calendar date, SimpleDateFormat simpleDateFormat) {
        LOGGER.debug("Entered into format method");
        simpleDateFormat.setCalendar(date);
        String dateFormatted = simpleDateFormat.format(date.getTime());
        LOGGER.debug("Exit from format method");
        return dateFormatted;
    }

    /**
     * Gets the string array property.
     * @param valueMap the value map
     * @param key the key
     * @return the string array property
     */
    public static String[] getStringArrayProperty(ValueMap valueMap, String key) {
        LOGGER.debug("Entered into getStringArrayProperty method");
        String[] returnVal = EMPTY_ARRAY;
        if (valueMap.containsKey(key)) {
            returnVal = (String[]) valueMap.get(key);
        }
        LOGGER.debug("Exited from getStringArrayProperty method");
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
        LOGGER.debug("Entered into getStringInheritedProperty method");
        String retVal = inheritanceValueMap.getInherited(propKey, StringUtils.EMPTY);
        LOGGER.debug("Exited from getStringInheritedProperty method");
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
        LOGGER.debug("Entered into getStringArrayInheritedProperty method");
        String[] returnVal = inheritanceValueMap.getInherited(propKey, EMPTY_ARRAY);
        LOGGER.debug("Exited from getStringArrayInheritedProperty method");
        return returnVal;
    }
    
    /**
     * Escape html.
     * @param htmlString the html string
     * @return the string
     */
    public static String escapeHTML(final String htmlString) {
        LOGGER.debug("Entered into escapeHTML method");
        String output = htmlString;
        if (output != null) {
            output = output.replaceAll(REG_EXPR, SPACE_STRING)
                    .replaceAll(BACKSLASH_SINGLE_QUOTE, SINGLE_QUOTE).replaceAll(".html", "").trim();
        }
        LOGGER.debug("Exited from escapeHTML method");
        return output;
    }

    /**
     * Gets the i18 n from user source.
     * @param slingRequest the sling request
     * @param key the key
     * @return the i18 n from user source
     */
    public static String getI18NFromUserSource(SlingHttpServletRequest slingRequest, String key) {
        LOGGER.debug("Entered into getI18NFromUserSource method");
        I18n i18n = new I18n(slingRequest);
        String retVal = i18n.get(key);
        LOGGER.debug("Exited from getI18NFromUserSource method");
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
        LOGGER.debug("Entered into getI18NFromResourceBundle method");
        Locale pageLang = currentPage.getLanguage(false);        
        String retVal = getI18NFromLocale(slingRequest, key, pageLang);
        LOGGER.debug("Exited from getI18NFromResourceBundle method");
        return retVal;
    }

    /**
     * Gets the i18 n from locale.
     * @param slingRequest the sling request
     * @param key the key
     * @param pageLang the page lang
     * @param args
     * @return the i18 n from locale
     */
    public static String getI18NFromResourceBundle(SlingHttpServletRequest slingRequest, Page currentPage, String key,
            Object... args) {
        LOGGER.debug("Entered into getI18NFromResourceBundle method");
        Locale pageLang = currentPage.getLanguage(false);
        String retVal = getI18NFromLocale(slingRequest, key, pageLang, args);
        LOGGER.debug("Exited from getI18NFromResourceBundle method");
        return retVal;
    }

    /**
     * Gets the i18 n from locale.
     * @param slingRequest the sling request
     * @param key the key
     * @param pageLang the page lang
     * @param args
     * @return the i18 n from locale
     */
    public static String getI18NFromLocale(SlingHttpServletRequest slingRequest, String key, Locale pageLang,
            Object... args) {
        LOGGER.debug("Entered into getI18NFromLocale method");
        ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLang);
        String retVal = I18n.get(resourceBundle, key, null, args);
        LOGGER.debug("Exited from getI18NFromLocale method");
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
        LOGGER.debug("Entered into getI18NFromLocale method");
        ResourceBundle resourceBundle = slingRequest.getResourceBundle(pageLang);
        I18n i18n = new I18n(resourceBundle);
        String retVal = i18n.get(key);
        LOGGER.debug("Exited from getI18NFromLocale method");
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
        LOGGER.debug("Entered into getI18NFromUserSource method");
        String retVal = getI18NFromUserSource(slingRequest, key);
        if (StringUtils.isBlank(retVal) || StringUtils.equals(key, retVal)) {
            retVal = defaultValue;
        }
        LOGGER.debug("Exited from getI18NFromUserSource method");
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
        LOGGER.debug("Entered into getI18NFromResourceBundle method");
        String retVal = getI18NFromResourceBundle(slingRequest, currentPage, key);
        if (StringUtils.isBlank(retVal) || StringUtils.equals(key, retVal)) {
            retVal = defaultValue;
        }
        LOGGER.debug("Exited from getI18NFromResourceBundle method");
        return retVal;
    }

    /**
     * Generate hash value.
     * @param pagePath the page path
     * @return the string
     */
    public static String generateHashValue(final String pagePath) {
        LOGGER.debug("Entered into generateHashValue method");
        CRC32 crc32Obj = new CRC32();
        crc32Obj.update(pagePath.getBytes());
        String retVal = Long.toHexString(crc32Obj.getValue());
        if (StringUtils.isBlank(retVal)) {
            retVal = StringUtils.EMPTY;
        }
        LOGGER.debug("Exited from generateHashValue method");
        return retVal;
    }

    /**
     * Encode.
     * @param value the value
     * @param encType the enc type
     * @return the string
     * @throws EatonApplicationException 
     */
    public static String encode(final String value, final String encType) throws EatonApplicationException {
        LOGGER.debug("Entered into encode method");
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
        LOGGER.debug("Exited from encode method");
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
        LOGGER.debug("Entered into getOriginalPage method");
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
        LOGGER.debug("Exited from getOriginalPage method");
        return originalPage;
    }
    /**
     * Gets the list from string array.
     * @param inputStringArray the input string array
     * @return the list from string array
     */
    public static List<String> getListFromStringArray(String[] inputStringArray) {
        LOGGER.debug("Entered into getListFromStringArray method");
        List<String> outputStringList = null;
        if (inputStringArray != null && inputStringArray.length > 0) {
            outputStringList = Arrays.<String> asList(inputStringArray);
        }
        LOGGER.debug("Exit from getListFromStringArray method");
        return outputStringList;
    }
    /**
     * Gets the list from string array.
     * @param inputStringArray the input string array
     * @return the list from string array
     */
    public static Map<String, String> getListFromStringMap(String[] inputStringArray) {
        LOGGER.debug("Entered into getListFromStringMap method");
        Map<String, String> outputStringMap = new HashMap<String, String>();
        if (inputStringArray != null && inputStringArray.length > 0) {
            for(String outputString : inputStringArray) {
            	String[] outputStringArray = StringUtils.split(outputString, "~");
            	 if (outputStringArray != null && outputStringArray.length > 0) {
            		 outputStringMap.put(outputStringArray[0], outputStringArray[1]);
            	 }
            }
        }
        LOGGER.debug("Exit from getListFromStringMap method");
        return outputStringMap;
    }
    
    public static String getSlingRequestStringAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		String attrValue = StringUtils.EMPTY;
		if(slingRequest.getAttribute(attrKey) != null){
			attrValue = (String) slingRequest.getAttribute(attrKey);
		}
		return attrValue;
	}
	
	public static String getSlingRequestParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		String attrValue = StringUtils.EMPTY;
		if(slingRequest.getParameter(attrKey) != null){
			attrValue = slingRequest.getParameter(attrKey);
		}
		return attrValue;
	}
	
	public static Integer getSlingRequestIntegerAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Integer attrValue = 0;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Integer.parseInt(attrStringValue);
			}
		}
		return attrValue;
	}
	
	public static Integer getSlingRequestIntegerParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Integer attrValue = 0;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Integer.parseInt(attrStringValue);
			}
		}
		return attrValue;
	}
	
	public static Double getSlingRequestDoubleAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Double attrValue = 0.0;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Double.parseDouble(attrStringValue);
			}
		}
		return attrValue;
	}
	
	public static Double getSlingRequestDoubleParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Double attrValue = 0.0;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Double.parseDouble(attrStringValue);
			}
		}
		return attrValue;
	}
	
	public static Boolean getSlingRequestBooleanAttribute(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Boolean attrValue = false;
		if(slingRequest.getAttribute(attrKey) != null){
			String attrStringValue = (String) slingRequest.getAttribute(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Boolean.parseBoolean(attrStringValue);
			}
		}
		return attrValue;
	}
	
	public static Boolean getSlingRequestBooleanParameter(final SlingHttpServletRequest slingRequest, final String attrKey) {
		Boolean attrValue = false;
		if(slingRequest.getParameter(attrKey) != null){
			String attrStringValue = slingRequest.getParameter(attrKey);
			if(StringUtils.isNotBlank(attrStringValue)) {
				attrValue = Boolean.parseBoolean(attrStringValue);
			}
		}
		return attrValue;
	}
    
    public static String convertStringToIntegerCurrency(String value, String currencyType) {
    	
		NumberFormat numFmt = null;
		String returnValue = StringUtils.EMPTY;
		try {
			
			//int currencyVal = Integer.valueOf(value);
			Double currencyVal = Double.valueOf(value);
			if(StringUtils.equals("USD", currencyType)) {
				numFmt = NumberFormat.getCurrencyInstance(Locale.US);
			} 
			if(StringUtils.equals("CAD", currencyType)) {
				numFmt = NumberFormat.getCurrencyInstance(Locale.CANADA);
			} 
			if(numFmt != null) {
				returnValue = numFmt.format(currencyVal);
			}
			returnValue = returnValue.substring(0, returnValue.indexOf("."));
			if(returnValue.startsWith("("))
			{
				returnValue="-"+returnValue.substring(1);
			}
			
		} catch (NumberFormatException nfe) {
			LOGGER.error("NumberFormatException - "+nfe); 
		}
		return returnValue;
    }
    
	public static String removeDotHtml(String link) {
		return StringUtils.removeEnd(link, CommonConstants.HTML_EXTN);
	}

	public static String dotHtmlLink(String link) {
		if(StringUtils.startsWith(link, CommonConstants.STARTS_WITH_CONTENT)){
			return link + CommonConstants.HTML_EXTN;
		}
		return link;
	}
	
	/**
	 * 
	 * @param linkTitle
	 * @param link
	 * @param resourceResolver
	 * @return linkTitle
	 */
	public static String getLinkTitle(String linkTitle, String link, ResourceResolver resourceResolver) {
		if(linkTitle == null && link!=null ){
				Page linkPage = resourceResolver.getResource(link).adaptTo(Page.class);
				return linkPage.getNavigationTitle() != null? linkPage.getNavigationTitle() : linkPage.getPageTitle() != null ? linkPage.getPageTitle() : linkPage.getTitle();
		}
		return linkTitle;
	}

	/**
	 * This method returns the cloud configuration page object
	 * @param configManagerFctry
	 * @param resolver
	 * @param pageResource
	 * @param configName
	 * @return
	 */
	public static Configuration getCloudConfigObj(ConfigurationManagerFactory configManagerFctry, 
			ResourceResolver resolver, Resource pageResource, String configName) {
		// inherited page properties of the current page.
		InheritanceValueMap currentPageInheritedProp = new HierarchyNodeInheritanceValueMap(pageResource);
		String[] services = getStringArrayInheritedProperty(currentPageInheritedProp,
		                    CommonConstants.CLOUD_SERVICES);
		ConfigurationManager configMgr = configManagerFctry.getConfigurationManager(resolver);
		Configuration configObj = configMgr.getConfiguration(configName, services);
		return configObj;
	}
}