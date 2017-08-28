//-----------------------------------
// Component M-40: Product Tabs shared module
//-----------------------------------
'use strict';

let App = window.App || {};
App.productTabs = (function() {

  const $componentClass = $('.eaton-product-tabs');
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  const init = () => {
    // return;
    if (!isAEMAuthorMode) {
      addEventListeners();
    }
  };

  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    $(window).on('scroll', (event) => {
      const scrollTop = $(window).scrollTop();
      const isMobile = $(window).innerWidth() < 991; // based on window width
      const isCookieBoxVisible = $('.cookie-acceptancebox:visible').length !== 0;
      const cookieBoxVisibleHeight = $('.cookie-acceptancebox').outerHeight();
      const componentFixedClass = 'eaton-product-tabs--fixed';
      const buttonsClass = '.eaton-product-tabs__buttons';
      const isHeaderFixed = $('.eaton-header').hasClass('eaton-header--fixed');

      const scrollOffset = (isMobile ? 138 : 40) +
                           (isCookieBoxVisible ? cookieBoxVisibleHeight : 0);
      const shouldBeFixed = isHeaderFixed || scrollTop > scrollOffset;

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
