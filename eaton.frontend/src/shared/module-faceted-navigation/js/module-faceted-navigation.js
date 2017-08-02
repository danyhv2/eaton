//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};

App.facets = (function() {
  const $componentClass = $('.faceted-navigation');
  const $mobileHeader = $('.faceted-navigation__mobile-facet-container .faceted-navigation-header');
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
    		//$('.faceted-navigation__mobile-facet-container .faceted-navigation-header').removeClass('hidden');
    		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header, .faceted-navigation__mobile-facet-container').removeClass('hidden');
    		$('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button').removeClass('hidden');

    		App.global.utils.throttle(mobileFacets(),1000);
    	}
    	else if ($(window).width() > App.global.constants.GRID.MD) {
    		$componentClass.css('display','block');
    		mobileEnabled = false;
    		$('.faceted-navigation__mobile-facet-container .faceted-navigation').remove();
    		$('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button, .overlay-mask').remove();

    	}
    });
  };

  const mobileFacets = () => {
  	// $mobileFacets.append($componentClass).css('display','block');
  	if (mobileEnabled == false) {
  		let $overlay = $('<div>', {id: 'mobile-overlay'});
  		let temp = $componentClass.parent().parent();
  		let winHeight = $(document).innerHeight();

  		$("<div class='faceted-navigation__mobile-facet-container hidden col-xs-12 col-md-3'></div>").prependTo(temp);

  		$componentClass.clone().appendTo('.faceted-navigation__mobile-facet-container').addClass('visible');
  		$('.faceted-navigation-header').clone().prependTo('.faceted-navigation__mobile-facet-container');

  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').prepend($('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom'));

  		$mobileHeader.removeClass('hidden-xs').removeClass('hidden-sm');

  		$('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom').removeClass('hidden-xs').removeClass('hidden-sm');

  		$("<a href='#' target='_self' class='b-button b-button__primary b-button__primary--light hidden-lg' role='button'>Filters (X)</a>").appendTo($('.faceted-navigation__mobile-facet-container'));
  		$($mobileFacets).append("<a href='#' target='_self' class='b-button b-button__primary b-button__primary--light' role='button'>Filters (X)</a>");


  		$('.faceted-navigation__mobile-facet-container').removeClass('hidden');


  		$componentClass.css('display','none');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').addClass('hidden');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').addClass('hidden');
  		mobileEnabled = true;

  		$('.faceted-navigation__mobile-facet-container .b-button').on('click', function(e) {
  			e.preventDefault();
  			$("<div class='overlay-mask hidden'></div>").appendTo($('body'));
  			$('.faceted-navigation__mobile-facet-container').addClass('enabled');
  			$('.faceted-navigation__mobile-facet-container .faceted-navigation').removeClass('hidden').addClass('visible');
  			$mobileHeader.addClass('hidden');
  			$('.mobile-header').removeClass('hidden');
  			$(this).addClass('hidden');
  			$('.overlay-mask').css('height',winHeight).toggleClass('hidden');
  		});

  		$('.glyphicon-remove').on('click', function(e) {
  			$('.faceted-navigation__mobile-facet-container').removeClass('enabled');
  			$('.faceted-navigation__mobile-facet-container .faceted-navigation').removeClass('visible').addClass('hidden');
  			$('.faceted-navigation-header').removeClass('hidden');
  			$('.faceted-navigation__mobile-facet-container .b-button').removeClass('hidden');
  			$('.overlay-mask').css('height',winHeight).toggleClass('hidden');
  		});

  		$('.faceted-navigation__mobile-facet-container .faceted-navigation__header.button--reset').on('click', function(e) {
	      e.preventDefault;
	      $(this).children('.icon-sign-plus').toggleClass('u-hide');
	    });
  	}
  	else {
  		$('.faceted-navigation__mobile-facet-container').removeClass('hidden');
  		// $('.faceted-navigation__mobile-facet-container .faceted-navigation').addClass('hidden');
  		$('.faceted-navigation__mobile-facet-container .faceted-navigation').remove();
  		$componentClass.css('display','none');
  	}
  };

  if ($componentClass.length > 0) {
    init();
  }

}());