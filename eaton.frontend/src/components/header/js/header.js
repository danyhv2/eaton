//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = window.App || {};

App.header = (function() {

  const $componentClass = $('.eaton-header');
  const bodyEl = $('body');
  let $primaryLinks = $componentClass.find('.eaton-link-list-primary-nav__items a');
  let $megaMenu = $componentClass.find('.mega-menu');
  let $megaMenuSections = $componentClass.find('.mega-menu__content');
  const isAEMAuthorMode = (window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode()) ? true : false;

  const init = () => {

    // If not in AEM Author Mode - initialize scripts
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    $(window).on('scroll', (event) => {
      let scrollTop = $(window).scrollTop();
      let headerHeight = 144;

      if ( scrollTop > (headerHeight)) {
        $componentClass.addClass('eaton-header--fixed');
      } else {
        $componentClass.removeClass('eaton-header--fixed');
      }
    });


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

    $('.mega-menu-title__close-menu').on('click', (event) => {
      // Close the mega menu
      event.preventDefault();
      closeNav();
    });

    $('.header-primary-nav__toggle-mobile-menu').on('click', (event) => {
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

    $('.mega-menu-title__level1-link').on('click', (event) => {

      const activeLink = $primaryLinks.filter('.active');
      event.preventDefault();
      if ($(window).width() <= 991) {
        bodyEl.removeClass('level-2-open');
        activeLink.focus();
      } else {
        console.log('go to CTA');
      }
    });
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
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
