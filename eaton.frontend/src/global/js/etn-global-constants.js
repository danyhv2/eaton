//-----------------------------------
// Eaton: Constants
//-----------------------------------
'use strict';

const App = App || {};
App.global = App.global || {};

App.global.constants = (function() {

  // Private Methods go here...


  // Public Constants
  return {

    MEDIA_QUERIES: {
      MOBILE: '(max-width: 991px)',
      DESKTOP: '(min-width: 992px)'
    },

    // Breakpoints
    GRID: {
      // XS: 0,    // (0px to 767px)
      SM: 768,  // pixels
      MD: 992,  // pixels
      LG: 1200  // pixels
    }


  };
})();
