'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors-1")) {
	  
	  data = {
			  image: {
			      mobile: 'http://lorempixel.com/350/350/business/Image-size--350x350/',
			      tablet: 'http://lorempixel.com/350/350/business/Image-size--350x350/',
			      desktop:'http://lorempixel.com/350/350/business/Image-size--350x350/',
			      altText: "Image Alt Text Goes here"
			  }
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "m13")) {
	  
	  data = {
			  image: {
			      mobile: 'http://lorempixel.com/630/630/technics/Image-size--630x630/',
			      tablet: 'http://lorempixel.com/460/460/technics/Image-size--460x460/',
			      desktop:'http://lorempixel.com/460/460/technics/Image-size--460x460/',
			      altText: "Image Alt Text Goes here"
			  }
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "m20")) {
	  
	  data = {
			  image: {
			      mobile: 'http://lorempixel.com/630/630/technics/Image-size-630x630/',
			      tablet: 'http://lorempixel.com/552/552/technics/Image-size-552x552/',
			      desktop:'http://lorempixel.com/552/552/technics/Image-size-552x552/',
			      altText: "Image Alt Text Goes here"
			  }
	  };
  
  } else {
	  
	  data = {
			  image: {
			      mobile: 'http://lorempixel.com/750/750/technics/Image-size--750x750/',
			      tablet: 'http://lorempixel.com/550/550/technics/Image-size--550x550/',
			      desktop:'http://lorempixel.com/350/350/technics/Image-size--350x350/',
			      altText: "Image Alt Text Goes here"
			  }
	  };

  }
  
  return data;
  
});
