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
  var isAEMAuthorMode = window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() ? true : false;

  var init = function init() {
    // console.log(`Header Component - ${ window.location.host }`);
    // console.log(`Author Mode - ${ isAEMAuthorMode }`);

    // If not in AEM Author Mode - initialize scripts
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Close Level-1 Menu
   */
  var closeLevel1 = function closeLevel1() {
    console.log('After transition ends -- supriya');

    bodyEl.removeClass('nav-open');
    // TODO: Remove event listener when transition is completed
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    $(window).on('scroll', function (event) {
      var scrollTop = $(window).scrollTop();
      var headerHeight = 144;

      if (scrollTop > headerHeight) {
        $componentClass.addClass('eaton-header--fixed');
      } else {
        $componentClass.removeClass('eaton-header--fixed');
      }
    });

    $primaryLinks.on('click', function (event) {
      event.preventDefault();

      // Highlight only the active Link
      $primaryLinks.removeClass('active');
      $(event.currentTarget).addClass('active');
      var activeCategory = $(event.currentTarget).attr('data-menu-category');
      bodyEl.addClass('nav-open level-2-open nav-is-animating');

      // Highlight the active mega-menu section
      $megaMenu.find('[data-target="' + activeCategory + '"]').addClass('mega-menu__content--active').siblings().removeClass('mega-menu__content--active');
      $megaMenu.find('[data-target="' + activeCategory + '"]').find('a').eq(0).focus();
    });

    $('.mega-menu-title__close-menu').on('click', function (event) {
      // Close the mega menu
      event.preventDefault();
      closeNav();
    });

    $('.header-primary-nav__toggle-mobile-menu').on('click', function (event) {
      // Close the mega menu
      event.preventDefault();
      if (bodyEl.hasClass('nav-open')) {

        // Check if Level 2 - open/close
        if (bodyEl.hasClass('level-2-open')) {
          // Close Level-2
          bodyEl.removeClass('nav-open');
          setTimeout(function () {
            bodyEl.removeClass('level-2-open nav-is-animating');
          }, 300);
        } else {
          bodyEl.removeClass('nav-open');
        }
      } else {
        bodyEl.addClass('nav-open');
      }
    });

    $('.mega-menu-title__level1-link').on('click', function (event) {

      event.preventDefault();
      if ($(window).width() <= 991) {
        bodyEl.removeClass('level-2-open');
      } else {
        console.log('go to CTA');
      }
    });

    window.matchMedia('(min-width:992px)').onchange = onBreakpointChange;
  };

  /**
  * Close the Nav
  */
  var closeNav = function closeNav() {
    $primaryLinks.removeClass('active');
    $megaMenuSections.removeClass('mega-menu__content--active');
    bodyEl.removeClass('nav-open level-2-open');
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
        // closeNav();
      }
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }
}();