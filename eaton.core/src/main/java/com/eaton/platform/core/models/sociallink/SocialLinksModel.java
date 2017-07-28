package com.eaton.platform.core.models.sociallink;

import javax.inject.Inject;

import org.apache.commons.lang.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.eaton.platform.core.constants.CommonConstants;

/**
 * The Class SocialLinksModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SocialLinksModel {
	
	/** The social sites. */
	@Inject
	private String socialLinkType;
	
	/** The social links. */
	@Inject
	private String path;

	/**
	 * Gets the social sites.
	 *
	 * @return socialSites
	 */
	public String getSocialLinkType() {
		return this.socialLinkType;
	}

	/**
	 * Gets the social links.
	 *
	 * @return socialLinks
	 */
	public String getPath() {
		String socialLinks = this.path;
		if(null == socialLinks) {
			socialLinks = StringUtils.EMPTY;
		}
		return socialLinks;
	}

	/**
	 * Gets the target.
	 *
	 * @return the target
	 */
	public String getTarget() {
		return CommonConstants.TARGET_BLANK;
	}
	
}
