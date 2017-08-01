//-----------------------------------
// Eaton: Utility Functions
//-----------------------------------
'use strict';

var App = App || {};
App.global = App.global || {};

App.global.utils = function () {

  var getCookie = function getCookie(cookieName) {
    console.log(cookieName);
  };

  return {
    getCookie: getCookie
  };
}();