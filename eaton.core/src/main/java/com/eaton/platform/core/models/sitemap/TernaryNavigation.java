package com.eaton.platform.core.models.sitemap;

import java.util.List;

/**
 * This class is for Level 4 Sitemap Pojo.
 * @author TCS
 *
 */
public class TernaryNavigation  {
	
	private SitemapBean ternaryNav;
	private List<FourthNavigation> fourthNavList;
	
	public SitemapBean getTernaryNav() {
		return ternaryNav;
	}
	public void setTernaryNav(SitemapBean ternaryNav) {
		this.ternaryNav = ternaryNav;
	}
	public List<FourthNavigation> getFourthNavList() {
		return fourthNavList;
	}
	public void setFourthNavList(List<FourthNavigation> fourthNavList) {
		this.fourthNavList = fourthNavList;
	}
	
	
	
	

}
