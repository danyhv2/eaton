'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {
    	
    	data.eyebrow = "Eaton bussines highlights";
        data.items = [
          {
            title: '2016 annual report',
            description: '',
            type: '',
            size: '',
            url: '#link-to-file'
          },
          {
            title: '2016 Q4 quarterly report',
            description: '',
            type: '',
            size: '',
            url: '#link-to-file'
          },
          {
            title: 'Dividend report',
            description: '',
            type: '',
            size: '',
            url: '#link-to-file'
          }
        ];
        
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
	    ];
    }
    
    return data;
    
});
