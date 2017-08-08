'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.productDetailCard = {
    "title": "9PX1500RTN",
    // TODO: Review if this component uses image-renditions
    "image": {
      "mobile": "/content/dam/eaton/images/intro_image.png",
      "tablet": "/content/dam/eaton/images/intro_image.png",
      "desktop": "/content/dam/eaton/images/intro_image.png",
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": "$9,169",
    "cta": {
      "title": "Request a Quote",
      "url": "http://eaton.dev/#request-a-quote",
      "target": "_blank"
    },
    linksHeader: 'Interact with the 9pX15000RTN',
    links: [
      {
        "title": "Request a Quote",
        "url": "http://eaton.dev/#request-a-quote",
        "target": "_blank"
      },
      {
        "title": "Request a Quote",
        "url": "http://eaton.dev/#request-a-quote",
        "target": "_blank"
      },
      {
        "title": "Request a Quote",
        "url": "http://eaton.dev/#request-a-quote",
        "target": "_blank"
      }
    ]
  };


  data.mediaGallery = {
    "items": [
      {

      }
    ]
  };


  data.relatedProducts = {
    "items": [
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: '/content/dam/eaton/images/products/product-1-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-1-thumbnail.png',
        image_alt: 'Image 1',
        link: '#image-1',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton FlexPDU& HotSwap MBP',
        image: '/content/dam/eaton/images/products/product-2-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-2-thumbnail.png',
        image_alt: 'Image 2',
        link: '#image-2',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-3-thumbnail.png',
        image_alt: 'Image 3',
        link: '#image-3',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: '/content/dam/eaton/images/products/product-4-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-4-thumbnail.png',
        image_alt: 'Image 4',
        link: '#image-4',
        target: '_self'
      },
      {
        title: 'Fuse Disconnect ePDUs',
        text: 'Network, Server & Storage UPS',
        image: '/content/dam/eaton/images/products/product-5-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-5-thumbnail.png',
        image_alt: 'Image 5',
        link: '#image-5',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family long title used for testing purposes',
        text: 'Network, Server & Storage UPS Long text used for testing purposes',
        image: '/content/dam/eaton/images/products/product-6-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-6-thumbnail.png',
        image_alt: 'Image 6',
        link: '#image-6',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: '/content/dam/eaton/images/products/product-7-thumbnail.png',
        mobile_image: '/content/dam/eaton/images/products/product-7-thumbnail.png',
        image_alt: 'Image 7',
        link: '#image-7',
        target: '_self'
      }
    ]
  };

  if ((typeof(testdata) != "undefined") && (testdata == "related-products-two-images")) {
    data.relatedProducts.items = [];
  }

  if ((typeof(testdata) != "undefined") && (testdata == "related-products-three-images")) {
    data.relatedProducts.items = [];
  }

  if ((typeof(testdata) != "undefined") && (testdata == "related-products-four-images")) {
    data.relatedProducts.items = [];
  }

  return data;

});
