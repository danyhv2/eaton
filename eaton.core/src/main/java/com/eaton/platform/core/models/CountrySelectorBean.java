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
public class CountrySelectorBean {
	@Inject @Optional
	private String view;

	public String getView() {
		return view;
	}

	public void setView(String view) {
		this.view = view;
	}
}
