"use strict";

use(function () {
    var data = {};
    var testdata = this.testdata;

	if ((typeof(testdata) != "undefined") && testdata == "primary-nav-search") {
	    data.form = {
	      'placeholder': 'Search',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
	} else {
	    data.header = 'Headline';
      data.subheader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet';
	    data.form = {
	      'placeholder': 'Search products, parts, documentations, support, etc',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
    }
    return data;
});