//-----------------------------------
// Compnent: TTIL
//-----------------------------------
'use strict';

let App = window.App || {};
App.ttilList = function () {

  const $componentEl = $('.carousel-component-slide');

  const init = () => {
    initCarousels();
  };


  /**
   * Initialize Bootstrap Carousel
   */
  const initCarousels = () => {
    $componentEl.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      dotsClass: 'carousel-component__dots',
      prevArrow: $('.carousel-component__arrow--prev'),
      nextArrow: $('.carousel-component__arrow--next')

    });
  };



  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }


}();
