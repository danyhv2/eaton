'use strict';

var App = window.App || {};

App.carousel = function () {

  var $componentEl = $('.carousel');

  var init = function init() {
    initCarousels();
    addEventListeners();
  };

  /**
   * Initialize Bootstrap Carousel
   */
  var initCarousels = function initCarousels() {
    $componentEl.carousel({
      interval: 3000,
      keyboard: true
    });
  };

  /**
   * Bind All Event Listeners
   */
  var addEventListeners = function addEventListeners() {

    // Go To Previous / Next Slide
    //--------------
    $componentEl.on('click', '.carousel-control', function (event) {

      // Carousel Context
      var $carousel = $(event.delegateTarget);

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
    $componentEl.on('touchstart', function (event) {

      var xClick = event.originalEvent.touches[0].pageX;
      var $carousel = $(this);

      $carousel.one('touchmove', function (event) {
        var xMove = event.originalEvent.touches[0].pageX;

        if (Math.floor(xClick - xMove) > 5) {
          $carousel.carousel('next');
        } else if (Math.floor(xClick - xMove) < -5) {
          $carousel.carousel('prev');
        }
      });

      $carousel.on('touchend', function () {
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