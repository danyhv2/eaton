//-----------------------------------
// Component M-40: Product Tabs shared module
//-----------------------------------
'use strict';

let App = window.App || {};
App.productTabs = (function() {

  const $componentClass = $('.eaton-product-tabs');
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  const init = () => {
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {
    if (location.hash === '#no-sticky-tab') {
      return;
    }

    $(window).on('scroll', (event) => {
      const scrollTop = $(window).scrollTop();
      const isMobile = $(window).innerWidth() < App.global.constants.GRID.MD;
      const componentFixedClass = 'eaton-product-tabs--fixed';
      const buttonsClass = '.eaton-product-tabs__buttons';
      const headerHeight = $('header').outerHeight();
      const tabsDescriptionHeight = $('.eaton-product-tabs__description').outerHeight();
      const isHeaderFixed = $('.eaton-header').hasClass('eaton-header--fixed');

      // if Mobile add the tabsDescriptionHeight
      const scrollOffset = headerHeight + (isMobile ? tabsDescriptionHeight : 0);
      const isTop = (scrollTop === 0);
      const shouldBeFixed = (isHeaderFixed && !isTop) || (scrollTop > scrollOffset);

      // console.log('scrollTop', scrollTop, 'scrollOffset', scrollOffset, 'shouldBeFixed', shouldBeFixed);

      $componentClass.toggleClass(componentFixedClass, shouldBeFixed);
      $componentClass.find(buttonsClass).toggleClass('row', !shouldBeFixed);
      $componentClass.find(buttonsClass).toggleClass('container', shouldBeFixed);
    });
  };

  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
