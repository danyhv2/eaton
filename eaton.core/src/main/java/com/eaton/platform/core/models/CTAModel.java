package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class CTAModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CTAModel   {

	
	/** The trans CTA label. */
	@Inject
	private String  label;

	/** The cta link. */
	@Inject
	private String link;
	
	/** The new window. */
	@Inject
	private String newWindow;
	
	/**
	 * Gets the cta link.
	 *
	 * @return ctaLink
	 */
	@Inject
	private String color;
	
	
	public String getLink() {
		return CommonUtil.dotHtmlLink(link) ;
	}

	/**
	 * Gets the CTA label.
	 *
	 * @return label
	 */
	public String getLabel() {
		return label;
	}

	/**
	 * Gets the new window.
	 *
	 * @return newWindow
	 */
	public String getNewWindow(){
		return newWindow;
	}
	
	/**
	 * Gets the color.
	 *
	 * @return color
	 */
	public String getColor(){
		return color;
	}

}
