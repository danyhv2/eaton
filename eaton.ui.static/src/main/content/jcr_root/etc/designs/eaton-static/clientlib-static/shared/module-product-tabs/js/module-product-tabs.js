/**
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY -
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 */


//-----------------------------------
// Component M-40: Product Tabs shared module
//-----------------------------------
'use strict';

var App = window.App || {};
App.productTabs = function () {

  // Cached DOM Elements
  //--------------
  var $componentClass = $('.eaton-product-tabs');
  var $headerEl = $('header');
  var $window = $(window);
  var $tabsDescription = $componentClass.find('.eaton-product-tabs__description');
  var $tabsDropdown = $componentClass.find('.dropdown'); // Bootstrap Dropdown Container
  var $tabsDropdownMenu = $componentClass.find('.dropdown-menu'); // Bootstrap Dropdown Element

  // CSS Selectors
  var componentFixedClass = 'eaton-product-tabs--fixed';

  // Utility Detect AEM's Author / Edit Mode
  var isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Initialize
  */
  var init = function init() {
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {
    $window.on('scroll', function (event) {
      var scrollTop = $window.scrollTop();
      var isMobile = $window.innerWidth() < App.global.constants.GRID.MD;
      var headerHeight = $headerEl.outerHeight();
      var tabsDescriptionHeight = $tabsDescription.outerHeight();
      var utilityNavOffset = $('.header-utility-nav').offset().top;
      var utilityNavHeight = $('.header-utility-nav').outerHeight();
      var isHeaderFixed = scrollTop > utilityNavOffset + utilityNavHeight;

      // if Mobile add the tabsDescriptionHeight
      var isTop = scrollTop === 0;
      var scrollOffset = headerHeight + (isMobile ? tabsDescriptionHeight : 0);
      var shouldBeFixed = isHeaderFixed && !isTop || scrollTop > scrollOffset;

      // EATON-619: Dropdown should close when user has it open then scrolls down.
      closeDropdown();

      $componentClass.toggleClass(componentFixedClass, shouldBeFixed);
    });
  };

  /**
  * It closes "How to Buy" Dropdown
  */
  var closeDropdown = function closeDropdown() {
    if ($tabsDropdown.hasClass('open')) {

      // Call Bootstrap's Method to toggle the state of the dropdown
      $tabsDropdownMenu.dropdown('toggle');
    }
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }
}();