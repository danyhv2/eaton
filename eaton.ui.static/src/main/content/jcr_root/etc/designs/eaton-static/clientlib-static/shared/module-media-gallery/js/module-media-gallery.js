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

  // Cached DOM Elements
  var $slideContainer = $componentEl.find('.module-media-gallery__slide-container');
  var $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');

  var $thumbnailContainer = $componentEl.find('.module-media-gallery__thumbnail-container');
  var $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
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
    var activeSlideIndex = $activeSlide.data('slick-index');

    // Add Visual "active" state only to the clicked thumbnail
    $thumbnailItems.removeClass('active');
    $activeSlide.addClass('active');

    // Remove visual focus state
    $activeSlide.find('button').blur();
    $slideCarousel.slick('slickGoTo', activeSlideIndex, true);
  };

  /**
   * Configure Slick Carousel - Main Slide Container
   */
  var initializeSlideCarousel = function initializeSlideCarousel() {

    $.each($slideCarousel, function (index, item) {

      $(item).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        adaptiveHeight: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        prevArrow: $(item).closest(componentClass).find('.module-media-gallery__slide-container .module-media-gallery__prev-arrow'),
        nextArrow: $(item).closest(componentClass).find('.module-media-gallery__slide-container .module-media-gallery__next-arrow'),
        responsive: [{
          breakpoint: 991,
          settings: {
            dots: true,
            dotsClass: 'module-media-gallery__dots'
          }
        }]
      });
    });
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  var initializeThumbnailCarousel = function initializeThumbnailCarousel() {

    // If the Parent componet is Product card, show 5 thumbnails, else show 4 as default
    var numSlides = $componentEl.closest('.eaton-product-detail-card').length > 0 ? 5 : 4;

    // Subscribe Event Listeners before the Carousel is initilized
    //--------------
    // Bind the thumbnail carousel to the preview carousel
    $thumbnailItems.on('click', navigateSlideCarousel);

    // Determine the active thumbnail item on initialization
    $thumbnailCarousel.on('init', function (event, slick) {
      $thumbnailCarousel.find('[data-slick-index="0"]').addClass('active');
    });

    // Init SlickJS
    //--------------
    $.each($thumbnailCarousel, function (index, item) {
      $(item).slick({
        slidesToShow: numSlides,
        slidesToScroll: numSlides,
        autoplay: false,
        dots: false,
        accessibility: true,
        prevArrow: $(item).closest(componentClass).find('.module-media-gallery__thumbnail-container .module-media-gallery__prev-arrow'),
        nextArrow: $(item).closest(componentClass).find('.module-media-gallery__thumbnail-container .module-media-gallery__next-arrow')
      });
    });
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($componentEl.length > 0) {
    init();
  }
}();