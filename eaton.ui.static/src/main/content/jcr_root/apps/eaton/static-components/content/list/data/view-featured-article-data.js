"use strict";
use(function () {

    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {

    	data = {
	        cards: [
	            {
	                title: 'Category Name',
	                text: 'Engineers across Eaton offer their thoughts on the "Power of Eaton."',
	                 image : {
	                      mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-2.jpg',
	                      altText: 'Eaton image 01'
	                 },
	                date_text: '',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            },
	            {
	                title: 'Category Name',
	                text: 'Megatrends: The power behind Eaton global green growth',
	                 image : {
	                      mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-2.jpg',
	                      altText: 'Eaton image 02'
	                 },
	                date_text: '',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            },
	            {
	                title: 'Category Name',
	                text: 'Eaton bussines system: How we work',
	                 image : {
	                      mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
	                      desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-2.jpg',
	                      altText: 'Eaton image 03'
	                 },
	                date_text: '',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            }
	        ],

	        single_feature_card: {
	            title: 'Category Name',
	            text: 'We make what matters work.*',
	            image: '/content/dam/eaton/images/t9-inverstors-feature-article-top.png',
	            mobile_image: '/content/dam/eaton/images/t9-inverstors-feature-article-top.png',
	            image_alt: 'Featured image',
	            date_text: '',
	            cta: {
	                url: 'http://www.eaton.com',
	                target: '_self'
	            }
	        }
         };

    } else {

    	data = {
	        cards: [
	            {
	                title: 'Data Center Facility UPS',
	                text: 'Emergency power system basics',
	                image: '/content/dam/eaton/images/Jet.png',
	                mobile_image: '/content/dam/eaton/images/Jet.png',
	                image_alt: 'Image 1',
	                date_text: 'November 30, 2016',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            },
	            {
	                title: 'Knowledge Center',
	                text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
	                image: '/content/dam/eaton/images/Tractors.png',
	                mobile_image: '/content/dam/eaton/images/Tractors.png',
	                image_alt: 'Image 2',
	                date_text: 'December 12, 2015',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            },
	            {
	                title: 'Healthcare',
	                text: 'Unlock power and reverse with a modern UPS',
	                image: '/content/dam/eaton/images/Power_Lines.png',
	                mobile_image: '/content/dam/eaton/images/Power_Lines.png',
	                image_alt: 'Image 3',
	                date_text: 'October 12, 2014',
	                cta: {
	                    url: 'http://www.eaton.com',
	                    target: '_self'
	                }
	            }
	        ],

	        single_feature_card: {
	            title: 'Featured Category',
	            text: 'Why reality is the innovation challenge',
	            image: '/content/dam/eaton/images/category_highlight_secondary_Landing.png',
	            mobile_image: '/content/dam/eaton/images/category_highlight_secondary_Landing.png',
	            image_alt: 'Featured image',
	            date_text: 'September 23, 2013',
	            cta: {
	                url: 'http://www.eaton.com',
	                target: '_self'
	            }
	        }
         };

    }

    return data;

});
