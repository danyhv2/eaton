'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);
  const $slideContainer = $componentEl.find('.module-media-gallery__slide-container');
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  const $thumbnailContainer = $componentEl.find('.module-media-gallery__thumbnail-container');
  const $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
  const $slideItems = $slideContainer.find('.module-media-gallery__slide-item');
  const $thumbnailItems = $thumbnailContainer.find('.module-media-gallery__thumbnail-item');

  /**
   * Initialize Media Gallery
   */
  const init = () => {
    initializeSlideCarousel();
    initializeThumbnailCarousel();
  };

  /**
   * Determine the position of the thumbnail item and slide to the corresponding item in slide carousel
   */
  const navigateSlideCarousel = (event) => {
    event.preventDefault();

    const activeSlide = $(event.currentTarget);
    const activeSlideIndex = activeSlide.data('slick-index');

    $thumbnailItems.removeClass('active');
    activeSlide.addClass('active');
    $slideCarousel.slick('slickGoTo', activeSlideIndex, true);
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
      nextArrow: $slideContainer.find('.module-media-gallery__next-arrow'),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            dotsClass: 'module-media-gallery__dots'
          }
        }
      ]
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
      prevArrow: $thumbnailContainer.find('.module-media-gallery__prev-arrow'),
      nextArrow: $thumbnailContainer.find('.module-media-gallery__next-arrow')
    });

    // Bind the thumbnail carousel to the preview carousel
    $thumbnailItems.on('click', navigateSlideCarousel);

    // Determine the active thumbnail item on initialization
    $thumbnailCarousel.on('init', function(event, slick) {
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
