// Image Sizes are either 1:1 / 16:9

"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "megamenu-products")) {
    data.title = "PRODUCT HIGHLIGHT";
    data.text = "EYEBROW LABEL";
    data.image = {
      mobile:'/content/dam/eaton/images/lorempixel/technics/265x265-7.jpeg',
      tablet:'/content/dam/eaton/images/lorempixel/technics/265x265-7.jpeg',
      desktop: '/content/dam/eaton/images/lorempixel/technics/265x265-7.jpeg',
      altText: 'Alt text for Image'
    };
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
    data.image = {
      mobile:'/content/dam/eaton/images/lorempixel/technics/270x152-4.jpeg',
      tablet:'/content/dam/eaton/images/lorempixel/technics/270x152-4.jpeg',
      desktop: '/content/dam/eaton/images/lorempixel/technics/270x152-4.jpeg',
      altText: 'Alt text for Image'
    };
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
