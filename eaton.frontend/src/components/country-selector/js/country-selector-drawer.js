//-----------------------------------
// Component M-3: Header Module
// Country Language Selector
//-----------------------------------
'use strict';

let App = window.App || {};

App.countrySelector = (function() {

  // Variable Declarations
  const componentClass = '.country-selector-drawer';
  const componentEl = $(componentClass);
  const bodyEl = $('body');
  const regionDesktopList = componentEl.find('.country-selector-drawer__region-list');
  const regionDesktopLinks = regionDesktopList.find('a');
  const closeDrawerBtn = componentEl.find('.country-selector-drawer__close-menu');

  // Check AEM Author Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode - initialize scripts
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
  * Handle click on region links. Show/ Hide panels
  * @param { Object} event - Click Event Object
  */
  const handleRegionPanels = (event) => {
    const activeLink = $(event.currentTarget);

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
  const closeDrawer = (event) => {
    // Close the drawer if open - Country Selector
    bodyEl.removeClass('drawer-open drawer-is-animating');
    resetDrawer();
  };

  /**
  * Reset Drawer
  */
  const resetDrawer = () => {
    // reset the drawer
    $('.panel-collapse').removeClass('in');
    regionDesktopLinks.removeClass('active');
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  const onBreakpointChange = (event) => {

    // If Desktop Breakpoint and Up
    if (event.matches) {
      console.log('Desktop BP');
    }
    // Else is Mobile/Tablet Breakpoint
    else {
      // Close the drawer & reset all panels & active links
      closeDrawer();
      resetDrawer();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    let mqDesktop = null;

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

}());
