"use strict";

use(function () {
    var data = {};
    var testdata = this.testdata;
    
	if ((typeof(testdata) != "undefined") && testdata == "megamenu-products") {
	    data.headline = 'Product Search';
	    data.form = {
	      'placeholder': 'Products, sku, parts, specs',
	      'submitLabel': 'Search'
	    }
	} else if ((typeof(testdata) != "undefined") && testdata == "megamenu-services") {		
	    data.headline = 'Search Services';
		    data.form = {
		      'placeholder': 'Services',
		      'submitLabel': 'Search'		
		    }    
	} else if ((typeof(testdata) != "undefined") && testdata == "megamenu-company") {		
	    data.headline = 'Search Careers';
		    data.form = {
		      'placeholder': 'Jobs',
		      'submitLabel': 'Search'		
		    }    
	} else {
	    data.headline = 'Headline';
	    data.form = {
	      'placeholder': 'Jobs',
	      'submitLabel': 'Search'		
	    }    
    }
    return data;
});
