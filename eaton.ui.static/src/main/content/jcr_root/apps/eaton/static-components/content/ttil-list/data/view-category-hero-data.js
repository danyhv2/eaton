'use strict';
use(function () {

    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list")) {

    	data.title = "Backup Power UPS";
        data.text = "Eaton is a leading provider of quality backup power UPS, Uninterruptable Power Supply. Eaton UPSs are designed to deliver high quality backup power from desktop PCs to large data centers.";
        data.image = {
            mobile: 'http://lorempixel.com/750/677/business/1/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/1/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing.png',
            altText: ''
        };
        data.cta = {
            title: "PRODUCTS",
            url: "http://www.eaton.com",
            target: "_self"
        };

    } else if ((typeof(testdata) != "undefined") && (testdata == "t6-subcategory")) {

    	data.title = "Network, server & storage UPS";
        data.text = "Networks, servers and storage systems are the central nerve center for bussines today, and it is critical that they are protected by an uninterruptible power supply (UPS).";
        data.image = {
            mobile: 'http://lorempixel.com/750/677/business/2/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/2/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing.png',
            altText: ''
        };
        data.cta = {
            title: "BACKUP POWER UPS",
            url: "http://www.eaton.com",
            target: "_self"
        };

    } else if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page")) {

    	data.title = "News Releases";
        data.text = "";
        data.image = {
            mobile: 'http://lorempixel.com/750/677/business/9/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/9/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing.png',
            altText: ''
        };
        data.cta = {
            title: "NEWS AND MEDIA",
            url: "http://www.eaton.com",
            target: "_self"
        };

    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {

    	data.title = "Investor relations";
        data.text = "Our shareholders invest in us with the intention of benefiting from our long-term success. We take strategic action, create next-generation innovations, and deliver on commitments.";
        data.image = {
            mobile: 'http://lorempixel.com/750/677/business/4/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/4/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing_Investors.png',
            altText: ''
        };
        data.cta = {
            title: "COMPANY",
            url: "http://www.eaton.com",
            target: "_self"
        };

    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers")) {

    	data.title = "Global careers";
        data.text = "At Eaton, we offer more than competitive benefits and growth opportunities for our employees. We create an enviroment where creativity, invention and discovery are reality every day.";
        data.image = {
            mobile: 'http://lorempixel.com/750/677/business/5/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/5/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing_Careers.png',
            altText: ''
        };
        data.cta = {
            title: "COMPANY",
            url: "http://www.eaton.com",
            target: "_self"
        };

    } else {

	    data.title = "News and Media";
	    data.text = "We're behind some of the biggest innovations improving safety efficiency and sustainability in ways that matter to customers, businessess and communities. And sometimes that gets people talking.";
	    data.image = {
            mobile: 'http://lorempixel.com/750/677/business/10/750x677/',
            tablet: 'http://lorempixel.com/750/677/business/10/750x677/',
            desktop: '/content/dam/eaton/images/Hero_image_Secondary_Landing.png',
            altText: ''
        };
        data.cta = {
	        title: "Company",
	        url: "http://www.eaton.com",
	        target: "_self"
	    };
    }

    return data;

});
