//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

var App = App || window.App || {};

App.TabbedMenuList = function () {
  var $component = $('.eaton-tabbed-menu-list');
  var $titles = $component.find('.eaton-tabbed-menu-list__title');
  // const $collapses = $component.find('.collapse');
  // const $tabs = $component.find('.tab-pane');

  var init = function init() {
    console.log('tabbed menu list');
    bindEvents();
  };

  var bindEvents = function bindEvents() {
    $titles.on('click', toogleTitles);
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

  return {
    init: init
  };
}();

$(document).ready(App.TabbedMenuList.init);