"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "primary-landing-hero")) {
	    data = {
		        hero: [
		            {
		                title: 'We make the future brighter.*',
		                text: 'Planes. Hospitals. Factories. Data Centers. The electrical grid. These are things people depend on every day. And the companies behind them depend on us. At Eaton, we&apos;re dedicated to elevating people&apos;s lives with power management technologies that are more reliable, efficient, safe and sustainable.',
		                image: '/content/dam/eaton/images/Hero Images.png',
		                mobile_image: '/content/dam/eaton/images/Hero_Mobile.png',
		                alt: 'Image 1'
		            }
		        ],
		        cta: {url: 'http://www.eaton.com', text: 'See How'},
		        testdata:testdata
		    }
    } else {
	    data = {
	        hero: [
	            {
	                title: 'We make what matters work2.',
	                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac augue porta, vulputate ex id, lobortis mauris. Nunc consequat tincidunt augue eget laoreet. Donec mattis ut turpis et elementum. Vestibulum non gravida sapien. In dignissim leo eu erat consequat bibendum. Nullam bibendum sagittis nisi. Vivamus pulvinar porta sollicitudin.',
	                image: '/content/dam/eaton/images/Hero Images.png',
	                mobile_image: '/content/dam/eaton/images/Hero_Mobile.png',
	                alt: 'Image 1'
	            }
	        ],
	        cta: {url: 'http://www.eaton.com', text: 'See How'},
		    testdata: testdata
	    }
    }
    return data;
});
