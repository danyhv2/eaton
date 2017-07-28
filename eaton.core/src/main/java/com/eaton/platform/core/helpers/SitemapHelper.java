package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.BaseComponent;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.sitemap.FifthNavigation;
import com.eaton.platform.core.models.sitemap.FourthNavigation;
import com.eaton.platform.core.models.sitemap.PrimaryNavigation;
import com.eaton.platform.core.models.sitemap.SecondaryNavigation;
import com.eaton.platform.core.models.sitemap.SitemapBean;
import com.eaton.platform.core.models.sitemap.TernaryNavigation;

/**
 * <html> Description: This class is used in sightly to provide
 * list of sites for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */
public class SitemapHelper extends BaseComponent {

	private List<PrimaryNavigation> primaryNavList;
	private static final Logger LOG = LoggerFactory.getLogger(SitemapHelper.class);
	
	/**
	 * 
	 * @return sitemap List
	 */
	public List<PrimaryNavigation> getPrimaryNavList() {
		return primaryNavList;
	}
	
	@Override
	public void activate() throws Exception {

		LOG.info("SitemapHelper Activated :::");
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
															SitemapBean sixthNavBean = new SitemapBean();
															sixthNavBean.setLinkTitle(sixthNav.getTitle());
															sixthNavBean.setLinkPath(sixthNav.getPath());
															sixthNavList.add(sixthNavBean);
														}
													}
													final SitemapBean fifthNavBean = new SitemapBean();
													fifthNavBean.setLinkTitle(fifthNav.getTitle());
													fifthNavBean.setLinkPath(fifthNav.getPath());
													FifthNavigation fifthNavigationBean = new FifthNavigation();
													fifthNavigationBean.setFifthNav(fifthNavBean);
													fifthNavigationBean.setSixthNavList(sixthNavList);
													fifthNavList.add(fifthNavigationBean);
												}
											}							
											final SitemapBean fourthNavBean = new SitemapBean();
											fourthNavBean.setLinkTitle(fourthNav.getTitle());
											fourthNavBean.setLinkPath(fourthNav.getPath());
											FourthNavigation fourthNavigationBean = new FourthNavigation();
											fourthNavigationBean.setFourthNav(fourthNavBean);
											fourthNavigationBean.setFifthNavList(fifthNavList);
											fourthNavList.add(fourthNavigationBean);
										}
									}
									final SitemapBean ternaryNavBean = new SitemapBean(); 
									ternaryNavBean.setLinkPath(ternaryNav.getPath());
									ternaryNavBean.setLinkTitle(ternaryNav.getTitle());
									TernaryNavigation ternaryNavigationBean = new TernaryNavigation();
									ternaryNavigationBean.setTernaryNav(ternaryNavBean);
									ternaryNavigationBean.setFourthNavList(fourthNavList);
									ternaryNavList.add(ternaryNavigationBean);
									}
								}
								final SitemapBean secondaryNavBean = new SitemapBean();
								secondaryNavBean.setLinkTitle(secondaryNav.getTitle());
								secondaryNavBean.setLinkPath(secondaryNav.getPath());
								SecondaryNavigation secondaryNavigationBean = new SecondaryNavigation();
								secondaryNavigationBean.setSecondaryNav(secondaryNavBean);
								secondaryNavigationBean.setTernaryNavList(ternaryNavList);
								secondaryNavList.add(secondaryNavigationBean);
							}
						}
						final SitemapBean primaryNavBean = new SitemapBean();
						primaryNavBean.setLinkTitle(primaryNav.getTitle());
						primaryNavBean.setLinkPath(primaryNav.getPath());
						PrimaryNavigation primaryNavigation = new PrimaryNavigation();
						primaryNavigation.setPrimaryNav(primaryNavBean);
						primaryNavigation.setSecondaryNavList(secondaryNavList);
						primaryNavList.add(primaryNavigation);
					}
				}
			
		}
	
		
	}	
}
