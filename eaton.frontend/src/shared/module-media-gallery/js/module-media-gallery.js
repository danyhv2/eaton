'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);
  const $slideContainer = $componentEl.find('.module-media-gallery__slide-container');
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  const $thumbnailContainer = $componentEl.find('.module-media-gallery__thumbnail-container');
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
      lazyLoad: 'ondemand',
      prevArrow: $slideContainer.find('.module-media-gallery__prev-arrow'),
      nextArrow: $slideContainer.find('.module-media-gallery__next-arrow')
    });
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  const initializeThumbnailCarousel = () => {
    let numSlides = ($componentEl.closest('.eaton-product-detail-card').length > 0) ? 5 : 4;
    $thumbnailCarousel.slick({
      slidesToShow: numSlides,
      slidesToScroll: numSlides,
      autoplay: false,
      dots: false,
      accessibility: true,
        // dotsClass: 'module-media-gallery__dots',
      prevArrow: $thumbnailContainer.find('.module-media-gallery__prev-arrow'),
      nextArrow: $thumbnailContainer.find('.module-media-gallery__next-arrow')
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
