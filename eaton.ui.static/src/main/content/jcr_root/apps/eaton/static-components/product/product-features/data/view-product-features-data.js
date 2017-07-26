"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "product-features-no-links")) {
        data = {
            title: 'Energy Efficiency',
            text: '<p>Built in energy metering.</p><p>Extends battery service life by 50% with ABM technology.</p>' +
            '<p>Maximizes availability with extended battery modules for more runtime and optional maintenance bypass.</p>' +
            '<p>Help save money and protect the environment through energy efficiency operation.</p>',
            imgSrc: '/content/dam/eaton/images/energy.png',
            imgAlt: 'Alt Text goes here',
            backgroundColor: '#FFFFFF',
            cta: {
                url: 'http://www.eaton.com',
                text: 'Make a bigger difference'
            },
            link: {
                url: '',
                text: ''
            }
        }
    } else {
        data = {
            title: 'We make big ideas work',
            text: '<p>Built in energy metering.</p><p>Extends battery service life by 50% with ABM technology.</p>' +
            '<p>Maximizes availability with extended battery modules for more runtime and optional maintenance bypass.</p>' +
            '<p>Help save money and protect the environment through energy efficiency operation.</p>',
            imgSrc: '/content/dam/eaton/images/energy.png',
            imgAlt: 'Alt Text goes here',
            backgroundColor: '#FFFFFF',
            cta: {
                url: '',
                text: ''
            },
            link: {
                url: 'http://www.eaton.com',
                text: 'Learn more about ENERGY STAR<sup>®</sup>'
            }
        }
    }

    return data;
});
