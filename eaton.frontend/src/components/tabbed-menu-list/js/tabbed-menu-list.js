//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = App || window.App || {};

App.TabbedMenuList = (function() {
  const $component = $('.eaton-tabbed-menu-list');
  const $titles = $component.find('.eaton-tabbed-menu-list__title');
  // const $collapses = $component.find('.collapse');
  // const $tabs = $component.find('.tab-pane');

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
}());

$(document).ready(App.TabbedMenuList.init);