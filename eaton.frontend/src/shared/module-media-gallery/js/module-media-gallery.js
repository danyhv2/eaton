'use strict';

let App = window.App || {};

App.mediaGallery = function () {

  const componentClass = '.module-media-gallery';
  const $componentEl = $(componentClass);

  // Cached DOM Elements
  //--------------
  const $bodyEl = $('body');
  const $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  const $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
  const $thumbnailItems = $componentEl.find('.module-media-gallery__thumbnail-item');

  let i18n = {};

  // Zoom Behavior
  //--------------
  let zoom = {};


  /**
   * Initialize Media Gallery
   */
  const init = () => {
    loadI18NStrings();
    initializeSlideCarousel();
    initializeThumbnailCarousel();
    zoomInitialize();
  };



  /**
   * Get i18n String from a HTML data-attribute
   */
  const loadI18NStrings = function() {

    let i18nData = $componentEl[0].dataset.i18n;

    // Save i18n Strings as an Object in a global variable
    i18n = (JSON.parse(i18nData))
      ? JSON.parse(i18nData)
      : {};
  };


  /**
   * Determine the position of the thumbnail item and slide to the corresponding item in slide carousel
   */
  const navigateSlideCarousel = (event) => {
    event.preventDefault();

    const $activeSlide = $(event.currentTarget);
    const activeSlideIndex = $activeSlide.data('slick-index');
    const $activeMediaGallery = $activeSlide.closest(componentClass);

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

      const $currentSlider = $(item);
      const $slideContainer = $currentSlider.closest(componentClass).find('.module-media-gallery__slide-container');

      $currentSlider.slick({
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

      const $currentSlider = $(item);
      const $thumbnailContainer = $currentSlider.closest(componentClass).find('.module-media-gallery__thumbnail-container');

      $currentSlider.slick({
        slidesToShow: numSlides,
        slidesToScroll: numSlides,
        autoplay: false,
        dots: false,
        accessibility: true,
        prevArrow: $thumbnailContainer.find('.module-media-gallery__prev-arrow'),
        nextArrow: $thumbnailContainer.find('.module-media-gallery__next-arrow')
      });
    });
  };


  /**
  * Initialize Zoom Behavior
  */
  const zoomInitialize = () => {

    // Default Settings
    //--------------
    zoom = {
      eventDesktop: 'click',
      // eventMobile: 'overlay',
      scaleMobile: 2,  // It Means that the image will be scale at 2x (200%)
      scaleDesktop: 1, // The default value is 1, meaning the zoomed image should be at 100% of its natural width and height.

      state: {
        isDragging: null,
        isLoading: null
      },

      $overlayEl: null,
      $overlayImageEl: null,
      $overlayCloseEl: null,
      $imagesEl: null,

      cssClasses: {
        zoomOverlayOpen: 'zoom-overlay-open'
      },

      // Keyboard Codes (event.which)
      keyCodes: {
        ESC: 27
      },

      templates: {
        zoomInline: '<div class="zoom-inline"></div>',
        zoomOverlay: `<div class="zoom-overlay">
          <button class="zoom-overlay__close button--reset">
            <span class="sr-only">${ i18n.closeOverlay }</span>
            <i class="icon icon-close" aria-hidden="true"></i>
          </button>
          <div class="zoom-overlay__image"></div>
        </div>`
      }
    };

    // Save DOM Elements used By the Zoom Behavior
    //--------------
    zoom.$overlayEl = $(zoom.templates.zoomOverlay);
    zoom.$overlayImageEl = zoom.$overlayEl.find('.zoom-overlay__image');
    zoom.$overlayCloseEl = zoom.$overlayEl.find('.zoom-overlay__close');
    zoom.$imagesEl = $slideCarousel.find('[data-zoom-url]');


    // Add Zoom Overlay to the DOM
    //--------------
    $bodyEl.append(zoom.$overlayEl);


    // Bind Event Listeners
    //--------------
    zoomAddEventListeners();


    // Initialize Zoom Library used in the Desktop Breakpoint
    //--------------
    App.global.utils.forEach(zoom.$imagesEl, (index, item) => {

      const $currentItem = $(item);

      $currentItem
        .wrap(zoom.templates.zoomInline)
        .parent()
        .zoom({
          on: zoom.eventDesktop,
          magnify: zoom.scaleDesktop,
          url: item.dataset.zoomUrl,
          callback() {
            const $currentImage = $(this);
            $currentImage.on('touchstart mouseover click', zoomHandleImageEvent);

            $currentImage.swipe({ // Event provided by "jquery.touch-swipe" Library
              tap(event) {
                zoomHandleImageEvent(event);
              },
              swipe(event, direction, distance, duration, fingerCount, fingerData) {
                // Do nothing, Let the Carousel Library control the swipe behavior
              }
            });
          }
        });
    });

  };


  /**
  * Show Modal/Overlay with the given Image URL
  * @param { String } imageSrc - ImageURL that will be displayed in the overlay
  */
  const zoomOpenOverlay = (imageSrc) => {
    const style = `background-image: url("${ imageSrc }")`;
    zoom.$overlayImageEl.attr('style', style);
    $bodyEl.addClass(zoom.cssClasses.zoomOverlayOpen);
    zoom.$overlayEl.fadeIn(() => {

      // Focus the Close Overlay button as soon as the overlay is visible
      zoom.$overlayCloseEl.focus();
    });

    // Add Listener that Closes the Overlay on Key Press (ESC Key)
    $bodyEl.on('keydown', zoomCloseOverlay);

  };


  /**
  * Function/Method description
  * @param { Object } event - the event object
  */
  const zoomCloseOverlay = (event) => {

    // Close Overlay on Key Press. If the pressed key is not the ESC Key, Ignore
    if (event && event.type === 'keydown' && event.which !== zoom.keyCodes.ESC ) { return; }

    // Hide Overlay and remove Background Image
    zoom.$overlayEl.fadeOut(() => {
      zoom.$overlayImageEl.removeAttr('style');
      $bodyEl.removeClass(zoom.cssClasses.zoomOverlayOpen);
    });

    // Remove event Listeners to close the Overlay on Key Press
    $bodyEl.off('keydown', zoomCloseOverlay);

  };


  /**
  * Handle Zoom Mobile
  * @param { Object } event - the event object
  */
  const zoomHandleImageEvent = (event) => {

    const disabledEvents = {
      mouseover: null,
      touchstart: null,
      tap: null,
      click: null
    };

    // If Mobile/Tablet Breakpoint
    if (window.innerWidth < App.global.constants.GRID.MD) {

      // Prevent Desktop Zoom behavior
      event.stopPropagation();

      // ?????
      if (event.type in disabledEvents) { return; }

      // Open Overlay for Mobile
      zoomOpenOverlay(event.currentTarget.src);

    }
  };


  /**
  * Handle Zoom Behavior inside the Overlay
  * @param { Object } event - the event object
  */
  const zoomHandleOverlay = (event) => {

    let zoomedImage = event.currentTarget;


    // TouchStart / MouseDown
    //--------------
    if (event.type === 'touchstart' || event.type === 'mousedown') {
      // console.log('zoomStart', event.type);
      zoomedImage.style.backgroundSize = `${ zoom.scaleMobile * 100 }%`;
      zoom.state.isDragging = true;
    }


    // TouchMove / MouseMove
    //--------------
    else if (zoom.state.isDragging && (event.type === 'touchmove' || event.type === 'mousemove')) {

      // console.log('zoomMove', event.type);

      //
      event.preventDefault();

      // getBoundingClientReact gives us various information about the position of the element.
      let dimentions = zoomedImage.getBoundingClientRect();
      let eventX = event.clientX || event.touches[0].clientX;
      let eventY = event.clientY || event.touches[0].clientY;

      // Calculate the position of the cursor inside the element (in pixels).
      let x = eventX - dimentions.left;
      let y = eventY - dimentions.top;

      // Calculate the position of the cursor as a percentage of the total size of the element.
      let xPercent = Math.round(100 / (dimentions.width / x));
      let yPercent = Math.round(100 / (dimentions.height / y));

      // Update the background position of the image.
      zoomedImage.style.backgroundPosition = `${ xPercent }% ${ yPercent }%`;

    }

    // TouchEnd / MouseUp
    //--------------
    else if (event.type === 'touchend' || event.type === 'mouseup') {
      // console.log('zoomEnd', event.type);
      zoomedImage.style.backgroundSize = 'contain';
      zoomedImage.style.backgroundPosition = 'center';
      zoom.state.isDragging = false;
    }
  };


  /**
  * AddEventListeners used by the Zoom behavior
  */
  const zoomAddEventListeners = () => {

    // Zome Overlay - Close
    zoom.$overlayCloseEl.on('click', zoomCloseOverlay);

    // Zoom Overlay - Handle Zoom
    zoom.$overlayImageEl.on('touchstart touchmove touchend mousedown mousemove mouseup', zoomHandleOverlay);

    // JavaScript MediaQueries
    //--------------
    let mqDesktop = window.matchMedia(App.global.constants.MEDIA_QUERIES.DESKTOP);

    // Reset the Overlay when the Breakpoint changes from Mobile to Desktop / Desktop to Mobile
    mqDesktop.addListener(zoomCloseOverlay);

  };


  /**
  * Remove Event Listeners
  * TODO: Write a better "Destroy-Zoom" Method if Needed
  */
  /*
  const zoomDestroyEventListeners = () => {
    // Zome Overlay - Close
    zoom.$overlayCloseEl.off('click', zoomCloseOverlay);

    // Zoom Overlay - Handle Zoom
    zoom.$overlayImageEl.off('touchstart touchmove touchend mousedown mousemove mouseup', zoomHandleOverlay);
  };
  */


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentEl.length > 0) {
    init();
  }

}();
