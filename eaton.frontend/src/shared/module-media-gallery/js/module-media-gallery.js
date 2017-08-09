'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  const $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');

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
    $slideCarousel.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      adaptiveHeight: true,
      accessibility: true,
      prevArrow: $('.module-media-gallery__prev-slide'),
      nextArrow: $('.module-media-gallery__next-slide')
    });
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  const initializeThumbnailCarousel = () => {
    $thumbnailCarousel.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      dots: true,
      accessibility: true,
      dotsClass: 'module-media-gallery__dots',
      prevArrow: $('.module-media-gallery__prev-thumbnail'),
      nextArrow: $('.module-media-gallery__next-thumbnail')
        // asNavFor: '.module-media-gallery__slide-list'
    });
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }

}();
