package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used to inject the dialog properties.</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ImageModel {
	
	/** Variable The alt. */
	@Inject
	private String alt;
	
	/** Variable The fileReference. */
	@Inject
	private String fileReference;
	
	/** Variable The linkURL. */
	@Inject
	private String linkURL;
	
	/** Variable The resourceResolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

	/**
	 * if author has not entered any value in alt txt field in dialog box then
	 * return the image node name from DAM.
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
	 * Gets the file reference.
	 *
	 * @return image path
	 */
	public String getFileReference() {
		return fileReference;
	}

	/**
	 * Gets the link URL.
	 *
	 * @return linkURL
	 */
	public String getLinkURL() {
		return CommonUtil.dotHtmlLink(linkURL);
	}

}
