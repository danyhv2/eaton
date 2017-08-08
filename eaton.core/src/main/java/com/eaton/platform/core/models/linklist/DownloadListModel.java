package com.eaton.platform.core.models.linklist;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This Sling Model used in LinkListHelper class. </html>
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class DownloadListModel extends LinkListModel{
	
	/** The links. */
	public List<DownloadLinkModel> links;
	
	/** The download links. */
	@Inject
	private Resource manualLinks;
 
	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		this.links = new ArrayList<DownloadLinkModel>();
		if (null != this.manualLinks) {
			populateModel(this.links, this.manualLinks);
		}
	}
	
	/**
	 * Populate model.
	 *
	 * @param array the array
	 * @param resource the resource
	 * @return social links
	 */
	public List<DownloadLinkModel> populateModel(List<DownloadLinkModel> array, Resource resource) {
		if (resource != null) {
			Iterator<Resource> linkResources = resource.listChildren();
			while (linkResources.hasNext()) {
				DownloadLinkModel downloadLink = linkResources.next().adaptTo(DownloadLinkModel.class);
				if (downloadLink != null) {
					array.add(downloadLink);
				}
			}
		}
		return array;
	}
	
}
