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
          "isADisabledTab": false,
          "resultsCount": 36,
          "url": "http://eaton.dev/results.tab.product.html",
          "target": "_self"
        },
        {
          "label": "News & insights",
          "id": "news-insights",
          "isHiddenTab": false,
          "isActiveTab": false,
          "isADisabledTab": false,
          "resultsCount": 97,
          "url": "http://eaton.dev/results.tab.news-insights.html",
          "target": "_self"
        },
        {
          "label": "Resources",
          "id": "resources",
          "isHiddenTab": false,
          "isActiveTab": false,
          "isADisabledTab": true,
          "resultsCount": 0,
          "url": "http://eaton.dev/results.tab.resources.html",
          "target": "_self"
        },
        {
          "label": "This Tab Should be hidden",
          "id": "resources",
          "isHiddenTab": true,
          "isActiveTab": false,
          "isADisabledTab": false,
          "resultsCount": 15,
          "url": "http://eaton.dev/results.tab.hidden.html",
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
              "url": "http://eaton.dev/results.html?facetvalue=products",
              "active": true
            },
            {
              "id": "news",
              "label": "News & Insights",
              "url": "http://eaton.dev/results.html?facetvalue=news",
              "active": false
            },
            {
              "id": "resources",
              "label": "Resources",
              "url": "http://eaton.dev/results.html?facetvalue=resources",
              "active": false
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
              "url": "http://eaton.dev/results.html?facetvalue=700va"
            },
            {
              "id": "1000va",
              "label": "1000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=1000va",
              "active": true
            },
            {
              "id": "1500va",
              "label": "1500 VA",
              "url": "http://eaton.dev/results.html?facetvalue=1500va"
            },
            {
              "id": "2000va",
              "label": "2000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=2000va"
            },
            {
              "id": "3000va",
              "label": "3000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=3000va"
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
              "url": "http://eaton.dev/results.html?facetvalue=value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5"
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "http://eaton.dev/results.html?facetvalue=value6"
            },
            {
              "id": "value7",
              "label": "Value 7",
              "url": "http://eaton.dev/results.html?facetvalue=value7"
            },
            {
              "id": "value8",
              "label": "Value 8",
              "url": "http://eaton.dev/results.html?facetvalue=value8"
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
              "url": "http://eaton.dev/results.html?facetvalue=value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5"
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "http://eaton.dev/results.html?facetvalue=value6"
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
              "url": "http://eaton.dev/results.html?facetvalue=value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4"
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5"
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
              "url": "http://eaton.dev/results.html?facetvalue=value1"
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2"
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3"
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4"
            }
          ]
        }
      ]
    };


    // Search Results
    //--------------
    data.search = {
      "ajaxRequestUrl": "/content/eaton-static/us/en/qa-templates/test-data/search-results--more-data.json",
      "ajaxRequestNextPage": 2,
      "resultsCount": 184,
      "resultsLabel": 'results',
      "currentPage": 1,
      "resultsOptions": {
        "showLoadMore": true,
        "disclaimerEnabled": true,
      },
      "searchTerm": "bckup servre",
      "autoCorrect": {
        "enabled": true,
        "searchTerm": "bckup servre",
        "correctedTerm": "backup server",
        "url": "#backup-server",
        "target": '_self'
      },
      "activeFilters": {
        "removeFilterLabel": "Remove Filter",
        "clearAllFilters": {
          "label": "Clear filters",
          "url": "http://eaton.dev/results.html?clear-all-filters=true",
          "target": "_self"
        },
        "items": [
          {
            "label": "Products",
            "url": "http://eaton.dev/results.html?remove-filter=products",
            "target": "_self"
          },
          {
            "label": "1000 VA",
            "url": "http://eaton.dev/results.html?remove-filter=1000-va",
            "target": "_self"
          }
        ]
      },
      "sortBy": {
        "sortByLabel": "Sort by",
        "items": [
          {
            "label": "Relevance",
            "url": 'http://eaton.dev/results.html?sortby=relevance',
            "target": '_self'
          },
          {
            "label": "Newest",
            "url": 'http://eaton.dev/results.html?sortby=newest',
            "target": '_self'
          },
          {
            "label": "A to Z",
            "url": 'http://eaton.dev/results.html?sortby=a-z',
            "target": '_self'
          },
          {
            "label": "Z to A",
            "url": 'http://eaton.dev/results.html?sortby=z-a',
            "target": '_self'
          }
        ]
      },
      "results": [
        {
          "contentType": "family",
          "contentItem": {
            "name": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "http://eaton.dev/product.overview.html", "target": "_blank" },
              { "text": "Models", "url": "http://eaton.dev/product.models.html", "target": "_blank" },
              { "text": "Resources", "url": "http://eaton.dev/product.resources.html", "target": "_blank" }
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
            "imgSrc": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "imgAlt": "9E6Ki-Eaton 9E",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "http://eaton.dev/product.overview.html", "target": "_blank" },
              { "text": "Models", "url": "http://eaton.dev/product.models.html", "target": "_blank" },
              { "text": "Resources", "url": "http://eaton.dev/product.resources.html", "target": "_blank" }
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
            "imgSrc": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "http://eaton.dev/product.overview.html", "target": "_blank" },
              { "text": "Models", "url": "http://eaton.dev/product.models.html", "target": "_blank" },
              { "text": "Resources", "url": "http://eaton.dev/product.resources.html", "target": "_blank" }
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
            "imgSrc": "/content/dam/eaton/images/products/product-7-thumbnail.png",
            "imgAlt": "9E6Ki-Eaton 9E",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "http://eaton.dev/product.overview.html", "target": "_blank" },
              { "text": "Models", "url": "http://eaton.dev/product.models.html", "target": "_blank" },
              { "text": "Resources", "url": "http://eaton.dev/product.resources.html", "target": "_blank" }
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
            "imgSrc": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "imgAlt": "Network, Server & Storage UPS",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna …",
            "link": {
              "text": "www.cooperindustries.com/.../product_updates.html",
              "url": "http://www.cooperindustries.com/",
              "target": "_blank"
            },
            "secondaryLinks": [
              { "text": "Overview", "url": "http://eaton.dev/product.overview.html", "target": "_blank" },
              { "text": "Models", "url": "http://eaton.dev/product.models.html", "target": "_blank" },
              { "text": "Resources", "url": "http://eaton.dev/product.resources.html", "target": "_blank" }
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
