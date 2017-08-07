'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;
  
  if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-overview-tab")) {
	  
	  data.intraTab = {
		title: 'Continue to Models',
		href: '#continue-to-models',
		target: '_self'
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-models-tab")) {
	  
	  data.intraTab = {
	    title: 'Continue to Resources',
	    href: '#continue-to-resources',
	    target: '_self'
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t8-sku-template-overview-tab")) {
	  
	  data.intraTab = {
	    title: 'Continue to Specifications',
	    href: '#continue-to-specifications',
	    target: '_self'
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "t8-sku-template-specifications-tab")) {
	  
	  data.intraTab = {
	    title: 'Continue to Resources',
	    href: '#continue-to-resources',
	    target: '_self'
	  };

  } else if ((typeof(testdata) != "undefined") && (testdata == "t8-sku-template-resources-tab")) {
	  
	  data.intraTab = {
	    title: 'View additional resources',
	    href: '#view-additional-resources',
	    target: '_self'
	  };

  } else {
	  data.intraTab = {
	    title: 'Intra Tab Link Title',
	    href: '#',
	    target: '_self'
	  };	  
  }
  
  return data;
  
});