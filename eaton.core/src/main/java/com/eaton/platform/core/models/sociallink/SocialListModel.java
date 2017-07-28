package com.eaton.platform.core.models.sociallink;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class SocialListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SocialListModel {
	 
	/** The links. */
	public List<SocialLinksModel> links;
	
	/** The header. */
	@Inject
	private String header;
	
	/** The social links. */
	@Inject
	private Resource socialLinks;
	
	/** The viewAllText. */
	@Inject
	private String viewAllText;
	
	/** The viewAllLinkPath. */
	@Inject
	private String viewAllLinkPath;
	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		links = new ArrayList<SocialLinksModel>();
		if (socialLinks != null) {
			populateModel(links, socialLinks);
		}
	}
	
	/**
	 * Populate model.
	 *
	 * @param array the array
	 * @param resource the resource
	 * @return social links
	 */
	public List<SocialLinksModel> populateModel(List<SocialLinksModel> array, Resource resource) {
		if (resource != null) {
			Iterator<Resource> linkResources = resource.listChildren();
			while (linkResources.hasNext()) {
				SocialLinksModel socialLink = linkResources.next().adaptTo(SocialLinksModel.class);
				if (socialLink != null) {
					array.add(socialLink);
				}
			}
		}
		return array;
	}

	/**
	 * Gets the header.
	 *
	 * @return the header
	 */
	public String getHeader() {
		return header;
	}

	/**
	 * Gets the view all text.
	 *
	 * @return the view all text
	 */
	public String getViewAllText() {
		return viewAllText;
	}

	/**
	 * Gets the view all link path.
	 *
	 * @return the view all link path
	 */
	public String getViewAllLinkPath() {
		return CommonUtil.dotHtmlLink(viewAllLinkPath);
	}

}
