//-----------------------------------
// Component : App.CookieAcceptance
//-----------------------------------
'use strict';

let App = window.App || {};

App.cookieAcceptance = (function() {

  // Variable Declarations
  const componentClass = '.cookie-acceptancebox';
  const $componentElement = $(componentClass);
  const $componentToPadding = $('body');

  // Check AEM Author Mode
  const isAEMAuthorMode = App.global.utils.isAEMAuthorMode();

  /**
  * Init
  */
  const init = () => {
    // If not in AEM Author Mode & component exists on page - initialize scripts
    if (!isAEMAuthorMode) {
      // console.log('Initialize Search');
      addEventListeners();
    }
  };


  const readStatus = () => {
    // console.log ('check cookies......');
    if (window.localStorage.getItem('eatoncookies') === null) {
      $componentElement.prependTo('header');
      $componentElement.show();
    } else {
      $componentElement.hide();
    }
  };



  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

  // localStorage.clear('eatoncookies');


    readStatus();

    $componentElement.find('.cookie-acceptance__cta').on('click',function(e) {
      e.preventDefault();
      // alert ('Cookies Accepted!');
      window.localStorage.setItem('eatoncookies', 'yes');
      $componentElement.hide();
    });


  };


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentElement.length > 0) {
    init();
  }

}());
