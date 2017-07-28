package com.eaton.platform.core.models.sitemap;

import java.util.List;

/**
 * This class is for Level 3 Sitemap Pojo.
 * @author TCS
 *
 */
public class SecondaryNavigation{
	
	private SitemapBean secondaryNav;
	private List<TernaryNavigation> ternaryNavList;
	
	public SitemapBean getSecondaryNav() {
		return secondaryNav;
	}
	public void setSecondaryNav(SitemapBean secondaryNav) {
		this.secondaryNav = secondaryNav;
	}
	public List<TernaryNavigation> getTernaryNavList() {
		return ternaryNavList;
	}
	public void setTernaryNavList(List<TernaryNavigation> ternaryNavList) {
		this.ternaryNavList = ternaryNavList;
	}

}
