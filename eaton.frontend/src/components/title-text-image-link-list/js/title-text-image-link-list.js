'use strict';

let App = window.App || {};

App.carousel = function () {

  const $componentEl = $('.carousel');


  const init = () => {
    initCarousels();
    addEventListeners();
  };


  /**
   * @private
   * Initialize Bootstrap Carousel
  */
  const initCarousels = () => {
    $componentEl.carousel({
      interval: 3000,
      keyboard: true
    });
  };


  /**
   * @private
   * Bind All Event Listeners
  */
  const addEventListeners = () => {


    // Go To Previous / Next Slide
    //--------------
    $componentEl.on('click', '.carousel-control', function (event) {

      // Carousel Context
      const $carousel = $(event.delegateTarget);

      // Go To Previous slide
      if (this.classList.contains('left')) {
        $carousel.carousel('prev');
      }

      // Go to Next slide
      else if (this.classList.contains('right')) {
        $carousel.carousel('next');
      }

    });


    // Enable Swipe Behaviors
    //--------------
    $componentEl.on('touchstart', function(event) {

      let xClick = event.originalEvent.touches[0].pageX;
      let $carousel = $(this);

      $carousel.one('touchmove', function(event) {
        let xMove = event.originalEvent.touches[0].pageX;

        if ( Math.floor(xClick - xMove) > 5 ) {
          $carousel.carousel('next');
        }

        else if ( Math.floor(xClick - xMove) < -5 ) {
          $carousel.carousel('prev');
        }

      });

      $carousel.on('touchend', function() {
        $(this).off('touchmove');
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
