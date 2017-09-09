'use strict';
use(function () {

  var data = {
    "headline": "Media Gallery Headline (Optional)",
    "description": "Description goes here quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    "isZoomEnabled": true,
    "items": [
      {
        "title": "Gallery Item 1",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 1",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-4.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-4.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-4.jpeg",
          "download": "/content/dam/eaton/images/lorempixel/business/1500x1500-4.jpeg"
        }
      },
      {
        "title": "Image 2",
        "text": "This slide has the download feature disabled",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 2",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-5.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-5.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-5.jpeg",
          "download": ""
        }
      },
      {
        "title": "Eaton 9px Family - Item 3 This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 3",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-6.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-6.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-6.jpeg",
          "download": "/content/dam/eaton/images/lorempixel/business/1500x1500-6.jpeg"
        }
      },
      {
        "title": "",
        "text": "This Slide has no title, only description",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 4",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-1.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-1.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-1.jpeg",
          "download": "/content/dam/eaton/images/lorempixel/business/1500x1500-1.jpeg"
        }
      },
      {
        "title": "",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 5",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-9.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-9.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-9.jpeg",
          "download": "/content/dam/eaton/images/lorempixel/business/1500x1500-9.jpeg"
        }
      },
      {
        "title": "Eaton 9px Family - Item 6",
        "text": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 6",
          "thumbnail": "/content/dam/eaton/images/lorempixel/business/220x220-8.jpeg",
          "preview": "/content/dam/eaton/images/lorempixel/business/1000x1000-8.jpeg",
          "zoom": "/content/dam/eaton/images/lorempixel/business/1500x1500-8.jpeg",
          "download": "/content/dam/eaton/images/lorempixel/business/1500x1500-8.jpeg"
        }
      }
    ]
  };

  return data;

});
