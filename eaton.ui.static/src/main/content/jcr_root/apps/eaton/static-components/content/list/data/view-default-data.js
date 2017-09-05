"use strict";
use(function () {

    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list")) {

    	data = {
    	  cards: [
             {
                 title: 'Data Center Facility UPS 01',
                 text: 'Emergency power system basics 01',
                 image : {
                      mobile: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      tablet: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      desktop: 'http://lorempixel.com/265/265/technics/7/265x265/',
                      altText: 'Eaton 9PX UPS'
                 },



                 date_text: 'November 30, 2016',
                 cta: {
                     url: 'http://www.eaton.com',
                     target: '_self'
                 }
             },
             {
                 title: 'Knowledge Center',
                 text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
                 image : {
                      mobile: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      tablet: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      desktop: 'http://lorempixel.com/265/265/technics/7/265x265/',
                      altText: 'Eaton 9PX UPS'
                 },
                 date_text: 'December 12, 2015',
                 cta: {
                     url: 'http://www.eaton.com',
                     target: '_self'
                 }
             }
   	      ]
   	    };

    } else {

    	data = {
    	  cards: [
    	     {
                title: 'Data Center Facility UPS',
                text: 'Emergency power system basics',
                 image : {
                      mobile: 'http://lorempixel.com/375/375/food/7/375x375/',
                      tablet: 'http://lorempixel.com/375/375/food/7/375x375/',
                      desktop: 'http://lorempixel.com/265/265/food/7/265x265/',
                      altText: 'Eaton 9PX UPS'
                 },
                date_text: 'November 30, 2016',
                cta: {
                    url: 'http://www.eaton.com',
                    target: '_self'
                }
            },
            {
                title: 'Knowledge Center',
                text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
                 image : {
                      mobile: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      tablet: 'http://lorempixel.com/375/375/technics/7/375x375/',
                      desktop: 'http://lorempixel.com/265/265/technics/7/265x265/',
                      altText: 'Eaton 9PX UPS'
                 },
                date_text: 'December 12, 2015',
                cta: {
                    url: 'http://www.eaton.com',
                    target: '_self'
                }
            },
            {
                title: 'Healthcare',
                text: 'Unlock power and reverse with a modern UPS',
                 image : {
                      mobile: 'http://lorempixel.com/375/375/city/7/375x375/',
                      tablet: 'http://lorempixel.com/375/375/city/7/375x375/',
                      desktop: 'http://lorempixel.com/265/265/city/7/265x265/',
                      altText: 'Eaton 9PX UPS'
                 },
                date_text: 'October 12, 2014',
                cta: {
                    url: 'http://www.eaton.com',
                    target: '_self'
                }
            }
  	      ]
  	    };

    }

    return data;

});