'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors-1")) {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/lorempixel/business/350x350-1.jpeg',
			      tablet: '/content/dam/eaton/images/lorempixel/business/350x350-1.jpeg',
			      desktop:'/content/dam/eaton/images/lorempixel/business/350x350-1.jpeg',
			      altText: "Image Alt Text Goes here"
			  }
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "m13")) {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/lorempixel/technics/630x630-4.jpeg',
			      tablet: '/content/dam/eaton/images/lorempixel/technics/630x630-4.jpeg',
			      desktop:'/content/dam/eaton/images/lorempixel/technics/460x460-8.jpeg',
			      altText: "Image Alt Text Goes here"
			  }
	  };
	  
  } else if ((typeof(testdata) != "undefined") && (testdata == "m20")) {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/lorempixel/technics/630x630-8.jpeg',
			      tablet: '/content/dam/eaton/images/lorempixel/technics/630x630-8.jpeg',
			      desktop:'/content/dam/eaton/images/lorempixel/technics/552x552-4.jpeg',
			      altText: "Image Alt Text Goes here"
			  }
	  };
  
  } else {
	  
	  data = {
			  image: {
			      mobile: '/content/dam/eaton/images/lorempixel/technics/750x750-4.jpeg',
			      tablet: '/content/dam/eaton/images/lorempixel/technics/750x750-4.jpeg',
			      desktop:'/content/dam/eaton/images/lorempixel/technics/350x350-8.jpeg',
			      altText: "Image Alt Text Goes here"
			  }
	  };

  }
  
  return data;
  
});
