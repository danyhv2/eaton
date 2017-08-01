//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};

App.facets = (function() {
  const $componentClass = $('.faceted-navigation');
  const $mobileFacets = $('.faceted-navigation__mobile-facet-container');
  let mobileEnabled = false;

  const init = () => {
    $('.faceted-navigation__header.button--reset').on('click', function(e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });

    if ($(window).width() < App.global.constants.GRID.MD) {
    	mobileFacets();
    }

    $(window).on('resize', function() {
    	if ($(window).width() < App.global.constants.GRID.MD && $('.faceted-navigation__mobile-facet-container').css('display') != 'block') {
    		App.global.utils.throttle(mobileFacets(),1000);
    	}
    	else if ($(window).width() > App.global.constants.GRID.MD) {
    		$componentClass.css('display','block');
    		$mobileFacets.css('display','none');
    	}
    });
  };

  const mobileFacets = () => {
  	// $mobileFacets.append($componentClass).css('display','block');
  	if (mobileEnabled == false) {
  		$componentClass.clone().appendTo($mobileFacets).css('display','block');
  		$('.faceted-navigation__mobile-facet-container').css('display','block');
  		$componentClass.css('display','none');
  		mobileEnabled = true;
  	}
  	else {
  		$('.faceted-navigation__mobile-facet-container').css('display','block');
  		$componentClass.css('display','none');
  	}
  };

  if ($componentClass.length > 0) {
    init();
  }

}());