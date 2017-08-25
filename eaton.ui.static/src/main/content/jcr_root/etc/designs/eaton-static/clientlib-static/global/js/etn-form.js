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

App.form = function (Choices) {

  var $componentEl = $('.eaton-form');
  var selectorDropdowns = '.eaton-form select:not([multiple])';
  var $selectEl = $(selectorDropdowns);

  var init = function init() {
    initDropdown();
  };

  /**
   * Initialize Choices Dropdown
   */
  var initDropdown = function initDropdown() {

    // Init Choices Library Only if the current ".eaton-form" has <select> elements
    if ($selectEl.length > 0) {
      new Choices(selectorDropdowns, {
        placeholder: false,
        itemSelectText: '',
        searchEnabled: false
      });
    }
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }
}(window.Choices);