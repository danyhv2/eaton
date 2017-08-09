'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-container');
  const $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-container');

  /**
   * Initialize Media Gallery
   */
  const init = () => {
    initializeSlideCarousel();
    initializeThumbnailCarousel();
  };

  /**
   * Configure Slick Carousel - Main Slide Container
   */
  const initializeSlideCarousel = () => {
    for (let i = 0; i < $slideCarousel.length; i++) {

      $slideCarousel.eq(i).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        adaptiveHeight: true,
        dotsClass: 'module-media-gallery__dots',
        prevArrow: $('.module-media-gallery__prev-slide'),
        nextArrow: $('.module-media-gallery__next-slide')
      });
    }
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  const initializeThumbnailCarousel = () => {
    for (let i = 0; i < $thumbnailCarousel.length; i++) {

      $thumbnailCarousel.eq(i).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        dots: true,
        dotsClass: 'module-media-gallery__dots',
        prevArrow: $('.module-media-gallery__prev-thumbnail'),
        nextArrow: $('.module-media-gallery__next-thumbnail')
      });
    }
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }

}();
