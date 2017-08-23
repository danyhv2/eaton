'use strict';

let App = window.App || {};

App.accordion = function () {

  const $accordion = $('.panel-group');
  const $component = $('.secondary-content-accordion');

  const init = () => {
    $accordion.on('hidden.bs.collapse', toggleIcon);
    $accordion.on('shown.bs.collapse', toggleIcon);
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
     * Initialize and Expose public methods
     */

  if ($component.length > 0 ) {
    init();
  }


}();
