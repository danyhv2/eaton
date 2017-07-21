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
  } else {
	  data.title = 'Eaton’s New 2-gang Switched Sockets with Usb ports Make It Easy to Stay Charged';
	  data.eyebrow = 'CATEGORY';
	  data.byline = 'Author optional, November 27, 2015';	  
  }


  return data;
});
