'use strict';

var App = window.App || {};

App.carousel = function () {

  var init = function init() {
    $('.carousel').on('touchstart', function (event) {
      var xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
          $('.carousel').carousel('next');
        } else if (Math.floor(xClick - xMove) < -5) {
          $('.carousel').carousel('prev');
        }
      });
      $('.carousel').on('touchend', function () {
        $(this).off('touchmove');
      });
    });
  };

  init();
}();