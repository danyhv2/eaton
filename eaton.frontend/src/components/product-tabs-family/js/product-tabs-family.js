//-----------------------------------
// Component M-40: Product Tabs Family
//-----------------------------------
'use strict';

let App = window.App || {};

App.header = (function() {

  const $componentClass = $('.eaton-product-tabs');
  const isAEMAuthorMode = (window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode()) ? true : false;

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
      const scrollOffset = 150;
      const componentFixedClass = 'eaton-product-tabs--fixed';
      const buttonsClass = '.eaton-product-tabs__buttons';
      const shouldBeFixed = scrollTop > scrollOffset;

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
