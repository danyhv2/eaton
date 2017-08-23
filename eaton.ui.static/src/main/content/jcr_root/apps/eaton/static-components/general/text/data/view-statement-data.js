'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "primary-statement")) {
	  data.text = 'Eaton is honored to be awarded and recognized for our commitment to our employees, our customers, our shareholders and our communities. Together, we look forward to making the world work even better.';
  } else if ((typeof(testdata) != "undefined") && (testdata == "placera")) {
	  data.text = 'Mel dicam affert assentior in, ut sale movet postea vim, vis zril everti et. Vim in aperian convenire contentiones. At est virtute placerat, mea ignota ancillae cotidieque ei. Quo in lorem decore vix no. At est virtute placera.';
  } else {
	  data.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  }  

  return data;
});
