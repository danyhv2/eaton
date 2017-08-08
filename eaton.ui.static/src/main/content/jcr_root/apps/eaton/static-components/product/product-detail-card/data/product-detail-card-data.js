'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;


  // Product Detail Card M-35
  //--------------
  data.productDetailCard = {
    "title": "",
    // TODO: Review if this component uses image-renditions
    "imgSrc": {
      "mobile": "http://mobile.png",
      "tablet": "http://tablet.png",
      "desktop": "http://desktop.png",
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "link": {
      "text": "Request a Quote",
      "url": "http://eaton.dev/#request-a-quote",
      "target": "_blank"
    }
  };


  // Media Gallery-Dynamic M-48.1
  //--------------
  data.mediaGallery = {
    "title": "Media-Gallery Title",
    "description": "Media-Gallery description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    "items": [
      {
        "title": "This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "",
        "description": "",
        "isVideo": false,
        "downloadEnabled": false,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 3",
        "description": "",
        "isVideo": false,
        "downloadEnabled": false,
        "zoomEnabled": false,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 4",
        "description": "",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "",
        "description": "",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 6",
        "description": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 7",
        "description": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-1-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-1-thumbnail.png"
        }
      }
    ]
  };



  // Related Products M-41
  //--------------
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
