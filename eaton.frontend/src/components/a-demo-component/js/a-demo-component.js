//-----------------------------------
// Component: Example Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.demoComponent = (function() {

  const $componentClass = $('.a-demo-component');

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

    // window.matchMedia('(min-width:992px)').onchange = onBreakpointChange;
    window.matchMedia(`(min-width:${ App.global.constants.GRID.SM }px)`).onchange = onBreakpointChange;

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
   * Example of Public Method: Custom Date Format
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
      getDate
    };
  }

}());
