/**
 *
 *
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY - 
 *
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 *
 */


'use strict';

var App = window.App || {};

App.mediaGallery = function () {

  var componentClass = '.module-media-gallery';
  var $componentEl = $(componentClass);
  var $slideContainer = $componentEl.find('.module-media-gallery__slide-container');
  var $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  var $thumbnailContainer = $componentEl.find('.module-media-gallery__thumbnail-container');
  var $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
  var $slideItems = $slideContainer.find('.module-media-gallery__slide-item');
  var $thumbnailItems = $thumbnailContainer.find('.module-media-gallery__thumbnail-item');

  /**
   * Initialize Media Gallery
   */
  var init = function init() {
    initializeSlideCarousel();
    initializeThumbnailCarousel();
  };

  /**
   * Determine the position of the thumbnail item and slide to the corresponding item in slide carousel
   */
  var navigateSlideCarousel = function navigateSlideCarousel(event) {
    event.preventDefault();

    var $activeSlide = $(event.currentTarget);
    var activeSlideIndex = event.currentTarget.dataset.slickIndex;

    $thumbnailItems.removeClass('active');
    $activeSlide.addClass('active');

    $slideCarousel.slick('slickGoTo', activeSlideIndex, true);
  };

  /**
   * Configure Slick Carousel - Main Slide Container
   */
  var initializeSlideCarousel = function initializeSlideCarousel() {

    var activeSlideImage = '';

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

    // On Carousel Init
    $slideContainer.find('.module-media-gallery__arrows').css('top', $slideItems.eq(0).find('.module-media-gallery__image-wrapper').height() / 2 - 30);

    // Before SLide Change
    $slideCarousel.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      activeSlideImage = $slideItems.eq(nextSlide).find('.module-media-gallery__image-wrapper');
      $slideContainer.find('.module-media-gallery__arrows').css('top', activeSlideImage.height() / 2 - 30);
    });
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  var initializeThumbnailCarousel = function initializeThumbnailCarousel() {
    var numSlides = $componentEl.closest('.eaton-product-detail-card').length > 0 ? 5 : 4;
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

    // Bind the thumbnail carousel to the preview carousel
    $thumbnailItems.on('click', navigateSlideCarousel);

    // Determine the active thumbnail item on initialization
    $thumbnailCarousel.on('init', function (event, slick) {
      $thumbnailCarousel.find('[data-slick-index="0"]').addClass('active');
    });
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }
}();