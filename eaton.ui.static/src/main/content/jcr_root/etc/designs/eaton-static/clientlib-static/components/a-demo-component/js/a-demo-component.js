//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

var App = window.App || {};

App.demoComponent = function () {

  var $componentClass = $('.a-demo-component');

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

    // JavaScript MediaQueries
    //--------------
    if (window.matchMedia) {

      // min-width 992px
      mqDesktop = window.matchMedia(App.global.constants.MEDIA_QUERIES.DESKTOP),

      // EventListener that gets fired when the Breakpoint changes from Mobile to Desktop / Desktop to Mobile
      mqDesktop.addListener(onBreakpointChange);
    }
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  var onBreakpointChange = function onBreakpointChange(event) {

    // If Desktop Breakpoint and Up
    if (event.matches) {
      console.log('Desktop BP');
    }

    // Else is Mobile/Tablet Breakpoint
    else {
        console.log('Mobile BP');
      }
  };

  /**
   * Example of Public Method: Custom Date Format
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
      getDate: getDate
    };
  }
}();