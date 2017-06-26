package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

/**
 * This class is used to inject the dialog properties.
 * @author TCS
 *
 */
@Model(adaptables = Resource.class)
public class SearchBean {
	@Inject @Optional
	private String view;
    @Inject  @Optional
    private String transFieldAid;
    @Inject   @Optional
    private String transSearchHeader;
    @Inject @Optional
    private String transSubhead;
    @Inject  @Optional
    private String searchResutlsPath;
    @Inject @Optional
    private Resource relevantLinks;

	/**
	 * @return view
	 */
	public String getView() {
		return view;
	}
	/**
	 * @return relevantLinks
	 */
	public Resource getRelevantLinks() {
		return relevantLinks;
	}
	/**
	 * @return transFieldAid
	 */
	public String getTransFieldAid() {
		return transFieldAid;
	}
	/**
	 * @return transSearchHeader
	 */
	public String getTransSearchHeader() {
		return transSearchHeader;
	}
	/**
	 * @return transSubhead
	 */
	public String getTransSubhead() {
		return transSubhead;
	}
	/**
	 * @return searchResutlsPath
	 */
	public String getSearchResutlsPath() {
		return searchResutlsPath;
	}
	public void setView(String view) {
		this.view = view;
	}
	public void setTransFieldAid(String transFieldAid) {
		this.transFieldAid = transFieldAid;
	}
	public void setTransSearchHeader(String transSearchHeader) {
		this.transSearchHeader = transSearchHeader;
	}
	public void setTransSubhead(String transSubhead) {
		this.transSubhead = transSubhead;
	}
	public void setSearchResutlsPath(String searchResutlsPath) {
		this.searchResutlsPath = searchResutlsPath;
	}
	public void setRelevantLinks(Resource relevantLinks) {
		this.relevantLinks = relevantLinks;
	}
}
