package com.eaton.platform.core.bean;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This bean class used in TTILListHelper class to store content </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class LinkListTypeBean {

	private String path;
	private String linkTitle;
	private String cssLinkTitle;
	private String newWindow;
	private String overlayPath; 
	private String linkPagePath;  
	private String templateName;
	private String description;
	private String newWindowManual;
	private String assetDescription;
	private String assetLink;
	private String navTitle;
	private String navName;
	private String socialSite;
	private String socialLink;
	private String assetType;
	private Long createdDate;
	private String lastModifiedDate;
	private Long publicationDate;
	private String assetSize;
	private String isExternal;
	
	public String getCssLinkTitle() {
		return cssLinkTitle;
	}
	public void setCssLinkTitle(String cssLinkTitle) {
		this.cssLinkTitle = cssLinkTitle;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getLinkTitle() {
		return linkTitle;
	}
	public void setLinkTitle(String linkTitle) {
		this.linkTitle = linkTitle;
	}
	public String getNewWindow() {
		return newWindow;
	}
	public void setNewWindow(String newWindow) {
		this.newWindow = newWindow;
	}
	public String getOverlayPath() {
		return overlayPath;
	}
	public void setOverlayPath(String overlayPath) {
		this.overlayPath = overlayPath;
	}
	public String getLinkPagePath() {
		return CommonUtil.dotHtmlLink(linkPagePath);
	}
	public void setLinkPagePath(String linkPagePath) {
		this.linkPagePath = linkPagePath;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getNewWindowManual() {
		return newWindowManual;
	}
	public void setNewWindowManual(String newWindowManual) {
		this.newWindowManual = newWindowManual;
	}
	public String getAssetDescription() {
		return assetDescription;
	}
	public void setAssetDescription(String assetDescription) {
		this.assetDescription = assetDescription;
	}
	public String getAssetLink() {
		return assetLink;
	}
	public void setAssetLink(String assetLink) {
		this.assetLink = assetLink;
	}
	public String getNavTitle() {
		return navTitle;
	}

	public void setNavTitle(String navTitle) {
		this.navTitle = navTitle;
	}

	public String getNavName() {
		return navName;
	}

	public void setNavName(String navName) {
		this.navName = navName;
	}
	public String getSocialSite() {
		return socialSite;
	}
	public void setSocialSite(String socialSite) {
		this.socialSite = socialSite;
	}
	public String getSocialLink() {
		return CommonUtil.dotHtmlLink(socialLink);
	}
	public String getIsExternal() {
		return isExternal;
	}
	public void setIsExternal(String isExternal) {
		this.isExternal = isExternal;
	}
	public void setSocialLink(String socialLink) {
		this.socialLink = socialLink;
	}
	public String getAssetSize() {
		return assetSize;
	}
	public void setAssetSize(String assetSize) {
		this.assetSize = assetSize;
	}
	public String getAssetType() {
		return assetType;
	}
	public void setAssetType(String assetType) {
		this.assetType = assetType;
	}
	public Long getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Long createdDate) {
		this.createdDate = createdDate;
	}
	public String getLastModifiedDate() {
		return lastModifiedDate;
	}
	public void setLastModifiedDate(String lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
	public Long getPublicationDate() {
		return publicationDate;
	}
	public void setPublicationDate(Long publicationDate) {
		this.publicationDate = publicationDate;
	}
	
}
