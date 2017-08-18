"use strict";
use(function () {
	
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers")) {

	    data = {
	        items: [
	            {	headline: 'Eaton Named a 2016 Best Employer for Healthy Lifestyles, Earns Global Distingtion Award',
	            	image: '/content/dam/eaton/images/BEHL_Gold.png',
	                alt: 'Image 1'
	            },
	            {
	            	headline: 'Partner of the year by the EPA for 3rd consecutive year',
	                image: '/content/dam/eaton/images/Energy_Star.png',
	                alt: 'Image 2'
	            },
	            {
	            	headline: 'World most ethical companies 2007-2014',
	                image: '/content/dam/eaton/images/WME_2016.png',
	                alt: 'Image 3'
	            },
	            {
	            	headline: 'Top 100 innovators of 2011, 2012 and 2013',
	                image: '/content/dam/eaton/images/TOP_100.png',
	                alt: 'Image 4'
	            },
	            {
	            	headline: 'Readers choise, Top 50 employers for workplace diversity',
	                image: '/content/dam/eaton/images/TOP_50.png',
	                alt: 'Image 5'
	            },
	            {
	            	headline: 'Best places to work 2016',
	                image: '/content/dam/eaton/images/Best_place.png',
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
