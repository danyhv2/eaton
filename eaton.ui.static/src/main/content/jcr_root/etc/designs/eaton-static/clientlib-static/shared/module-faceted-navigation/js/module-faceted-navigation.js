/**
 *
 *
 *
 *
 *
 * - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY - 
 *
 * - Generated by Gulp (gulp-babel).
 *
 *
 *
 *
 *
 */


//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

var App = window.App || {};

function init() {}

App.facets = function () {
  var $componentClass = $('.faceted-navigation');

  var init = function init() {
    $('.faceted-navigation__header.button--reset').on('click', function (e) {
      e.preventDefault;
      $(this).children('.icon-sign-plus').toggleClass('u-hide');
    });
  };

  if ($componentClass.length > 0) {
    init();
  }
}();