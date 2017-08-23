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
    for (let i = 0; i < $selectElement.length; i++) {
      new Choices($selectElement.eq(i), {
        placeholder: false,
        itemSelectText: '',
        searchEnabled: false
      });
    }
  };


    /**
     * If containing DOM element is found, Initialize and Expose public methods
     */
  if ($selectElement.length > 0) {
    init();
  }

}());
