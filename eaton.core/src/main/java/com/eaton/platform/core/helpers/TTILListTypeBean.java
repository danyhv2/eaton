package com.eaton.platform.core.helpers;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This bean class used in TTILListHelper class to store content </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class TTILListTypeBean {

	private String pagePath;
	
	private String eyebrow;
	
	private String publicationDate;
	
	private String headline;
	
	private String teaserImage;
	
	private String lastModifiedDate;
	
	private String createdDate;
	
	private String templateName;
	
	private String windowFixed;
	
	private String descriptionFeature;
	
	private String altTxt;
	
	/**
	 * 
	 * @return lastModifiedDate
	 */
	public String getLastModifiedDate() {
		return lastModifiedDate;
	}
	
	/**
	 * 
	 * @param lastModifiedDate
	 */
	public void setLastModifiedDate(String lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
	
	/**
	 * 
	 * @param createdDate
	 */
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}
	
	/**
	 * 
	 * @return createdDate
	 */
	public String getCreatedDate() {
		return createdDate;
	}
	
	/**
	 * 
	 * @return pagePath
	 */
	public String getPagePath() {
		return CommonUtil.dotHtmlLink(pagePath);
	}
	
	/**
	 * 
	 * @param pagePath
	 */
	public void setPagePath(String pagePath) {
		this.pagePath = pagePath;
	}
	
	/**
	 * 
	 * @return eyebrow
	 */
	public String getEyebrow() {
		return eyebrow;
	}
	
	/**
	 * 
	 * @param eyebrow
	 */
	public void setEyebrow(String eyebrow) {
		this.eyebrow = eyebrow;
	}
	
	/**
	 * 
	 * @return publicationDate
	 */
	public String getPublicationDate() {
		return publicationDate;
	}
	
	/**
	 * 
	 * @param publicationDate
	 */
	public void setPublicationDate(String publicationDate) {
		this.publicationDate = publicationDate;
	}
	
	/**
	 * 
	 * @return headline
	 */
	public String getHeadline() {
		return headline;
	}
	
	/**
	 * 
	 * @param headline
	 */
	public void setHeadline(String headline) {
		this.headline = headline;
	}
	
	/**
	 * 
	 * @return teaserInage
	 */
	public String getTeaserImage() {
		return teaserImage;
	}
	
	/**
	 * 
	 * @param teaserInage
	 */
	public void setTeaserImage(String teaserImage) {
		this.teaserImage = teaserImage;
	}

	/**
	 * 
	 * @return templateName
	 */
	public String getTemplateName() {
		return templateName;
	}

	/**
	 * 
	 * @param templateName
	 */
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	/**
	 * 
	 * @return windowFixed
	 */
	public String getWindowFixed() {
		return windowFixed;
	}

	/**
	 * 
	 * @param windowFixed
	 */
	public void setWindowFixed(String windowFixed) {
		this.windowFixed = windowFixed;
	}

	/**
	 * 
	 * @return descriptionFeature
	 */
	public String getDescriptionFeature() {
		return descriptionFeature;
	}

	/**
	 * 
	 * @param descriptionFeature
	 */
	public void setDescriptionFeature(String descriptionFeature) {
		this.descriptionFeature = descriptionFeature;
	}

	/**
	 * 
	 * @return altTxt
	 */
	public String getAltTxt() {
		return altTxt;
	}

	/**
	 * 
	 * @param altTxt
	 */
	public void setAltTxt(String altTxt) {
		this.altTxt = altTxt;
	}
}
