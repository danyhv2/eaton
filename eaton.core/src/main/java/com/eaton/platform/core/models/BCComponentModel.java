package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = Resource.class)
public class BCComponentModel   {
	
	/**
	 * contentType
	 */
	@Inject
	private String  contentType;

	/**
	 * contentId
	 */
	@Inject
	private String contentId;
	
	/**
	 * contentRepository
	 */
	@Inject
	private String contentRepository;
	
	/**
	 * brightcovePlayerID
	 */
	@Inject
	private String brightcovePlayerID;

	/**
	 * @return the contentType
	 */
	public String getContentType() {
		return contentType;
	}

	/**
	 * @param contentType the contentType to set
	 */
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	/**
	 * @return the contentId
	 */
	public String getContentId() {
		return contentId;
	}

	/**
	 * @param contentId the contentId to set
	 */
	public void setContentId(String contentId) {
		this.contentId = contentId;
	}

	/**
	 * @return the contentRepository
	 */
	public String getContentRepository() {
		return contentRepository;
	}

	/**
	 * @param contentRepository the contentRepository to set
	 */
	public void setContentRepository(String contentRepository) {
		this.contentRepository = contentRepository;
	}

	/**
	 * @return the brightcovePlayerID
	 */
	public String getBrightcovePlayerID() {
		return brightcovePlayerID;
	}

	/**
	 * @param brightcovePlayerID the brightcovePlayerID to set
	 */
	public void setBrightcovePlayerID(String brightcovePlayerID) {
		this.brightcovePlayerID = brightcovePlayerID;
	}
	
	
	
}
