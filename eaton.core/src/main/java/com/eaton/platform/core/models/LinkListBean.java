package com.eaton.platform.core.models;

import javax.inject.Inject;

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
	
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
    
	public String getView() {
		return view;
	}

	public String getPath() {
		return path;
	}

	public String getTransHeader() {
		return CommonUtil.getLinkTitle(transHeader, headerLink, resourceResolver);
	}

	public String getOverlayPath() {
		return overlayPath;
	}

	public String getListType() {
		return listType;
	}

	public int getCount() {
		return count;
	}

	public String getLinkTitle() {
		return linkTitle;
	}

	public String getParentPage() {
		return parentPage;
	}

	public Resource getFixedLinks() {
		return fixedLinks;
	}

	public Resource getManualLinks() {
		return manualLinks;
	}

	public String getTags() {
		return tags;
	}

	public String getSort() {
		return sort;
	}

	public String getNewWindow() {
		return newWindow;
	}

	public Resource getSocialLinks() {
		return socialLinks;
	}

	public String getHeaderLink() {
		return CommonUtil.dotHtmlLink(headerLink);
	}

}
