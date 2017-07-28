package com.eaton.platform.core.models.linklist;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

/**
 * <html> Description: This bean class used as a Parent Sling Model that contains common fields </html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class LinkListModel {
	
	/** The view. */
	@Inject
	private String view;
	
	/** The header. */
	@Inject
	private String header;
	
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
	
}
