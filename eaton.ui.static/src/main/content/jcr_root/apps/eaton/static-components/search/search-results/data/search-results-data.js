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
              "url": "t10-search-results.html?facetvalue=product",
              "isChecked": true,
              "target": "_self"
            },
            {
              "id": "news",
              "label": "News & Insights",
              "url": "t10-search-results.html?facetvalue=news",
              "isChecked": false,
              "target": "_self"
            },
            {
              "id": "resources",
              "label": "Resources",
              "url": "t10-search-results.html?facetvalue=resources",
              "isChecked": false,
              "target": "_self"
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
              "url": "t10-search-results.html?facetvalue=700va",
              "isChecked": true
            },
            {
              "id": "1000va",
              "label": "1000 VA",
              "url": "t10-search-results.html?facetvalue=1000va",
              "isChecked": true
            },
            {
              "id": "1500va",
              "label": "1500 VA",
              "url": "t10-search-results.html?facetvalue=1500va",
              "isChecked": false
            },
            {
              "id": "2000va",
              "label": "2000 VA",
              "url": "t10-search-results.html?facetvalue=2000va",
              "isChecked": true
            },
            {
              "id": "3000va",
              "label": "3000 VA",
              "url": "t10-search-results.html?facetvalue=3000va",
              "isChecked": true,
            },
            {
              "id": "5000va",
              "label": "3500 VA",
              "url": "t10-search-results.html?facetvalue=3500va",
              "isChecked": true,
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
              "url": "t10-search-results.html?facetvalue=value1",
              "isChecked": false
            },
            {
              "id": "value2",
              "label": "Value 2",
              "url": "t10-search-results.html?facetvalue=value2",
              "isChecked": false
            },
            {
              "id": "value3",
              "label": "Value 3",
              "url": "t10-search-results.html?facetvalue=value3",
              "isChecked": false
            },
            {
              "id": "value4",
              "label": "Value 4",
              "url": "t10-search-results.html?facetvalue=value4",
              "isChecked": false
            },
            {
              "id": "value5",
              "label": "Value 5",
              "url": "t10-search-results.html?facetvalue=value5",
              "isChecked": false
            },
            {
              "id": "value6",
              "label": "Value 6",
              "url": "t10-search-results.html?facetvalue=value6",
              "isChecked": false
            },
            {
              "id": "value7",
              "label": "Value 7",
              "url": "t10-search-results.html?facetvalue=value7",
              "isChecked": false
            },
            {
              "id": "value8",
              "label": "Value 8",
              "url": "t10-search-results.html?facetvalue=value8",
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
              "id": "f2value1",
              "label": "Value 1",
              "url": "t10-search-results.html?facetvalue=f2value1",
              "isChecked": false
            },
            {
              "id": "f2value2",
              "label": "Value 2",
              "url": "t10-search-results.html?facetvalue=f2value2",
              "isChecked": false
            },
            {
              "id": "f2value3",
              "label": "Value 3",
              "url": "t10-search-results.html?facetvalue=f2value3",
              "isChecked": false
            },
            {
              "id": "f2value4",
              "label": "Value 4",
              "url": "t10-search-results.html?facetvalue=f2value4",
              "isChecked": false
            },
            {
              "id": "f2value5",
              "label": "Value 5",
              "url": "t10-search-results.html?facetvalue=f2value5",
              "isChecked": false
            },
            {
              "id": "f2value6",
              "label": "Value 6",
              "url": "t10-search-results.html?facetvalue=f2value6",
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
              "id": "f3value1",
              "label": "Value 1",
              "url": "t10-search-results.html?facetvalue=f3value1",
              "isChecked": true
            },
            {
              "id": "f3value2",
              "label": "Value 2",
              "url": "t10-search-results.html?facetvalue=f3value2",
              "isChecked": true
            },
            {
              "id": "f3value3",
              "label": "Value 3",
              "url": "t10-search-results.html?facetvalue=f3value3",
              "isChecked": true
            },
            {
              "id": "f3value4",
              "label": "Value 4",
              "url": "t10-search-results.html?facetvalue=f3value4",
              "isChecked": true
            },
            {
              "id": "f3value5",
              "label": "Value 5",
              "url": "t10-search-results.html?facetvalue=f3value5",
              "isChecked": true
            }
          ]
        },
        {
          "facetName": "Facet 04",
          "facetId": "name04",
          "facetType": "checkboxes",
          "facetValues": [
            {
              "id": "f4value1",
              "label": "Value 1",
              "url": "t10-search-results.html?facetvalue=f4value1",
              "isChecked": true
            },
            {
              "id": "f4value2",
              "label": "Value 2",
              "url": "t10-search-results.html?facetvalue=f4value2",
              "isChecked": true
            },
            {
              "id": "f4value3",
              "label": "Value 3",
              "url": "t10-search-results.html?facetvalue=f4value3",
              "isChecked": true
            },
            {
              "id": "f4value4",
              "label": "Value 4",
              "url": "t10-search-results.html?facetvalue=f4value4",
              "isChecked": true
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
      "resultsCount": 200,
      "resultsLabel": 'Results',
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
          "url": "t10-search-results.html?clear-all-filters=true",
          "target": "_self"
        },
        "items": [
          {
            "label": "Products",
            "url": "t10-search-results.html?remove-filter=products",
            "target": "_self"
          },
          {
            "label": "700 VA",
            "url": "t10-search-results.html?remove-filter=700-va",
            "target": "_self"
          },
          {
            "label": "1000 VA",
            "url": "t10-search-results.html?remove-filter=1000-va",
            "target": "_self"
          },
          {
            "label": "2000 VA",
            "url": "t10-search-results.html?remove-filter=2000-va",
            "target": "_self"
          },
          {
            "label": "3000 VA",
            "url": "t10-search-results.html?remove-filter=3000-va",
            "target": "_self"
          },
          {
            "label": "3500 VA",
            "url": "t10-search-results.html?remove-filter=3500-va",
            "target": "_self"
          }
        ]
      },
      "sortBy": {
        "sortByLabel": "Sort By",
        "items": [
          {
            "label": "Relevance",
            "url": 't10-search-results.html?sortby=relevance',
            "target": '_self'
          },
          {
            "label": "Newest",
            "url": 't10-search-results.html?sortby=newest',
            "target": '_self'
          },
          {
            "label": "A to Z",
            "url": 't10-search-results.html?sortby=a-z',
            "target": '_self'
          },
          {
            "label": "Z to A",
            "url": 't10-search-results.html?sortby=z-a',
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
        var facetId = data.facets.facetItems[f].facetValues[i].id;

        // activate the link
        // data.facets.facetItems[0].facetName += '('+facetId+'-'+facetvaluesArr+') ';
        // data.facets.facetItems[0].facetName = facetvaluesArr.join(',');
        if(facetvaluesArr.join(',').indexOf(facetId) >= 0) {
          // data.facets.facetItems[0].facetName = 'si '+facetId;
          data.facets.facetItems[f].facetValues[i].isChecked = true;
        }

        // add the active facets to array later we'll add it to the URL
        if(data.facets.facetItems[f].facetValues[i].isChecked){
          activeFiltersArr.push(facetId);
          activeFiltersObjArr.push(data.facets.facetItems[f].facetValues[i]);
        }
      }
    }
  }

  // change the url params dynamically
  for (var f = 0; f < data.facets.facetItems.length; f++) {
    for (var i = 0; i < data.facets.facetItems[f].facetValues.length; i++) {
      var facetId = data.facets.facetItems[f].facetValues[i].id;
      var isFacedChecked = data.facets.facetItems[f].facetValues[i].isChecked;
      var disableactiveFiltersArr = activeFiltersArr.filter(function(f){return f!=facetId});
      var enablectiveFiltersArr = activeFiltersArr.concat([facetId]);

      data.facets.facetItems[f].facetValues[i].url =
        request.requestURL + '?facetvalue=' +
          ( isFacedChecked ?
            disableactiveFiltersArr.join(',') :
            enablectiveFiltersArr.join(','))
    }

    data.search.activeFilters.items = activeFiltersObjArr;
  }

  // REMOVE for integration and production, only for test porpouses
  // END: logic for toogle radios and checkbox.



  return data;

});
