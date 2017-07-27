'use strict';

let App = window.App || {};

App.carousel = function () {

  const $component = $('.mobile-carousel');


  const init = () => {
    addClass();
  };

    /**
     * @private
     * Add .active class
     */
  const addClass = () => {
    $component.find('.carousel-indicators li:first').addClass('active');
    $component.find('.carousel-component-slide div:first').addClass('active');


  };


    /**
     * If containing DOM element is found, Initialize and Expose public methods
     */
  if ($component.length > 0) {
    init();
  }


}();
