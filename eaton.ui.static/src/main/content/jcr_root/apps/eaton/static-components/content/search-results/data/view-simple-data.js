'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && testdata == "search-results") {
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
    ];


  }

  return data;
});
