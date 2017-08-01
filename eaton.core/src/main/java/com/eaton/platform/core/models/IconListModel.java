package com.eaton.platform.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.helpers.SitemapHelper;

/**
 * The Class IconListModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class IconListModel {

	/** The view. */
	@Inject
	private String view;
	
	/** Icon Info List. */
	@Inject
    private Resource iconInfoList;
	
	/** The links. */
	public List<IconListInfoModel> links;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(IconListModel.class);
	/**
	 * Gets the view.
	 *
	 * @return the view
	 */
	public String getView() {
		return view;
	}

	/**
	 * Inits the.
	 */
	@PostConstruct
	protected void init() {
		links = new ArrayList<IconListInfoModel>();
		if (iconInfoList != null) {
			populateModel(links, iconInfoList);
		}
	}
	
	/**
	 * Populate model.
	 *
	 * @param array the array
	 * @param resource the resource
	 * @return the list
	 */
	public  List<IconListInfoModel> populateModel(List<IconListInfoModel> array, Resource resource) {
		if (resource != null) {
			Iterator<Resource> linkResources = resource.listChildren();
			while (linkResources.hasNext()) {
				IconListInfoModel link = linkResources.next().adaptTo(IconListInfoModel.class);
				if (link != null)
					array.add(link);
			}
		}
		return array;
	}
}
