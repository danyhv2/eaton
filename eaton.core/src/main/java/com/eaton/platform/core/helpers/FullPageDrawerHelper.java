package com.eaton.platform.core.helpers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.bean.FullPageDrawerLinkListBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.FullPageDrawerSlingModel;
import com.eaton.platform.core.util.CommonUtil;

public class FullPageDrawerHelper extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
    private static final Logger LOGGER = LoggerFactory.getLogger(FullPageDrawerHelper.class);
    
    private FullPageDrawerSlingModel fullPageDrawerSlingModel;
    private FullPageDrawerLinkListBean fullPageDrawerLinkListBean;
	private List<FullPageDrawerLinkListBean> fpdList;
    private String countryTitle;
    private String languageTitle;

	@Override
	public void setComponentValues() {
		LOGGER.debug("FullPageDrawerHelper :: setComponentValues() :: Start");
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		if(StringUtils.isNotBlank(homePagePath)){
			Page homePage = pageManager.getPage(homePagePath);
			languageTitle = homePage.getTitle();
			countryTitle = homePage.getParent().getTitle();
			String fullPageDrawerResPath = homePagePath.concat("/jcr:content/root/header/full-page-drawer");
			Resource fullPageDrawerRes = resourceResolver.getResource(fullPageDrawerResPath);
			if(fullPageDrawerRes!= null) {
				fullPageDrawerSlingModel = fullPageDrawerRes.adaptTo(FullPageDrawerSlingModel.class);
			}
			setLinkList();
		}
		LOGGER.debug("FullPageDrawerHelper :: setComponentValues() :: Exit");
	}

	public FullPageDrawerSlingModel getFullPageDrawerSlingModel() {
		return fullPageDrawerSlingModel;
	}

	public String getCountryTitle() {
		return countryTitle;
	}

	public String getLanguageTitle() {
		return languageTitle;
	}
	
	/**
	 * this method prepares the list 
	 * 
	 */
	public void setLinkList() {
		LOGGER.debug("FullPageDrawerHelper :: setLinkList() :: Start");
		Resource linkLst = fullPageDrawerSlingModel.getLinkList();
		fpdList = new ArrayList<FullPageDrawerLinkListBean>();
		if (null != linkLst) {
			Iterator<Resource> items = linkLst.listChildren();
			while (items.hasNext()) {
				fullPageDrawerLinkListBean = new FullPageDrawerLinkListBean();
				Resource item = items.next();
				ValueMap properties = item.getValueMap();

				fullPageDrawerLinkListBean.setIcons(CommonUtil.getStringProperty(properties, CommonConstants.ICONS));
				fullPageDrawerLinkListBean.setLinkPath(CommonUtil.dotHtmlLink(CommonUtil.getStringProperty(properties, CommonConstants.LINKPATH)));
				fullPageDrawerLinkListBean.setTransLinkTitle(CommonUtil.getStringProperty(properties, CommonConstants.TRANSLINKTITLE));
				fpdList.add(fullPageDrawerLinkListBean);

			}
		}
	}
	
	/**
	 * 
	 * @return fpdList
	 */
	public List<FullPageDrawerLinkListBean> getFpdList() {
		return fpdList;
	}

}
