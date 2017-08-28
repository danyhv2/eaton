//-----------------------------------
// Product Gird Component
//-----------------------------------
'use strict';

let App = window.App || {};
App.productGrid = (function() {

  const resultListCSSClass = '.results-list';
  const $componentEl = $('.product-grid').find(resultListCSSClass);
  let i18nStrings = {};


  /**
  * Initialize
  */
  const init = () => {
    i18nStrings = App.global.utils.loadI18NStrings($componentEl);
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = function () {
    $componentEl.find('[data-load-more]').on('click', loadMoreResults);
  };


  /**
  * Configure AJAX Request
  * @param { Object } options - description
  * @return { Promise }
  */
  const fetchData = (url, nextPage) => {
    const requestOptions = {
      page: nextPage,
      format: 'json'
    };

    return $.getJSON(url, requestOptions);
  };


  /**
  * It Returns the HTML Markup for the given Result Item
  * @param { Object } item
  * @param { Object } i18n
  * @param { String } gridType
  * @return { String } String with HTML code
  */
  const getItemTemplate = (item, i18n, gridType) => {
    if (item.contentType === 'product-card' && gridType === 'product-card-sku') {
      return App.global.templates.productGridSKU(item, i18n);
    }

    else if (item.contentType === 'product-card' && gridType === 'product-card-family') {
      return App.global.templates.productGridFamily(item, i18n);
    }
  };


  /**
  * Fetch the next page of results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  const loadMoreResults = (event) => {

    event.preventDefault();
    const $currentComponent = $(event.currentTarget).closest(resultListCSSClass);
    const requestURL = $currentComponent.attr('data-results-url');
    const requestNextPage = $currentComponent.attr('data-results-next-page');
    const gridType = $currentComponent.attr('data-results-type');

    // If the Request URL doesn't exists Remove the Load More Button and don't proceed
    if (!requestURL) {
      $currentComponent.find('[data-load-more]').remove();
      return;
    }

    // Else Fetch New Results
    fetchData(requestURL, requestNextPage)
      .done(({ search }) => {

        // Loop over all result items
        const newResults = search.results.reduce((items, currentItem) => {

          // Get the HTML Template for the current Result Item
          return items += getItemTemplate(currentItem, i18nStrings, gridType);

        }, '');

        // Append the new Result Elements to the DOM
        const $newResults = $(newResults).hide();
        $currentComponent.find('.results-list__content').append($newResults);
        $newResults.fadeIn(300);

        // if the next page of results is "null" or empty, remove "Load More" button
        if (!search.ajaxRequestNextPage) {
          $currentComponent.find('[data-load-more]').remove();
        }

        // Update Fetch URL for the next set of items / next AJAX Request
        $currentComponent.attr('data-results-url', search.ajaxRequestUrl);
        $currentComponent.attr('data-results-next-page', search.ajaxRequestNextPage);

      })

      // Callback for Failed Request
      .fail((data) => {
        console.error('[Request-Error]', data);
      });

  };


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentEl.length > 0) {
    init();
    // Public methods
    // return { }
  }

}());
