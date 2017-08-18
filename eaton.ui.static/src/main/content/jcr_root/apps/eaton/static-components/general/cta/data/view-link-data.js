'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.cta = {
    url: "http://www.eaton.com",
    target: "_self"
  }

  if ((typeof(testdata) != "undefined") && (testdata == "megamenu-products")) {
	  data.cta.title = 'Products';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-services")) {
	  data.cta.title = 'Services';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-markets")) {
	  data.cta.title = 'Markets';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-support")) {
	  data.cta.title = 'Support';
  } else if ((typeof(testdata) != "undefined") && (testdata == "megamenu-company")) {
	  data.cta.title = 'Company';
  } else {
    data.cta.title = (properties.get('title')) ? properties.get('title') : 'CTA Link';
  }

  return data;
});
