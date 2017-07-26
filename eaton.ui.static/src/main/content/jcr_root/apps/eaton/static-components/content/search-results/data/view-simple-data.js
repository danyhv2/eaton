'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && testdata == "search-results-simple") {
    data.results = [];
  } else {
    data.results = [
      {
        "contentType": "product",
        "content": {
          "name": "Network, Server & Storage UPS",
          "imgSrc": "/content/dam/products/image.jpg",
          "imgAlt": "Network, Server & Storage UPS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
          "secondaryLinks": [
            {
              "text": "Overview",
              "url": "#overview",
              "target": "_blank"
            },
            {
              "text": "Models",
              "url": "#models",
              "target": "_blank"
            },
            {
              "text": "Resources",
              "url": "#resources",
              "target": "_blank"
            }
          ]
        }
      },
      {
        "contentType": "article",
        "content": {
          "articleType": "external",
          "name": "Eaton 9 Series Single-Phase UPS Visio Stencils",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "link": {
            "text": "www.cooperindustries.com/.../product_updates.html",
            "url": "http://www.cooperindustries.com/",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "article",
        "content": {
          "articleType": "internal",
          "name": "Eaton 9-Speed Synchronized Transmissions Single “H” Shift Control Configuration article",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "date": "November 27, 2015",
          "link": {
            "text": "www.cooperindustries.com/.../product_updates.html",
            "url": "http://www.cooperindustries.com/",
            "target": "_blank"
          },
        }
      },
      {
        "contentType": "sku",
        "content": {
          "name": "9E6Ki-Eaton 9E",
          "imgSrc": "/content/dam/products/image.jpg",
          "imgAlt": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
          "secondaryLinks": [
            {
              "text": "Overview",
              "url": "#overview",
              "target": "_blank"
            },
            {
              "text": "Models",
              "url": "#models",
              "target": "_blank"
            },
            {
              "text": "Resources",
              "url": "#resources",
              "target": "_blank"
            }
          ]
        }
      },
      {
        "contentType": "resource",
        "content": {
          "name": "Eaton 9 Series Single-Phase UPS Visio Stencils",
          "type": "PDF",
          "size": "4MB",
          "link": {
            "text": "www.cooperindustries.com/.../file.pdf",
            "url": "http://www.cooperindustries.com/resources/files/eaton-9-series.pdf",
            "target": "_blank"
          }
        }
      }

    ];
  }

  return data;
});
