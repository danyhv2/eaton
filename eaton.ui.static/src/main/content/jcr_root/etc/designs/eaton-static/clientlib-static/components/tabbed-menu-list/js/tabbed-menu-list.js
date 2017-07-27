//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

var App = App || window.App || {};

App.TabbedMenuList = function () {
  var _this = this;

  var $component = $('.eaton-tabbed-menu-list');
  var $titles = $component.find('.eaton-tabbed-menu-list__title');
  var $collapses = $component.find('collapse');
  var $tabs = $component.find('tab-pane');

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
      // console.log($(element).data;
      if ($(element).data('index') === index) {
        $(element).addClass('active');
      }
    });
    $collapses.eq(index).addClass('active');
    $tabs.eq(index).addClass('active');
    $titles.find('span').removeClass('icon-sign-minus');
    $titles.find('span').addClass('icon-sign-plus');
    $(_this).find('span').addClass('icon-sign-minus');
    // if ($this.hasClass('mobile')) {
    // 	$tabs.tab('hide');
    // 	$('#tab' + index).tab('show');
    // 	$('#tab' + index).hide();
    // } else {
    // 	$collapses.collapse('hide');
    // 	$('#collapse' + index).collapse('show');
    // 	$('#collapse' + index).hide();
    // }
  };

  return {
    init: init
  };
}();

$(document).ready(App.TabbedMenuList.init);