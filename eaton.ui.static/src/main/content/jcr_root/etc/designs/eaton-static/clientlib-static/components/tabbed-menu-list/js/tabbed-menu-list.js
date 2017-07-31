//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

var App = App || window.App || {};

App.TabbedMenuList = function () {
  var $component = $('.eaton-tabbed-menu-list');
  var $titles = $component.find('.eaton-tabbed-menu-list__title');
  var mediaquery = '(min-width: 992px)';
  var matchmedia = window.matchMedia(mediaquery);
  var $collapses = $component.find('.collapse');
  var $tabsTitles = $component.find('.eaton-tabbed-menu-list__title.desktop');
  var $tabs = $component.find('.tab-pane');

  var init = function init() {
    bindEvents();
    matchFunction(matchmedia);
  };

  var bindEvents = function bindEvents() {
    $titles.on('click', toogleTitles);
    matchmedia.addListener(matchFunction);
  };

  var toogleTitles = function toogleTitles(event) {
    var $this = $(event.target);
    var index = $this.data('index');

    $titles.removeClass('active');
    $.each($titles, function (i, element) {
      if ($(element).data('index') === index) {

        if ($(element).hasClass('active')) {
          $(element).removeClass('active');
        } else {
          $(element).addClass('active');
        }
      }
    });
  };

  var matchFunction = function matchFunction(matchmediaParam) {
    $titles.removeClass('active');
    if (matchmediaParam.matches) {
      // to desktop
      $collapses.collapse('hide');
    } else {
      // to mobile
      $tabsTitles.removeClass('active');
      $tabs.removeClass('active');
    }
  };

  return {
    init: init,
    tabs: $tabs
  };
}();

$(document).ready(App.TabbedMenuList.init);