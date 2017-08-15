"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "homepage-categoryhighlight")) {
    data = {
      title: "Right now at Eaton",
      text: "Discover how we make an impact every day",
      image: {
        mobile: "/content/dam/eaton/images/story_board.png",
        tablet: "/content/dam/eaton/images/story_board.png",
        desktop: "/content/dam/eaton/images/story_board.png",
        altText: ""
      }
    };
  }

  else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-leadingtheway")) {
    data = {
      title: "Leading the way",
      text: "We're predicting and meeting the demands of an always-on world.",
      image: {
        mobile: "/content/dam/eaton/images/story_board.png",
        tablet: "/content/dam/eaton/images/story_board.png",
        desktop: "/content/dam/eaton/images/story_board.png",
        altText: ""
      }
    };
  }

  else if ((typeof(testdata) != "undefined") && (testdata == "l2-news-eatoninthenews")) {
    data = {
      title: "Eaton in the news",
      text: "Discover the many ways Eaton solutions shape and redefine critical technologies around the world.",
      image: {
        mobile: "/content/dam/eaton/images/story_board.png",
        tablet: "/content/dam/eaton/images/story_board.png",
        desktop: "/content/dam/eaton/images/story_board.png",
        altText: ""
      }
    };
  }

  else {
    data = {
      title: "Eaton UPS At work",
      text: "Discover why more companies are switching to eaton UPS.",
      image: {
        mobile: "/content/dam/eaton/images/story_board.png",
        tablet: "/content/dam/eaton/images/story_board.png",
        desktop: "/content/dam/eaton/images/story_board.png",
        altText: ""
      }
    };
  }

  return data;
});
