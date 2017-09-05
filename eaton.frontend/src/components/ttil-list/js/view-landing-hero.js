//-----------------------------------
// Compnent: TTIL
//-----------------------------------
'use strict';

let App = window.App || {};
App.ttilListLandingHero = function () {

  const $componentEl = $('.eaton-landing-hero');
  const $componentSlidesEl = $componentEl.find('.eaton-landing-hero__slide-list');

  const init = () => {
    initCarousels();
  };


  /**
   * Initialize Bootstrap Carousel
   */
  const initCarousels = () => {
    $componentSlidesEl.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      dotsClass: 'eaton-landing-hero__dots',
      prevArrow: $componentEl.find('.eaton-landing-hero__arrow--prev'),
      nextArrow: $componentEl.find('.eaton-landing-hero__arrow--next')
    });
  };



  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }


}();
