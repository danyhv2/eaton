package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;
import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.models.LogoModel;
import com.eaton.platform.core.models.TextModel;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide result links
 * list bean for the display on presentation layer</html>.
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class TextHelper  extends EatonAbstractUseBean {
	
	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(LinkListHelper.class);
	
	/** The Constant FOOTER_DESC_SELECTOR. */
	private static final String FOOTER_DESC_SELECTOR = "footer-desc";
	
	/** The text model. */
	private TextModel textModel;

	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOGGER.debug("TextHelper :: setComponentValues() :: Start");
		// local variables
				String selector = null;
				// get selector from header & footer passed while including linklist component
				selector = slingRequest.getRequestPathInfo().getSelectorString();
				String homePagePath = CommonUtil.getHomePagePath(currentPage);
				String logoResPath = null;
				if(StringUtils.isNotBlank(homePagePath)){
					if(null != selector && StringUtils.equals(FOOTER_DESC_SELECTOR, selector)){
						logoResPath = homePagePath.concat("/jcr:content/root/footer/footer-desc");
					}
					
					Resource logoRes = resourceResolver.getResource(logoResPath);
					if(logoRes!= null) {
						textModel = logoRes.adaptTo(TextModel.class);
					}
				}
		LOGGER.debug("TextHelper :: setComponentValues() :: Exit");

	}

	/**
	 * Gets the text model.
	 *
	 * @return the textModel
	 */
	public TextModel getTextModel() {
		return textModel;
	}

}