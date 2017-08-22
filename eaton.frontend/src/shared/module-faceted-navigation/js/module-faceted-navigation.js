//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};

App.facets = (function() {
  let $mobileFacets = $('.faceted-navigation__mobile-container');
  let mobileEnabled = false;
  const $componentClass = $('.faceted-navigation');
  const $mobileHeader = $mobileFacets.find('.faceted-navigation-header');
  const $sortOptions = $('.faceted-navigation-header__sort-options');
  const $sortOptionsMobile = $mobileFacets.find('.faceted-navigation-header__sort-options');
  const isMobile = $(window).width() < App.global.constants.GRID.MD;


  const init = () => {
    $(function() {
      addEventListeners();
      sortBy();

      localStorage.setItem('backToSearch','true');
    });
  };


  const addEventListeners = () => {

    // Facets Toggle update +/- Icons
    //--------------
    $('.faceted-navigation__header').on('click', function(e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });


    if (isMobile) {
      mobileFacets();
    }
    else {
      $componentClass.on('click', '[data-facets-more-groups]', showAllFacetsGroups);
      $componentClass.on('click', '[data-facets-more-values]', showAllFacetsValues);
    }

    // Facet Behaviors for Mobile & Tablet
    //--------------
    $(window).on('resize', function() {
      const facetsIsHidden = $mobileFacets.css('display') !== 'block';
      if (isMobile && facetsIsHidden) {
        $mobileFacets.removeClass('hidden');
        $mobileHeader.removeClass('hidden');
        $mobileFacets.find('a.b-button').removeClass('hidden');

        App.global.utils.throttle(mobileFacets(),1000);
      }

      // Facet Behaviors for Desktop & Desktop Large
      //--------------
      else if ($(window).width() > App.global.constants.GRID.MD) {
        $componentClass.css('display','block');
        mobileEnabled = false;
        $mobileFacets.remove();
        // $mobileFacets.find('.faceted-navigation').remove();
        // $mobileFacets.find('a.b-button').remove();
        $mobileFacets.find('a.b-button, .overlay-mask').remove();
        $componentClass.on('click', '[data-facets-more-groups]', showAllFacetsGroups);
        $componentClass.on('click', '[data-facets-more-values]', showAllFacetsValues);
      }
    });
  };

  const sortBy = () => {
    // let $ddul = $('.styled-dropdown dd ul');
    const $source = $sortOptions.find('select');

    createDropDown();

    $sortOptions.find('.styled-dropdown dt a').click(function(e) {
      e.preventDefault();
      $('.styled-dropdown dd ul').toggle();
    });

    // TODO: move to CSS
    $sortOptions.find('dt a, dd a').on('focus', function() {
      $(this).css('text-decoration','underline');
    }).on('blur',function() {
      $(this).css('text-decoration','none');
    });

    $(document).bind('click', function(e) {
      let $clicked = $(e.target);
      if (!$clicked.parents().hasClass('styled-dropdown'))
      {$('.styled-dropdown dd ul').hide();}
    });

    $('.styled-dropdown dd ul li a').click(function() {
      let text = $(this).html();
      $('.styled-dropdown dt a').html(text);
      $('.styled-dropdown dd ul').hide();

      // var source = $("#source");
      $source.val($(this).find('span.value').html());
    });
  };

  function createDropDown() {
    // TODO: refactor
    const hasMobileFacets = $mobileFacets.length > 0;
    // TODO: unify the mobile and desktop DOM
    const $source = (hasMobileFacets) ? $sortOptionsMobile.find('select') : $sortOptions.find('select');
    let selected = $source.find('option[selected]');
    let options = $('option', $source);

    // TODO: unify mobile and desktop DOM
    if (hasMobileFacets) {
      $sortOptionsMobile.append('<dl id="target" class="styled-dropdown"></dl>');
    } else {
      $sortOptions.append('<dl id="target" class="styled-dropdown"></dl>');
    }

    // TODO: refactor
    // TODO: refactor - what the heck #target is ?
    $('#target').append('<dt><a href="#">' + selected.text() +
      '<span class="value">' + selected.val() +
      '</span><span class="icon icon-chevron-down"></a></dt>');
    $('#target').append('<dd><ul></ul></dd>');

    // TODO: refactor
    options.each(function(i) {
      if (i !== 0) {
        $('#target dd ul').append('<li><a href="' + $(this).val() + '" target="_self">' +
        $(this).text() + '<span class="value">' +
        $(this).val() + '</span></a></li>');
      }
    });
  }

  const mobileFacets = () => {

    // TODO: Move mobile condition to CSS
    if (mobileEnabled === false) {
      let temp = $componentClass.parent().parent();
      // let winHeight = $(document).innerHeight();
      $("<div class='faceted-navigation__mobile-container u-visible-mobile hidden col-xs-12 col-md-3'></div>").prependTo(temp);

      $componentClass.clone(true, true).appendTo($mobileFacets).addClass('visible');
      $mobileHeader.addClass('u-visible-desktop').clone(true, true).prependTo($mobileFacets);

      $mobileHeader.addClass('u-visible-mobile').removeClass('u-visible-desktop');
      $mobileFacets.find('.faceted-navigation').prepend($mobileFacets.find('.faceted-navigation-header__header-bottom'));

      $mobileHeader.removeClass('hidden-xs').removeClass('hidden-sm');

      $mobileFacets.find('.faceted-navigation-header__header-bottom').removeClass('hidden-xs').removeClass('hidden-sm');

      // TODO: refactor
      $("<a target='_self' class='open-facets-mobile b-button b-button__primary b-button__primary--light hidden-lg' role='button'>Filters (X)</a>").appendTo($mobileFacets);
      $mobileFacets.append("<a href='#' target='_self' class='open-facets-mobile b-button b-button__primary b-button__primary--light' role='button'>Filters (X)</a>");


      $mobileFacets.removeClass('hidden');

      $componentClass.css('display','none');

      $mobileFacets.find('.faceted-navigation').addClass('hidden');
      mobileEnabled = true;

      $mobileFacets.find('.open-facets-mobile').on('click', function(e) {
        e.preventDefault();
        $('body').addClass('facets-open');

        // $("<div class='overlay-mask hidden'></div>").appendTo($('body'));
        $mobileFacets.addClass('enabled');
        $mobileFacets.find('.faceted-navigation').removeClass('hidden').addClass('visible');
        $mobileHeader.addClass('hidden');
        $('.mobile-header').removeClass('hidden');
        $(this).addClass('hidden');
        // $('.overlay-mask').css('height',winHeight).toggleClass('hidden');
        $('.search-results').css({position: 'inherit','z-index': '1'});
      });

      $('.close-facets-mobile, [data-facets-apply]').on('click', function(e) {
        e.preventDefault();
        $mobileFacets.removeClass('enabled');
        $mobileFacets.find('.faceted-navigation').removeClass('visible').addClass('hidden');
        $mobileHeader.removeClass('hidden');
        $mobileFacets.find('.b-button').removeClass('hidden');
        // $('.overlay-mask').css('height',winHeight).toggleClass('hidden');
        $('.search-results').css('position','relative');

        $('body').removeClass('facets-open');
      });

      $mobileFacets.find('.faceted-navigation__header').on('click', function(e) {
        e.preventDefault();
        $(this).find('.icon-sign-minus').toggle();
      });

      // View More Facets Behavior
      //--------------
      $mobileFacets.find('[data-facets-more-groups]').on('click', function(event) {
        event.preventDefault();
        $mobileFacets.find('.faceted-navigation__more-facets').slideDown(200);

        // Hide "View more" <button>
        event.currentTarget.classList.add('u-hide');
      });
      $mobileFacets.on('click', '[data-facets-more-values]', showAllFacetsValues);
    } else {
      $mobileFacets.removeClass('hidden');
      $mobileFacets.find('.faceted-navigation').remove();
      $('.search-results').css('position','relative');
      $componentClass.css('display','none');
    }
  };






  /**
  * Show the remaining facets-items/groups that were hidden on page load
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

    const $parentItem = $(event.currentTarget).closest('.faceted-navigation__facet-group');

    // Show hidden facet-values
    $parentItem.find('.faceted-navigation__list-item.u-hide').slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');

  };



  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
