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
// Component : App.CookieAcceptance
//-----------------------------------
'use strict';

var App = window.App || {};

App.cookieAcceptance = function () {

  // Variable Declarations
  var componentClass = '.cookie-acceptancebox';
  var $componentElement = $(componentClass);

  // Check AEM Author Mode
  var isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

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

  var readStatus = function readStatus() {
    // console.log ('check cookies......');
    if (window.localStorage.getItem('eatoncookies') === null) {
      $componentElement.prependTo('header');
      $componentElement.show();
    } else {
      $componentElement.hide();
    }
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    // localStorage.clear('eatoncookies');


    readStatus();

    $componentElement.find('.cookie-acceptancebox__cta').on('click', function (e) {
      e.preventDefault();
      // alert ('Cookies Accepted!');
      window.localStorage.setItem('eatoncookies', 'yes');
      $componentElement.hide();
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentElement.length > 0) {
    init();
  }
}();