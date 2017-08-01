//-----------------------------------
// Eaton: Global Methods
//-----------------------------------
'use strict';

var App = App || {};
App.global = function () {

  // Accepts and strings/integers and logs them to console
  var globalExample = function globalExample(value) {
    console.log(value);
  };

  return {
    globalExample: globalExample
  };
}();