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


//-----------------------------------
// Component M-40: Product Tabs Family
//-----------------------------------
'use strict';

var App = window.App || {};

App.productTabsFamily = function () {

  var $componentClass = $('.eaton-product-tabs');
  var isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  var init = function init() {
    // return;
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    $(window).on('scroll', function (event) {
      var scrollTop = $(window).scrollTop();
      var scrollOffset = 150;
      var componentFixedClass = 'eaton-product-tabs--fixed';
      var buttonsClass = '.eaton-product-tabs__buttons';
      var shouldBeFixed = scrollTop > scrollOffset;

      $componentClass.toggleClass(componentFixedClass, shouldBeFixed);
      $componentClass.find(buttonsClass).toggleClass('row', !shouldBeFixed);
      $componentClass.find(buttonsClass).toggleClass('container', shouldBeFixed);
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }
}();