'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.imageSrc = '/content/dam/eaton/images/eaton-logo.png';
  if ((typeof(this.testdata) != "undefined") && (testdata == 'footer'))
	  data.imageSrc = '/content/dam/eaton/images/logo-footer.png';
  data.imageAlt = 'Eaton Logo Alt Text';

  return data;

});
