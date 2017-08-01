package com.eaton.platform.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: It is a Sling Model class which automatically maps from Sling objects
 * i.e. dialog fields are injected </html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TTILModel {
	
	/** The view. */
	@Inject
	private String view;

	/** The trans header. */
	@Inject
	private String transHeader;
	
	/** The image. */
	@Inject
	private String image;

	/** The trans alttxt. */
	@Inject
	private String transAlttxt;

	/** The trans eyebrow. */
	@Inject
	private String transEyebrow;

	/** The link. */
	@Inject
	private String link;

	/** The trans link title. */
	@Inject
	private String transLinkTitle;

	/** The new window. */
	@Inject
	private String newWindow;

	/** The trans feature desc. */
	@Inject
	private String transFeatureDesc;
	
	/** The graphic. */
	@Inject
	private String graphic;
	
	/** The highlight type. */
	@Inject
	private String highlightType;
	
	/** The config. */
	@Inject
	private String config;
	
    /** The resource resolver. */
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

	/**
	 * Gets the view.
	 *
	 * @return view
	 */
	public String getView() {
		return view;
	}

	/**
	 * Gets the trans header.
	 *
	 * @return transHeader
	 */
	public String getTransHeader() {
		return transHeader;
	}
	
    /**
     * Gets the image.
     *
     * @return image
     */
	public String getImage() {
		return image;
	}

	/**
	 * if author has not entered any value in alt txt field in dialog box then
	 * return the image node name from DAM.
	 *
	 * @return transAlttxt
	 */
	public String getTransAlttxt() {
		if(transAlttxt == null) {
				return CommonUtil.getAssetAltText(resourceResolver, getImage());
		}
		return transAlttxt;
	}

	/**
	 * Gets the trans eyebrow.
	 *
	 * @return transEyebrow
	 */
	public String getTransEyebrow() {
		return transEyebrow;
	}

	/**
	 * Gets the link.
	 *
	 * @return link
	 */
	public String getLink() {
		return CommonUtil.dotHtmlLink(link);
	}

	/**
	 * if author has not entered the link title then
	 * return navigation title if it is not authored, then return the page title.
	 *
	 * @return transLinkTitle
	 */
	public String getTransLinkTitle() {
		return CommonUtil.getLinkTitle(transLinkTitle, link, resourceResolver);
	}

	/**
	 * Gets the new window.
	 *
	 * @return newWindow
	 */
	public String getNewWindow() {
		return newWindow;
	}

	/**
	 * Gets the trans feature desc.
	 *
	 * @return transFeatureDesc
	 */
	public String getTransFeatureDesc() {
		return transFeatureDesc;
	}

	/**
	 * Gets the graphic.
	 *
	 * @return graphic
	 */
	public String getGraphic() {
		return graphic;
	}

	/**
	 * Gets the highlight type.
	 *
	 * @return highlightType
	 */
	public String getHighlightType() {
		return highlightType;
	}

	/**
	 * Gets the config.
	 *
	 * @return the config
	 */
	public String getConfig() {
		return config;
	}

}
