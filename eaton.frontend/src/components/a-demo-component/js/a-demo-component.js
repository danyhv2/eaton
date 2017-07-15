//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.demoComponent = (function() {

  const $componentClass = $('.a-demo-component');
  console.log('a-demo-component-loaded');

  const init = () => {
    console.log(`component-demo - ${ window.location.host }`);
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = () => {

    $componentClass.find('.c-button').on('click', (event) => {
      console.log(event.target);
    });

    window.matchMedia(`(min-width:992px)`).onchange = onBreakpointChange;

  };



  /**
  * Breakpoint Change Callback Function
  * @param { Object} event - MatchMedia Event Object
  */
  const onBreakpointChange = (event) => {

    // If Tablet Breakpoint and Up
    if (event.matches) {
      console.log('Tablet BP');
    }

    // Else is Mobile Breakpoint
    else {
      console.log('Mobile BP');
    }
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


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.lenght > 0) {
    init();

    return {
      publicMethodOne,
      getDate
    };
  }

}());
