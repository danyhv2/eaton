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
          "thumbnail": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--01.jpg",
          "preview": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--01.jpg",
          "zoom": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--01-large.jpg",
          "download": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--01-large.jpg"
        }
      },
      {
        "title": "Image 2",
        "text": "This slide has the download feature disabled",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 2",
          "thumbnail": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--02.jpg",
          "preview": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--02.jpg",
          "zoom": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--02-large.jpg",
          "download": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--02-large.jpg"
        }
      },
      {
        "title": "Eaton 9px Family - Item 3 This is a long active headline text - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "text": "",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 3",
          "thumbnail": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--03.jpg",
          "preview": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--03.jpg",
          "zoom": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--03-large.jpg",
          "download": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--03-large.jpg"
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
        "title": "",
        "text": "This Slide has no title, only description",
        "isVideo": false, // isVideo is not currenly supported. This propery is just a placeholder for future development
        "images": {
          "altText": "Gallery Item 6",
          "thumbnail": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--04.jpg",
          "preview": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--04.jpg",
          "zoom": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--04-large.jpg",
          "download": "/content/dam/eaton/images/media-gallery/media-gallery-16by9--04-large.jpg"
        }
      }
    ]
  };

  return data;

});
