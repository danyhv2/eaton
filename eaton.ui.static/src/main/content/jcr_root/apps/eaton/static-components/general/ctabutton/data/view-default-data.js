'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;
  
  if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
	data.cta = {
		    title: "View tools and downloads",
		    url: "http://www.eaton.com",
		    target: "_self"
			}
  } else {
	data.cta = {
    title: "CTA Component",
    url: "http://www.eaton.com",
    target: "_self"
	}
  }

  return data;
});
