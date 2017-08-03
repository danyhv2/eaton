//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.scroll = (function() {

  // Cached DOM Elements
  //--------------
  const $componentSelector = $('[data-scroll-to]');
  const $htmlEl = $('html, body');
  const headerEl = document.querySelector('.header');
  const productTabsEl = document.querySelector('.eaton-product-tabs');

  const headerHeightFix = 84;
  const headerHeight = (headerEl) ? headerHeightFix : 0;
  const productTabsHeight = (productTabsEl) ? productTabsEl.querySelector('.eaton-product-tabs__buttons').clientHeight : 0;

  const init = () => {
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    // Bind click behavior for all elements with data-attr
    $componentSelector.on('click', toClickedElement);

  };



  /**
  * Scroll the window to the given selector
  * @param { String } cssSelector. ID or Class of the element to scroll to
  */
  const toElementSelector = (cssSelector, duration = 500, offsetFixedComponets = true) => {
    let positionTop = $(cssSelector).eq(0).offset().top;
    let titleHeight = 150;

    // NOTE: There are compnentes like the Header that can have "Position: Fixed".
    // It adds these components height as an offset to the scroll behavior
    if (offsetFixedComponets) {

      // Offeset Header
      positionTop -= headerHeight;

      // Offset Product Tabs
      positionTop -= productTabsHeight;
    }

    positionTop -= titleHeight;

    // const fixedElements = titleHeight + headerHeight + productTabsHeight;

    $htmlEl.animate({
      scrollTop: positionTop
    }, duration);

  };



  /**
  * Scroll the window to clicked element with a custom "data-attr"
  * @param { Object } event - Click event object
  */
  const toClickedElement = (event) => {

    // Enable offset when The Header or other position fixed top components are in the current page
    let offsetEnabled = (
      event.currentTarget.dataset.scrollTo
      && event.currentTarget.dataset.scrollToOffsetEnabled === 'true')
      ? true
      : false;

    // If the current element is <a> instead of a <button>
    event.preventDefault();

    let cssSelector = event.currentTarget.dataset.scrollTo;
    toElementSelector(cssSelector, 500, offsetEnabled);

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
