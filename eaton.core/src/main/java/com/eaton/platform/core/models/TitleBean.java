package com.eaton.platform.core.models;

import java.util.GregorianCalendar;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;

@Model(adaptables = Resource.class)
public class TitleBean {

	@Inject @Optional
	private GregorianCalendar byLineDate;

	public GregorianCalendar getByLineDate() {
		return byLineDate;
	}
	
	
}
