'use strict';

const App = App || {};
App.global = (function() {

  // Accepts and strings/integers and logs them to console
  const globalExample = function(value){
    console.log(value)
  };

  return {
    globalExample
  };

})();
