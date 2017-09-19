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
      "mobile": "/content/dam/eaton/images/products/media-gallery-products-01-preview.jpg",
      "tablet": "/content/dam/eaton/images/products/media-gallery-products-01-preview.jpg",
      "desktop": "/content/dam/eaton/images/products/media-gallery-products-01-preview.jpg",
      "altText": "Product 9PX1500RTN",
    },
    "description": "Reliable. versatile. Powerful. Efficient. With double-conversion topology for constant power conditioning and up to 93% efficiency, the Eaton 9PX1500RTN supports your overall goal of bussiness continuity. It's built for scalable deployment, features a graphical LCD for local status updates and integrates with virtualized environments",
    "price": "$9,169",
    "cta": {
      "title": "Request a Quote",
      "url": "#request-a-quote",
      "target": "_blank"
    },
    links: [
      {
        "title": "Interact with the 9PX15000RTN",
        "url": "#Interact",
        "target": "_self"
      },
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
    "headline": "",
    "description": "",
    "isZoomEnabled": true,
    "items": [
      {
        "title": "Gallery Slide # 1",
        "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-01-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-01-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-01-download.jpg",
          "download": "/content/dam/eaton/images/products/media-gallery-products-01-download.jpg"
        }
      },
      {
        "title": "",
        "text": "This Slide has no title, only description",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-02-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-02-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-02-download.jpg",
          "download": "/content/dam/eaton/images/products/media-gallery-products-02-download.jpg"
        }
      },
      {
        "title": "Eaton 9px Family - Item 3 This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-03-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-03-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-03-download.jpg",
          "download": "/content/dam/eaton/images/products/media-gallery-products-03-download.jpg"
        }
      },
      {
        "title": "Gallery Slide # 4",
        "text": "This slide has the download feature disabled",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-04-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-04-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-04-download.jpg",
          "download": ""
        }
      },
      {
        "title": "",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-05-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-05-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-05-download.jpg",
          "download": "/content/dam/eaton/images/products/media-gallery-products-05-download.jpg"
        }
      },
      {
        "title": "Eaton 9px Family - Item 6",
        "text": "Eaton FlexPDU& HotSwap MBP Sint consectetur totam adipisci autem repellat unde modi nobis, fugiat saepe neque ut, corrupti vero dolor enim. Officiis, magnam! Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Image Alt Text",
          "thumbnail": "/content/dam/eaton/images/products/media-gallery-products-06-thumb.jpg",
          "preview": "/content/dam/eaton/images/products/media-gallery-products-06-preview.jpg",
          "zoom": "/content/dam/eaton/images/products/media-gallery-products-06-download.jpg",
          "download": "/content/dam/eaton/images/products/media-gallery-products-06-download.jpg"
        }
      }
    ]
  };

  // Related Products M-41
  //--------------
  data.relatedProducts = {
    title: 'Designed to work together',
    description: 'Discover other Eaton products and accesories built to enhance this product.',
    items: [
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: {
          mobile: '/content/dam/eaton/images/products/product-1-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-1-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-1-thumbnail.png',
          altText: 'Image 1',
        },
        link: '#image-1',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton FlexPDU& HotSwap MBP',
        image: {
          mobile: '/content/dam/eaton/images/products/product-2-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-2-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-2-thumbnail.png',
          altText: 'Image 2',
        },
        link: '#image-2',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: {
          mobile: '/content/dam/eaton/images/products/product-3-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-3-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-3-thumbnail.png',
          altText: 'Image 3',
        },
        link: '#image-3',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: {
          mobile: '/content/dam/eaton/images/products/product-4-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-4-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-4-thumbnail.png',
          altText: 'Image 4',
        },
        link: '#image-4',
        target: '_self'
      },
      {
        title: 'Fuse Disconnect ePDUs',
        text: 'Network, Server & Storage UPS',
        image: {
          mobile: '/content/dam/eaton/images/products/product-5-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-5-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-5-thumbnail.png',
          altText: 'Image 5',
        },
        link: '#image-5',
        target: '_self'
      },
      {
        title: 'Eaton 9px',
        text: 'Network, Server & Storage UPS',
        image: {
          mobile: '/content/dam/eaton/images/products/product-6-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-6-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-6-thumbnail.png',
          altText: 'Image 6',
        },
        link: '#image-6',
        target: '_self'
      },
      {
        title: 'Eaton 9px Family',
        text: 'Eaton S-Series Enlosure',
        image: {
          mobile: '/content/dam/eaton/images/products/product-7-thumbnail.png',
          tablet: '/content/dam/eaton/images/products/product-7-thumbnail.png',
          desktop: '/content/dam/eaton/images/products/product-7-thumbnail.png',
          altText: 'Image 7',
        },
        link: '#image-7',
        target: '_self'
      }
    ]
  };


  // Additional Testdata
  //--------------
  if ((typeof(testdata) != "undefined") && (testdata == "related-products-two-images")) {
    // TBD
  }


  return data;

});
