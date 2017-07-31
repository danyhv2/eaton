//-----------------------------------
// Eaton: Utility Functions
//-----------------------------------
'use strict';

const App = App || {};
App.global = App.global || {};

App.global.utils = (function() {

  // const isAEMTouchUI = (
  //   getCookie('cq-editor-layer.page') === 'Edit'
  //   && getCookie('cq-authoring-mode') === 'TOUCH'
  // )
  //   ? true
  //   : false;

  const isAEMClassicUI = ( window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() )
    ? true
    : false;


  /**
  * Get Cookie Value
  */
  function getCookie(cookieName) {
    const match = document.cookie.match( new RegExp('(^| )' + cookieName + '=([^;]+)') );

    if (match) {
      return match[2];
    }
  }


  /**
  * AEM's Author mode
  */
  function isAEMAuthorMode() {
    return (isAEMClassicUI) ? true : false;
  }



  /**
  * Helper: Throttle Functions
  */
  function throttle (fn, threshhold, scope) {
    threshhold = threshhold || 250;
    let last;
    let deferTimer;

    return function () {
      let context = scope || this;
      let now = +new Date();
      let args = arguments;

      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      }

      else {
        last = now;
        fn.apply(context, args);
      }
    };
  }



  // Public Methods
  return {
    getCookie,
    isAEMAuthorMode,
    throttle
  };

})();
