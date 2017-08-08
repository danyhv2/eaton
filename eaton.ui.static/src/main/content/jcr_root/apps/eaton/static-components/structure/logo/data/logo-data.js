'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.link = {
    text: '',
    url: '/content/eaton-static/us/en/qa-templates/t1-homepage-template.html',
    target: '_self'
  };

  data.imageSrc = '/content/dam/eaton/images/eaton-logo.png';
  data.imageAlt = 'Eaton Logo Alt Text';

  if ((typeof(this.testdata) != "undefined") && (testdata == 'footer')) {
    data.imageSrc = '/content/dam/eaton/images/logo-footer.png';
  }

  return data;

});
