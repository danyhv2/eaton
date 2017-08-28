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
              "isChecked": true
            },
            {
              "id": "news",
              "label": "News & Insights",
              "url": "http://eaton.dev/results.html?facetvalue=news",
              "isChecked": false
            },
            {
              "id": "resources",
              "label": "Resources",
              "url": "http://eaton.dev/results.html?facetvalue=resources",
              "isChecked": false
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
              "url": "http://eaton.dev/results.html?facetvalue=700va",
              "isChecked": false
            },
            {
              "id": "1000va",
              "label": "1000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=1000va",
              "isChecked": true
            },
            {
              "id": "1500va",
              "label": "1500 VA",
              "url": "http://eaton.dev/results.html?facetvalue=1500va",
              "isChecked": false
            },
            {
              "id": "2000va",
              "label": "2000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=2000va",
              "isChecked": true
            },
            {
              "id": "3000va",
              "label": "3000 VA",
              "url": "http://eaton.dev/results.html?facetvalue=3000va",
              "isChecked": false
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
              "url": "http://eaton.dev/results.html?facetvalue=value1",
              "isChecked": false
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2",
              "isChecked": false
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3",
              "isChecked": false
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4",
              "isChecked": false
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5",
              "isChecked": false
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "http://eaton.dev/results.html?facetvalue=value6",
              "isChecked": false
            },
            {
              "id": "value7",
              "label": "Value 7",
              "url": "http://eaton.dev/results.html?facetvalue=value7",
              "isChecked": false
            },
            {
              "id": "value8",
              "label": "Value 8",
              "url": "http://eaton.dev/results.html?facetvalue=value8",
              "isChecked": false
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
              "url": "http://eaton.dev/results.html?facetvalue=value1",
              "isChecked": false
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2",
              "isChecked": false
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3",
              "isChecked": false
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4",
              "isChecked": false
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5",
              "isChecked": false
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "http://eaton.dev/results.html?facetvalue=value6",
              "isChecked": false
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
              "url": "http://eaton.dev/results.html?facetvalue=value1",
              "isChecked": false
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2",
              "isChecked": false
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3",
              "isChecked": false
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4",
              "isChecked": false
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "http://eaton.dev/results.html?facetvalue=value5",
              "isChecked": false
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
              "url": "http://eaton.dev/results.html?facetvalue=value1",
              "isChecked": false
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "http://eaton.dev/results.html?facetvalue=value2",
              "isChecked": false
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "http://eaton.dev/results.html?facetvalue=value3",
              "isChecked": false
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "http://eaton.dev/results.html?facetvalue=value4",
              "isChecked": false
            }
          ]
        }
      ]
    };



    // Search Results
    //--------------
    data.search = {
      "ajaxRequestUrl": "/content/eaton-static/us/en/qa-templates/test-data/product-grid--more-data.json",
      "ajaxRequestNextPage": 2,
      "resultsCount": 89,
      "resultsLabel": 'results',
      "currentPage": 1,
      "resultsOptions": {
        "showLoadMore": true,
        "disclaimerEnabled": true,
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
          },
          {
            "label": "2000 VA",
            "url": "http://eaton.dev/results.html?remove-filter=2000-va",
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 3200,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Eaton 5P Tower UPS",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 99500,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-6-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-7-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 3200,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Network, Server & Storage UPS long name used for testing purposes",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 99500,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "Fuse Disconnect ePDUs",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 2400,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
          "contentType": "product-card",
          "contentItem": {
            "name": "9E6Ki-Eaton 9E",
            "subcategory": "Network, Server & Storage UPS",
            "imgSrc": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
            "price": 3200,
            "link": {
              "url": "http://eaton.dev/products/pid-1.overview.html",
              "target": "_blank"
            },
            "productLinks": {
              "specificationsURL": "https://eaton.dev/products/pid-1.specifications.html",
              "resourcesURL": "https://eaton.dev/products/pid-1.resources.html"
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
        }
      ]
    };

  // Alternative View Data
  if (properties.get('view') == 'product-card-family') {
    data.search.resultsOptions.disclaimerEnabled = false;
  }

  return data;

});
