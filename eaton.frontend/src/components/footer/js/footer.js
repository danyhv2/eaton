//-----------------------------------
// Component : Search
//-----------------------------------
'use strict';

let App = window.App || {};

App.search = (function() {

  // Variable Declarations
  const componentClass = '.eaton-footer-back-to-top';
  const $componentElement = $(componentClass);
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();
  let lastScrollTop = 0;
  let hideTimerID = 0;

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode) {
      // console.log('Initialize Search');
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {
    $(window).on('scroll', (event) => {
      const scrollTop = $(window).scrollTop();
      const isGoingUp = (scrollTop < lastScrollTop) && (scrollTop > 0);
      $componentElement.toggleClass('visible', isGoingUp);
      lastScrollTop = scrollTop;

      if (!isGoingUp) { return; }

      // hide the back to top buton after 3 seconds
      clearTimeout(hideTimerID);
      hideTimerID = setTimeout(function() {
        $componentElement.toggleClass('visible', false);
      }, 3000);
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentElement.length > 0) {
    init();
  }

}());
