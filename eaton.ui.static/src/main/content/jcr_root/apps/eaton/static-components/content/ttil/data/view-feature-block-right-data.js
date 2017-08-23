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
            imgSrc: '/content/dam/eaton/images/Cityscape_mob.png',
            imgMobile:'/content/dam/eaton/images/Cityscape_mob.png',
            imgTablet:'/content/dam/eaton/images/Cityscape_mob.png',
            imgAlignment:'right',
            imgAlt: 'Test image',
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
            imgSrc: '/content/dam/eaton/images/energy.png',
            imgMobile:'/content/dam/eaton/images/energy.png',
            imgTablet:'/content/dam/eaton/images/energy.png',
            imgAlignment:'right',
            imgAlt: 'Test image',
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
            imgSrc: '/content/dam/eaton/images/T9-Careers-FeatureBlockRight-1.png',
            imgMobile:'/content/dam/eaton/images/T9-Careers-FeatureBlockRight-1.png',
            imgTablet:'/content/dam/eaton/images/T9-Careers-FeatureBlockRight-1.png',
            imgAlignment:'right',
            imgAlt: 'Test image',
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
            imgSrc: '/content/dam/eaton/images/Cityscape_mob.png',
            imgMobile:'/content/dam/eaton/images/Cityscape_mob.png',
            imgTablet:'/content/dam/eaton/images/Cityscape_mob.png',
            imgAlignment:'right',
            imgAlt: 'Test image',
            backgroundColor: '#005EB8'
        }
    }

    return data;
});
