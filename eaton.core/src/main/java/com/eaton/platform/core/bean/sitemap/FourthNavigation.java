package com.eaton.platform.core.bean.sitemap;

import java.io.Serializable;
import java.util.List;

/**
 * This class is for Level 5 Sitemap Pojo.
 * @author TCS
 *
 */
public class FourthNavigation implements Serializable {
	
	private static final long serialVersionUID = 7493110877481013179L;

	/** The fourth nav. */
	private SitemapBean fourthNav;
	
	/** The fifth nav list. */
	private List<FifthNavigation> fifthNavList;
	
	/**
	 * Gets the fourth nav.
	 *
	 * @return the fourth nav
	 */
	public SitemapBean getFourthNav() {
		return fourthNav;
	}
	
	/**
	 * Sets the fourth nav.
	 *
	 * @param fourthNav the new fourth nav
	 */
	public void setFourthNav(SitemapBean fourthNav) {
		this.fourthNav = fourthNav;
	}
	
	/**
	 * Gets the fifth nav list.
	 *
	 * @return the fifth nav list
	 */
	public List<FifthNavigation> getFifthNavList() {
		return fifthNavList;
	}
	
	/**
	 * Sets the fifth nav list.
	 *
	 * @param fifthNavList the new fifth nav list
	 */
	public void setFifthNavList(List<FifthNavigation> fifthNavList) {
		this.fifthNavList = fifthNavList;
	}

}
