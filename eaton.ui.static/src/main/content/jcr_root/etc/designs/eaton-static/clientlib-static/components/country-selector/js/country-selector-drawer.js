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
// Component M-3: Header Module
// Country Language Selector
//-----------------------------------
'use strict';

var App = window.App || {};

App.countrySelector = function () {

  // Variable Declarations
  var componentClass = '.country-selector-drawer';
  var componentEl = $(componentClass);
  var bodyEl = $('body');
  var regionDesktopList = componentEl.find('.country-selector-drawer__region-list');
  var regionDesktopLinks = regionDesktopList.find('a');
  var closeDrawerBtn = componentEl.find('.country-selector-drawer__close-menu');

  // Check AEM Author Mode
  var isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Init
  */
  var init = function init() {
    // If not in AEM Author Mode - initialize scripts
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
  * Handle click on region links. Show/ Hide panels
  * @param { Object} event - Click Event Object
  */
  var handleRegionPanels = function handleRegionPanels(event) {
    var activeLink = $(event.currentTarget);

    event.preventDefault();
    if (activeLink.hasClass('active')) {
      return false;
    }

    // Highlight only the active Link
    regionDesktopLinks.removeClass('active');
    regionDesktopLinks.attr('aria-expanded', false);
    $('.panel-collapse').removeClass('in');

    if (!activeLink.hasClass('active')) {
      activeLink.addClass('active');
      activeLink.attr('aria-expanded', true);
    }
  };

  /**
  * Close the Drawer
  * @param { Object} event - Click Event Object
  */
  var closeDrawer = function closeDrawer(event) {
    // Close the drawer if open - Country Selector
    bodyEl.removeClass('drawer-open');
    resetDrawer();
  };

  /**
  * Reset Drawer
  */
  var resetDrawer = function resetDrawer() {
    // reset the drawer
    $('.panel-collapse').removeClass('in');
    regionDesktopLinks.removeClass('active');
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  var onBreakpointChange = function onBreakpointChange(event) {
    // Close & Reset the Drawer
    closeDrawer();
    resetDrawer();
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    var mqDesktop = null;

    // Handle Mega Menu Behaviors - Open Mega-Menu
    regionDesktopLinks.on('click', handleRegionPanels);

    // Handle Mega Menu Behaviors - Close Mega-Menu (Desktop)
    closeDrawerBtn.on('click', closeDrawer);

    // JavaScript MediaQueries
    //--------------
    if (window.matchMedia) {

      // min-width 992px
      mqDesktop = window.matchMedia(App.global.constants.MEDIA_QUERIES.DESKTOP);

      // EventListener that gets fired when the Breakpoint changes from Mobile to Desktop / Desktop to Mobile
      mqDesktop.addListener(onBreakpointChange);
    }
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if (componentEl.length > 0) {
    init();
  }
}();