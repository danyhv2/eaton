package com.eaton.platform.core.bean.sitemap;

import java.io.Serializable;
import java.util.List;

/**
 * This class is for Level 6 Sitemap Pojo.
 * @author TCS
 *
 */
public class FifthNavigation implements Serializable  {
	
	private static final long serialVersionUID = 8653379103255481210L;

	/** The fifth nav. */
	private SitemapBean fifthNav;
	
	/** The sixth nav list. */
	private List<SitemapBean> sixthNavList;
	
	/**
	 * Gets the fifth nav.
	 *
	 * @return the fifth nav
	 */
	public SitemapBean getFifthNav() {
		return fifthNav;
	}
	
	/**
	 * Sets the fifth nav.
	 *
	 * @param fifthNav the new fifth nav
	 */
	public void setFifthNav(SitemapBean fifthNav) {
		this.fifthNav = fifthNav;
	}
	
	/**
	 * Gets the sixth nav list.
	 *
	 * @return the sixth nav list
	 */
	public List<SitemapBean> getSixthNavList() {
		return sixthNavList;
	}
	
	/**
	 * Sets the sixth nav list.
	 *
	 * @param sixthNavList the new sixth nav list
	 */
	public void setSixthNavList(List<SitemapBean> sixthNavList) {
		this.sixthNavList = sixthNavList;
	}

}
