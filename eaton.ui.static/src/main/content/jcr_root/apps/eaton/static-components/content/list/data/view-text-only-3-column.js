"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers")) {

    	data = {
			title: "",
	        cards: [
	            {
	                title: 'NEWS RELEASE',
	                text: 'Eaton Named ENERGY STAR Partner of the Year by the EPA',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            },
	            {
	                title: 'ARTICLE',
	                text: 'Eaton Makes a Difference in St. Louis & Surrounding Communities',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            },
	            {
	                title: 'CASE STUDY',
	                text: 'Eaton Helps Young People Build Skills for the Future',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            }
	        ]
	    };
    	
    } else {
    	
    	data = {
			title: "Related Items",
	        cards: [
	            {
	                title: 'Company Insights',
	                text: 'Emergency power system basics',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            },
	            {
	                title: 'Utility',
	                text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            },
	            {
	                title: 'Community',
	                text: 'Unlock power and reverse with a modern UPS',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	            }
	        ]
	    };
    }

    return data;

});

