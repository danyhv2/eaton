'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors-1")) {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
			      tablet: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
			      desktop:'http://lorempixel.com/350/350/business/Image-size--350x350/',
			      altText: "Image Alt Text Goes here"
			  }
	  };
	  
  } else {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
			      tablet: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
			      desktop:'http://lorempixel.com/750/750/technics/Image-size--1000x1000/',
			      altText: "Image Alt Text Goes here"
			  }
	  };

  }
  
  return data;
  
});
