package com.eaton.platform.core.models.sitemap;

import java.util.List;

/**
 * This class is for Level 2 Sitemap Pojo.
 * @author TCS
 *
 */
public class PrimaryNavigation  {
	
	private SitemapBean primaryNav;
	private List<SecondaryNavigation> secondaryNavList;
	
	public SitemapBean getPrimaryNav() {
		return primaryNav;
	}
	public void setPrimaryNav(SitemapBean primaryNav) {
		this.primaryNav = primaryNav;
	}
	public List<SecondaryNavigation> getSecondaryNavList() {
		return secondaryNavList;
	}
	public void setSecondaryNavList(List<SecondaryNavigation> secondaryNavList) {
		this.secondaryNavList = secondaryNavList;
	}
	
}
