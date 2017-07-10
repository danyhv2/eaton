//-----------------------------------
// Component M-40: Product Tabs
//-----------------------------------
'use strict';

let App = window.App || {};

App.productTabs = (function(window, $) {

  const $componentClass = $('.eaton-product-tabs');

  const init = () => {
    console.log(`product-tabs - Testing ES6: ${ App }`);
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {
    $componentClass.find('.c-button').on('click', (event) => {
      console.log(event.target);
    });
  };


  /**
   * Example of Public Method
   *
   * @return { Array } Test ES6
   */
  const publicMethodOne = (number) => {
    const testES6 = [1, 2, 3];
    return [...testES6, 'es6', 'aem'];
  };


  /**
   * Custom Date Format
   *
   * @return { String } Formated Date
   */
  const getDate = () => {
    const d = new Date();
    return `${ d.getMonth() }/${ d.getDate() }`;
  };

  init();

  return {
    publicMethodOne,
    getDate
  };


}(window, jQuery));
