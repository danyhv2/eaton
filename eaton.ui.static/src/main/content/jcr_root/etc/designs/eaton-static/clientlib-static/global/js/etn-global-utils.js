//-----------------------------------
// Eaton: Utility Functions
//-----------------------------------
'use strict';

var App = App || {};
App.global = App.global || {};

App.global.utils = function () {
	var responsiveImg = function () {
		console.log('loaded');
	  var resizeTimeout = null;

    function replaceImgSrcs() {
        var
            respImgs = $('img[data-mobile-rendition]'),
            respBGs = $('.resp-bg'),
            combo = $.merge(respImgs,respBGs),
            checkVal = respImgs.first().css('min-width'),
            mq = 0;

        if(checkVal === '1px') mq = 1;
        else if(checkVal === '2px') mq = 2;

        combo.each(function(){
            var
                curr = $(this),
                currSrc = curr.attr('src'),
                currData = curr.data();

            if(!curr.is('img')){
            	currSrc = curr.css('background-image');
            	if(mq === 0 && currData.desktopRendition && currSrc !== currData.desktopRendition) {
	                //curr.attr('src', currData.desktopRendition);
	                curr.css('background-image', "url('" + currData.desktopRendition + "')");
	            }
	            else if(mq === 1 && currData.tabletRendition && currSrc !== currData.tabletRendition) {
	                //curr.attr('src', currData.tabletRendition);
	                curr.css('background-image', "url('" + currData.tabletRendition + "')");
	            }
	            else if(mq === 2 && currData.mobileRendition && currSrc !== currData.mobileRendition) {
	                //curr.attr('src', currData.mobileRendition);
	                curr.css('background-image', "url('" + currData.mobileRendition + "')");
	            }
            }
            else{
	            if(mq === 0 && currData.desktopRendition && currSrc !== currData.desktopRendition) {
	                curr.attr('src', currData.desktopRendition);
	            }
	            else if(mq === 1 && currData.tabletRendition && currSrc !== currData.tabletRendition) {
	                curr.attr('src', currData.tabletRendition);
	            }
	            else if(mq === 2 && currData.mobileRendition && currSrc !== currData.mobileRendition) {
	                curr.attr('src', currData.mobileRendition);
	            }
	        }
        });
    }

	    replaceImgSrcs();
	    $(window).resize(function(){
	        if(resizeTimeout) clearTimeout(resizeTimeout);
	        resizeTimeout = setTimeout(replaceImgSrcs, 500);
	    });
	}

	    $(function(){
		    responsiveImg();
		}(responsiveImg));
}();

