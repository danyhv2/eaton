package com.eaton.platform.core.models.ttil;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.constants.CommonConstants;
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

	/** The header. */
	@Inject
	private String header;
	
	/** The image. */
	@Inject
	private String image;

	/** The alttxt. */
	@Inject
	private String alttxt;

	/** The trans eyebrow. */
	@Inject
	private String transEyebrow;

	/** The link. */
	@Inject
	private String link;

	/** The link title. */
	@Inject
	private String linkTitle;

	/** The new window. */
	@Inject
	private String newWindow;

	/** The description. */
	@Inject
	private String description;

	/** The color. */
	@Inject
	private String color;
	
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
	 * Gets the header.
	 *
	 * @return header
	 */
	public String getHeader() {
		return header;
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
	public String getAlttxt() {
		String alttxt = this.alttxt;
		if(null == alttxt) {
			alttxt = CommonUtil.getAssetAltText(resourceResolver, getImage());
		}
		return alttxt;
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
		return CommonUtil.dotHtmlLink(this.link);
	}

	/**
	 * if author has not entered the link title then
	 * return navigation title if it is not authored, then return the page title.
	 *
	 * @return linkTitle
	 */
	public String getLinkTitle() {
		return CommonUtil.getLinkTitle(this.linkTitle, this.link, resourceResolver);
	}

	/**
	 * Gets the new window.
	 *
	 * @return newWindow
	 */
	public String getNewWindow() {
		String newWindow = StringUtils.EMPTY;
		if(StringUtils.equals(CommonConstants.TRUE, this.newWindow)) {
			newWindow = CommonConstants.TARGET_BLANK;
		}
		return newWindow;
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
	 * Gets the color.
	 *
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

}
