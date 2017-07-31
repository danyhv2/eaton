//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = window.App || {};

App.header = (function() {

  // Variable Declarations
  const $componentClass = $('.eaton-header');
  const bodyEl = $('body');
  const windowEl = $(window);

  const $primaryLinks = $componentClass.find('.eaton-link-list-primary-nav__items a');
  const $megaMenu = $componentClass.find('.mega-menu');
  const $megaMenuSections = $componentClass.find('.mega-menu__content');
  const megaMenuTitle = $componentClass.find('.mega-menu-title__level1-link');
  const closeMegaMenuBtn = $componentClass.find('.mega-menu-title__close-menu');
  const toggleMobileMenuBtn = $('.header-primary-nav__toggle-mobile-menu');

  // Check AEM Author Mode
  const isAEMAuthorMode = (window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode()) ? true : false;

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
  * Close the Nav
  */
  const closeNav = () => {
    $primaryLinks.removeClass('active');
    $megaMenuSections.removeClass('mega-menu__content--active');
    bodyEl.removeClass('nav-open level-2-open nav-is-animating');
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    // Sticky Navigation Behaviors - Handle Scroll
    windowEl.on('scroll', (event) => {
      let scrollTop = windowEl.scrollTop();
      let headerHeight = 40;

      if ( scrollTop > (headerHeight)) {
        $componentClass.addClass('eaton-header--fixed');
      } else {
        $componentClass.removeClass('eaton-header--fixed');
      }
    });

    // Handle Mega Menu Behaviors - Open Mega-Menu
    $primaryLinks.on('click', (event) => {
      event.preventDefault();

      // Highlight only the active Link
      $primaryLinks.removeClass('active');
      $(event.currentTarget).addClass('active');
      const activeCategory = $(event.currentTarget).attr('data-menu-category');
      bodyEl.addClass('nav-open level-2-open nav-is-animating');

      // Highlight the active mega-menu section
      $megaMenu.find(`[data-target="${ activeCategory }"]`)
      .addClass('mega-menu__content--active')
      .siblings().removeClass('mega-menu__content--active');
      $megaMenu.find(`[data-target="${ activeCategory }"]`).find('a').eq(0).focus();
    });

    // Handle Mega Menu Behaviors - Close Mega-Menu (Desktop)
    closeMegaMenuBtn.on('click', (event) => {
      // Close the mega menu
      event.preventDefault();
      closeNav();
    });

    // Handle Mobile Menu Behaviors - Open/Close
    toggleMobileMenuBtn.on('click', (event) => {
      // Close the mega menu
      event.preventDefault();
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
        $primaryLinks.eq(0).focus();
      }
    });

    megaMenuTitle.on('click', (event) => {
      const activeLink = $primaryLinks.filter('.active');
      if (windowEl.width() <= 991) {
        event.preventDefault();

        bodyEl.removeClass('level-2-open');
        activeLink.focus();
      }
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
