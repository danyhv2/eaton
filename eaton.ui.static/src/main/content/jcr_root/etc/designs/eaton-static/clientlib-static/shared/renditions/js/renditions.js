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
// Eaton: Responsive Images
//-----------------------------------
'use strict';

var App = App || {};
App.renditions = function () {

  // let resizeTimeout = null;

  var init = function init() {
    addEventListeners();
    updateImagesSrc();
  };

  /**
  * Bind All event listeners
  */
  var addEventListeners = function addEventListeners() {

    var lazyResize = App.global.utils.throttle(updateImagesSrc, 300);
    $(window).resize(lazyResize);
  };

  /**
  * Update image Source for the Current MediaQuery / Breakpoint
  */
  var updateImagesSrc = function updateImagesSrc() {

    var $renditionImages = $('.rendition img, .rendition-bg');
    // let checkVal = parseInt($respImgs.first().css('min-width'), 10);
    var mq = 'desktop';

    // Determine Current Breakpoint
    //--------------
    if (window.matchMedia && window.matchMedia(App.global.constants.MEDIA_QUERIES.MOBILE).matches) {
      mq = 'mobile';
    } else if (window.matchMedia && window.matchMedia(App.global.constants.MEDIA_QUERIES.TABLET).matches) {
      mq = 'tablet';
    }

    App.global.utils.forEach($renditionImages, function (index, element) {
      var curr = $(element);
      var currSrc = element.src;
      var currData = curr.data();

      if (!curr.is('img')) {
        currSrc = curr.css('background-image');
        if (mq === 'desktop' && currData.desktopRendition && currSrc !== currData.desktopRendition) {
          // curr.attr('src', currData.desktopRendition);
          curr.css('background-image', "url('" + currData.desktopRendition + "')");
        } else if (mq === 'tablet' && currData.tabletRendition && currSrc !== currData.tabletRendition) {
          // curr.attr('src', currData.tabletRendition);
          curr.css('background-image', "url('" + currData.tabletRendition + "')");
        } else if (mq === 'mobile' && currData.mobileRendition && currSrc !== currData.mobileRendition) {
          // curr.attr('src', currData.mobileRendition);
          curr.css('background-image', "url('" + currData.mobileRendition + "')");
        }
      } else {
        if (mq === 'desktop' && currData.desktopRendition && currSrc !== currData.desktopRendition) {
          curr.attr('src', currData.desktopRendition);
        } else if (mq === 'tablet' && currData.tabletRendition && currSrc !== currData.tabletRendition) {
          curr.attr('src', currData.tabletRendition);
        } else if (mq === 'mobile' && currData.mobileRendition && currSrc !== currData.mobileRendition) {
          curr.attr('src', currData.mobileRendition);
        }
      }
    });
  };

  // Autoinitialize on Runtime
  init();

  return {
    updateImagesSrc: updateImagesSrc
  };
}();