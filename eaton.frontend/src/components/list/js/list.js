//-----------------------------------
// List Component - Related Products
//-----------------------------------
'use strict';

let App = window.App || {};


App.carouselListDefault = function () {

  const $carousel = $('.listdefault__slides');

  const init = () => {
    initCarousel();
    addEventListeners();
  };



  const addEventListeners = () => {

    if (window.matchMedia) {

        // min-width 992px
      let mqMobile = window.matchMedia(App.global.constants.MEDIA_QUERIES.MOBILE);

        // EventListener that gets fired when the Breakpoint changes from Mobile to Desktop / Desktop to Mobile
      mqMobile.addListener(onBreakpointChange);
    }

  };



/**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  const onBreakpointChange = (event) => {



    if (event.matches) {
      initCarousel ();

    }
    else {
      $carousel.slick('unslick');
    }


  };


  const sliderCheck = () => {
    let numSlides = 3;

    if ($('.js-col6').length === 1) { // check how many items are on the list in order to initialize the carousel
      numSlides = 2;
    } else {
      numSlides = 3;
    }

    return numSlides;
  };


    /**
     * Initialize Slick Carousel
     */
  const initCarousel = () => {

    $carousel.slick({
      slidesToShow: sliderCheck(),
      slidesToScroll: sliderCheck(),
      dots: true,
      dotsClass: 'module-related-products__dots',
      prevArrow: $('.listdefault__prev-arrow'),
      nextArrow: $('.listdefault__next-arrow'),
      responsive: [



        {
          breakpoint: 1200,
          settings: 'unslick'
        },


        {
          breakpoint: 991,
          settings: 'unslick'
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

