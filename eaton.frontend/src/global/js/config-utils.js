'use strict';

const App = App || {};
App.global = App.global || {};

App.global.utils = (function() {

  const getCookie = function(cookieName){
    console.log(cookieName, 1)
  };

  return {
    getCookie
  };

})();
