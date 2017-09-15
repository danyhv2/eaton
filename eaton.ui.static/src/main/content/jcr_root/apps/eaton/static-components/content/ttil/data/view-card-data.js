"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "article-nextsteps")) {
    data = {
      title: 'UltraShift Plus Transmissions',
      text: 'Transmissions',
      image: {
        mobile: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        tablet: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        desktop: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        altText: 'Alt Text goes here',
      },
      link: {
        text: 'See how',
        url: 'http://www.eaton.com',
        target: '_blank'
      }
    }
  } else if ((typeof(testdata) != "undefined") && (testdata == "socket")) {
    data = {
      title: 'PREMERA and COPA 2 gang switched socket with 2 USB ports',
      text: 'RESIDENTIAL & LIGHT COMMERCIAL BUILDINGS',
      image: {
        mobile: '/content/dam/eaton/images/products/socket--bg-transparent.png',
        tablet: '/content/dam/eaton/images/products/socket--bg-transparent.png',
        desktop: '/content/dam/eaton/images/products/socket--bg-transparent.png',
        altText: 'Alt Text goes here',
      },
      link: {
        text: 'See how',
        url: 'http://www.eaton.com',
        target: '_self'
      }
    }
  } else {
    data = {
      title: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
      text: 'We make big ideas work',
      image: {
        mobile: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        tablet: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        desktop: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        altText: 'Alt Text goes here',
      },
      link: {
        text: 'See how',
        url: 'http://www.eaton.com',
        target: '_blank'
      }
    }
  }

  return data;
});
