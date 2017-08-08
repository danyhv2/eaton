package com.eaton.platform.core.models;

import java.util.Calendar;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This bean class used in LinkListHelper class to store content </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LinkListBean {
	
	@Inject
	private String view;
	
	@Inject
	private String linkTitle;
	
	@Inject
	private String transHeader;
	
	@Inject
	private String headerLink;
	
	@Inject
	private String parentPage;
	
	@Inject
	private String tags;
	
	@Inject
	private Resource fixedLinks;
	
	@Inject
	private String sort;
	
	@Inject
	private String path;
	
	@Inject
	private int count;
	
	@Inject
	private String newWindow;
	
	@Inject
	private String overlayPath;
	
	@Inject 
	private String listType;
	
	@Inject 
	private Resource manualLinks;
	
	@Inject 
	private Resource socialLinks;
	
	@Inject 
	private Resource downloadLinks;
	
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
    
    @Inject
	private String alignment;
    
    @Inject
	private String copyRightText;
    
    /**
     * 
     * @return view
     */
	public String getView() {
		return view;
	}

	/**
	 * 
	 * @return path
	 */
	public String getPath() {
		return path;
	}

	public String getTransHeader() {
		return CommonUtil.getLinkTitle(transHeader, headerLink, resourceResolver);
	}

	/**
	 * 
	 * @return overlayPath
	 */
	public String getOverlayPath() {
		return overlayPath;
	}

	/**
	 * 
	 * @return listType
	 */
	public String getListType() {
		return listType;
	}

	/**
	 * 
	 * @return count
	 */
	public int getCount() {
		return count;
	}

	/**
	 * 
	 * @return linkTitle
	 */
	public String getLinkTitle() {
		return linkTitle;
	}

	/**
	 * 
	 * @return parentPage
	 */
	public String getParentPage() {
		return parentPage;
	}

	/**
	 * 
	 * @return fixedLinks
	 */
	public Resource getFixedLinks() {
		return fixedLinks;
	}

	/**
	 * 
	 * @return manualLinks
	 */
	public Resource getManualLinks() {
		return manualLinks;
	}

	/**
	 * 
	 * @return tags
	 */
	public String getTags() {
		return tags;
	}

	/**
	 * 
	 * @return sort
	 */
	public String getSort() {
		return sort;
	}

	/**
	 * 
	 * @return newWindow
	 */
	public String getNewWindow() {
		return newWindow;
	}

	/**
	 * 
	 * @return socialLinks
	 */
	public Resource getSocialLinks() {
		return socialLinks;
	}

	/**
	 * 
	 * @return headerLink
	 */
	public String getHeaderLink() {
		return CommonUtil.dotHtmlLink(headerLink);
	}

	/**
	 * 
	 * @return downloadLinks
	 */
	public Resource getDownloadLinks() {
		return downloadLinks;
	}

	/**
	 * @return the alignment
	 */
	public String getAlignment() {
		return alignment;
	}

	/**
	 * 
	 * @return copyright text along with current year
	 */
	public String getCopyRightText() {
		if(StringUtils.isBlank(copyRightText)) {
			copyRightText = StringUtils.EMPTY;
		}
		Calendar currentDate = Calendar.getInstance();   // Gets the current date and time
		return currentDate.get(Calendar.YEAR) + " " + copyRightText;
	}
	
	

}
