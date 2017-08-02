//-----------------------------------
// M-60: Results List Container
//-----------------------------------
'use strict';

let App = window.App || {};

App.resultsList = (function() {

  const $componentSelector = $('.results-list');
  let requestURL = null;
  let requestNextPage = null;

  const init = () => {

    requestURL = $componentSelector.attr('data-results-url');
    requestNextPage = $componentSelector.attr('data-results-next-page');

    // requestURL = 'https://jsonplaceholder.typicode.com/photos/1';

    $componentSelector.find('[data-load-more]').on('click', loadMoreResults);

  };


  /**
  * Fetch More results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  const loadMoreResults = (event) => {
    console.log(
      requestURL,
      requestNextPage
    );

    const requestOptions = {
      page: requestNextPage,
      format: 'json'
    };

    const fetch = $.getJSON(requestURL, requestOptions);

    debugger;
    fetch
      .done((data) => {
        console.log('done', data);
      })
      .fail((data) => {
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

}());
