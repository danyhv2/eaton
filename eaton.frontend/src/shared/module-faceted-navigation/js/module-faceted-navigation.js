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
  	$(function() {
  		addEventListeners();
    	sortBy();
  	});
  };


  const addEventListeners = () => {

    // Facets Toggle update +/- Icons
    //--------------
    $('.faceted-navigation__header').on('click', function(e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });


    if ($(window).width() < App.global.constants.GRID.MD) {
      mobileFacets();
    }
    else {
    	$componentClass.on('click', '[data-more-facets]', showAllFacetsGroups);
    	$componentClass.on('click', '[data-more-facet-values]', showAllFacetsValues);
    }

    // Facet Behaviors for Mobile & Tablet
    //--------------
    $(window).on('resize', function() {
      if ($(window).width() < App.global.constants.GRID.MD && $('.faceted-navigation__mobile-facet-container').css('display') !== 'block') {
        $('.faceted-navigation__mobile-facet-container .faceted-navigation-header, .faceted-navigation__mobile-facet-container').removeClass('hidden');
        $('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button').removeClass('hidden');

        App.global.utils.throttle(mobileFacets(),1000);
      }

      // Facet Behaviors for Desktop & Desktop Large
      //--------------
      else if ($(window).width() > App.global.constants.GRID.MD) {
        $componentClass.css('display','block');
        mobileEnabled = false;
        $('.faceted-navigation__mobile-facet-container .faceted-navigation').remove();
        $('.faceted-navigation__mobile-facet-container, .faceted-navigation__mobile-facet-container a.b-button, .overlay-mask').remove();
        $componentClass.on('click', '[data-more-facets]', showAllFacetsGroups);
    	$componentClass.on('click', '[data-more-facet-values]', showAllFacetsValues);
      }
    });
    // View More Facets Behavior
    //--------------
    // Delegate Events on the Parent Component sinces some elements are being cloned with jQuery
    $('.faceted-navigation__mobile-facet-container .view-more-facets').on('click', '[data-more-facets]', showAllFacetsGroups);
    $('.faceted-navigation__mobile-facet-container').on('click', '[data-more-facet-values]', showAllFacetsValues);
  };

  const sortBy = () => {
  	let $ddul = $('.styledDropdown dd ul');
  	const $source = $('.faceted-navigation-header__sort-options select');

  	createDropDown();

    $('.faceted-navigation-header__sort-options .styledDropdown dt a').click(function(e) {
    	e.preventDefault();
    	$('.styledDropdown dd ul').toggle();
    });

    $(document).bind('click', function(e) {
      let $clicked = $(e.target);
      if (!$clicked.parents().hasClass('styledDropdown'))
        {$('.styledDropdown dd ul').hide();}
    });

    $('.styledDropdown dd ul li a').click(function() {
      let text = $(this).html();
      $('.styledDropdown dt a').html(text);
      $('.styledDropdown dd ul').hide();

        // var source = $("#source");
      $source.val($(this).find('span.value').html());
    });
  };

  function createDropDown() {
  	const $condition = $('.faceted-navigation__mobile-facet-container').length > 0;
    const $source = ($condition) ? $('.faceted-navigation__mobile-facet-container .faceted-navigation-header__sort-options select') : $('.faceted-navigation-header__sort-options select');
    let selected = $source.find('option[selected]');
    let options = $('option', $source);

    if (!$condition) {
    	$('.faceted-navigation-header__sort-options').append('<dl id="target" class="styledDropdown"></dl>');
    }
    else {
    	$('.faceted-navigation__mobile-facet-container .faceted-navigation-header__sort-options').append('<dl id="target" class="styledDropdown"></dl>');
    }
    $('#target').append('<dt><a href="#">' + selected.text() +
        '<span class="value">' + selected.val() +
        '</span><span class="glyphicon glyphicon-chevron-down"></a></dt>');
    $('#target').append('<dd><ul></ul></dd>');

    options.each(function(i) {
    	if (i != 0) {
	    	$('#target dd ul').append('<li><a href="' + $(this).val() + '" target="_self">' +
	    	$(this).text() + '<span class="value">' +
	    	$(this).val() + '</span></a></li>');
	    }
    });
  }

  const mobileFacets = () => {

    if (mobileEnabled === false) {
      let temp = $componentClass.parent().parent();
      let winHeight = $(document).innerHeight();
      $("<div class='faceted-navigation__mobile-facet-container hidden col-xs-12 col-md-3'></div>").prependTo(temp);

      $componentClass.clone(true, true).appendTo('.faceted-navigation__mobile-facet-container').addClass('visible');
      $('.faceted-navigation-header').clone(true, true).prependTo('.faceted-navigation__mobile-facet-container');

      $('.faceted-navigation__mobile-facet-container .faceted-navigation').prepend($('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom'));

      $mobileHeader.removeClass('hidden-xs').removeClass('hidden-sm');

      $('.faceted-navigation__mobile-facet-container .faceted-navigation-header__header-bottom').removeClass('hidden-xs').removeClass('hidden-sm');

      $("<a target='_self' class='b-button b-button__primary b-button__primary--light hidden-lg' role='button'>Filters (X)</a>").appendTo($('.faceted-navigation__mobile-facet-container'));
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
        $('.faceted-navigation__mobile-facet-container .faceted-navigation-header').addClass('hidden');
        $('.mobile-header').removeClass('hidden');
        $(this).addClass('hidden');
        $('.overlay-mask').css('height',winHeight).toggleClass('hidden');
        $('.search-results').css({position: 'inherit','z-index': '1'});
      });

      $('.glyphicon-remove').on('click', function(e) {
        $('.faceted-navigation__mobile-facet-container').removeClass('enabled');
        $('.faceted-navigation__mobile-facet-container .faceted-navigation').removeClass('visible').addClass('hidden');
        $('.faceted-navigation-header').removeClass('hidden');
        $('.faceted-navigation__mobile-facet-container .b-button').removeClass('hidden');
        $('.overlay-mask').css('height',winHeight).toggleClass('hidden');
        $('.search-results').css('position','relative');
      });

      $('.faceted-navigation__mobile-facet-container .faceted-navigation__header').on('click', function(e) {
        e.preventDefault;
        $(this).children('.icon-sign-plus').toggleClass('u-hide');
      });
      $('.faceted-navigation__view-more-values').on('click', '[data-more-facet-values]', function() {alert('alert');});
    }
    else {
      $('.faceted-navigation__mobile-facet-container').removeClass('hidden');
      $('.faceted-navigation__mobile-facet-container .faceted-navigation').remove();
      $('.search-results').css('position','relative');
      $componentClass.css('display','none');
    }
  };



  /**
   * Show the remaining facets-groups thare were hidden on page load
   * @param  { Object } event - the click event object
   */
  const showAllFacetsGroups = (event) => {

    // Show hidden facets
    $componentClass.find('.faceted-navigation__more-facets').slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');
  };



  /**
   * Show the remaining facets-values / options hidden in Each Group (eg: Checkboxes, radios)
   * @param  { Object } event - the click event object
   */
  const showAllFacetsValues = (event) => {

    const $parentGroup = $(event.currentTarget).closest('.faceted-navigation__group');

    // Show hidden facet-values
    $parentGroup.find('.faceted-navigation__more-facet-values').slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');

  };




  if ($componentClass.length > 0) {
    init();
  }

}());
