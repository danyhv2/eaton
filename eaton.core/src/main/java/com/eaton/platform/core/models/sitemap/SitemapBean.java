package com.eaton.platform.core.models.sitemap;

import com.eaton.platform.core.util.CommonUtil;

/**
 * This class is Level 1 Sitemap Pojo class.
 * @author TCS
 *
 */
public class SitemapBean  {
	
	private String linkTitle;
	private String linkPath;
	
	/**
	 * @return linkTitle
	 */
	public String getLinkTitle() {
		return linkTitle;
	}
	public void setLinkTitle(String linkTitle) {
		this.linkTitle = linkTitle;
	}
	/**
	 * @return linkPath
	 */
	public String getLinkPath() {
		return CommonUtil.dotHtmlLink(linkPath);
	}
	public void setLinkPath(String linkPath) {
		this.linkPath = linkPath;
	}

}
