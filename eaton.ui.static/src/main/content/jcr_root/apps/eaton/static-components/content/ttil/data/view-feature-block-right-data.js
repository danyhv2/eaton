"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "white")) {
        data = {
            title: 'We make big ideas work',
            text: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
            cta: {
                url: 'http://www.eaton.com',
                text:'Make a bigger difference'
            },
            image: {
                mobile: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                tablet: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                desktop: '/content/dam/eaton/images/Cityscape_mob.png',
                altText: '',
                alignment: 'center'
            },
            imgAlignment:'right',
            backgroundColor: '#F8F8F8'
        }
    } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-overview-tab")) {
        data = {
            title: 'Energy efficiency',
            text: '<p>Built in energy metering</p>' +
            '<p>Extends battery service life by 50% with ABM technology</p>' +
            '<p>Maximizes avaibility with extended battery modules for more runtime and optional maintenance bypass</p>' +
            '<p>Helps save money and protect the enviroment througth energy efficient operation (ENERGY STAR&reg; qualified UPS)</p>' +
            '<p><a href="http://www.eaton.com">Learn more about ENERGY STAR&reg;</a></p>',
            cta: {
                url: '',
                text:''
            },
            image: {
            	mobile: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                tablet: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                desktop: '/content/dam/eaton/images/energy.png',
                altText: '',
                alignment: 'center'
            },
            imgAlignment:'right',
            backgroundColor: '#FFFFFF'
        }
    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers-1")) {
        data = {
            title: 'Campus opportunities',
            text: 'Explore your potential throught development opportunities',
            cta: {
            	url: 'http://www.eaton.com',
                text:'Learn more'
            },
            image: {
            	mobile: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                tablet: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                desktop: '/content/dam/eaton/images/T9-Careers-FeatureBlockRight-1.png',
                altText: '',
                alignment: 'center'
            },

            imgAlignment:'right',
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
            	mobile: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                tablet: '/content/dam/eaton/images/lorempixel/technics/750x750-8.jpeg',
                desktop: '/content/dam/eaton/images/Cityscape_mob.png',
                altText: '',
                alignment: 'center'
            },
            imgAlignment:'right',
            backgroundColor: '#005EB8'
        }
    }

    return data;
});
