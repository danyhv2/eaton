'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;
  
  if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
	  data.headlineShort = 'Eaton powers solutions for businesses worldwide';
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
	  data.headlineShort = 'Designing tommorrow\'s innovations, today.';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-pageoverview")) {
	  data.headlineShort = 'About Eaton';
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-featuredtopic")) {
	  data.headlineShort = 'Invest in something bigger';
  } else {
	  data.headlineShort = 'Title Component';
	  data.headline = 'Title Component Eaton’s New 2-gang Switched Sockets with Usb ports Make It Easy to Stay Charged';
	  data.eyebrow = 'eyebrow goes here';
	  data.byline = 'Byline (optional), July 27, 2017';	  
  }


  return data;
});
