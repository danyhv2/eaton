"use strict";
use(function () {
	
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page-1")) {
        
    	data.eyebrow = "Downloads & Related";
        data.items = [
          {
            title: 'Download High Resoution Image',
            description: '',
            type: 'PDF',
            size: '15',
            url: '#link-to-pdf'
          }
        ]
    	
      } else {
    	  
    	  data.eyebrow = "Top Insights & Stories";
    	    data.items = [
    	      {
    	        title: 'Aerospace Warranty',
    	        description: 'White Paper Addresses Protection for the IE3 Revolution',
    	        type: 'PDF',
    	        size: '2MB',
    	        url: '#link-to-pdf'
    	      },
    	      {
    	        title: 'Product Name',
    	        description: 'White Paper Addresses Protection for the IE3 Revolution',
    	        type: 'PDF',
    	        size: '2MB',
    	        url: '#link-to-pdf'
    	      },
    	      {
    	        title: 'Product Manual',
    	        description: 'White Paper Addresses Protection for the IE3 Revolution',
    	        type: 'PDF',
    	        size: '2MB',
    	        url: '#link-to-pdf'
    	      },
    	      {
    	        title: 'Product Name Warranty',
    	        description: 'White Paper Addresses Protection for the IE3 Revolution',
    	        type: 'PDF',
    	        size: '2MB',
    	        url: '#link-to-pdf'
    	      }
    	    ]
    	  
      }
   
    return data;
});
