//-----------------------------------
// Resources List
//-----------------------------------
'use strict';

let App = window.App || {};
App.resourceList = function () {

  const $accordion = $('.panel-group');
  const $component = $('.secondary-content-accordion');
  const $link = $('[data-scroll-to]');

  const init = () => {
    $accordion.on('hidden.bs.collapse', toggleIcon);
    $accordion.on('shown.bs.collapse', toggleIcon);

    $link.on('click', expand);
  };

    /**
     * Toggle class icon
     */
  const toggleIcon = (event) => {

    $(event.target)
        .prev('.panel-heading')
        .find('.icon')
        .toggleClass('icon-sign-plus icon-sign-minus');

  };

    /**
     * Expand accordion when link is clicked
     */
  const expand = (event) => {

    let idHeading = $(event.target).closest('.module-anchor-links__list-link').attr('data-scroll-to');
    $accordion.find($(idHeading )).next().collapse('show');

  };

    /**
     * Initialize and Expose public methods
     */

  if ($component.length > 0 ) {
    init();
  }


}();
