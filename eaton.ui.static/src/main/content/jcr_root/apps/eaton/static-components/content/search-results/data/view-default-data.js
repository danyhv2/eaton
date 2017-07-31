'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  // Default Data
  //--------------
  // if ((typeof(testdata) == "undefined")) {


    // Results Tabs
    //--------------
    data.tabs = {
      "items": [
        {
          "label": "Product",
          "id": "product",
          "isHiddenTab": false,
          "isActiveTab": false,
          "resultsCount": 40,
          "url": "#tab--product",
          "target": "_self"
        },
        {
          "label": "News & Insights",
          "id": "news-insights",
          "isHiddenTab": false,
          "isActiveTab": false,
          "resultsCount": 100,
          "url": "#tab--news-insights",
          "target": "_self"
        },
        {
          "label": "Resources",
          "id": "resources",
          "isHiddenTab": false,
          "isActiveTab": false,
          "resultsCount": 52,
          "url": "#tab--resources",
          "target": "_self"
        },
      ]
    };


    // Facets Config
    //--------------
    data.facets = {
      "config": {
        "facetItemsMinVisible": 4,
        "facetValuesMinVisible": 4
      },
      "facetItems": [
        {
          "facetName": "Content Type",
          "facetId": "content-type",
          "facetType": "radios",
          "facetValues": [
            {
              "id": "product",
              "label": "Products",
              "url": "#facet-products"
            },
            {
              "id": "news",
              "label": "News & Insights",
              "url": "#facet-news"
            },
            {
              "id": "resources",
              "label": "Resources",
              "url": "#facet-resources"
            }
          ]
        },
        {
          "facetName": "Voltage",
          "facetId": "voltage",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "id": "700va",
              "label": "700 VA",
              "url": "#facet-700va"
            },
            {
              "id": "1000va",
              "label": "1000 VA",
              "url": "#facet-1000va"
            },
            {
              "id": "1500va",
              "label": "1500 VA",
              "url": "#facet-1500va"
            },
            {
              "id": "2000va",
              "label": "2000 VA",
              "url": "#facet-2000va"
            },
            {
              "id": "3000va",
              "label": "3000 VA",
              "url": "#facet-3000va"
            }
          ]
        },
        {
          "facetName": "Facet 01",
          "facetId": "name1",
          "facetType": "radios",
          "facetValues": [
            {
              "id": "value1",
              "label": "Value 1",
              "url": "#facet-value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "#facet-value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "#facet-value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "#facet-value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "#facet-value5"
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "#facet-value6"
            },
            {
              "id": "value7",
              "label": "Value 7",
              "url": "#facet-value7"
            },
            {
              "id": "value8",
              "label": "Value 8",
              "url": "#facet-value8"
            }
          ]
        },
        {
          "facetName": "Facet 02",
          "facetId": "name02",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "id": "value1",
              "label": "Value 1",
              "url": "#facet-value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "#facet-value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "#facet-value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "#facet-value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "#facet-value5"
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "#facet-value6"
            }
          ]
        },
        {
          "facetName": "Facet 03",
          "facetId": "name3",
          "facetType": "radios",
          "facetValues": [
            {
              "id": "value1",
              "label": "Value 1",
              "url": "#facet-value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "#facet-value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "#facet-value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "#facet-value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "#facet-value5"
            }
          ]
        },
        {
          "facetName": "Facet 04",
          "facetId": "name04",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "id": "value1",
              "label": "Value 1",
              "url": "#facet-value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "#facet-value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "#facet-value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "#facet-value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "#facet-value5"
            }
          ]
        }
      ]
    };


    // Search Results
    //--------------
    data.search = {
      "resultsCount": 184,
      "currentPage": 2,
      "showLoadMore": false,
      "keyword": "bckup servre",
      "autoCorrect": {
        "enabled": true,
        "keyword": "backup server",
        "url": "#backup-server",
        "target": '_self'
      },
      "activeFilters": [
        {
          "label": "Products",
          "url": "#remove-filter-products"
        },
        {
          "label": "News Release",
          "url": "#remove-filter-news-release"
        }
      ],
      "sortBy": {
        "items": [
          {
            "label": "Relevance",
            "url": '#sortby-relevance',
            "target": '_self'
          },
          {
            "label": "Newest",
            "url": '#sortby-newest',
            "target": '_self'
          },
          {
            "label": "A to Z",
            "url": '#sortby-a-z',
            "target": '_self'
          },
          {
            "label": "Z to A",
            "url": '#sortby-z-a',
            "target": '_self'
          }
        ]
      },
      "results": [
        {
          "contentType": "family",
          "contentItem": {
            "name": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/p1.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "#overview", "target": "_blank" },
              { "text": "Models", "url": "#models", "target": "_blank" },
              { "text": "Resources", "url": "#resources", "target": "_blank" }
            ]
          }
        },
        {
          "contentType": "article",
          "contentItem": {
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
          "contentItem": {
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
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "imgSrc": "/content/dam/eaton/images/p2.png",
            "imgAlt": "9E6Ki-Eaton 9E",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "#overview", "target": "_blank" },
              { "text": "Models", "url": "#models", "target": "_blank" },
              { "text": "Resources", "url": "#resources", "target": "_blank" }
            ]
          }
        },
        {
          "contentType": "resource",
          "contentItem": {
            "name": "Eaton 9 Series Single-Phase UPS Visio Stencils",
            "documentType": "PDF",
            "documentSize": "4MB",
            "documentName": "Specs-2017.pdf",
            "link": {
              "text": "www.eaton.co/.../specs.pdf",
              "url": "https://eaton.dev/resources/specs.pdf?download=true",
              "target": "_blank"
            }
          }
        },
        {
          "contentType": "family",
          "contentItem": {
            "name": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/p3.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "#overview", "target": "_blank" },
              { "text": "Models", "url": "#models", "target": "_blank" },
              { "text": "Resources", "url": "#resources", "target": "_blank" }
            ]
          }
        },
        {
          "contentType": "article",
          "contentItem": {
            "articleType": "external",
            "name": "Eaton 9 Series Single-Phase UPS Visio Stencils",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "date": "November 27, 2015",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            }
          }
        },
        {
          "contentType": "article",
          "contentItem": {
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
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "imgSrc": "/content/dam/eaton/images/p4.png",
            "imgAlt": "9E6Ki-Eaton 9E",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "#overview", "target": "_blank" },
              { "text": "Models", "url": "#models", "target": "_blank" },
              { "text": "Resources", "url": "#resources", "target": "_blank" }
            ]
          }
        },
        {
          "contentType": "article",
          "contentItem": {
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
          "contentType": "resource",
          "contentItem": {
            "name": "Eaton 9 Series Single-Phase UPS Visio Stencils",
            "documentType": "PDF",
            "documentSize": "4MB",
            "documentName": "Specs-2017.pdf",
            "link": {
              "text": "www.eaton.co/.../specs.pdf",
              "url": "https://eaton.dev/resources/specs.pdf?download=true",
              "target": "_blank"
            }
          }
        },
        {
          "contentType": "family",
          "contentItem": {
            "name": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/p5.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "#overview", "target": "_blank" },
              { "text": "Models", "url": "#models", "target": "_blank" },
              { "text": "Resources", "url": "#resources", "target": "_blank" }
            ]
          }
        }
      ]
    };

  // }

  // Override Data for View: Simple
  if ((typeof(testdata) != "undefined") && testdata == "search-results-simple") {
    data.search.autoCorrect = false;
    data.search.activeFilters = [];
    data.search.resultsCount = 56;
  }

  return data;

});
