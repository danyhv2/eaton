package com.eaton.platform.core.models;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This bean class used in LogoHelper class to store content </html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LogoModel {
	
	/** The logo. */
	@Inject @Named("logoReference")
	private String logo;
	
	/** The logo alt text. */
	@Inject
	private String logoAltText;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
	
	/**
	 * Gets the logo alt text.
	 *
	 * @return the logo alt text
	 */
	public String getLogoAltText() {
		String imageAltText = this.logoAltText;
		if(null == imageAltText) {
			imageAltText = CommonUtil.getAssetAltText(this.resourceResolver, this.logo);
		}
		return imageAltText;
	}

	/**
	 * Gets the logo image path.
	 *
	 * @return the logo image path.
	 */
	public String getLogo() {
		String logoPath = StringUtils.EMPTY;
		if(null != this.logo) {
			logoPath = this.logo;
		}
		return logoPath;
	}
	
}
