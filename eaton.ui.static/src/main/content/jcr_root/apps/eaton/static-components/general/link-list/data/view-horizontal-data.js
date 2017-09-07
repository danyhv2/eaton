'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.view = {
    links: [
      {
        title: 'Terms & Conditions',
        url: '#terms-and-conditions',
        target: '_self'
      },
      {
        title: 'Privacy, cookies and data protection policy',
        url: '#privacy-policy',
        target: '_self'
      },
      {
        title: 'Site map',
        url: '#site-map',
        target: '_self'
      }
    ]
  };

  if ((typeof(testdata) != 'undefined') && (testdata == 'footer-b')) {
    data.view.links[2].title = 'Manage Electrical and mechanical power';
    data.view.links[2].url = '#manage-electrical-power';
    data.view.links.push({ title: 'Site map', url: '#site-map', target: '_self' });
  }

  return data;

});
