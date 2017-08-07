"use strict";
use(function () {
  var data;
  var testdata=this.testdata;
  
  if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list" || testdata == "t6-subcategory")) {
	    data = {
	      header: 'We are with you from start to finish.',
	      description: 'From ideation to implementation and beyond, Eaton is here to help.',
	      ctaText: 'View support',
	      ctaLink: '#',
	      ctaTarget: '_blank'
	    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-cta")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      icon: '/content/dam/eaton/images/faq_orange_icon.png',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-icon")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank'
    };
  } else {
    data = {
      header: 'Get digital delivery on proxy materials',
      icon: '/content/dam/eaton/images/faq_orange_icon.png',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank'
    };
  }

  return data;
});
