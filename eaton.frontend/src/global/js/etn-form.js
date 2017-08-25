'use strict';

let App = window.App || {};

App.form = (function() {

  const $selectElement = '.eaton-form select:not([multiple])';

  const init = () => {
    initDropdown();
  };


    /**
     * Initialize Choices Dropdown
     */
  const initDropdown = () => {
    new Choices($selectElement, {
      placeholder: false,
      itemSelectText: '',
      searchEnabled: false
    });
  };


    /**
     * If containing DOM element is found, Initialize and Expose public methods
     */
  if ($selectElement.length > 0) {
    init();
  }

}());
