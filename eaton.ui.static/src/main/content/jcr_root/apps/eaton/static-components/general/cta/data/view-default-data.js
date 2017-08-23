'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
    data.cta = { title: "View tools and downloads", url: "http://www.eaton.com",target: "_self" }
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-pageoverview")) {
    data.cta = { title: "Learn about our history", url: "http://www.eaton.com", target: "_self" }
  } else if ((typeof(testdata) != "undefined") && ((testdata == "primary-pageoverview") || (testdata == "primary-featuredtopic")|| (testdata == "t11-listing-page-1"))) {
    data.cta = { title: "View investor relations", url: "http://www.eaton.com", target: "_self" }
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-articlelist")) {
    data.cta = { title: "View all press releases", url: "http://www.eaton.com", target: "_self" }
  } else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-viewthoughtleadership")) {
    data.cta = { title: "View all thought leadership articles", url: "http://www.eaton.com", target: "_self"}
  } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors-1")) {
	data.cta = { title: "View all documents", url: "http://www.eaton.com", target: "_self"}
  } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors-2")) {
	data.cta = { title: "See how megatrends spur innovation", url: "http://www.eaton.com", target: "_self"}
  } else {
    data.cta = {
      title: (properties.get('title')) ? properties.get('title') : 'CTA Button',
      url: "http://www.eaton.com",
      target: "_self"
    }
  }

  // CTA Themes Constants
  //--------------
  var THEMES = {
    'primary-light'   : 'b-button b-button__primary b-button__primary--light',
    'primary-dark'    : 'b-button b-button__primary b-button__primary--dark',
    'secondary-light' : 'b-button b-button__secondary b-button__secondary--light',
    'secondary-dark'  : 'b-button b-button__secondary b-button__secondary--dark',
    'tertiary-light'  : 'b-button b-button__tertiary b-button__tertiary--light',
    'tertiary-dark'   : 'b-button b-button__tertiary b-button__tertiary--dark'
  };

  // Assign Default Value
  data.cta.cssClasses = THEMES['primary-light'];

  // If Theme Property is Defined in the Dialog
  if (properties.get('theme')) {
    var currentTheme = properties.get('theme');

    if (currentTheme in THEMES) {
      data.cta.cssClasses = THEMES[currentTheme];
    }
  }

  return data;

});
