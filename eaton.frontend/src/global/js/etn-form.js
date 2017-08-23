'use strict';

let App = window.App || {};

App.form = (function() {

  const $selectElement = ($('.eaton-form select'));

  const init = () => {
    initDropdown();
  };


    /**
     * Initialize Choices Dropdown
     */
  const initDropdown = () => {
    new Choices($selectElement[0], {
      placeholder: false,
      itemSelectText: '',
      searchEnabled: false
    });

    new Choices($selectElement[1], {
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
