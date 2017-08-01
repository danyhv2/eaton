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
      bodyEl.addClass('nav-open level-2-open');

      // Highlight the active mega-menu section
      // $megaMenuSections.removeClass('mega-menu__content--active');
      console.log($megaMenu, $megaMenu.find('[data-target="' + activeCategory + '"]'));
      $megaMenu.find('[data-target="' + activeCategory + '"]').addClass('mega-menu__content--active').siblings().removeClass('mega-menu__content--active');
      $megaMenu.find('[data-target="' + activeCategory + '"]').find('a').eq(0).focus();
    });

    $('.mega-menu-title__close-menu').on('click', function (event) {
      // Close the mega menu
      event.preventDefault();
      closeNav();
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
    if (event.matches) {}
    // console.log('Tablet BP');


    // Else is Mobile Breakpoint
    else {
        closeNav();
      }
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }
}();