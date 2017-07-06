let App = window.App || {};

App.quote = (function() {

  const $componentClass = $('.c-quote');

  const init = () => {
    console.log(`quote-init - Testing ES6: ${ App }`);
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

})();