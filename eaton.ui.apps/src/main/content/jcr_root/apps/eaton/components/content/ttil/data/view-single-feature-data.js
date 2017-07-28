"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "megamenu-products")) {
    data.title = "PRODUCT HIGHLIGHT";
    data.text = "EYEBROW LABEL";
    data.imgSrc = "/content/dam/eaton/images/Image4.png";
    data.cta = [
      {
        text: 'Fire Alarm Sounders: RoLP Maxi',
        url: '#link-1',
        target: '_self'
      }
    ]
  } else {
    data.title = "Title Label";
    data.text = "Eyebrow Label";
    data.imgSrc = "/content/dam/eaton/images/Image4.png";
    data.cta = [
      {
        text: 'Text Link 1',
        url: '#link-1',
        target: '_self'
      }
    ]
  }

  return data;
});
