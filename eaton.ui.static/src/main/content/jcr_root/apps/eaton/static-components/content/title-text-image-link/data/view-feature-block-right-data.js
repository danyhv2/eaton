"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "left")) {
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
            imgAlignment:'left',
            imgAlt: 'Test image',
            backgroundColor: '#005EB8'
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
