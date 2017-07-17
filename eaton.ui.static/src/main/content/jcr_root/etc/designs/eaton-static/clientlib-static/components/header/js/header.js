//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

var App = window.App || {};

App.header = function () {

  var $componentClass = $('.eaton-header');
  var bodyEl = $('body');
  var $primaryLinks = $componentClass.find('.eaton-link-list-primary-nav__items a');
  var $megaMenu = $componentClass.find('.mega-menu');
  var $megaMenuSections = $componentClass.find('.mega-menu__content');

  var init = function init() {
    console.log('Header Component - ' + window.location.host);
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

    $primaryLinks.on('click', function (event) {
      event.preventDefault();

      // Highlight only the active Link
      $primaryLinks.removeClass('active');
      $(event.currentTarget).addClass('active');
      var activeCategory = $(event.currentTarget).attr('data-menu-category');
      bodyEl.addClass('nav-open level-2-open');

      // Highlight the active mega-menu section
      $megaMenuSections.removeClass('mega-menu__content--active');
      $megaMenu.find("[data-target='${activeCategory}']").addClass('mega-menu__content--active');
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