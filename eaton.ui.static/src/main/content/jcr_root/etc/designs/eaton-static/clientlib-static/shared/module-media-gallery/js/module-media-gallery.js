/**
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY -
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 */


//-----------------------------------
// M-48: Module Media Gallery
//-----------------------------------
'use strict';

var App = window.App || {};
App.mediaGallery = function () {

  var componentClass = '.module-media-gallery';
  var $componentEl = $(componentClass);

  // Placeholder variables for Multilanguage strings
  var i18nStrings = {};

  // Cached DOM Elements
  //--------------
  var $bodyEl = $('body');
  var $slideCarousel = $componentEl.find('.module-media-gallery__slide-list');
  var $thumbnailCarousel = $componentEl.find('.module-media-gallery__thumbnail-list');
  var $thumbnailItems = $componentEl.find('.module-media-gallery__thumbnail-item');

  // Zoom Behavior
  //--------------
  var zoom = {};

  /**
   * Initialize Media Gallery
   */
  var init = function init() {
    i18nStrings = App.global.utils.loadI18NStrings($componentEl);
    initializeSlideCarousel();
    initializeThumbnailCarousel();
    zoomInitialize();
  };

  /**
   * Determine the position of the thumbnail item and slide to the corresponding item in slide carousel
   */
  var navigateSlideCarousel = function navigateSlideCarousel(event) {
    event.preventDefault();

    var $activeSlide = $(event.currentTarget);
    var activeSlideIndex = $activeSlide.data('slick-index');
    var $activeMediaGallery = $activeSlide.closest(componentClass);

    // Add Visual "active" state only to the clicked thumbnail
    $activeMediaGallery.find('.module-media-gallery__thumbnail-item').removeClass('active');
    $activeSlide.addClass('active');

    $activeMediaGallery.find('.module-media-gallery__slide-list').slick('slickGoTo', activeSlideIndex, true);
  };

  /**
   * Configure Slick Carousel - Main Slide Container
   */
  var initializeSlideCarousel = function initializeSlideCarousel() {

    $.each($slideCarousel, function (index, item) {

      var $currentSlider = $(item);
      var $slideContainer = $currentSlider.closest(componentClass).find('.module-media-gallery__slide-container');

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

    // Subscribe Event Listeners before the Carousel is initialized
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

      var $currentSlider = $(item);
      var $thumbnailContainer = $currentSlider.closest(componentClass).find('.module-media-gallery__thumbnail-container');

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
  var zoomInitialize = function zoomInitialize() {

    /**
    * Zoom Behavior - Default Config
    */
    zoom = {
      eventDesktop: 'click',
      // eventMobile: 'overlay',
      scaleMobile: 2, // It Means that the image will be scale at 2x (200%)
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
        zoomOverlayOpen: 'zoom-overlay-open',
        zoomInlineOpen: 'zoom-inline-open'
      },

      // Keyboard Codes (event.which)
      keyCodes: {
        ESC: 27
      },

      templates: {
        zoomInline: '<div class="zoom-inline"></div>',
        zoomOverlay: '<div class="zoom-overlay">\n          <button class="zoom-overlay__close button--reset">\n            <span class="sr-only">' + i18nStrings.closeOverlay + '</span>\n            <i class="icon icon-close" aria-hidden="true"></i>\n          </button>\n          <div class="zoom-overlay__image"></div>\n        </div>'
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
    App.global.utils.forEach(zoom.$imagesEl, function (index, item) {

      var $currentItem = $(item);

      $currentItem.wrap(zoom.templates.zoomInline).parent()
      // Documentation: http://www.jacklmoore.com/zoom/
      .zoom({
        on: zoom.eventDesktop,
        magnify: zoom.scaleDesktop,
        url: item.dataset.zoomUrl,
        callback: function callback() {
          var $currentImage = $(this);

          $currentImage.on('touchstart mouseover click', zoomHandleImageEvent);

          // "Swipe" Event provided by "jquery.touch-swipe" Library
          $currentImage.swipe({
            tap: function tap(event) {
              zoomHandleImageEvent(event);
            },
            swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
              // Do nothing, Let the Carousel Library control the swipe behavior
            }
          });
        },
        onZoomIn: function onZoomIn() {
          $(this).closest(componentClass).addClass(zoom.cssClasses.zoomInlineOpen);
        },
        onZoomOut: function onZoomOut() {
          $(this).closest(componentClass).removeClass(zoom.cssClasses.zoomInlineOpen);
        }
      });
    });
  };

  /**
  * Show Modal/Overlay with the given Image URL
  * @param { String } imageSrc - ImageURL that will be displayed in the overlay
  */
  var zoomOpenOverlay = function zoomOpenOverlay(imageSrc) {

    // Update Background image in the overlay
    var style = 'background-image: url("' + imageSrc + '")';
    zoom.$overlayImageEl.attr('style', style);

    // Prevent scrolling in the page
    $bodyEl.addClass(zoom.cssClasses.zoomOverlayOpen);

    // It makes zoom-overlay visible
    zoom.$overlayEl.fadeIn(function () {

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
  var zoomCloseOverlay = function zoomCloseOverlay(event) {

    // Close Overlay on Key Press. If the pressed key is not the ESC Key, Ignore
    if (event && event.type === 'keydown' && event.which !== zoom.keyCodes.ESC) {
      return;
    }

    // Hide Overlay and remove Background Image
    zoom.$overlayEl.fadeOut(function () {
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
  var zoomHandleImageEvent = function zoomHandleImageEvent(event) {

    var disabledEvents = {
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
      if (event.type in disabledEvents) {
        return;
      }

      // Open Overlay for Mobile
      zoomOpenOverlay(event.currentTarget.src);
    }
  };

  /**
  * Handle Zoom Behavior inside the Overlay
  * @param { Object } event - the event object
  */
  var zoomHandleOverlay = function zoomHandleOverlay(event) {

    var zoomedImage = event.currentTarget;

    // TouchStart / MouseDown
    //--------------
    if (event.type === 'touchstart' || event.type === 'mousedown') {
      // console.log('zoomStart', event.type);
      zoomedImage.style.backgroundSize = zoom.scaleMobile * 100 + '%';
      zoom.state.isDragging = true;
    }

    // TouchMove / MouseMove
    //--------------
    else if (zoom.state.isDragging && (event.type === 'touchmove' || event.type === 'mousemove')) {

        // console.log('zoomMove', event.type);

        //
        event.preventDefault();

        // getBoundingClientReact gives us various information about the position of the element.
        var dimentions = zoomedImage.getBoundingClientRect();
        var eventX = event.clientX || event.touches && event.touches[0].clientX;
        var eventY = event.clientY || event.touches && event.touches[0].clientY;

        // Calculate the position of the cursor inside the element (in pixels).
        var x = eventX - dimentions.left;
        var y = eventY - dimentions.top;

        // Calculate the position of the cursor as a percentage of the total size of the element.
        var xPercent = Math.round(100 / (dimentions.width / x));
        var yPercent = Math.round(100 / (dimentions.height / y));

        // Update the background position of the image.
        zoomedImage.style.backgroundPosition = xPercent + '% ' + yPercent + '%';
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
  var zoomAddEventListeners = function zoomAddEventListeners() {

    // Zome Overlay - Close
    zoom.$overlayCloseEl.on('click', zoomCloseOverlay);

    // Zoom Overlay - Handle Zoom
    zoom.$overlayImageEl.on('touchstart touchmove touchend mousedown mousemove mouseup', zoomHandleOverlay);

    // JavaScript MediaQueries
    //--------------
    var mqDesktop = window.matchMedia(App.global.constants.MEDIA_QUERIES.DESKTOP);

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