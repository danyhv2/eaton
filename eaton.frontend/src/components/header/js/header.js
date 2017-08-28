//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = window.App || {};

App.header = (function() {

  // Variable Declarations
  const componentClass = $('.eaton-header');
  const bodyEl = $('body');
  const windowEl = $(window);

  const primaryLinks = componentClass.find('.eaton-link-list-primary-nav__items a');
  const megaMenu = componentClass.find('.mega-menu');
  const megaMenuSections = componentClass.find('.mega-menu__content');
  const megaMenuTitle = componentClass.find('.mega-menu-title__level1-link');
  const closeMegaMenuBtn = componentClass.find('.mega-menu-title__close-menu');
  const toggleMobileMenuBtn = $('.header-primary-nav__toggle-mobile-menu');
  const openSearchDropdownBtn = $('.header-primary-nav__open-search');
  const openDrawerBtn = $('.open-country-selector');
  const regionDesktopList = $('.country-selector-drawer__region-list');
  const regionPanels = $('.country-selector-drawer .panel-collapse');

  // Media Breakpoint
  let mediumScreenWidth = App.global.constants.GRID.MD;

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
  * Handle Page Scroll - Sticky Navigation Behaviors
  */
  const handleScroll = (event) => {

    const scrollTop = windowEl.scrollTop();
    const utilityNavOffset = $('.header-utility-nav').offset().top;
    const utilityNavHeight = $('.header-utility-nav').outerHeight();

    if ( scrollTop > ((utilityNavOffset + utilityNavHeight))) {
      componentClass.addClass('eaton-header--fixed');
      // Close the drawer if open - Country Selector
      bodyEl.removeClass('drawer-open drawer-is-animating');
    } else {
      componentClass.removeClass('eaton-header--fixed');
    }
  };

  /**
  * Open Mega Menu - Behaviors when click Primary Links
  */
  const openMegaMenu = (event) => {

    let activeCategory = '';

    event.preventDefault();

    // Close Search if open
    closeSearch(event);

    // Highlight only the active Link
    primaryLinks.removeClass('active');
    primaryLinks.attr('aria-expanded', false);

    $(event.currentTarget).addClass('active');
    $(event.currentTarget).attr('aria-expanded', true);
    activeCategory = $(event.currentTarget).attr('data-menu-category');
    bodyEl.addClass('nav-open level-2-open nav-is-animating');

    // Highlight the active mega-menu section
    megaMenu.find(`[data-target="${ activeCategory }"]`)
    .addClass('mega-menu__content--active')
    .siblings().removeClass('mega-menu__content--active');
    megaMenu.find(`[data-target="${ activeCategory }"]`).find('a').eq(0).focus();
  };

  /**
  * Close Mega Menu - Behaviors when click close Btn
  */
  const closeMegaMenu = (event) => {

    event.preventDefault();

    primaryLinks.removeClass('active');
    megaMenuSections.removeClass('mega-menu__content--active');
    bodyEl.removeClass('nav-open level-2-open nav-is-animating');
  };

  /**
  * Mobile Menu - Open Close Interactions
  */
  const mobileMenuInteractions = (event) => {

    event.preventDefault();

    // Close Search if open
    closeSearch(event);

    if (bodyEl.hasClass('nav-open')) {

      // Check if Level 2 - open/close
      if (bodyEl.hasClass('level-2-open')) {
        // Close Level-2
        bodyEl.removeClass('nav-open');
        bodyEl.removeClass('level-2-open nav-is-animating');

      } else {
        bodyEl.removeClass('nav-open');
      }
    } else {
      bodyEl.addClass('nav-open');
      primaryLinks.eq(0).focus();
    }
  };

  /**
  * Handle Click behaviors - for Title - Desktop & Mobile
  */
  const handleTitleClick = (event) => {
    const activeLink = primaryLinks.filter('.active');
    if (windowEl.width() < mediumScreenWidth) {
      event.preventDefault();

      bodyEl.removeClass('level-2-open');
      activeLink.focus();
    }
  };

  /**
  * Handle Click behaviors - for Search - Desktop & Mobile
  */
  const handleSearch = (event) => {

    event.preventDefault();
    closeMegaMenu(event);

    bodyEl.toggleClass('search-open');

    if ( $(event.currentTarget).attr('aria-expanded') ) {
      $(event.currentTarget).attr('aria-expanded', false);
    } else {
      $(event.currentTarget).attr('aria-expanded', true);
    }

    // Reset search inputBox
    bodyEl.find('.eaton-search input').val('');
    bodyEl.find('.eaton-search--default__result-list').html('');
    bodyEl.find('.eaton-search--default__results').removeClass('active');
  };

  /**
  * Handle Click behaviors - for Search - Desktop & Mobile
  */
  const closeSearch = (event) => {

    event.preventDefault();
    bodyEl.removeClass('search-open');
  };

  /**
  * Handle Click behaviors - for Selector Drawer - Desktop
  */
  const openDrawer = (event) => {

    event.preventDefault();

    // Check for window-width.
    // If Desktop Breakpoint, activate the first region-panel
    // Close Search & Mega Menu if open
    if (windowEl.width() >= mediumScreenWidth) {
      regionPanels.removeClass('in');
      regionPanels.filter('#drawer-collapse-0').addClass('in');

      regionDesktopList.find('a').removeClass('active');
      regionDesktopList.find('a').eq(0).addClass('active');

      setTimeout(function() {
        $('.country-selector-drawer__close-menu').focus();
      }, 10);

      closeMegaMenu(event);
      closeSearch(event);
    }

    bodyEl.addClass('drawer-open drawer-is-animating');
    $(event.currentTarget).attr('aria-expanded', true);

    // After the drawer transition is completed
    document.querySelector('.full-page-drawer').addEventListener('transitionend', function(event) {
      bodyEl.removeClass('drawer-is-animating');
    }, false);
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  const onBreakpointChange = (event) => {
    // Close Menu & Search
    closeMegaMenu(event);
    closeSearch(event);
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    let mqDesktop = null;

    // Handle Scroll - Sticky Navigation Behaviors
    windowEl.on('scroll', handleScroll);

    // Handle Mega Menu Behaviors - Open Mega-Menu
    primaryLinks.on('click', openMegaMenu);

    // Handle Mega Menu Behaviors - Close Mega-Menu (Desktop)
    closeMegaMenuBtn.on('click', closeMegaMenu);

    // Handle Mobile Menu Behaviors - Open/Close
    toggleMobileMenuBtn.on('click', mobileMenuInteractions);

    // Handle click on Mega Menu Title - across breakpoints
    megaMenuTitle.on('click', handleTitleClick);

    // Handle click on Search Icon
    openSearchDropdownBtn.on('click', handleSearch);

    // Handle click on Country Selector button
    openDrawerBtn.on('click', openDrawer);

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
  if (componentClass.length > 0) {
    init();
  }

}());
