//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = App || window.App || {};

App.TabbedMenuList = (function() {
  const $component = $('.eaton-tabbed-menu-list');
  const $titles = $component.find('.eaton-tabbed-menu-list__title');
  const mediaquery = '(min-width: 992px)';
  const matchmedia = window.matchMedia(mediaquery);
  const $collapses = $component.find('.collapse');
  const $tabsTitles = $component.find('.eaton-tabbed-menu-list__title.desktop');
  const $tabs = $component.find('.tab-pane');

  const init = () => {
    bindEvents();
    matchFunction(matchmedia);
  };

  const bindEvents = () => {
    $titles.on('click', toogleTitles);
    matchmedia.addListener(matchFunction);

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

  const matchFunction = (matchmediaParam) => {
    $titles.removeClass('active');
    if (matchmediaParam.matches) {// to desktop
      $collapses.collapse('hide');

    } else {// to mobile
      $tabsTitles.removeClass('active');
      $tabs.removeClass('active');
    }
  };

  return {
    init: init,
    tabs: $tabs
  };
}());

$(document).ready(App.TabbedMenuList.init);