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

  // CTA Themes & Constants
  //--------------
  var THEME_PRIMARY_LIGHT = 'b-button b-button__primary b-button__primary--light';
  var THEME_TERTIARY_LIGHT = 'b-button b-button__tertiary b-button__tertiary--light';

  // If Color value is Light
  if (properties.get('color') && (properties.get('color') == 'light')) {
    data.cta.cssClasses = THEME_PRIMARY_LIGHT;
  }

  // If Color value is Dark
  else if (properties.get('color') && (properties.get('color') == 'dark')) {
    data.cta.cssClasses = THEME_TERTIARY_LIGHT;
  }

  // Else default CTA Theme (Primary Light)
  else { data.cta.cssClasses = THEME_PRIMARY_LIGHT; }


  return data;
});
