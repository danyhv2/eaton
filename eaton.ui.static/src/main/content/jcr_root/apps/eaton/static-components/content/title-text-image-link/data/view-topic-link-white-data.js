"use strict";
use(function () {
  var data;
  var testdata=this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list-1")) {
    data = {
      header: 'The perfect solution is never one size fits all',
      description: 'Our tools will help you find the exact Eaton product you need.',
      icon: '/content/dam/eaton/images/cat_icon.png'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "t6-subcategory-1")) {
    data = {
      header: 'Tools to help you find the rigth product',
      description: 'Use our tools to find the right Eaton product for you.',
      icon: '/content/dam/eaton/images/cat_icon.png'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "t6-subcategory-2")) {
    data = {
      header: 'How to buy from Eaton',
      icon: '/content/dam/eaton/images/locator_orange_icon.png'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list-view-support-cta" || testdata == "t6-subcategory-view-support-cta")) {
    data = {
      header: 'We are with you from start to finish.',
      description: 'From ideation to implementation and beyond, Eaton is here to help.',
      color: 'grey',
      ctaText: 'View support',
      ctaLink: '#',
      ctaTarget: '_blank'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-cta")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      icon: '/content/dam/eaton/images/faq_orange_icon.png',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      color: 'white'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-icon")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank',
      color: 'white'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-icon-blue")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank',
      color: 'blue'
    };
  } else if ((typeof(testdata) != "undefined") && (testdata == "no-icon-grey")) {
    data = {
      header: 'Get digital delivery on proxy materials',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank',
      color: 'grey'
    };
  } else {
    data = {
      header: 'Get digital delivery on proxy materials',
      icon: '/content/dam/eaton/images/faq_orange_icon.png',
      description: 'Reducing printing and mailing costs allows us to control expenses in the interest of delivering more value for all our shareholders',
      ctaText: 'Register for eDelivery',
      ctaLink: '#',
      ctaTarget: '_blank',
      color: 'white'
    };
  }

  return data;
});
