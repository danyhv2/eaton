/**
 *
 *
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY - 
 *
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 *
 */


//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

var App = window.App || {};

App.facets = function () {
  var $componentClass = $('.faceted-navigation');
  var $mobileHeader = $('.faceted-navigation__mobile-container .faceted-navigation-header');
  var $mobileFacets = $('.faceted-navigation__mobile-container');
  var mobileEnabled = false;

  var init = function init() {
    $(function () {
      addEventListeners();
      sortBy();

      localStorage.setItem('backToSearch', 'true');
    });
  };

  var addEventListeners = function addEventListeners() {

    // Facets Toggle update +/- Icons
    //--------------
    $('.faceted-navigation__header').on('click', function (e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });

    if ($(window).width() < App.global.constants.GRID.MD) {
      mobileFacets();
    } else {
      $componentClass.on('click', '[data-more-facets]', showAllFacetsGroups);
      $componentClass.on('click', '[data-more-facet-values]', showAllFacetsValues);
    }

    // Facet Behaviors for Mobile & Tablet
    //--------------
    $(window).on('resize', function () {
      if ($(window).width() < App.global.constants.GRID.MD && $('.faceted-navigation__mobile-container').css('display') !== 'block') {
        $('.faceted-navigation__mobile-container .faceted-navigation-header, .faceted-navigation__mobile-container').removeClass('hidden');
        $('.faceted-navigation__mobile-container, .faceted-navigation__mobile-container a.b-button').removeClass('hidden');

        App.global.utils.throttle(mobileFacets(), 1000);
      }

      // Facet Behaviors for Desktop & Desktop Large
      //--------------
      else if ($(window).width() > App.global.constants.GRID.MD) {
          $componentClass.css('display', 'block');
          mobileEnabled = false;
          $('.faceted-navigation__mobile-container .faceted-navigation').remove();
          $('.faceted-navigation__mobile-container, .faceted-navigation__mobile-container a.b-button, .overlay-mask').remove();
          $componentClass.on('click', '[data-more-facets]', showAllFacetsGroups);
          $componentClass.on('click', '[data-more-facet-values]', showAllFacetsValues);
        }
    });
  };

  var sortBy = function sortBy() {
    // let $ddul = $('.styled-dropdown dd ul');
    var $source = $('.faceted-navigation-header__sort-options select');
    // const $links = $('.faceted-navigation-header__sort-options .styled-dropdown dt a');

    createDropDown();

    $('.faceted-navigation-header__sort-options .styled-dropdown dt a').click(function (e) {
      e.preventDefault();
      $('.styled-dropdown dd ul').toggle();
    });

    $('.faceted-navigation-header__sort-options .styled-dropdown dt a,.faceted-navigation-header__sort-options .styled-dropdown dd a').on('focus', function () {
      $(this).css('text-decoration', 'underline');
    }).on('blur', function () {
      $(this).css('text-decoration', 'none');
    });

    $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass('styled-dropdown')) {
        $('.styled-dropdown dd ul').hide();
      }
    });

    $('.styled-dropdown dd ul li a').click(function () {
      var text = $(this).html();
      $('.styled-dropdown dt a').html(text);
      $('.styled-dropdown dd ul').hide();

      // var source = $("#source");
      $source.val($(this).find('span.value').html());
    });
  };

  function createDropDown() {
    var $condition = $('.faceted-navigation__mobile-container').length > 0;
    var $source = $condition ? $('.faceted-navigation__mobile-container .faceted-navigation-header__sort-options select') : $('.faceted-navigation-header__sort-options select');
    var selected = $source.find('option[selected]');
    var options = $('option', $source);

    if (!$condition) {
      $('.faceted-navigation-header__sort-options').append('<dl id="target" class="styled-dropdown"></dl>');
    } else {
      $('.faceted-navigation__mobile-container .faceted-navigation-header__sort-options').append('<dl id="target" class="styled-dropdown"></dl>');
    }
    $('#target').append('<dt><a href="#">' + selected.text() + '<span class="value">' + selected.val() + '</span><span class="icon icon-chevron-down"></a></dt>');
    $('#target').append('<dd><ul></ul></dd>');

    options.each(function (i) {
      if (i !== 0) {
        $('#target dd ul').append('<li><a href="' + $(this).val() + '" target="_self">' + $(this).text() + '<span class="value">' + $(this).val() + '</span></a></li>');
      }
    });
  }

  var mobileFacets = function mobileFacets() {

    if (mobileEnabled === false) {
      var temp = $componentClass.parent().parent();
      var winHeight = $(document).innerHeight();
      $("<div class='faceted-navigation__mobile-container hidden col-xs-12 col-md-3'></div>").prependTo(temp);

      $componentClass.clone(true, true).appendTo('.faceted-navigation__mobile-container').addClass('visible');
      $('.faceted-navigation-header').clone(true, true).prependTo('.faceted-navigation__mobile-container');

      $('.faceted-navigation__mobile-container .faceted-navigation').prepend($('.faceted-navigation__mobile-container .faceted-navigation-header__header-bottom'));

      $mobileHeader.removeClass('hidden-xs').removeClass('hidden-sm');

      $('.faceted-navigation__mobile-container .faceted-navigation-header__header-bottom').removeClass('hidden-xs').removeClass('hidden-sm');

      $("<a target='_self' class='b-button b-button__primary b-button__primary--light hidden-lg' role='button'>Filters (X)</a>").appendTo($('.faceted-navigation__mobile-container'));
      $($mobileFacets).append("<a href='#' target='_self' class='b-button b-button__primary b-button__primary--light' role='button'>Filters (X)</a>");

      $('.faceted-navigation__mobile-container').removeClass('hidden');

      $componentClass.css('display', 'none');
      $('.faceted-navigation__mobile-container .faceted-navigation').addClass('hidden');
      $('.faceted-navigation__mobile-container .faceted-navigation').addClass('hidden');
      mobileEnabled = true;

      $('.faceted-navigation__mobile-container .b-button').on('click', function (e) {
        e.preventDefault();
        $("<div class='overlay-mask hidden'></div>").appendTo($('body'));
        $('.faceted-navigation__mobile-container').addClass('enabled');
        $('.faceted-navigation__mobile-container .faceted-navigation').removeClass('hidden').addClass('visible');
        $('.faceted-navigation__mobile-container .faceted-navigation-header').addClass('hidden');
        $('.mobile-header').removeClass('hidden');
        $(this).addClass('hidden');
        $('.overlay-mask').css('height', winHeight).toggleClass('hidden');
        $('.search-results').css({ position: 'inherit', 'z-index': '1' });
      });

      $('.glyphicon-remove').on('click', function (e) {
        $('.faceted-navigation__mobile-container').removeClass('enabled');
        $('.faceted-navigation__mobile-container .faceted-navigation').removeClass('visible').addClass('hidden');
        $('.faceted-navigation-header').removeClass('hidden');
        $('.faceted-navigation__mobile-container .b-button').removeClass('hidden');
        $('.overlay-mask').css('height', winHeight).toggleClass('hidden');
        $('.search-results').css('position', 'relative');
      });

      $('.faceted-navigation__mobile-container .faceted-navigation__header').on('click', function (e) {
        e.preventDefault;
        $(this).children('.icon-sign-plus').toggleClass('u-hide');
      });

      // View More Facets Behavior
      //--------------
      $('.faceted-navigation__mobile-container .view-more-facets').on('click', function (event) {
        event.preventDefault();
        $('.faceted-navigation__mobile-container .faceted-navigation__more-facets').slideDown(200);

        // Hide "View more" <button>
        event.currentTarget.classList.add('u-hide');
      });
      $('.faceted-navigation__mobile-container').on('click', '[data-more-facet-values]', showAllFacetsValues);
      // $('.faceted-navigation__mobile-container .view-more-facets').on('click', '[data-more-facets]', function() {alert('alert');});
    } else {
      $('.faceted-navigation__mobile-container').removeClass('hidden');
      $('.faceted-navigation__mobile-container .faceted-navigation').remove();
      $('.search-results').css('position', 'relative');
      $componentClass.css('display', 'none');
    }
  };

  /**
  * Show the remaining facets-groups thare were hidden on page load
  * @param  { Object } event - the click event object
  */
  var showAllFacetsGroups = function showAllFacetsGroups(event) {

    // Show hidden facets
    $componentClass.find('.faceted-navigation__more-facets').slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');
  };

  /**
  * Show the remaining facets-values / options hidden in Each Group (eg: Checkboxes, radios)
  * @param  { Object } event - the click event object
  */
  var showAllFacetsValues = function showAllFacetsValues(event) {

    var $parentGroup = $(event.currentTarget).closest('.faceted-navigation__group');

    // Show hidden facet-values
    $parentGroup.find('.faceted-navigation__more-facet-values').slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');
  };

  if ($componentClass.length > 0) {
    init();
  }
}();