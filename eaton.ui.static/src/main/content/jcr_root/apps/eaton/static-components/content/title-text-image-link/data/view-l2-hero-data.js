"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  data.testdata = testdata;
  if ((typeof(testdata) != "undefined") && (testdata == "homepage-categoryhighlight")) {
    data.title = "Right now at Eaton";
    data.text = "Discover how we make an impact every day";
    data.imgSrc = "/content/dam/eaton/images/story_board.png";
  } else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-leadingtheway")) {
    data.title = "Leading the way";
    data.text = "We''re predicting and meeting the demands of an always-on world.";
    data.imgSrc = "/content/dam/eaton/images/story_board.png";
  } else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-eatoninthenews")) {
    data.title = "Eaton in the news";
    data.text = "Discover the many ways Eaton solutions shape and redefine critical technologies around the world.";
    data.imgSrc = "/content/dam/eaton/images/story_board.png";
  } else {
    data.title = "Eaton UPS At work";
    data.text = "Discover why more companies are switching to eaton UPS.";
    data.imgSrc = "/content/dam/eaton/images/story_board.png";
  }

  return data;
});
