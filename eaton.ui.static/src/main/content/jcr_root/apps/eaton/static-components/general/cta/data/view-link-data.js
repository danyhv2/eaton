'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "megamenu-products")) {
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
    data.cta = {
      title: (properties.get('title')) ? properties.get('title') : 'CTA Link',
      url: "http://www.eaton.com",
      target: "_self"
    }
  }
  
  return data;
});
