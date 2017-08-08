'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "homepage-pageoverview")) {
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-featuredtopic")) {
    data.cta = {title: "View tools and downloads", url: "http://www.eaton.com",target: "_self"}
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-pageoverview")) {
    data.cta = {title: "Learn about our history", url: "http://www.eaton.com", target: "_self"}
  } else if ((typeof(testdata) != "undefined") && ((testdata == "primary-pageoverview") || (testdata == "primary-featuredtopic"))) {
    data.cta = {title: "View investor relations", url: "http://www.eaton.com", target: "_self"}
  } else if ((typeof(testdata) != "undefined") && (testdata == "primary-articlelist")) {
    data.cta = {title: "View all press releases", url: "http://www.eaton.com", target: "_self"}
  } else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-viewthoughtleadership")) {
    data.cta = {title: "View all thought leadership articles", url: "http://www.eaton.com", target: "_self"}
  } else {
    data.cta = {
      title: (properties.get('title')) ? properties.get('title') : 'CTA Button',
      url: "http://www.eaton.com",
      target: "_self"
    }
  }

  return data;
});
