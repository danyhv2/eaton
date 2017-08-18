"use strict";
use(function () {
	
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers")) {

	    data = {
	        items: [
	            {	headline: 'XXX',
	                image: '/content/dam/eaton/images/Energy_Star.png',
	                alt: 'Image 1'
	            },
	            {
	            	headline: '',
	                image: '/content/dam/eaton/images/BEHL_Gold.png',
	                alt: 'Image 2'
	            },
	            {
	            	headline: '',
	                image: '/content/dam/eaton/images/WME_2016.png',
	                alt: 'Image 3'
	            },
	            {
	            	headline: '',
	                image: '/content/dam/eaton/images/Best_place.png',
	                alt: 'Image 4'
	            },
	            {
	            	headline: '',
	                image: '/content/dam/eaton/images/BEHL_Gold.png',
	                alt: 'Image 5'
	            },
	            {
	            	headline: '',
	                image: '/content/dam/eaton/images/WME_2016.png',
	                alt: 'Image 6'
	            }
	        ]
	    };
	    
    } else {
    	
    	data = {
	        items: [
	            {
	                image: '/content/dam/eaton/images/Energy_Star.png',
	                alt: 'Image 1'
	            },
	            {
	                image: '/content/dam/eaton/images/BEHL_Gold.png',
	                alt: 'Image 2'
	            },
	            {
	                image: '/content/dam/eaton/images/WME_2016.png',
	                alt: 'Image 3'
	            },
	            {
	                image: '/content/dam/eaton/images/Best_place.png',
	                alt: 'Image 4'
	            },
	            {
	                image: '/content/dam/eaton/images/BEHL_Gold.png',
	                alt: 'Image 5'
	            },
	            {
	                image: '/content/dam/eaton/images/WME_2016.png',
	                alt: 'Image 6'
	            }
	        ]
	    };
    	
    }
    
    return data;
    
});
