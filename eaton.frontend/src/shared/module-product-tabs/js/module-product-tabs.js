//-----------------------------------
// Component M-40: Product Tabs shared module
//-----------------------------------
'use strict';

let App = window.App || {};
App.productTabs = (function() {

  // Cached DOM Elements
  //--------------
  const $componentClass = $('.eaton-product-tabs');
  const $headerEl = $('header');
  const $window = $(window);
  const $tabsDescription = $componentClass.find('.eaton-product-tabs__description');
  const $tabsDropdown = $componentClass.find('.dropdown');          // Bootstrap Dropdown Container
  const $tabsDropdownMenu = $componentClass.find('.dropdown-menu'); // Bootstrap Dropdown Element

  // CSS Selectors
  const componentFixedClass = 'eaton-product-tabs--fixed';

  // Utility Detect AEM's Author / Edit Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();


  /**
  * Initialize
  */
  const init = () => {
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {
    $window.on('scroll', (event) => {
      const scrollTop = $window.scrollTop();
      const isMobile = $window.innerWidth() < App.global.constants.GRID.MD;
      const headerHeight = $headerEl.outerHeight();
      const tabsDescriptionHeight = $tabsDescription.outerHeight();
      const utilityNavOffset = $('.header-utility-nav').offset().top;
      const utilityNavHeight = $('.header-utility-nav').outerHeight();
      const isHeaderFixed = scrollTop > (utilityNavOffset + utilityNavHeight);

      // if Mobile add the tabsDescriptionHeight
      const isTop = (scrollTop === 0);
      const scrollOffset = headerHeight + tabsDescriptionHeight;
      let shouldBeFixed = (isHeaderFixed && !isTop);
      shouldBeFixed = isMobile ? (scrollTop > scrollOffset) : shouldBeFixed;

      // const scrollOffset = headerHeight + (isMobile ? tabsDescriptionHeight : 0);
      // const shouldBeFixed = (isHeaderFixed && !isTop) || (scrollTop > scrollOffset);

      // EATON-619: Dropdown should close when user has it open then scrolls down.
      closeDropdown();

      $componentClass.toggleClass(componentFixedClass, shouldBeFixed);
    });
  };


  /**
  * It closes "How to Buy" Dropdown
  */
  const closeDropdown = () => {
    if ( $tabsDropdown.hasClass('open') ) {

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

}());
