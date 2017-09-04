'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  // if ((typeof(testdata) == "undefined")) {

    // Facets Config
    //--------------
    data.facets = {
      "config": {
        "facetGroupsMinVisible": 4,
        "facetValuesMinVisible": 4,
        // "facetGroupExpanded": 2  // <-- What is the purpose of this property?
      },
      "facetLabel": "Narrow Results",
      "viewMoreLabel": "View More",
      "filtersLabel": "Filters",
      "closeFiltersLabel": "Close Filters",
      "applyLabel": "Done",
      "facetItems": [
        {
          "facetGroupName": "Content Type",
          "facetGroupId": "content-type",
          "facetType": "radios",
          "facetValues": [
            {
              "facetId": "product",
              "facetLabel": "Products",
              "facetURL": "http://eaton.dev/results.html?facetvalue=products",
              "facetIsChecked": true
            },
            {
              "facetId": "news",
              "facetLabel": "News & Insights",
              "facetURL": "http://eaton.dev/results.html?facetvalue=news",
              "isChecked": false
            },
            {
              "facetId": "resources",
              "facetLabel": "Resources",
              "facetURL": "http://eaton.dev/results.html?facetvalue=resources",
              "facetIsChecked": false
            }
          ]
        },
        {
          "facetGroupName": "Voltage",
          "facetGroupId": "voltage",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "facetId": "700va",
              "facetLabel": "700 VA",
              "facetURL": "http://eaton.dev/results.html?facetvalue=700va",
              "facetIsChecked": false
            },
            {
              "facetId": "1000va",
              "facetLabel": "1000 VA",
              "facetURL": "http://eaton.dev/results.html?facetvalue=1000va",
              "facetIsChecked": true
            },
            {
              "facetId": "1500va",
              "facetLabel": "1500 VA",
              "facetURL": "http://eaton.dev/results.html?facetvalue=1500va",
              "facetIsChecked": false
            },
            {
              "facetId": "2000va",
              "facetLabel": "2000 VA",
              "facetURL": "http://eaton.dev/results.html?facetvalue=2000va",
              "facetIsChecked": true
            },
            {
              "facetId": "3000va",
              "facetLabel": "3000 VA",
              "facetURL": "http://eaton.dev/results.html?facetvalue=3000va",
              "facetIsChecked": false
            }
          ]
        },
        {
          "facetGroupName": "Facet 01",
          "facetGroupId": "name1",
          "facetType": "radios",
          "facetValues": [
            {
              "facetId": "value1",
              "facetLabel": "Value 1",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value1",
              "facetIsChecked": false
            },
            {
              "facetId": "value2",
              "facetLabel": "Value 2",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value2",
              "facetIsChecked": false
            },
            {
              "facetId": "value3",
              "facetLabel": "Value 3",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value3",
              "facetIsChecked": false
            },
            {
              "facetId": "value4",
              "facetLabel": "Value 4",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value4",
              "facetIsChecked": false
            },
            {
              "facetId": "value5",
              "facetLabel": "Value 5",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value5",
              "facetIsChecked": false
            },
            {
              "facetId": "value6",
              "facetLabel": "Value 6",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value6",
              "facetIsChecked": false
            },
            {
              "facetId": "value7",
              "facetLabel": "Value 7",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value7",
              "facetIsChecked": false
            },
            {
              "facetId": "value8",
              "facetLabel": "Value 8",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value8",
              "facetIsChecked": false
            }
          ]
        },
        {
          "facetGroupName": "Facet 02",
          "facetGroupId": "name02",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "facetId": "value1",
              "facetLabel": "Value 1",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value1",
              "facetIsChecked": false
            },
            {
              "facetId": "value2",
              "facetLabel": "Value 2",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value2",
              "facetIsChecked": false
            },
            {
              "facetId": "value3",
              "facetLabel": "Value 3",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value3",
              "facetIsChecked": false
            },
            {
              "facetId": "value4",
              "facetLabel": "Value 4",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value4",
              "facetIsChecked": false
            },
            {
              "facetId": "value5",
              "facetLabel": "Value 5",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value5",
              "facetIsChecked": false
            },
            {
              "facetId": "value6",
              "facetLabel": "Value 6",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value6",
              "facetIsChecked": false
            }
          ]
        },
        {
          "facetGroupName": "Facet 03",
          "facetGroupId": "name3",
          "facetType": "radios",
          "facetValues": [
            {
              "facetId": "value1",
              "facetLabel": "Value 1",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value1",
              "facetIsChecked": false
            },
            {
              "facetId": "value2",
              "facetLabel": "Value 2",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value2",
              "facetIsChecked": false
            },
            {
              "facetId": "value3",
              "facetLabel": "Value 3",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value3",
              "facetIsChecked": false
            },
            {
              "facetId": "value4",
              "facetLabel": "Value 4",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value4",
              "facetIsChecked": false
            },
            {
              "facetId": "value5",
              "facetLabel": "Value 5",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value5",
              "facetIsChecked": false
            }
          ]
        },
        {
          "facetGroupName": "Facet 04",
          "facetGroupId": "name04",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "facetId": "value1",
              "facetLabel": "Value 1",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value1",
              "facetIsChecked": false
            },
            {
              "facetId": "value2",
              "facetLabel": "Value 2",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value2",
              "facetIsChecked": false
            },
            {
              "facetId": "value3",
              "facetLabel": "Value 3",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value3",
              "facetIsChecked": false
            },
            {
              "facetId": "value4",
              "facetLabel": "Value 4",
              "facetURL": "http://eaton.dev/results.html?facetvalue=value4",
              "facetIsChecked": false
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
      "currentPage": 1,
      "resultsLabel": 'results',
      "loadMoreLabel": 'Load More',
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
        "values": [
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
    };



  //-----------------------------------
  // ResultsList for Page: T7-product-family-template-models
  //-----------------------------------
  data.sku = {};
  data.sku.searchResults = {
    "productSpecificationTitle": "Specification",
    "productResourcesTitle": "Resources",
    "resultsList": [
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 3200,
          "image": {
            "src": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "600V lorem ipsum dolor"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "309-532P6W"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "(18) C13 Outlet grip, (12) C19 Outlet grip"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Eaton 5P Tower UPS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 99500,
          "image": {
            "src": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-6-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 3200,
          "image": {
            "src": "/content/dam/eaton/images/products/product-7-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "600V lorem ipsum dolor"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "309-532P6W"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "(18) C13 Outlet grip, (12) C19 Outlet grip"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Network, Server & Storage UPS long name used for testing purposes",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 99500,
          "image": {
            "src": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "productPrice": 2400,
          "image": {
            "src": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "65 KAIC at 240V, 10kAIC at 250 Vdc"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "2A-2B right pigtail auxiliary switch"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "110-127V right pigtail undervoltage release"
            }
          ]
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.sed do eiusmod tempor incididunt ut labore et dolore magna…",
          "subcategory": "Network, Server & Storage UPS",
          "productPrice": 3200,
          "image": {
            "src": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "altText": "",
          },
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
              "productAttributeLabel": "Voltage rating",
              "productAttributeValue": "600V lorem ipsum dolor"
            },
            {
              "productAttributeLabel": "Input Plug",
              "productAttributeValue": "309-532P6W"
            },
            {
              "productAttributeLabel": "Output Recepticles",
              "productAttributeValue": "(18) C13 Outlet grip, (12) C19 Outlet grip"
            }
          ]
        }
      }
    ]
  };


  //-----------------------------------
  // ResultsList for Page: T6-subcategory
  //-----------------------------------
  data.subcategory = {};
  data.subcategory.searchResults = {
    // "newLabel": "New", // <-- This property is just a placeholder for future development, is not currently supported
    // "bestSellerLabel": "Best Seller", // <-- This property is just a placeholder for future development, is not currently supported
    "resultsList": [
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-1.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-2.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Eaton 5P Tower UPS",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-3.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-4.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-5.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-6-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-6.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-7-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-7.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Network, Server & Storage UPS long name used for testing purposes",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-1-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-8.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-2-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-9.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-3-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-10.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "Fuse Disconnect ePDUs",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-4-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-11.html",
            "target": "_blank"
          }
        }
      },
      {
        "contentType": "product-card",
        "contentItem": {
          "name": "9E6Ki-Eaton 9E",
          "subcategory": "Network, Server & Storage UPS",
          "image": {
            "src": "/content/dam/eaton/images/products/product-5-thumbnail.png",
            "altText": "",
          },
          "link": {
            "url": "http://eaton.dev/products/familypageURL-12.html",
            "target": "_blank"
          }
        }
      }
    ]
  };

  // Alternative View Data
  if (properties.get('view') == 'product-card-family') {
    data.search.resultsOptions.disclaimerEnabled = false;
  }

  // REMOVE for integration and production, only for test porpouses
  // logic for toogle radios and checkbox based on facetvalue url parameter
  var facetvaluesArr = request.getRequestParameters('facetvalue') || [];
  var activeFiltersArr = [];
  var activeFiltersObjArr = [];
  // data.facets.facetItems[0].facetName = "Yeahh "; //+ facetvalues.join(',');
  // data.facets.facetItems[0].facetName = facetvaluesArr; //+ facetvalues.join(',');

  // each query string parameter
  for (var p = 0; p < facetvaluesArr.length; p++) {
    // var facetvalue = facetvaluesArr[p];
    // data.facets.facetItems[0].facetName += facetvalue;

    // ecach facet group
    for (var f = 0; f < data.facets.facetItems.length; f++) {
      for (var i = 0; i < data.facets.facetItems[f].facetValues.length; i++) {
        var facetId = data.facets.facetItems[f].facetValues[i].facetId;

        // activate the link
        // data.facets.facetItems[0].facetName += '('+facetId+'-'+facetvaluesArr+') ';
        // data.facets.facetItems[0].facetName = facetvaluesArr.join(',');
        if(facetvaluesArr.join(',').indexOf(facetId) >= 0) {
          // data.facets.facetItems[0].facetName = 'si '+facetId;
          data.facets.facetItems[f].facetValues[i].facetIsChecked = true;
        }

        // add the active facets to array later we'll add it to the URL
        if(data.facets.facetItems[f].facetValues[i].facetIsChecked){
          activeFiltersArr.push(facetId);
          activeFiltersObjArr.push(data.facets.facetItems[f].facetValues[i]);
        }
      }
    }
  }

  // change the url params dynamically
  for (var f = 0; f < data.facets.facetItems.length; f++) {
    for (var i = 0; i < data.facets.facetItems[f].facetValues.length; i++) {
      var facetId = data.facets.facetItems[f].facetValues[i].facetId;
      var isFacedChecked = data.facets.facetItems[f].facetValues[i].facetIsChecked;
      var disableactiveFiltersArr = activeFiltersArr.filter(function(f){return f!=facetId});
      var enablectiveFiltersArr = activeFiltersArr.concat([facetId]);

      data.facets.facetItems[f].facetValues[i].url =
        request.requestURL + '?facetvalue=' +
          ( isFacedChecked
            ? disableactiveFiltersArr.join(',')
            : enablectiveFiltersArr.join(',')
          )
    }

    // NOTE: disabled due to issues when rendering the page - ActiveFilters Property seems to be empty at this point
    // data.search.activeFilters.values = activeFiltersObjArr;

  }

  // REMOVE for integration and production, only for test porpouses
  // END: logic for toogle radios and checkbox.

  return data;

});
