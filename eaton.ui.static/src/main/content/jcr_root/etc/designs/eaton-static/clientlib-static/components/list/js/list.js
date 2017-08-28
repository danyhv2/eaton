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
// List Component - Related Products
//-----------------------------------
'use strict';

var App = window.App || {};
App.listComponent = function () {

  var $carousel = $('.module-related-products__slides');

  var init = function init() {
    initCarousel();
  };

  /**
   * Initialize Slick Carousel
   */
  var initCarousel = function initCarousel() {
    for (var i = 0; i < $carousel.length; i++) {

      $carousel.eq(i).addClass('module-related-products__slides--' + i);
      var $slides = $('.module-related-products__slides--' + i + ' .slides').length > 4 ? 4 : 3;

      $carousel.eq(i).slick({
        slidesToShow: $slides,
        slidesToScroll: $slides,
        dots: true,
        dotsClass: 'module-related-products__dots',
        prevArrow: $('.module-related-products__prev-arrow'),
        nextArrow: $('.module-related-products__next-arrow'),
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
  };

  /**
   * If containing DOM element is found, Initialize and Expose public methods
   */
  if ($carousel.length > 0) {
    init();
  }
}();