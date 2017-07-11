//-----------------------------------
// Component M-22: Product Tabs
//-----------------------------------
'use strict';

var App = window.App || {};

App.quote = function (window, $) {

  var $componentClass = $('.eaton-example-quote');

  var init = function init() {
    console.log('eaton-quote - Testing ES6: ' + App);
    addEventListeners();
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {
    $componentClass.find('.c-button').on('click', function (event) {
      console.log(event.target);
    });
  };

  /**
   * Example of Public Method
   *
   * @return { Array } Test ES6
   */
  var publicMethodOne = function publicMethodOne(number) {
    var testES6 = [1, 2, 3];
    return [].concat(testES6, ['es6', 'aem']);
  };

  /**
   * Custom Date Format
   *
   * @return { String } Formated Date
   */
  var getDate = function getDate() {
    var d = new Date();
    return d.getMonth() + '/' + d.getDate();
  };

  init();

  return {
    publicMethodOne: publicMethodOne,
    getDate: getDate
  };
}(window, jQuery);