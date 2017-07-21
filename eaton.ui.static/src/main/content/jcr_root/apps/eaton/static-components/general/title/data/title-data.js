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
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-relateditems")) {
	  data.title = 'Related Items';
  } else {
	  data.title = 'Eaton’s New 2-gang Switched Sockets with Usb ports Make It Easy to Stay Charged';
	  data.eyebrow = 'CATEGORY';
	  data.byline = 'Author optional, November 27, 2015';	  
  }


  return data;
});
