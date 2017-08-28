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

  // TODO: Move This behavior to its own "Back to Search Module
  localStorage.setItem('backToSearch','false');

  const isAEMClassicUI = ( window.CQ && window.CQ.WCM && window.CQ.WCM.isEditMode() )
    ? true
    : false;


  /*
  * Helper forEach
  * eg: App.global.utils.forEach( document.querySelectorAll('.cards'), (index, element) { ... } )
  * ----
  * NOTE: What you get back from querySelectorAll() isn't an array,
  * it's a (non-live) NodeList, and not all browsers support the method .forEach on NodeList's
  */
  function forEach (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  }


  /**
  * Get Cookie Value
  * @param { String } cookieName
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
   * Extract i18n Strings from the HTML attribute "data-i18n" for the give Element.
   * eg: <div data-i18n="{ "close": "Close Overlay" }">
   * @param { DOMElement }
   * @return { Object }
   */
  const loadI18NStrings = function(element) {
    let i18nData = element[0].dataset.i18n;

    // Save i18n Strings as an Object in a global variable
    return (JSON.parse(i18nData))
      ? JSON.parse(i18nData)
      : {};

  };


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
    forEach,
    getCookie,
    isAEMAuthorMode,
    loadI18NStrings,
    throttle
  };

})();
