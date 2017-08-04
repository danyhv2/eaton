//-----------------------------------
// Component : Search
//-----------------------------------
'use strict';

let App = window.App || {};

App.search = (function() {

  // Variable Declarations
  const componentClass = '.eaton-search';
  const $componentElement = $(componentClass);
  const $searchInputEl = $componentElement.find('.eaton-search--default__form-input');
  const $searchResultContainer = $componentElement.find('.eaton-search__result-list');

  // Check AEM Author Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode) {
      console.log('Initialize Search');
      addEventListeners();
    }
  };

  /**
  * Create Template - Markup for each predictive search result item
  */
  const linkTemplate = (data) => {
    return `
      <li class="eaton-search__result-item">
        <a href="${ data.link }" target="${ data.target }">${ data.title }</a>
      </li>`;
  };

  /**
  * Handle Input Behaviors
  */
  const handleInputBehavior = (event) => {

    // Check if the #of characters in the inputBox exceeds characterLimit - 3
    if ( event.target.value.length >= 3 ) {
      // Request Search Results - AJAX
      getSearchResults(event, event.target.value);
    } else {
      // Empty the contents of the result-list
      $searchResultContainer.html('');
    }
  };

  /**
  * Load Predictive Search Results - AJAX
  */
  const getSearchResults = (event, term) => {

    // Get the closest search component to avoid conflicts when multiple search elements on page
    const $activeSearchComponent = $(event.currentTarget).closest(componentClass);
    const searchResultsURL = $activeSearchComponent.attr('data-predictive-search');
    const requestOptions = {
      searchTerm: term,
      format: 'json'
    };

    let searchResultsList = '';
    let ajaxReq = '';

    // If URL path is configured
    if (!searchResultsURL) { return; }

    // Requests Static JSON file. To be replaced by service URL in final implementation
    ajaxReq = $.getJSON(searchResultsURL, requestOptions);

    ajaxReq
      // Callback for Successful Request
      .done((data) => {

        // Loop over all result items
        $.each(data.results, (index, item) => {
          searchResultsList += linkTemplate(item);
        });

        // Replace the contents of the list with the AJAX results
        $searchResultContainer.html(searchResultsList);
      })

      // Callback for Failed Request
      .fail((data) => {
        console.error('error', data);
      });

  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {
    $searchInputEl.on('keyup', handleInputBehavior);
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentElement.length > 0) {
    init();
  }

}());
