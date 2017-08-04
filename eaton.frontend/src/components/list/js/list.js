'use strict';

let App = window.App || {};

App.carousel = function () {

  const $carousel = $('.slick-carousel__slides');
  const $slides = $('.slick-carousel__slides .slides').length > 4 ? 4 : 3;

  const init = () => {
    initCarousel();
  };

    /**
     * Initialize Slick Carousel
     */
  const initCarousel = () => {
    $carousel.slick({
      slidesToShow: $slides,
      slidesToScroll: $slides,
      autoplay: true,
      dots: true,
      dotsClass: 'slick-carousel__dots',
      prevArrow: $('.slick-carousel__prev-arrow'),
      nextArrow: $('.slick-carousel__next-arrow'),
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
