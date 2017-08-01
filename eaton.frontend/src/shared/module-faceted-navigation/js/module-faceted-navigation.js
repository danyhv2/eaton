//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};

App.facets = (function() {
  const $componentClass = $('.faceted-navigation');
  let $mobileFacets = $('.faceted-navigation__mobile-facet-container');
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
    		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header, .faceted-navigation__mobile-facet-container .faceted-navigation-header__header-middle').removeClass('hidden');
    		$('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button').removeClass('hidden');
    		App.global.utils.throttle(mobileFacets(),1000);
    	}
    	else if ($(window).width() > App.global.constants.GRID.MD) {
    		$componentClass.css('display','block');
    		$('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button').addClass('hidden');

    	}
    });
  };

  const mobileFacets = () => {
  	// $mobileFacets.append($componentClass).css('display','block');
  	if (mobileEnabled == false) {
  		let $overlay = $('<div>', {id: 'mobile-overlay'});
  		let temp = $componentClass.parent().parent();
  		$("<div class='faceted-navigation__mobile-facet-container hidden col-xs-12 col-md-3'></div>").appendTo(temp);
  		// $($('.faceted-navigation__mobile-facet-container')).append($('.faceted-navigation-header'));
  		$componentClass.clone().appendTo('.faceted-navigation__mobile-facet-container').addClass('visible');
  		$('.faceted-navigation-header').clone().prependTo('.faceted-navigation__mobile-facet-container');
  		// $($('.faceted-navigation-header')).appendTo($('.faceted-navigation__mobile-facet-container .faceted-navigation'));
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').prepend($('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom'));
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header').removeClass('hidden-xs').removeClass('hidden-sm');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-middle').removeClass('hidden-sm').removeClass('hidden');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom').removeClass('hidden-xs').removeClass('hidden-sm');

  		$("<a href='#' target='_self' class='b-button b-button__primary b-button__primary--light hidden-lg' role='button'>Filters (X)</a>").appendTo($('.faceted-navigation__mobile-facet-container'));
  		$($mobileFacets).append("<a href='#' target='_self' class='b-button b-button__primary b-button__primary--light' role='button'>Filters (X)</a>");


  		// $('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom').css('display','none');

  		$('.faceted-navigation__mobile-facet-container').removeClass('hidden');
  		$componentClass.css('display','none');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').addClass('hidden');
  		mobileEnabled = true;

  		$('.faceted-navigation__mobile-facet-container .b-button').on('click', function(e) {
  			e.preventDefault();
  			$('.faceted-navigation__mobile-facet-container .faceted-navigation').removeClass('hidden').addClass('visible');
  			$('.faceted-navigation__mobile-facet-container .faceted-navigation-header').addClass('hidden');
  			$(this).addClass('hidden');
  		});
  	}
  	else {
  		$('.faceted-navigation__mobile-facet-container').removeClass('hidden');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').addClass('hidden');
  		$componentClass.css('display','none');
  	}
  };

  if ($componentClass.length > 0) {
    init();
  }

}());