'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);

  // Cached DOM Elements
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  const $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
  const $thumbnailItems = $componentEl.find('.module-media-gallery__thumbnail-item');

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

    const $activeSlide = $(event.currentTarget);
    const activeSlideIndex = $activeSlide.data('slick-index');
    const $activeMediaGallery = $(event.currentTarget).closest(componentClass);

    // Add Visual "active" state only to the clicked thumbnail
    $activeMediaGallery.find('.module-media-gallery__thumbnail-item').removeClass('active');
    $activeSlide.addClass('active');

    $activeMediaGallery.find('.module-media-gallery__slide-list').slick('slickGoTo', activeSlideIndex, true);
  };


  /**
   * Configure Slick Carousel - Main Slide Container
   */
  const initializeSlideCarousel = () => {

    $.each($slideCarousel, (index, item) => {

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
    });
  };

  /**
   * Configure Slick Carousel - Thumbnail Container
   */
  const initializeThumbnailCarousel = () => {

    // If the Parent componet is Product card, show 5 thumbnails, else show 4 as default
    let numSlides = ($componentEl.closest('.eaton-product-detail-card').length > 0)
      ? 5
      : 4;

    // Subscribe Event Listeners before the Carousel is initialized
    //--------------
    // Bind the thumbnail carousel to the preview carousel
    $thumbnailItems.on('click', navigateSlideCarousel);

    // Determine the active thumbnail item on initialization
    $thumbnailCarousel.on('init', function(event, slick) {
      $thumbnailCarousel.find('[data-slick-index="0"]').addClass('active');
    });

    // Init SlickJS
    //--------------
    $.each($thumbnailCarousel, (index, item) => {
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
