//-----------------------------------
// Component M-1: Header
//-----------------------------------
'use strict';

let App = App || window.App || {};

App.TabbedMenuList = (function() {
  const $component = $('.eaton-tabbed-menu-list');
  const $titles = $component.find('.eaton-tabbed-menu-list__title');
  const mediaquery = App.global.constants.MEDIA_QUERIES.DESKTOP;
  const mediaquerylg = App.global.constants.MEDIA_QUERIES.DESKTOP_LG;
  const matchmedia = window.matchMedia(mediaquery);
  const matchmedialg = window.matchMedia(mediaquerylg);
  const $collapses = $component.find('.collapse');
  const $tabsTitles = $component.find('.eaton-tabbed-menu-list__title.desktop');
  const $tabs = $component.find('.tab-pane');
  const $tabContets = $component.find('.tab-content.desktop');

  const init = () => {
    bindEvents();
    matchFunction(matchmedia);
    matchFunctionLg(matchmedialg);
  };

  const bindEvents = () => {
    $titles.on('click', toogleTitles);
    matchmedia.addListener(matchFunction);

  };

  const toogleTitles = (event) => {
    const $this = $(event.target);
    let index = $this.data('index');

    $tabs.removeClass('active');
    $titles.removeClass('active');
    $.each($titles, function(i, element) {
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

  const matchFunction = (matchmediaParam) => {
    $titles.removeClass('active');
    if (matchmediaParam.matches) {// to desktop
      $collapses.collapse('hide');

      if ($tabContets.length > 0) {
        const windowWidth = $(window).outerWidth();
        let diffWidth;
        if (windowWidth >= App.global.constants.GRID.LG) {
          diffWidth = windowWidth - 1140;
        } else {
          console.log('tab');
          diffWidth = windowWidth - 940;
        }

        $tabContets.css({
          'margin-left': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          'margin-right': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          width: 'calc( 100% + ' + (diffWidth + 20) + 'px)'
        });
        console.log('++++' + windowWidth );
      }

    } else {// to mobile
      $tabsTitles.removeClass('active');
      $tabs.removeClass('active');
    }
  };

  const matchFunctionLg = (matchmediaParam) => {
    if (matchmediaParam.matches) {
      if ($tabContets.length > 0) {
        const windowWidth = $(window).outerWidth();
        let diffWidth;
        if (windowWidth >= App.global.constants.GRID.LG) {
          diffWidth = windowWidth - 1140;
        } else {
          console.log('tab');
          diffWidth = windowWidth - 940;
        }

        $tabContets.css({
          'margin-left': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          'margin-right': Math.floor(-1 * diffWidth / 2 - 10) + 'px',
          width: 'calc( 100% + ' + (diffWidth + 20) + 'px)'
        });
        console.log('++++' + windowWidth );
      }

    }
  };

  if ($component.length > 0 ) {
    init();
  }

}());
