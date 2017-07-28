package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * This class is used to inject the dialog properties.
 * @author TCS
 *
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageBean {
	
	@Inject
	private String alt;
	
	@Inject
	private String fileReference;
	
	@Inject
	private String linkURL;
	
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

	/**
	 * if author has not entered any value in alt txt field in dialog box then
	 * return the image node name from DAM
	 * 
	 * @return transAlttxt
	 */
	public String getAlt() {
		if(alt == null) {
				return CommonUtil.getAssetAltText(resourceResolver, fileReference);
		}
		return alt;
	}

	/**
	 * 
	 * @return image path
	 */
	public String getFileReference() {
		return fileReference;
	}

	/**
	 * 
	 * @return linkURL
	 */
	public String getLinkURL() {
		return CommonUtil.dotHtmlLink(linkURL);
	}

}
