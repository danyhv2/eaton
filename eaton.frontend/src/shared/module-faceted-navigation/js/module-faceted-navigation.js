//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};

App.facets = (function() {
  const $componentClass = $('.faceted-navigation');
  const $mobileFacets = $('.faceted-navigation__mobile-facet-container');

  const init = () => {
    $('.faceted-navigation__header.button--reset').on('click', function(e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });

    if ($(window).width() < App.global.constants.GRID.MD) {
      mobileFacets();
    }

    $(window).on('resize', function() {
    	if ($(window).width() < App.global.constants.GRID.MD && $mobileFacets.css('display') != 'block') {
    		App.global.utils.throttle(mobileFacets(),1000);
    	}
    	else {
    		$componentClass.css('display','block');
    		$mobileFacets.css('display','none');
    	}
    });
  };

  const mobileFacets = () => {
  	// $mobileFacets.append($componentClass).css('display','block');
  	$componentClass.clone().appendTo($mobileFacets).css('display','block');
  	$componentClass.css('display','none');
  	 $('.faceted-navigation__mobile-facet-container').css('display','block');
  };

  if ($componentClass.length > 0) {
    init();
  }

}());