"use strict";
use(function () {

    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {

	    data = {
	        cards: [
	            {
	                title: 'Category',
	                text: 'Eaton Reports Third Quarter Net Income and Operating Earnings Per Share of $1.15',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'November 1, 2016'
	            },
	            {
	                title: 'Category',
	                text: 'Eaton Reports Second Quarter Net Income and Operating Earnings Per Share of $1.07, Above Midpoint of Guidance',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'August 2, 2016'
	            },
	            {
	                title: 'Category',
	                text: 'Eaton First Quarter Operating Earnings Per Share of $0.88, Above Midpoint of Guidance',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'April 29, 2016'
	            }
	        ],
	        single_feature_card: {
	            title: 'Company',
	            text: 'Eaton to announce first quarter 2017 earnings on May 2, 2017',
                image: {
                    mobile:'/content/dam/eaton/images/lorempixel/technics/630x473-4.jpeg',
                    tablet:'/content/dam/eaton/images/lorempixel/technics/630x473-4.jpeg',
                    desktop:'/content/dam/eaton/images/lorempixel/technics/550x413-8.jpeg',
                    altText:'Image 2'
                },
	            cta: {url: 'http://www.eaton.com', target: '_self'},
	            date_text: 'April 13, 2017'
	        }
	    };

    } else {

    	data = {
	        cards: [
	            {
	                title: 'Data Center Facility UPS',
	                text: 'Emergency power system basics',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'November 30, 2016'
	            },
	            {
	                title: 'Knowledge Center',
	                text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'December 12, 2015'
	            },
	            {
	                title: 'Healthcare',
	                text: 'Unlock power and reverse with a modern UPS',
	                cta: {url: 'http://www.eaton.com', target: '_self'},
	                date_text: 'October 12, 2014'
	            }
	        ],
	        single_feature_card: {
	            title: 'Featured Category',
	            text: 'Why reality is the innovation challenge',
                image: {
                    mobile:'/content/dam/eaton/images/lorempixel/technics/630x473-4.jpeg',
                    tablet:'/content/dam/eaton/images/lorempixel/technics/630x473-4.jpeg',
                    desktop:'/content/dam/eaton/images/lorempixel/technics/550x413-8.jpeg',
                    altText:'Image 2'
                },
	            cta: {url: 'http://www.eaton.com', target: '_self'},
	            date_text: 'September 23, 2013'
	        }
	    };

    }

    return data;

});
