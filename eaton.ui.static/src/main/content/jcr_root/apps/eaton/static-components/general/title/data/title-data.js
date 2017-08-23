'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
	  data.title = 'Eaton powers solutions for businesses worldwide';
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
	  data.title = 'Designing tommorrow\'s innovations, today.';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-pageoverview")) {
	  data.title = 'About Eaton';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-featuredtopic")) {
	  data.title = 'Invest in something bigger';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-inthenews")) {
	  data.title = 'In the news';
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-relateditems")) {
	  data.title = 'Related Items';
  } else if ((typeof(testdata) != "undefined") && (testdata == "sitemap")) {
    data.title = 'Sitemap';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-products")) {
	  data.title = 'Products';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-services")) {
	  data.title = 'Services';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-markets")) {
	  data.title = 'Markets';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-support")) {
	  data.title = 'Support';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-company")) {
	  data.title = 'Company';
  } else if ((typeof(testdata) != "undefined") && (testdata == "sitemap")) {
	  data.title = 'Sitemap';
	  data.style = "h1";
  } else if ((typeof(testdata) != "undefined") && (testdata == "related-products")) {
	  data.title = 'More Eaton solutions';
  } else if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page-1")) {
	  data.title = 'Invest in something bigger';
  } else if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page-2")) {
	  data.title = 'Media Resources';  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-models-list")) {
	  data.title = 'Lorem ipsum dolor sit amet';  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t8-sku-template-overview-tab")) {
	  data.title = 'More 9PX models';  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers-1")) {
	  data.title = 'Innovation gets noticed';  
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-headline")) {
	  data.eyebrow = 'CATEGORY LABEL';
	  data.title = 'H1 Page Title or Article Headline That Flows to a Second Line';  
	  data.byline = 'Byline (optional), November 27, 2015';
  } else {
	  data.title = (properties.get('title'))
      ? properties.get('title')
      : 'Eaton’s New 2-gang Switched Sockets with Usb ports Make It Easy to Stay Charged';
	  data.eyebrow = 'CATEGORY';
	  data.byline = 'Author optional, November 27, 2015';
  }


  return data;
});
