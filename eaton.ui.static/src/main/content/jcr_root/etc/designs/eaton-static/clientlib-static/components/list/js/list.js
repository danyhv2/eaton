'use strict';

var App = window.App || {};

App.carousel = function () {

  var $component = $('.mobile-carousel');

  var init = function init() {
    addClass();
  };

  /**
   * @private
   * Add .active class
   */
  var addClass = function addClass() {
    $component.find('.carousel-indicators li:first').addClass('active');
    $component.find('.carousel-component-slide div:first').addClass('active');
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($component.length > 0) {
    init();
  }
}();