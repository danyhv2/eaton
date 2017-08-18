//-----------------------------------
// Component : App.CookieAcceptance
//-----------------------------------
'use strict';

let App = window.App || {};

App.cookieAcceptance = (function() {

  // Variable Declarations
  const componentClass = '.eaton-cookie-acceptance';
  const $componentElement = $(componentClass);

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
    if (window.localStorage.getItem('eatoncookies') == null) {
      $componentElement.show();
    } else {
      $componentElement.hide();
    }
  };



  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    console.log ('inicio de cookies');
    // localStorage.clear('eatoncookies');

    $componentElement.find('.acceptbutton').on('click',function(e) {
      e.preventDefault();
      alert ('Cookies Accepted!');
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
