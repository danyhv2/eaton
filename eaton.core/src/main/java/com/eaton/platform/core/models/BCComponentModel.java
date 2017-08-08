package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;

/**
 * The Class BCComponentModel.
 */
@Model(adaptables = Resource.class)
public class BCComponentModel   {
	
	/** contentType. */
	@Inject
	private String  contentType;

	/** contentId. */
	@Inject
	private String contentId;
	
	/** contentRepository. */
	@Inject
	private String contentRepository;
	
	/** brightcovePlayerID. */
	@Inject
	private String brightcovePlayerID;

	/**
	 * Gets the content type.
	 *
	 * @return the contentType
	 */
	public String getContentType() {
		return contentType;
	}

	/**
	 * Sets the content type.
	 *
	 * @param contentType the contentType to set
	 */
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	/**
	 * Gets the content id.
	 *
	 * @return the contentId
	 */
	public String getContentId() {
		return contentId;
	}

	/**
	 * Sets the content id.
	 *
	 * @param contentId the contentId to set
	 */
	public void setContentId(String contentId) {
		this.contentId = contentId;
	}

	/**
	 * Gets the content repository.
	 *
	 * @return the contentRepository
	 */
	public String getContentRepository() {
		return contentRepository;
	}

	/**
	 * Sets the content repository.
	 *
	 * @param contentRepository the contentRepository to set
	 */
	public void setContentRepository(String contentRepository) {
		this.contentRepository = contentRepository;
	}

	/**
	 * Gets the brightcove player ID.
	 *
	 * @return the brightcovePlayerID
	 */
	public String getBrightcovePlayerID() {
		return brightcovePlayerID;
	}

	/**
	 * Sets the brightcove player ID.
	 *
	 * @param brightcovePlayerID the brightcovePlayerID to set
	 */
	public void setBrightcovePlayerID(String brightcovePlayerID) {
		this.brightcovePlayerID = brightcovePlayerID;
	}
	
	
	
}
