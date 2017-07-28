package com.eaton.platform.core.helpers;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.TitleBean;

/**
 * <html> Description: This class is used in sightly to provide
 * result of proper date format for the display on presentation layer</html> 
 * @author TCS
 * @version 1.0
 * @since 2017
 *
 */

public class TitleHelper extends EatonAbstractUseBean{
	private static final Logger LOG = LoggerFactory.getLogger(TitleHelper.class);
	TitleBean titleBean;
	private String dateByLineEmpty = "true";
	private String textByLineEmpty = "true";
	private String byLineEmpty = "true";
	
	@Override
	public void setComponentValues() {
		titleBean = res.adaptTo(TitleBean.class);
	}

	/**
	 * 
	 * @return titleBean
	 */
	public TitleBean getTitleBean() {
		return titleBean;
	}

	/**
	 * 
	 * @return publication date
	 */
	public String getDateByLine(){
		String pulicationDate = StringUtils.EMPTY;
		try {
			DateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE_FORMAT);
			GregorianCalendar calendar = titleBean.getByLineDate();
			if(calendar!=null){
				if(StringUtils.isNotBlank(calendar.toString())) {
					pulicationDate = publicationDateFormat.format(calendar.getTime());
				}
			}
		}
		catch (Exception e) {
			LOG.error("Exception occured due to not able to parse - ", e);
		}
		return pulicationDate;
	}
	
	/**
	 * 
	 * @return headerTitle
	 */
	public String getHeaderTitle(){
		String headerTitle = titleBean.getTitle();
		if(null == headerTitle) {
			headerTitle = currentPage.getNavigationTitle() != null? currentPage.getNavigationTitle() : currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle();
		}
		return headerTitle;
	}
	
	public String getTextByLine(){
		String text = StringUtils.EMPTY;
			text = titleBean.getTransByLineText();
			if(StringUtils.isNotBlank(text.toString())) {
				this.textByLineEmpty = "false";
			}
		return text;
	}
	
	public String getByLineEmpty(){
		if((getTextByLineEmpty().equals("false"))||(getDateByLineEmpty().equals("false"))){
			this.byLineEmpty =  "false";
		} else {
			this.byLineEmpty = "true";
		}
		return this.byLineEmpty;
	}

	public String getDateByLineEmpty() {
		GregorianCalendar calendar = titleBean.getByLineDate();
		if((calendar!=null) && (StringUtils.isNotBlank(titleBean.getByLineDate().toString()))) {
			this.dateByLineEmpty = "false";
		} 
		return this.dateByLineEmpty;
	}

	public void setDateByLineEmpty(String dateByLineEmpty) {
		this.dateByLineEmpty = dateByLineEmpty;
	}

	public String getTextByLineEmpty() {
		String text = StringUtils.EMPTY;
		text = titleBean.getTransByLineText();
		if(StringUtils.isNotBlank(text)) {
			this.textByLineEmpty = "false";
		} 
		
		return this.textByLineEmpty;
	}

	public void setTextByLineEmpty(String textByLineEmpty) {
		this.textByLineEmpty = textByLineEmpty;
	}
	
	
	
	
}