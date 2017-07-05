// JS - Eaton Component
'use strict';

var eaton = eaton || {};
eaton.sampleComponent = (function ($) {

  function validateDOM() {
    if( $('.eaton-component').length > 0) {
        init();
    }
  }

  function init() {
    console.log('Initialize Eaton Component - if exists');
  }

  return {
    initialize: validateDOM
  };

})(jQuery);

jQuery(document).ready(eaton.sampleComponent.initialize);
