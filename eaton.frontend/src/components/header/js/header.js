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
    // console.log(`Header Component - ${ window.location.host }`);
    // console.log(`Author Mode - ${ isAEMAuthorMode }`);

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
      bodyEl.addClass('nav-open level-2-open');

      // Highlight the active mega-menu section
      // $megaMenuSections.removeClass('mega-menu__content--active');
      console.log($megaMenu, $megaMenu.find(`[data-target="${ activeCategory }"]`));
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
        bodyEl.removeClass('nav-open level-2-open');
      } else {
        bodyEl.addClass('nav-open');

        // window.setTimeout( (function() {
        //   console.log('First Link', $primaryLinks.eq(0));
        //   $primaryLinks.eq(0).focus();
        // }), 40);
      }
    });

    window.matchMedia('(min-width:992px)').onchange = onBreakpointChange;

  };

  /**
  * Close the Nav
  */
  const closeNav = () => {
    $primaryLinks.removeClass('active');
    $megaMenuSections.removeClass('mega-menu__content--active');
    bodyEl.removeClass('nav-open level-2-open');
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
      // closeNav();
    }
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();

  }

}());
