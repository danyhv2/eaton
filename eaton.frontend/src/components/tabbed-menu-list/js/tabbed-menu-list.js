//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = App || window.App || {};

App.TabbedMenuList = (function() {
  const $component = $('.eaton-tabbed-menu-list');
  const $titles = $component.find('.eaton-tabbed-menu-list__title');
  const $collapses = $component.find('collapse');
  const $tabs = $component.find('tab-pane');

  const init = () => {
    console.log('tabbed menu list');
    bindEvents();
  };

  const bindEvents = () => {
    $titles.on('click', toogleTitles);
  };

  const toogleTitles = (event) => {
    const $this = $(event.target);
    let index = $this.data('index');

    $titles.removeClass('active');
    $.each($titles, function(i, element) {
    	// console.log($(element).data;
    	if ($(element).data('index') === index) {
    		$(element).addClass('active');
    	}
    });
    $collapses.eq(index).addClass('active');
    $tabs.eq(index).addClass('active');
    $titles.find('span').removeClass('icon-sign-minus');
    $titles.find('span').addClass('icon-sign-plus');
    $(this).find('span').addClass('icon-sign-minus');
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
}());

$(document).ready(App.TabbedMenuList.init);