'use strict';

let App = window.App || {};

App.carousel3ColumnText = function () {

  const $carousel = $('.text-only-3-column__slides');

  const init = () => {
    initCarousel();
    addEventListeners();
  };



  const addEventListeners = () => {

    if (window.matchMedia) {

        // min-width 992px
      let mqMobile = window.matchMedia(App.global.constants.MEDIA_QUERIES.TABLET);

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
      console.log('IS tablet, lets unslick');
      $carousel.slick('unslick');

    }
    else {
      console.log('NO  tablet.... make slider great again !');
       






  $carousel.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      dotsClass: 'module-related-products__dots',
      prevArrow: $('.text-only-3-column__prev-arrow'),
      nextArrow: $('.text-only-3-column__next-arrow'),
      responsive: [





        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  



















    }


  };



    /**
     * Initialize Slick Carousel
     */
  const initCarousel = () => {

    $carousel.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      dotsClass: 'module-related-products__dots',
      prevArrow: $('.text-only-3-column__prev-arrow'),
      nextArrow: $('.text-only-3-column__next-arrow'),
      responsive: [



    {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }


        {
          breakpoint: 991,
          settings: "unslick"
        }



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
    console.log('Slick Carousel 0001 !!');
  }

}();
