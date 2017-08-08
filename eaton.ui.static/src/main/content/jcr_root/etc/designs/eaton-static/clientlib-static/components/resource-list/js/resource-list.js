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

App.accordion = function () {

  var $accordion = $('.panel-group');
  var $component = $('.secondary-content-accordion');

  var init = function init() {
    $accordion.on('hidden.bs.collapse', toggleIcon);
    $accordion.on('shown.bs.collapse', toggleIcon);
  };

  /**
   * Toggle class icon
   */
  var toggleIcon = function toggleIcon(event) {

    $(event.target).prev('.panel-heading').find('.icon').toggleClass('icon-sign-plus icon-sign-minus');
  };

  /**
   * Initialize and Expose public methods
   */

  if ($component.length > 0) {
    init();
  }
}();