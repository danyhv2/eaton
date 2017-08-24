"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "blue")) {
        data = {
            title: 'We make big ideas work',
            text: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
            cta: {
                url: 'http://www.eaton.com',
                text:'Make a bigger difference'
            },
            image: {
                mobile: 'http://lorempixel.com/750/750/technics/750x750/',
                tablet: 'http://lorempixel.com/750/750/technics/750x750/',
                desktop: '/content/dam/eaton/images/feature_block_desktop.png',
                altText: ''
            },
            imgAlignment:'left',
            backgroundColor: '#005EB8'
        }
   
    } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-overview-tab")) {
        data = {
            title: 'Virtualization-ready for seamless integrations',
            text: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
            cta: {
                url: 'http://www.eaton.com',
                text:'Make a bigger difference'
            },
            image: {
                mobile: 'http://lorempixel.com/750/750/technics/750x750/',
                tablet: 'http://lorempixel.com/750/750/technics/750x750/',
                desktop: '/content/dam/eaton/images/feature_block_desktop.png',
                altText: ''
            },
            imgAlignment:'left',
            backgroundColor: '#005EB8'
        }
        
    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers-1")) {
        data = {
            title: 'Inclusion and diversity',
            text: 'We value new ideas and create an enviroment that fosters learning and teaching, allowing employess to reach their full potential.',
            cta: {
                url: 'http://www.eaton.com',
                text:'View all job opportunities'
            },
            image: {
                mobile: 'http://lorempixel.com/750/750/technics/750x750/',
                tablet: 'http://lorempixel.com/750/750/technics/750x750/',
                desktop: '/content/dam/eaton/images/feature_block_desktop.png',
                altText: ''
            },
            imgAlignment:'left',
            backgroundColor: '#FFFFFF'
        }
        
    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers-2")) {
        data = {
            title: 'Supporting veterans',
            text: 'Leveraging your service experience to help find your next career move.',
            cta: {
                url: 'http://www.eaton.com',
                text:'Find career'
            },
            image: {
                mobile: 'http://lorempixel.com/750/750/technics/750x750/',
                tablet: 'http://lorempixel.com/750/750/technics/750x750/',
                desktop: '/content/dam/eaton/images/feature_block_desktop.png',
                altText: ''
            },
            imgAlignment:'left',
            backgroundColor: '#FFFFFF'
        }
                
    } else {
        data = {
            title: 'We make big ideas work',
            text: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
            cta: {
                url: 'http://www.eaton.com',
                text:'Make a bigger difference'
            },
            image: {
                mobile: 'http://lorempixel.com/750/750/technics/750x750/',
                tablet: 'http://lorempixel.com/750/750/technics/750x750/',
                desktop: '/content/dam/eaton/images/feature_block_desktop.png',
                altText: ''
            },
            imgAlignment:'left',
            backgroundColor: '#F8F8F8'
        }
    }

    return data;
});
