package com.eaton.platform.core.helpers;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.util.CommonUtil;

/**
 * <html> Description: This class is used in sightly to provide
 * result links list for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class MegaMenuHelper extends EatonAbstractUseBean {

	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(MegaMenuHelper.class); 

	private boolean hideSecondCol;
	private boolean hideThirdCol;
	private boolean hideFourthCol;
	
	private String secondColCSS;
	private String thridColCSS;
	private String fourthColCSS;
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		LOG.debug("ListHelper :: setComponentValues() :: Started");
		int listColumnCount = 1;
		if(slingRequest.getAttribute("listColumnCount") != null) {
			listColumnCount = (int) slingRequest.getAttribute("listColumnCount");
		}
		String mergeCol = CommonUtil.getStringProperty(res.getValueMap(), "mergecolumn");	
		
		if(listColumnCount == 2 && StringUtils.isBlank(mergeCol)) {
			hideFourthCol = true;
			secondColCSS = "mega-menu__col--4";
			thridColCSS = "mega-menu__col--4";
		} else if(listColumnCount == 3 && StringUtils.isBlank(mergeCol)) {
			hideFourthCol = true;
			hideThirdCol = true;
			secondColCSS = "mega-menu__col--4";
		} else if(listColumnCount == 4 && StringUtils.isBlank(mergeCol)) {
			hideFourthCol = true;
			hideThirdCol = true;
			hideSecondCol = true;			
		} else if(listColumnCount == 1 && StringUtils.isNotBlank(mergeCol)) {
			hideFourthCol = true;
			secondColCSS = "mega-menu__col--4";
			thridColCSS = "mega-menu__col--6";
		} else if(listColumnCount == 2 && StringUtils.isNotBlank(mergeCol)) {
			hideFourthCol = true;
			hideThirdCol = true;
			secondColCSS = "mega-menu__col--6";
		} else if(listColumnCount == 3 && StringUtils.isNotBlank(mergeCol)) {
			hideFourthCol = true;
			hideThirdCol = true;
			secondColCSS = "mega-menu__col--4";
		} else if(listColumnCount == 4 && StringUtils.isNotBlank(mergeCol)) {
			hideFourthCol = true;
			hideThirdCol = true;
			hideSecondCol = true;
		} else{
			secondColCSS = "mega-menu__col--4";
			thridColCSS = "mega-menu__col--4";
			fourthColCSS = "mega-menu__col--4";
		}
		LOG.debug("ListHelper :: setComponentValues() :: Exit");
	}
	public boolean isHideSecondCol() {
		return hideSecondCol;
	}
	public void setHideSecondCol(boolean hideSecondCol) {
		this.hideSecondCol = hideSecondCol;
	}
	public boolean isHideThirdCol() {
		return hideThirdCol;
	}
	public void setHideThirdCol(boolean hideThirdCol) {
		this.hideThirdCol = hideThirdCol;
	}
	public boolean isHideFourthCol() {
		return hideFourthCol;
	}
	public void setHideFourthCol(boolean hideFourthCol) {
		this.hideFourthCol = hideFourthCol;
	}
	public String getSecondColCSS() {
		return secondColCSS;
	}
	public void setSecondColCSS(String secondColCSS) {
		this.secondColCSS = secondColCSS;
	}
	public String getThridColCSS() {
		return thridColCSS;
	}
	public void setThridColCSS(String thridColCSS) {
		this.thridColCSS = thridColCSS;
	}
	public String getFourthColCSS() {
		return fourthColCSS;
	}
	public void setFourthColCSS(String fourthColCSS) {
		this.fourthColCSS = fourthColCSS;
	}
}
