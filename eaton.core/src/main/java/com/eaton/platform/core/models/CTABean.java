package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

import com.eaton.platform.core.util.CommonUtil;

@Model(adaptables = Resource.class)
public class CTABean   {

	@Inject
	ResourceResolver resourceResolver;
	
	@Inject @Optional
	private String  transCTALabel;

	@Inject @Optional
	private String ctaLink;
	
	@Inject @Optional
	private String newWindow;
	
	/**
	 * 
	 * @return ctaLink
	 */
	public String getCtaLink() {
		return CommonUtil.dotHtmlLink(ctaLink) ;
	}

	/**
	 * 
	 * @return CTALabel
	 */
	public String getTransCTALabel() {
		return transCTALabel;
	}

	/**
	 * 
	 * @return newWindow
	 */
	public String getNewWindow(){
		return newWindow;
	}
	
}
