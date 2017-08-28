//-----------------------------------
// TTIL: Upsell Products
//-----------------------------------
'use strict';

let App = window.App || {};
App.upSellProducts = function () {

  const $carousel = $('.upsell-products__slides');

  const init = () => {
    initCarousel();
  };

    /**
     * Initialize Slick Carousel
     */
  const initCarousel = () => {

    $carousel.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      dotsClass: 'module-related-products__dots',
      prevArrow: $('.upsell-products__prev-arrow'),
      nextArrow: $('.upsell-products__next-arrow'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };

    /**
     * If containing DOM element is found, Initialize and Expose public methods
     */
  if ($carousel.length > 0) {
    init();
  }

}();
