package com.eaton.platform.core.models.linklist;

import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.day.cq.dam.api.Asset;
import com.day.cq.dam.api.DamConstants;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This Sling Model used in ViewContentList class
 *  to load Manual links multifield for Generic views</html> .
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ManualLinksModel {

	/** The link title. */
	@Inject @Named("transLinkTitle")
	private String linkTitle;
	
	/** The overlay path. */
	@Inject
	private String overlayPath;
	
	/** The page link. */
	@Inject @Named("path")
	private String pageLink;
	
	/** The new window. */
	@Inject
	private String newWindow;

	/** The description. */
	@Inject @Named("transDescription")
	private String description;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;
    
	/**
	 * Gets the trans link title.
	 *
	 * @return the trans link title
	 */
	public String getLinkTitle() {
		String linkTitle = this.linkTitle;
		if(null == linkTitle) {
			// get the link title from page if link starts with "/content/eaton/" 
			// else take it from asset dc:title if link starts with "/content/dam/eaton/"
			if(StringUtils.startsWith(this.pageLink, CommonConstants.CONTENT_ROOT_FOLDER)) {
				linkTitle = CommonUtil.getLinkTitle(linkTitle, this.pageLink, this.resourceResolver);
			} else if(StringUtils.startsWith(this.pageLink, CommonConstants.CONTENT_DAM)) {
				if (null != getAsset() && getAsset().getMetadata().containsKey(DamConstants.DC_TITLE)) {
					linkTitle = getAsset().getMetadataValue(DamConstants.DC_TITLE);
				}
				else {
					linkTitle = getAssetResource().getName();
				}
			}
		}
		return linkTitle;
	}

	/**
	 * Gets the overlay path.
	 *
	 * @return the overlay path
	 */
	public String getOverlayPath() {
		return this.overlayPath;
	}

	/**
	 * Gets the nav name.
	 *
	 * @return the nav name
	 */
	public String getNavName() {
		String pageName = StringUtils.EMPTY;
		if(null != getPage()) {
			pageName = getPage().getName();
		}
		return pageName;
	}
	
	/**
	 * Gets the nav title.
	 *
	 * @return the nav title
	 */
	public String getNavTitle() {
		String pageTitle = StringUtils.EMPTY;
		if(null != getPage()) {
			pageTitle = getPage().getTitle();
		}
		return pageTitle;
	}

	/**
	 * Gets the page.
	 *
	 * @return the page
	 */
	private Page getPage() {
		PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
		Page page = null;
		if(null != this.pageLink) {
			page = pageManager.getPage(this.pageLink);
		}
		return page;
	}
	
	/**
	 * Gets the page link.
	 *
	 * @return the page link
	 */
	public String getPageLink() {
		return CommonUtil.dotHtmlLink(pageLink);
	}

	/**
	 * Gets the new window manual.
	 *
	 * @return the new window manual
	 */
	public String getNewWindow() {
		String newWindow = StringUtils.EMPTY;
		if(StringUtils.equals(CommonConstants.TRUE, this.newWindow) || StringUtils.equals(CommonConstants.TRUE, getIsExternal())) {
			newWindow = CommonConstants.TARGET_BLANK;
		}
		return newWindow;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		String description = StringUtils.EMPTY;
		if(null != this.description) {
			description = this.description;
		} else {
			if ((StringUtils.startsWith(this.pageLink, CommonConstants.CONTENT_DAM)) && (null != getAsset())) {
				description = getAsset().getMetadataValue(DamConstants.DC_DESCRIPTION);
			} 
		}
		return description;
	}

	/**
	 * Gets the checks if is external.
	 *
	 * @return the checks if is external
	 */
	public String getIsExternal() {
		String isExternal = CommonConstants.FALSE;
		if(null != this.pageLink) {
			if(StringUtils.startsWith(this.pageLink, CommonConstants.HTTP) || StringUtils.startsWith(this.pageLink, CommonConstants.HTTPS) || StringUtils.startsWith(this.pageLink, CommonConstants.WWW)) {
				isExternal = CommonConstants.TRUE;
			}
		}
		return isExternal;
	}

	/**
	 * Checks if is asset path.
	 *
	 * @return true, if is asset path
	 */
	public boolean getIsAssetLink() {
		boolean isAssetPath = false;
		if(StringUtils.startsWith(this.pageLink, CommonConstants.CONTENT_DAM)) {
			isAssetPath = true;
		}
		return isAssetPath;
	}
	
	/**
	 * Gets the asset size.
	 *
	 * @return the asset size
	 */
	public String getAssetSize() {
		return CommonUtil.getAssetSize(getAsset());
	}
	
	/**
	 * Gets the asset.
	 *
	 * @return the asset
	 */
	private Asset getAsset() {
		return CommonUtil.getAsset(getAssetResource());
	}

	/**
	 * Gets the asset resource.
	 *
	 * @return the asset resource
	 */
	private Resource getAssetResource() {
		return this.resourceResolver.getResource(this.pageLink);
	}
}
