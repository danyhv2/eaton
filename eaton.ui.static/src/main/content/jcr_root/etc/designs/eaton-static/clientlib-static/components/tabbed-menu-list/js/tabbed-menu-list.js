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
// Component M-1: Header
//-----------------------------------
'use strict';

var App = App || window.App || {};

App.TabbedMenuList = function () {
  var $component = $('.eaton-tabbed-menu-list');
  var $titles = $component.find('.eaton-tabbed-menu-list__title');
  var mediaquery = App.global.constants.MEDIA_QUERIES.DESKTOP;
  var mediaquerylg = App.global.constants.MEDIA_QUERIES.DESKTOP_LG;
  var matchmedia = window.matchMedia(mediaquery);
  var matchmedialg = window.matchMedia(mediaquerylg);
  var $collapses = $component.find('.collapse');
  var $tabsTitles = $component.find('.eaton-tabbed-menu-list__title.desktop');
  var $tabs = $component.find('.tab-pane');
  var $tabContets = $component.find('.tab-content.desktop');

  var init = function init() {
    bindEvents();
    matchFunction(matchmedia);
    matchFunctionLg(matchmedialg);
  };

  var bindEvents = function bindEvents() {
    $titles.on('click', toogleTitles);
    matchmedia.addListener(matchFunction);
  };

  var toogleTitles = function toogleTitles(event) {
    var $this = $(event.target);
    var index = $this.data('index');

    $tabs.removeClass('active');
    $titles.removeClass('active');
    $.each($titles, function (i, element) {
      if ($(element).hasClass('desktop')) {

        $(element).attr('aria-selected', 'false');
      }

      if ($(element).data('index') === index) {

        if ($(element).hasClass('active')) {

          $(element).removeClass('active');
        } else {

          $(element).addClass('active');
          if ($(element).hasClass('desktop')) {

            $(element).attr('aria-selected', 'true');
          }
        }
      }
    });
  };

  var matchFunction = function matchFunction(matchmediaParam) {
    $titles.removeClass('active');
    if (matchmediaParam.matches) {
      // to desktop
      $collapses.collapse('hide');

      if ($tabContets.length > 0) {
        var windowWidth = $(window).outerWidth();
        var diffWidth = void 0;
        if (windowWidth >= App.global.constants.GRID.LG) {
          diffWidth = windowWidth - 1140;
        } else {
          diffWidth = windowWidth - 940;
        }

        $tabContets.css({
          'margin-left': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          'margin-right': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          width: 'calc( 100% + ' + (diffWidth + 20) + 'px)'
        });
      }
    } else {
      // to mobile
      $tabsTitles.removeClass('active');
      $tabs.removeClass('active');
    }
  };

  var matchFunctionLg = function matchFunctionLg(matchmediaParam) {
    if (matchmediaParam.matches) {
      if ($tabContets.length > 0) {
        var windowWidth = $(window).outerWidth();
        var diffWidth = void 0;
        if (windowWidth >= App.global.constants.GRID.LG) {
          diffWidth = windowWidth - 1140;
        } else {
          diffWidth = windowWidth - 940;
        }

        $tabContets.css({
          'margin-left': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          'margin-right': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          width: 'calc( 100% + ' + (diffWidth + 20) + 'px)'
        });
      }
    }
  };

  if ($component.length > 0) {
    init();
  }
}();