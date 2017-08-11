"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "product-features-no-image")) {
        data = {
            title: 'Energy Efficiency',
            text: '<p>Built in energy metering.</p><p>Extends battery service life by 50% with ABM technology.</p>' +
            '<p>Maximizes availability with extended battery modules for more runtime and optional maintenance bypass.</p>' +
            '<p>Help save money and protect the environment through energy efficiency operation.</p>',
            imgSrc: '',
            imgMobile:'',
            imgTablet:'',
            imgAlt: '',
            backgroundColor: '#FFFFFF',
            cta: {
                url: '',
                text:''
            }

        }
    } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-overview-tab-no-feature-image")) {
        data = {
    		title: 'Core features',
            text: '<p>Anti-static copper wire for reinforcement</p>' +
            '<p>Abrasion, ozone, and weather resistant cover</p>' +
            '<p>For suction & discharge of dry bulk materials, sand, gravel and dry cement</p>' +
            '<p>Abrasion resistant tube</p>',
            imgSrc: '',
            imgMobile:'',
            imgTablet:'',
            imgAlt: '',
            backgroundColor: '#FFFFFF',
            cta: {
                url: '',
                text:''
            }
        }
    } else if ((typeof(testdata) != "undefined") && (testdata == "t7-product-family-template-overview-tab")) {
        data = {
    		title: 'Benefits',
            text: '<p>Designed for virtualized environments, these models offer double-conversion topology for constant power condition monitoring and up to 93 percent efficiency. They work well in IT, industrial and medical applications.</p>' +
            '<p>With an array of form factors, options and accessories, these virtualization-ready models maximize the availability of your IT systems. They also pack more power and runtime into a small space than traditional UPSs.</p>',
            imgSrc: '/content/dam/eaton/images/feature_block_image.png',
            imgMobile:'/content/dam/eaton/images/feature_block_image.png',
            imgTablet:'/content/dam/eaton/images/feature_block_image.png',
            imgAlt: 'Alt Text goes here',
            backgroundColor: '#FFFFFF',
            cta: {
                url: '',
                text:''
            }
        }
    } else {
        data = {
            title: 'We make big ideas work',
            text: '<p>Built in energy metering.</p><p>Extends battery service life by 50% with ABM technology.</p>' +
            '<p>Maximizes availability with extended battery modules for more runtime and optional maintenance bypass.</p>' +
            '<p>Help save money and protect the environment through energy efficiency operation.</p>',
            imgSrc: '/content/dam/eaton/images/feature_block_image.png',
            imgMobile:'/content/dam/eaton/images/feature_block_image.png',
            imgTablet:'/content/dam/eaton/images/feature_block_image.png',
            imgAlt: 'Alt Text goes here',
            backgroundColor: '#FFFFFF',
            cta: {
                url: '',
                text:''
            }
        }
    }

    return data;
});

