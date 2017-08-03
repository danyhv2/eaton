'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  // if ((typeof(testdata) == "undefined")) {

    // Facets Config
    //--------------
    data.facets = {
      "config": {
        "facetItemsMinVisible": 4,
        "facetValuesMinVisible": 3
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
    data.search = {
      "ajaxRequestUrl": "/content/eaton-static/us/en/qa-templates/test-data/product-grid-sku--more-data.json",
      "ajaxRequestNextPage": 2,
      "resultsCount": 89,
      "currentPage": 1,
      "showLoadMore": true,
      "keyword": "bckup servre",
      "autoCorrect": {
        "enabled": true,
        "correctedKeyword": "backup server",
        "url": "#backup-server",
        "target": '_self'
      },
      "clearAllFiltersLink": {
        "text": "Clear filters",
        "url": "#clear-all-filters",
        "target": "_self"
      },
      "activeFilters": [
        // {
        //   "label": "Products",
        //   "url": "#remove-filter-products",
        //   "target": "_self"
        // },
        // {
        //   "label": "News Release",
        //   "url": "#remove-filter-news-release",
        //   "target": "_self"
        // }
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
      results: [
        {
          "contentType": "sku-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "imgSrc": "/content/dam/eaton/images/p1.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "https://eaton.dev/products/pid-1213.html#overview",
              "target": "_self"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1213.html#specifications",
              "resourcesURL": "https://eaton.dev/products/pid-1213.html#resources"
            },
            "productAttributes": [
              {
                "label": "Voltage rating",
                "value": "65 KAIC at 240V, 10kAIC at 250 Vdc"
              },
              {
                "label": "Input Plug",
                "value": "2A-2B right pigtail auxiliary switch"
              },
              {
                "label": "Output Recepticles",
                "value": "110-127V right pigtail undervoltage release"
              }
            ]
          }
        },
        {
          "contentType": "sku-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "imgSrc": "/content/dam/eaton/images/p2.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 3200,
            "link": {
              "url": "https://eaton.dev/products/pid-1213.html#overview",
              "target": "_self"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1213.html#specifications",
              "resourcesURL": "https://eaton.dev/products/pid-1213.html#resources"
            },
            "productAttributes": [
              {
                "label": "Voltage rating",
                "value": "600V lorem ipsum dolor"
              },
              {
                "label": "Input Plug",
                "value": "309-532P6W"
              },
              {
                "label": "Output Recepticles",
                "value": "(18) C13 Outlet grip, (12) C19 Outlet grip"
              }
            ]
          }
        },
        {
          "contentType": "sku-card",
          "contentItem": {
            "name": "Network, Server & Storage UPS this is a really long title used for testing purposes, text wraps in multiple lines",
            "imgSrc": "/content/dam/eaton/images/p3.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 99500,
            "link": {
              "url": "https://eaton.dev/products/pid-1213.html#overview",
              "target": "_self"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1213.html#specifications",
              "resourcesURL": "https://eaton.dev/products/pid-1213.html#resources"
            },
            "productAttributes": [
              {
                "label": "Voltage rating",
                "value": "65 KAIC at 240V, 10kAIC at 250 Vdc"
              },
              {
                "label": "Input Plug",
                "value": "2A-2B right pigtail auxiliary switch"
              },
              {
                "label": "Output Recepticles",
                "value": "110-127V right pigtail undervoltage release"
              }
            ]
          }
        },
        {
          "contentType": "sku-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "imgSrc": "/content/dam/eaton/images/p4.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "https://eaton.dev/products/pid-1213.html#overview",
              "target": "_self"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1213.html#specifications",
              "resourcesURL": "https://eaton.dev/products/pid-1213.html#resources"
            },
            "productAttributes": [
              {
                "label": "Voltage rating",
                "value": "65 KAIC at 240V, 10kAIC at 250 Vdc"
              },
              {
                "label": "Input Plug",
                "value": "2A-2B right pigtail auxiliary switch"
              },
              {
                "label": "Output Recepticles",
                "value": "110-127V right pigtail undervoltage release"
              }
            ]
          }
        },
        {
          "contentType": "sku-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "imgSrc": "/content/dam/eaton/images/p5.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "https://eaton.dev/products/pid-1213.html#overview",
              "target": "_self"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1213.html#specifications",
              "resourcesURL": "https://eaton.dev/products/pid-1213.html#resources"
            },
            "productAttributes": [
              {
                "label": "Voltage rating",
                "value": "65 KAIC at 240V, 10kAIC at 250 Vdc"
              },
              {
                "label": "Input Plug",
                "value": "2A-2B right pigtail auxiliary switch"
              },
              {
                "label": "Output Recepticles",
                "value": "110-127V right pigtail undervoltage release"
              }
            ]
          }
        }
      ]
    };

  // }

  return data;
});
