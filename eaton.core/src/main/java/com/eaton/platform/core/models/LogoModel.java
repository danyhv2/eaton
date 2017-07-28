package com.eaton.platform.core.models;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used in LogoHelper class to store content </html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LogoModel {

	/** The view. */
	@Inject
	private String view;
	
	/** The logo. */
	@Inject @Named("logoReference")
	private String logo;
	
	
	@Inject
	private String logoAltText;
	
	/**
	 * Gets the view.
	 *
	 * @return the view.
	 */
	

	public String getLogoAltText() {
		return logoAltText;
	}

	/**
	 * Gets the logo image path.
	 *
	 * @return the logo image path.
	 */
	public String getLogo() {
		String logoPath = StringUtils.EMPTY;
		if(null != logo) {
			logoPath = logo;
		}
		return logoPath;
	}

	
	
}
