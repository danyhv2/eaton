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
          "thumbnail": "http://lorempixel.com/220/220/business/4/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/4/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/4/2000x2000/",
          "download": "http://lorempixel.com/1500/1500/business/4/2000x2000/"
        }
      },
      {
        "title": "Image 2",
        "text": "This slide has the download feature disabled",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 2",
          "thumbnail": "http://lorempixel.com/220/220/business/5/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/5/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/5/1000x1000/",
          "download": ""
        }
      },
      {
        "title": "Eaton 9px Family - Item 3 This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 3",
          "thumbnail": "http://lorempixel.com/220/220/business/6/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/6/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/6/2000x2000/",
          "download": "http://lorempixel.com/1500/1500/business/6/2000x2000/"
        }
      },
      {
        "title": "",
        "text": "This Slide has no title, only description",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 4",
          "thumbnail": "http://lorempixel.com/220/220/business/1/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/1/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/1/2000x2000/",
          "download": "http://lorempixel.com/1500/1500/business/1/2000x2000/"
        }
      },
      {
        "title": "",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 5",
          "thumbnail": "http://lorempixel.com/220/220/business/9/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/9/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/9/2000x2000/",
          "download": "http://lorempixel.com/1500/1500/business/9/2000x2000/"
        }
      },
      {
        "title": "Eaton 9px Family - Item 6",
        "text": "Eaton FlexPDU& HotSwap MBP",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 6",
          "thumbnail": "http://lorempixel.com/220/220/business/8/220x220/",
          "preview": "http://lorempixel.com/1000/1000/business/8/1000x1000/",
          "zoom": "http://lorempixel.com/1500/1500/business/8/2000x2000/",
          "download": "http://lorempixel.com/1500/1500/business/8/2000x2000/"
        }
      }
    ]
  };

  return data;

});
