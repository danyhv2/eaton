package com.eaton.platform.core.helpers;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.eaton.platform.core.BaseComponent;
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

public class TitleHelper extends BaseComponent{
	private static final Logger LOG = LoggerFactory.getLogger(TitleHelper.class);
	TitleBean titleBean;

	@Override
	public void activate() {
		titleBean = getResource().adaptTo(TitleBean.class);
	}

	public TitleBean getTitleBean() {
		return titleBean;
	}

	public String getDateByLine(){
		try {
			DateFormat publicationDateFormat = new SimpleDateFormat(CommonConstants.MANUAL_PUB_DATE_FORMAT);
			GregorianCalendar gc = titleBean.getByLineDate();
			return publicationDateFormat.format(gc.getTime());
		}
		catch (Exception e) {
			LOG.error("Exception occured due to not able to parse - ", e);
			return null;
		}

	}
}