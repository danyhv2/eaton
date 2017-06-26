package com.eaton.platform.core.services.impl;

import java.util.Map;

import org.apache.felix.scr.annotations.Activate;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;

import com.adobe.cq.sightly.WCMUsePojo;
import com.eaton.platform.core.services.CountrySelectorService;



@Component(immediate=true, label="Country Selector", description="This is a Country Selector Service", metatype=true)
@Service(value=CountrySelectorServiceImpl.class)
public class CountrySelectorServiceImpl implements CountrySelectorService {
	
	@Property(value="content/dam/eaton/resources/countryselector")
	static final String JSON_PATH = "Json Path";

	private String jsonPath;

		
	public String getJsonPath() {
		return jsonPath;
	}


	@Activate
	public void activate(final Map<String, Object> props) {
	    this.jsonPath = (String)props.get(JSON_PATH);
	}

}
