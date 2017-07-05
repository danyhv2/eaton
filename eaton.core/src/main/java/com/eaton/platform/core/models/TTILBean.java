package com.eaton.platform.core.models;

import java.io.UnsupportedEncodingException;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.Source;

import com.eaton.platform.core.util.CommonUtil;

/**
 * This class is used to inject the dialog properties.
 * @author TCS
 *
 */
@Model(adaptables = Resource.class)
public class TTILBean {
	
	@Inject @Optional
	private String view;

	@Inject @Optional
	private String transHeader;
	
	@Inject @Optional
	private String image;

	@Inject @Optional
	private String transAlttxt;

	@Inject @Optional
	private String transEyebrow;

	@Inject @Optional
	private String link;

	@Inject @Optional
	private String transLinkTitle;

	@Inject @Optional
	private String newWindow;

	@Inject @Optional
	private String transFeatureDesc;
	
	@Inject @Optional
	private String graphic;
	
	@Inject @Optional
	private String highlightType;
	
	@Inject @Optional
	private String config;
	
    @Inject @Source("sling-object")
    private ResourceResolver resourceResolver;

	/**
	 * 
	 * @return view
	 */
	public String getView() {
		return view;
	}

	/**
	 * 
	 * @return transHeader
	 */
	public String getTransHeader() {
		return transHeader;
	}
	
    /**
     * 
     * @return image
     * @throws UnsupportedEncodingException 
     */
	public String getImage() {
		return image;
	}

	/**
	 * if author has not entered any value in alt txt field in dialog box then
	 * return the image node name from DAM
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
	 * 
	 * @return transEyebrow
	 */
	public String getTransEyebrow() {
		return transEyebrow;
	}

	/**
	 * 
	 * @return link
	 */
	public String getLink() {
		return CommonUtil.dotHtmlLink(link);
	}

	/**
	 * if author has not entered the link title then
	 * return navigation title if it is not authored, then return the page title
	 * 
	 * @return transLinkTitle
	 */
	public String getTransLinkTitle() {
		return CommonUtil.getLinkTitle(transLinkTitle, link, resourceResolver);
	}

	/**
	 * 
	 * @return newWindow
	 */
	public String getNewWindow() {
		return newWindow;
	}

	/**
	 * 
	 * @return transFeatureDesc
	 */
	public String getTransFeatureDesc() {
		return transFeatureDesc;
	}

	/**
	 * 
	 * @return graphic
	 */
	public String getGraphic() {
		return graphic;
	}

	/**
	 * 
	 * @return highlightType
	 */
	public String getHighlightType() {
		return highlightType;
	}

	/**
	 * @return the config
	 */
	public String getConfig() {
		return config;
	}
	
	

}
