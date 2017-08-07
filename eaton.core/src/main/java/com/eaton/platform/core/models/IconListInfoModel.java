package com.eaton.platform.core.models;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.services.EatonConfigService;
import com.eaton.platform.core.util.CommonUtil;

/**
 * The Class IconListInfoModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class IconListInfoModel {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(IconListInfoModel.class);
	
	/** The icon. */
	@Inject
	private String icon;
	
	/** The link path. */
	@Inject
	private String linkPath;
	
	/** The title. */
	@Inject
	private String title;
	
	/** The description. */
	@Inject
	private String description;
	
	/** The additonal info. */
	@Inject
	private String additonalInfo;
	
	 @Inject @Source("osgi-services") 
	 EatonConfigService configService;
    
	/**
	 * Gets the icon.
	 *
	 * @return the icon
	 */
	public String getIcon() {
		return icon;
	}

	/**
	 * Sets the link path.
	 *
	 * @param linkPath the new link path
	 */
	public void setLinkPath(String linkPath) {
		this.linkPath = linkPath;
	}

	/**
	 * Gets the link path.
	 *
	 * @return the link path
	 */
	public String getLinkPath() {
		return linkPath;
	}

	/**
	 * Gets the title.
	 *
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Gets the additonal info.
	 *
	 * @return the additonal info
	 */
	public String getAdditonalInfo() {
		return additonalInfo;
	}


	/**
	 * Inits
	 */
	@PostConstruct
	protected void init() {
		if (getLinkPath() != null) {
			setLinkPath(CommonUtil.dotHtmlLink(getLinkPath()));
		}
		List<String> proofPointSymbols = configService.getConfigServiceBean().getProofPointSymbols();
		for (String proofPointSymbol : proofPointSymbols) {
			 String proofPointSymbolHTML = "<div class='icon-list-proof-points__symbol'>" + proofPointSymbol + "</div>";
			 if(getTitle() != null && getTitle().contains(proofPointSymbol)){
				 setTitle(getTitle().replaceAll(proofPointSymbol, proofPointSymbolHTML));
			 }
		}
	}

}
