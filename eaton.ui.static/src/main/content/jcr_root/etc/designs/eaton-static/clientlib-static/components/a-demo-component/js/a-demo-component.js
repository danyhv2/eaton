//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

var App = window.App || {};

App.demoComponent = function () {

  var $componentClass = $('.a-demo-component');
  console.log('a-demo-component-loaded');

  var init = function init() {
    console.log('component-demo - ' + window.location.host);
    addEventListeners();
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    $componentClass.find('.c-button').on('click', function (event) {
      console.log(event.target);
    });

    window.matchMedia('(min-width:992px)').onchange = onBreakpointChange;
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  var onBreakpointChange = function onBreakpointChange(event) {

    // If Tablet Breakpoint and Up
    if (event.matches) {
      console.log('Tablet BP');
    }

    // Else is Mobile Breakpoint
    else {
        console.log('Mobile BP');
      }
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

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.lenght > 0) {
    init();

    return {
      publicMethodOne: publicMethodOne,
      getDate: getDate
    };
  }
}();