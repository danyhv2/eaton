'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && testdata == "product-grid-sku") {
    data.results.items = [];
  } else {

    // Facets Config
    //--------------
    data.facets = {
      "config": {
        "facetsMinVisible": 4,
        "facetLabelsMinVisible": 4
      },
      "items": [
        {
          "name": "Content Type",
          "id": "content-type",
          "facetType": "radio",
          "labels": [
            { "id": "product", "text": "Products", "url": "#facet-products" },
            { "id": "news", "text": "News & Insights", "url": "#facet-news" },
            { "id": "resources", "text": "Resources", "url": "#facet-resources" }
          ]
        },
        {
          "name": "Document Type",
          "id": "document-type",
          "facetType": "checkbox",
          "labels": [
            { "id": "white-paper", "text": "White Paper", "url": "#facet-white-paper" },
            { "id": "news-release", "text": "News release", "url": "#facet-news-release" },
            { "id": "manual", "text": "Manual", "url": "#facet-manual" }
          ]
        }
      ]
    };



    // Search Results
    //--------------
    // Page Configs
    data.results = {
      "activeFilters": [
        { "text": "Products", "url": "#remove-filter-products" },
        { "text": "News Release", "url": "#remove-filter-news-release" }
      ]
    };

    // Results List
    data.results.items = [
      {
        "contentType": "sku",
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
        "contentType": "sku",
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
        "contentType": "sku",
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
        "contentType": "sku",
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
        "contentType": "sku",
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

    ];


  }

  return data;
});
