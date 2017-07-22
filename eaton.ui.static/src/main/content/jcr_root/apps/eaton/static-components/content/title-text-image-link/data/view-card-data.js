"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "article-nextsteps")) {
    data = {
      title: 'Transmissions',
      text: 'UltraShift Plus Transmissions',
      imgSrc: '/content/dam/eaton/images/Cityscape_mob.png',
      imgAlt: 'Alt Text goes here',
      cta: {
        url: 'http://www.eaton.com',
        text: 'See how'
      }
    }
  } else {
    data = {
      title: 'We make big ideas work',
      text: 'Realize your full potential at Eaton, as you help solve some of the most critical issues.',
      imgSrc: '/content/dam/eaton/images/Cityscape_mob.png',
      imgAlt: 'Alt Text goes here',
      cta: {
        url: 'http://www.eaton.com',
        text: 'See how'
      }
    }
  }

  return data;
});
