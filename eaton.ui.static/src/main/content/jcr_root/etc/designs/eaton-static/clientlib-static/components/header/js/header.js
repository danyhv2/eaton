//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

var App = window.App || {};

App.header = function () {

  var $componentClass = $('.eaton-header');

  var init = function init() {
    console.log('component-demo - ' + window.location.host);
    addEventListeners();
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    $(window).on('scroll', function (event) {
      var scrollTop = $(window).scrollTop();
      var headerHeight = 144;

      console.log('Values are', scrollTop, headerHeight);

      if (scrollTop > headerHeight) {
        $componentClass.addClass('eaton-header--fixed');
        $('body').addClass('nav-open level-2-open');
      } else {
        $componentClass.removeClass('eaton-header--fixed');
        $('body').removeClass('nav-open level-2-open');
      }
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
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }
}();