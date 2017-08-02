/**
 *
 *
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY - 
 *
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 *
 */


//-----------------------------------
// M-60: Results List Container
//-----------------------------------
'use strict';

var App = window.App || {};

App.resultsList = function () {

  var $componentSelector = $('.results-list');
  var requestURL = null;
  var requestNextPage = null;

  var init = function init() {

    requestURL = $componentSelector.attr('data-results-url');
    requestNextPage = $componentSelector.attr('data-results-next-page');

    // requestURL = 'https://jsonplaceholder.typicode.com/photos/1';

    $componentSelector.find('[data-load-more]').on('click', loadMoreResults);
  };

  /**
  * Fetch More results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  var loadMoreResults = function loadMoreResults(event) {
    console.log(requestURL, requestNextPage);

    var requestOptions = {
      page: requestNextPage,
      format: 'json'
    };

    var fetch = $.getJSON(requestURL, requestOptions);

    debugger;
    fetch.done(function (data) {
      console.log('done', data);
    }).fail(function (data) {
      console.error('error', data);
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentSelector.length > 0) {
    init();

    // Public methods
    // return {
    //
    // }
  }
}();