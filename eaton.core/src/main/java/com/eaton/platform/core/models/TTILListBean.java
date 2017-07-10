package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: It is a Sling Model class which automatically maps from Sling objects
 * i.e. dialog fields are injected </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TTILListBean {

	@Inject
	private String view;
	
	@Inject
	private String transHeader;
	
	@Inject
	private String headerLink;
	
	@Inject
	private String newWindow;
	
	@Inject
	private String listType;
	
	@Inject
	private String parentPage;
	
	@Inject
	private String tags;
	
	@Inject
	private String sort;
	
	@Inject
	private int count;
	
    @Inject @Optional
    private Resource manualLinks;
    
    @Inject @Optional
    private Resource fixedLinks;
    
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

    /**
     * 
     * @return view
     */
    public String getView() {
		return view;
	}
    
    /**
     * 
     * @return header
     */
	public String getTransHeader() {
		return CommonUtil.getLinkTitle(transHeader, headerLink, resourceResolver);
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
	 * @return newWindow
	 */
	public String getNewWindow() {
		return newWindow;
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
	 * @return parentPage
	 */
	public String getParentPage() {
		return parentPage;
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
	 * @return count
	 */
	public int getCount() {
		return count;
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
	 * @return fixedLinks
	 */
	public Resource getFixedLinks() {
		return fixedLinks;
	}
	
	/**
	 * 
	 * @return resourceResolver
	 */
	public ResourceResolver getResourceResolver() {
		return resourceResolver;
	}
	
}
