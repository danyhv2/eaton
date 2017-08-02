"use strict";

use(function () {
    var data = {};
    var testdata = this.testdata;

	if ((typeof(testdata) != "undefined") && testdata == "megamenu-products") {
	    data.header = 'Product Search';
	    data.form = {
	      'placeholder': 'Products, sku, parts, specs',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
	} else if ((typeof(testdata) != "undefined") && testdata == "megamenu-services") {
	    data.header = 'Search Services';
	    data.form = {
	      'placeholder': 'Services',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
	} else if ((typeof(testdata) != "undefined") && testdata == "megamenu-company") {
	    data.header = 'Search Careers';
	    data.form = {
	      'placeholder': 'Jobs',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
	} else {
	    data.header = 'Headline';
      data.subheader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet';
	    data.form = {
	      'placeholder': 'Jobs',
	      'submitLabel': 'Search',
        'searchResultsPath': 'http://sr_dev.eaton.com'
	    }
    }
    return data;
});
