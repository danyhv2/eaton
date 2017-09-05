/**
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY -
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 */


//-----------------------------------
// Component : Search
//-----------------------------------
'use strict';

var App = window.App || {};

App.search = function () {

  // Variable Declarations
  var componentClass = '.eaton-footer-back-to-top';
  var $componentElement = $(componentClass);
  var isAEMAuthorMode = App.global.utils.isAEMAuthorMode();
  var lastScrollTop = 0;
  var hideTimerID = 0;

  /**
  * Init
  */
  var init = function init() {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode) {
      // console.log('Initialize Search');
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {
    $(window).on('scroll', function (event) {
      var scrollTop = $(window).scrollTop();
      var isGoingUp = scrollTop < lastScrollTop && scrollTop > 0;
      $componentElement.toggleClass('visible', isGoingUp);
      lastScrollTop = scrollTop;

      if (!isGoingUp) {
        return;
      }

      // hide the back to top buton after 3 seconds
      clearTimeout(hideTimerID);
      hideTimerID = setTimeout(function () {
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
}();