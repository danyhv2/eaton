'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;


  // Product Detail Card M-35
  //--------------
  data.productDetailCard = {
    "title": "9PX1500RTN",
    // TODO: Review if this component uses image-renditions
    "image": {
      "mobile": "/content/dam/eaton/images/product.png",
      "tablet": "/content/dam/eaton/images/product.png",
      "desktop": "/content/dam/eaton/images/product.png",
    },
    "description": "Reliable. versatile. Powerful. Efficient. With double-conversion topology for constant power conditioning and up to 93% efficiency, the Eaton 9PX1500RTN supports your overall goal of bussiness continuity. It's built for scalable deployment, features a graphical LCD for local status updates and integrates with virtualized environments",
    "priceLabel": 'LIST PRICE',
    "price": "$9,169",
    "cta": {
      "title": "Request a Quote",
      "url": "#request-a-quote",
      "target": "_blank"
    },
    linksHeader: 'Interact with the 9PX15000RTN',
    links: [
      {
        "title": "View Spiceworks reviews",
        "url": "#view-review-Spiceworks",
        "target": "_blank"
      },
      {
        "title": "View StorageReview.com reviews",
        "url": "#view-review-StorageReview",
        "target": "_blank"
      }
    ]
  };


  // Media Gallery-Dynamic M-48.1
  //--------------
  data.mediaGallery = {
    "headline": "Media-Gallery Title",
    "description": "Media-Gallery description Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "items": [
      {
        "title": "This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        "text": "",
        "isVideo": false,
        "downloadEnabled": false,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-2-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-2-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-2-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 3",
        "text": "",
        "isVideo": false,
        "downloadEnabled": false,
        "zoomEnabled": false,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-3-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-3-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-3-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 4",
        "text": "",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-4-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-4-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-4-thumbnail.png"
        }
      },
      {
        "title": "",
        "text": "",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-5-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-5-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-5-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 6",
        "text": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-6-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-6-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-6-thumbnail.png"
        }
      },
      {
        "title": "Eaton 9px Family - Item 7",
        "text": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false,
        "downloadEnabled": true,
        "zoomEnabled": true,
        "imageAlt": "Image Alt Text",
        "images": {
          "thumbnail": "/content/dam/eaton/images/products/product-7-thumbnail.png",
          "preview": "/content/dam/eaton/images/products/product-7-thumbnail.png",
          "download": "/content/dam/eaton/images/products/product-7-thumbnail.png"
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
