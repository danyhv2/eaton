package com.eaton.platform.core.models;

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
public class ListModel {
	
	/** The view. */
	@Inject
	private String view;
	
	/** The header. */
	@Inject
	private String header;
	
	/** The list type. */
	@Inject 
	private String listType;
	
	/** The parent page. */
	@Inject
	private String parentPage;
	
	/** The tags. */
	@Inject
	private String tags;
	
	/** The fixed links. */
	@Inject
	private Resource fixedLinks;
	
	/** The count. */
	@Inject
	private int count;
	
	/** The sort. */
	@Inject
	private String sort;

	/**
	 * Gets the list type.
	 *
	 * @return the list type
	 */
	public String getListType() {
		return listType;
	}

    /**
     * Gets the view.
     *
     * @return view
     */
	public String getView() {
		return this.view;
	}
	
	/**
	 * Gets the header.
	 *
	 * @return the header
	 */
	public String getHeader() {
		return this.header;
	}

	/**
	 * Gets the parent page.
	 *
	 * @return the parent page
	 */
	public String getParentPage() {
		return parentPage;
	}

	/**
	 * Gets the tags.
	 *
	 * @return the tags
	 */
	public String getTags() {
		return tags;
	}

	/**
	 * Gets the fixed links.
	 *
	 * @return the fixed links
	 */
	public Resource getFixedLinks() {
		return fixedLinks;
	}

	/**
	 * Gets the count.
	 *
	 * @return the count
	 */
	public int getCount() {
		return count;
	}

	/**
	 * Gets the sort.
	 *
	 * @return the sort
	 */
	public String getSort() {
		return sort;
	}
}
