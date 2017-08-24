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
  // const bodyEl = $('body');
  // const windowEl = $(window);

  const regionDesktopLinks = componentEl.find('.country-selector-drawer__region-list a');

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
  */
  const handleRegionPanels = (event) => {
    let activePanel = '';

    event.preventDefault();

    // Highlight only the active Link
    regionDesktopLinks.removeClass('active');
    regionDesktopLinks.attr('aria-expanded', false);
    // $('.panel-collapse').collapse('hide');
    $('.panel-collapse').removeClass('in');

    $(event.currentTarget).addClass('active');
    $(event.currentTarget).attr('aria-expanded', true);

    activePanel = $(event.currentTarget).attr('href');
    console.log('Clicked on link', activePanel);
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    // Handle Mega Menu Behaviors - Open Mega-Menu
    regionDesktopLinks.on('click', handleRegionPanels);

    // Handle Mega Menu Behaviors - Close Mega-Menu (Desktop)
    // closeMegaMenuBtn.on('click', closeMegaMenu);

  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if (componentEl.length > 0) {
    init();
  }

}());
