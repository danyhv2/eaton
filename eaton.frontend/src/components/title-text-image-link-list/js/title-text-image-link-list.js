'use strict';

let App = window.App || {};

App.carousel = function () {

  const init = () => {
    $('.carousel').on('touchstart', function(event) {
      let xClick = event.originalEvent.touches[0].pageX;
      $(this).one('touchmove', function(event) {
        let xMove = event.originalEvent.touches[0].pageX;
        if ( Math.floor(xClick - xMove) > 5 ) {
          $('.carousel').carousel('next');
        }
        else if ( Math.floor(xClick - xMove) < -5 ) {
          $('.carousel').carousel('prev');
        }
      });
      $('.carousel').on('touchend', function() {
        $(this).off('touchmove');
      });
    });
  };

  init();
}();
