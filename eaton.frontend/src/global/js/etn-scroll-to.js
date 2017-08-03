//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.scroll = (function() {

  const $componentSelector = $('[data-scroll-to]');
  const $htmlEl = $('html, body');

  const init = () => {
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    // Bind click behavior for all elements with data-attr
    $componentSelector.on('click', toDataTarget);

  };



  /**
  * Scroll the window to the given selector
  * @param { String } cssSelector. ID or Class of the element to scroll to
  */
  const toElementSelector = (cssSelector, duration = 500) => {

    $htmlEl.animate({
      scrollTop: $(cssSelector).eq(0).offset().top
    }, duration);

  };



  /**
  * Scroll the window to the given selector
  * @param { String } cssSelector element to scroll to
  */
  const toDataTarget = (event) => {

    // If the current element is <a> instead of a <button>
    event.preventDefault();

    let cssSelector = event.currentTarget.dataset.scrollTo;
    toElementSelector(cssSelector);

  };


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentSelector.length > 0) {
    init();

    // Public Methods
    return {
      toElementSelector
    };
  }

}());
