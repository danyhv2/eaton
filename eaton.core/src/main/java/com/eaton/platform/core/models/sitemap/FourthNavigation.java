package com.eaton.platform.core.models.sitemap;

import java.util.List;

/**
 * This class is for Level 5 Sitemap Pojo.
 * @author TCS
 *
 */
public class FourthNavigation {
	
	private SitemapBean fourthNav;
	private List<FifthNavigation> fifthNavList;
	
	public SitemapBean getFourthNav() {
		return fourthNav;
	}
	public void setFourthNav(SitemapBean fourthNav) {
		this.fourthNav = fourthNav;
	}
	public List<FifthNavigation> getFifthNavList() {
		return fifthNavList;
	}
	public void setFifthNavList(List<FifthNavigation> fifthNavList) {
		this.fifthNavList = fifthNavList;
	}
	

	
	

}
