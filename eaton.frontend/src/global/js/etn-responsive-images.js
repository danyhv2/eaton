//-----------------------------------
// Eaton: Responsive Images
//-----------------------------------
'use strict';

let App = App || {};

App.global = App.global || {};
App.global.responsiveImg = function () {

  let responsiveImg = function () {

    let resizeTimeout = null;

    function replaceImgSrcs() {

      let $respImgs = $('img[data-mobile-rendition]');
      let $respBGs = $('.resp-bg');
      let $combo = $.merge($respImgs, $respBGs);
      let checkVal = parseInt($respImgs.first().css('min-width'), 10);
      let mq = 'desktop';

      if (checkVal === 1) {
        mq = 'tablet';
      }

      else if (checkVal === 2) {
        mq = 'mobile';
      }

      $combo.each(function() {
        let curr = $(this);
        let currSrc = curr.attr('src');
        let currData = curr.data();

        if (!curr.is('img')) {
          currSrc = curr.css('background-image');
          if (mq === 'desktop' && currData.desktopRendition && currSrc !== currData.desktopRendition) {
            // curr.attr('src', currData.desktopRendition);
            curr.css('background-image', "url('" + currData.desktopRendition + "')");
          }
          else if (mq === 'tablet' && currData.tabletRendition && currSrc !== currData.tabletRendition) {
            // curr.attr('src', currData.tabletRendition);
            curr.css('background-image', "url('" + currData.tabletRendition + "')");
          }
          else if (mq === 'mobile' && currData.mobileRendition && currSrc !== currData.mobileRendition) {
            // curr.attr('src', currData.mobileRendition);
            curr.css('background-image', "url('" + currData.mobileRendition + "')");
          }
        }
        else {
          if (mq === 'desktop' && currData.desktopRendition && currSrc !== currData.desktopRendition) {
            curr.attr('src', currData.desktopRendition);
          }
          else if (mq === 'tablet' && currData.tabletRendition && currSrc !== currData.tabletRendition) {
            curr.attr('src', currData.tabletRendition);
          }
          else if (mq === 'mobile' && currData.mobileRendition && currSrc !== currData.mobileRendition) {
            curr.attr('src', currData.mobileRendition);
          }
        }
      });
    }

    replaceImgSrcs();

    $(window).resize(function() {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(replaceImgSrcs, 500);
    });
  };

  $(function() {
    responsiveImg();
  }(responsiveImg));

}();
