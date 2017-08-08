package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.bean.sitemap.FifthNavigation;
import com.eaton.platform.core.bean.sitemap.FourthNavigation;
import com.eaton.platform.core.bean.sitemap.PrimaryNavigation;
import com.eaton.platform.core.bean.sitemap.SecondaryNavigation;
import com.eaton.platform.core.bean.sitemap.SitemapBean;
import com.eaton.platform.core.bean.sitemap.TernaryNavigation;

/**
 * <html> Description: This class is used in sightly to provide
 * list of sites for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class SitemapHelper extends EatonAbstractUseBean {

	/** The primary nav list. */
	private List<PrimaryNavigation> primaryNavList;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(SitemapHelper.class);
	
	/**
	 * Gets the primary nav list.
	 *
	 * @return sitemap List
	 */
	public List<PrimaryNavigation> getPrimaryNavList() {
		return primaryNavList;
	}
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {

		LOG.debug("SitemapHelper :: setComponentValues() :: Started");
		primaryNavList = new ArrayList<PrimaryNavigation>();
	
			final Page currentSitePage = getCurrentPage().getAbsoluteParent(CommonConstants.HOME_LEVEL);
			if (currentSitePage != null) {				
				final Iterator<Page> primaryNavChildren = currentSitePage.listChildren();
				while (primaryNavChildren.hasNext()) {
					final Page primaryNav = primaryNavChildren.next();
					if (!primaryNav.isHideInNav()) {
						final Iterator<Page> secondaryNavChildren = primaryNav.listChildren();
						final List<SecondaryNavigation> secondaryNavList = new ArrayList<SecondaryNavigation>();
						while (secondaryNavChildren.hasNext()) {
							final Page secondaryNav = secondaryNavChildren.next();
							if (!secondaryNav.isHideInNav()) {
								final Iterator<Page> ternaryNavChildren = secondaryNav.listChildren();
								final List<TernaryNavigation> ternaryNavList = new ArrayList<TernaryNavigation>();
								while (ternaryNavChildren.hasNext()) {
									Page ternaryNav = ternaryNavChildren.next();
									if (!ternaryNav.isHideInNav()) {
										final Iterator<Page> fourthNavChildren = ternaryNav.listChildren();
										final List<FourthNavigation> fourthNavList = new ArrayList<FourthNavigation>();
										while (fourthNavChildren.hasNext()) {
											Page fourthNav = fourthNavChildren.next();
											if (!fourthNav.isHideInNav()) {
											final Iterator<Page> fifthNavChildren = fourthNav.listChildren();
											final List<FifthNavigation> fifthNavList = new ArrayList<FifthNavigation>();
											while (fifthNavChildren.hasNext()) {
												Page fifthNav = fifthNavChildren.next();
												if (!fifthNav.isHideInNav()) {
													final Iterator<Page> sixthNavChildren = fifthNav.listChildren();
													final List<SitemapBean> sixthNavList = new ArrayList<SitemapBean>();
													while (sixthNavChildren.hasNext()) {
														Page sixthNav = sixthNavChildren.next();
														if (!sixthNav.isHideInNav()) {
															sixthNavList.add(setBean(sixthNav));
														}
													}
													FifthNavigation fifthNavigationBean = new FifthNavigation();
													fifthNavigationBean.setFifthNav(setBean(fifthNav));
													fifthNavigationBean.setSixthNavList(sixthNavList);
													fifthNavList.add(fifthNavigationBean);
												}
											}							
											FourthNavigation fourthNavigationBean = new FourthNavigation();
											fourthNavigationBean.setFourthNav(setBean(fourthNav));
											fourthNavigationBean.setFifthNavList(fifthNavList);
											fourthNavList.add(fourthNavigationBean);
										}
									}
									TernaryNavigation ternaryNavigationBean = new TernaryNavigation();
									ternaryNavigationBean.setTernaryNav(setBean(ternaryNav));
									ternaryNavigationBean.setFourthNavList(fourthNavList);
									ternaryNavList.add(ternaryNavigationBean);
									}
								}
								SecondaryNavigation secondaryNavigationBean = new SecondaryNavigation();
								secondaryNavigationBean.setSecondaryNav(setBean(secondaryNav));
								secondaryNavigationBean.setTernaryNavList(ternaryNavList);
								secondaryNavList.add(secondaryNavigationBean);
							}
						}
						PrimaryNavigation primaryNavigation = new PrimaryNavigation();
						primaryNavigation.setPrimaryNav(setBean(primaryNav));
						primaryNavigation.setSecondaryNavList(secondaryNavList);
						primaryNavList.add(primaryNavigation);
					}
				}
			
		}
	
	LOG.debug("SitemapHelper :: setComponentValues() :: Exited");	
	}

	/**
	 * Sets the bean.
	 *
	 * @param nav the nav
	 * @return the sitemap bean
	 */
	public SitemapBean setBean(Page nav) {
		LOG.debug("SitemapHelper :: setBean() :: Start");
		SitemapBean navBean = new SitemapBean();
		navBean.setLinkTitle(nav.getTitle());
		navBean.setLinkPath(nav.getPath());
		LOG.debug("SitemapHelper :: setBean() :: Exit");
		return navBean;
	}
	
}
