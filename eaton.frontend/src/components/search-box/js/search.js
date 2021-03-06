//-----------------------------------
// Component : Search
//-----------------------------------
'use strict';

let App = window.App || {};

App.search = (function(autosize) {

  // Variable Declarations
  const componentClass = '.eaton-search';
  const $componentElement = $(componentClass);
  const $searchInputEl = $componentElement.find('.eaton-search--default__form-input');

  // Check AEM Author Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode) {
      addEventListeners();

      // Intercept Carriage Return on TextArea and submit form.
      $searchInputEl.keydown(function (e) {
        const evt = e || window.event; // compliant with ie6
        const keyCode = evt.keyCode || evt.which;
        let inputVal = e.target.value; // Targets the active input
        const $activeSearchComponent = $(e.currentTarget).closest(componentClass);

        // Remove new lines on the 'active' text area if no character exists
        e.target.value = inputVal.replace(/^\s*(\n)\s*$/, '');

        // Detect Carriage return
        if (keyCode === 13) {
          if ((e.target.value.length >= 1)) {
            // Allow submit only if the textarea has atleast one alphanumeric character on carriage return
            $activeSearchComponent.find('form').submit();
          }
          return false;
        }
      });
    }
  };

  /**
  * Create Template - Markup for each predictive search result item
  */
  const linkTemplate = (data, term) => {

    const regX = new RegExp ('(' + term + ')', 'ig');
    let linkTitleText = data.title;

    // Search the title for the matched term and wrap it in required markup
    linkTitleText = linkTitleText.replace(regX, '<strong>$1</strong>');

    return `
      <li class="eaton-search--default__result-item b-body-copy">
        <a href="${ data.link }" target="${ data.target }"> ${ linkTitleText } </a>
      </li>`;
  };

  /**
  * Handle Input Behaviors
  */
  const handleInputBehavior = (event) => {

    // Check if the #of characters in the inputBox exceeds characterLimit - 3
    const $activeSearchComponent = $(event.currentTarget).closest(componentClass);
    let inputVal = event.target.value;

    if ( event.target.value.length >= 3) {
      // Request Search Results - AJAX
      getSearchResults(event, inputVal);
    } else {
      // Empty the contents of the result-list
      $activeSearchComponent.find('.eaton-search--default__results').removeClass('active');
      $activeSearchComponent.find('.eaton-search--default__result-list').html('');
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

    let resultList = '';
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
          resultList += linkTemplate(item, term);
        });

        // Replace the contents of the list with the AJAX results
        $activeSearchComponent.find('.eaton-search--default__result-list').html(resultList);
        $activeSearchComponent.find('.eaton-search--default__results').addClass('active');
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
    autosize($('.search-box textarea'));
    autosize($('.eaton-header textarea'));
    init();
  }

}(window.autosize));
