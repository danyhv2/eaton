'use strict';
use(function () {
	
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list")) {
  	  
    	data.title = "Backup Power UPS";
        data.text = "Eaton is a leading provider of quality backup power UPS, Uninterruptable Power Supply. Eaton UPSs are designed to deliver high quality backup power from desktop PCs to large data centers.";
        data.image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.mobile_image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.cta = {
            title: "PRODUCTS",
            url: "http://www.eaton.com",
            target: "_self"
        };
  	  
    } else if ((typeof(testdata) != "undefined") && (testdata == "t6-subcategory")) {
  	  
    	data.title = "Network, server & storage UPS";
        data.text = "Networks, servers and storage systems are the central nerve center for bussines today, and it is critical that they are protected by an uninterruptible power supply (UPS).";
        data.image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.mobile_image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.cta = {
            title: "BACKUP POWER UPS",
            url: "http://www.eaton.com",
            target: "_self"
        };
  	  
    } else if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page")) {
  	  
    	data.title = "News Releases";
        data.text = "";
        data.image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.mobile_image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
        data.cta = {
            title: "NEWS AND MEDIA",
            url: "http://www.eaton.com",
            target: "_self"
        };
  	  
    } else {
    
	    data.title = "News and Media";
	    data.text = "We're behind some of the biggest innovations improving safety efficiency and sustainability in ways that matter to customers, businessess and communities. And sometimes that gets people talking.";
	    data.image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
	    data.mobile_image = "/content/dam/eaton/images/Hero_image_Secondary_Landing.png";
	    data.cta = {
	        title: "Company",
	        url: "http://www.eaton.com",
	        target: "_self"
	    };
    }
    
    return data;
    
});
