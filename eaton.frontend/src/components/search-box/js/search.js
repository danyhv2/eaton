//-----------------------------------
// Component : Search
//-----------------------------------
'use strict';

let App = window.App || {};

App.search = (function() {

  // Variable Declarations
  const $componentClass = $('.eaton-search');

  // Check AEM Author Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();
  const componentExists = ($componentClass.length > 0);

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode && componentExists) {
      console.log('Initialize Search');
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
