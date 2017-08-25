/**
 *
 *
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY - 
 *
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 *
 */


'use strict';

var App = window.App || {};

App.form = function () {

  var $selectElement = '.eaton-form select:not([multiple])';

  var init = function init() {
    initDropdown();
  };

  /**
   * Initialize Choices Dropdown
   */
  var initDropdown = function initDropdown() {
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
}();