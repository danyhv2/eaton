package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.sociallink.SocialListModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide
 * social links details from sling model for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class SocialLinkHelper extends EatonAbstractUseBean{

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(SocialLinkHelper.class);		

    /** The Constant FOOTER_SOCIAL_LINKS_SELECTOR. */
    private static final String FOOTER_SOCIAL_LINKS_SELECTOR = "footer-social-links";
    
    /** The social list model. */
    private SocialListModel socialListModel;
    
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
	
		LOGGER.debug("SocialLinkHelper :: setComponentValues() :: Start");
		// local variables
		String selector = null;
		// get selector from footer passed while including social links component
		selector = slingRequest.getRequestPathInfo().getSelectorString();
		String homePagePath = CommonUtil.getHomePagePath(currentPage);
		String logoResPath = null;
		if(StringUtils.isNotBlank(homePagePath)){
			if(null != selector && StringUtils.equals(FOOTER_SOCIAL_LINKS_SELECTOR, selector)){
				logoResPath = homePagePath.concat("/jcr:content/root/footer/footer-social-links");
			}
			Resource logoRes = resourceResolver.getResource(logoResPath);
			if(null != logoRes) {
				socialListModel = logoRes.adaptTo(SocialListModel.class);
			}
		}		
		LOGGER.debug("SocialLinkHelper :: setComponentValues() :: Exit");
		
	}

	/**
	 * Gets the social list model.
	 *
	 * @return the social list model
	 */
	public SocialListModel getSocialListModel() {
		return socialListModel;
	}
}
