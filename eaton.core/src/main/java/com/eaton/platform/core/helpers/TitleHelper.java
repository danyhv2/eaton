package com.eaton.platform.core.helpers;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.bean.EatonAbstractUseBean;
import com.eaton.platform.core.constants.CommonConstants;
import com.eaton.platform.core.models.TitleModel;

/**
 * <html> Description: This class is used in sightly to provide
 * result of proper date format for the display on presentation layer</html> .
 *
 * @author TCS
 * @version 1.0
 * @since 2017
 */
public class TitleHelper extends EatonAbstractUseBean{
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(TitleHelper.class);
	
	/** The title bean. */
	private TitleModel titleBean;
	
	/** The date by line empty. */
	private String dateByLineEmpty = CommonConstants.TRUE;
	
	/** The text by line empty. */
	private String textByLineEmpty = CommonConstants.TRUE;
	
	/** The by line empty. */
	private String byLineEmpty = CommonConstants.TRUE;
	
	/* (non-Javadoc)
	 * @see com.eaton.platform.core.bean.EatonAbstractUseBean#setComponentValues()
	 */
	@Override
	public void setComponentValues() {
		titleBean = res.adaptTo(TitleModel.class);
	}

	/**
	 * Gets the date by line.
	 *
	 * @return publication date
	 */
	public String getDateByLine(){
		LOG.debug("TitleHelper :: getDateByLine() :: Start");
		String pulicationDate = StringUtils.EMPTY;
		try {
			DateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE_FORMAT);
			Calendar calendar = titleBean.getByLineDate();
			LOG.debug("TitleHelper - calendar" + calendar);
			if(calendar!=null){
				if(StringUtils.isNotBlank(calendar.toString())) {
					pulicationDate = publicationDateFormat.format(calendar.getTime());
					LOG.debug("TitleHelper - pulicationDate" + pulicationDate);
				}
			}
		}
		catch (Exception e) {
			LOG.error("Exception occured due to not able to parse - ", e);
		}
		LOG.debug("TitleHelper :: getDateByLine() :: Exit");
		return pulicationDate;
	}
	
	/**
	 * Gets the header title.
	 *
	 * @return headerTitle
	 */
	public String getHeaderTitle(){
		LOG.debug("TitleHelper :: getHeaderTitle() :: Start");
		String headerTitle = titleBean.getTitle();
		if(null == headerTitle) {
			headerTitle = currentPage.getNavigationTitle() != null? currentPage.getNavigationTitle() : currentPage.getPageTitle() != null ? currentPage.getPageTitle() : currentPage.getTitle();
		}
		LOG.debug("TitleHelper :: getHeaderTitle() :: Exit");
		return headerTitle;
	}
	
	/**
	 * Gets the text by line.
	 *
	 * @return text.
	 */
	public String getTextByLine(){
		LOG.debug("TitleHelper :: getTextByLine() :: Start");
		String text = StringUtils.EMPTY;
			text = titleBean.getTransByLineText();
			if(StringUtils.isNotBlank(text.toString())) {
				this.textByLineEmpty = CommonConstants.FALSE;
			}
			LOG.debug("TitleHelper :: getTextByLine() :: Exit");
		return text;
	}
	
	/**
	 * Gets the by line empty.
	 *
	 * @return the flag byLineEmpty.
	 */
	public String getByLineEmpty(){
		LOG.debug("TitleHelper :: getByLineEmpty() :: Start");
		if((getTextByLineEmpty().equals(CommonConstants.FALSE)) || (getDateByLineEmpty().equals(CommonConstants.FALSE))){
			this.byLineEmpty =  CommonConstants.FALSE;
		} else {
			this.byLineEmpty = CommonConstants.TRUE;
		}
		LOG.debug("TitleHelper :: getByLineEmpty() :: Exit");
		return this.byLineEmpty;
	}

	/**
	 * Gets the date by line empty.
	 *
	 * @return the flag dateByLineEmpty.
	 */
	public String getDateByLineEmpty() {
		LOG.debug("TitleHelper :: getDateByLineEmpty() :: Start");
		Calendar calendar = titleBean.getByLineDate();
		if((null != calendar) && (StringUtils.isNotBlank(calendar.toString()))) {
			this.dateByLineEmpty = CommonConstants.FALSE;
		} 
		LOG.debug("TitleHelper :: getDateByLineEmpty() :: Exit");
		return this.dateByLineEmpty;
	}

	/**
	 * Gets the text by line empty.
	 *
	 * @return the flag textByLineEmpty.
	 */
	public String getTextByLineEmpty() {
		LOG.debug("TitleHelper :: getTextByLineEmpty() :: Start");
		String text = titleBean.getTransByLineText();
		if(null != text && StringUtils.isNotBlank(text)) {
			this.textByLineEmpty = CommonConstants.FALSE;
		} 
		LOG.debug("TitleHelper :: getTextByLineEmpty() :: Exit");
		return this.textByLineEmpty;
	}

	/**
	 * Gets the title bean.
	 *
	 * @return titleBean
	 */
	public TitleModel getTitleBean() {
		return titleBean;
	}
}