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

  const init = () => {
    console.log(`Header Component - ${ window.location.host }`);
    addEventListeners();
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    $(window).on('scroll', (event) => {
      let scrollTop = $(window).scrollTop();
      let headerHeight = 144;

      console.log('Values are', scrollTop, headerHeight);

      if ( scrollTop > (headerHeight)) {
        $componentClass.addClass('eaton-header--fixed');
        $('body').addClass('nav-open level-2-open');
      } else {
        $componentClass.removeClass('eaton-header--fixed');
        $('body').removeClass('nav-open level-2-open');
      }
    });

    $primaryLinks.on('click', (event) => {
      event.preventDefault();

      // Highlight only the active Link
      $primaryLinks.removeClass('active');
      $(event.currentTarget).addClass('active');
      const activeCategory = $(event.currentTarget).attr('data-menu-category');
      bodyEl.addClass('nav-open level-2-open');

      // Highlight the active mega-menu section
      $megaMenuSections.removeClass('mega-menu__content--active');
      $megaMenuSections.find('.products-link').focus();
      console.log($megaMenu, $megaMenu.find(`[data-target='${activeCategory}']`));
      $megaMenu.find("[data-target='${activeCategory}']").addClass('mega-menu__content--active');
    });

    $('.eaton-title__close-menu').on('click', (event) => {
      // Close the mega menu
      event.preventDefault();
      $megaMenuSections.removeClass('mega-menu__content--active');
      bodyEl.removeClass('nav-open level-2-open');
    });

    window.matchMedia(`(min-width:992px)`).onchange = onBreakpointChange;
  };

  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  const onBreakpointChange = (event) => {

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

}());
