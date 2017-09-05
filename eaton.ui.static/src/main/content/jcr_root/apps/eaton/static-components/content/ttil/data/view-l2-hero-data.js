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
        altText: "",
        alignment: 'center'
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
        altText: "",
        alignment: 'center'
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
        altText: "",
        alignment: 'center'
      }
    };
  }

  else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {
    data = {
      title: "The power of Eaton",
      text: "Megatrends spur innovation at Eaton. Our focus brings drive and urgency to our work as we develop innovations that help our customers find ways to use power more efficiently, reliable, safely and sustainnably.",
      image: {
        mobile: "/content/dam/eaton/images/the-power-of-eaton.png",
        tablet: "/content/dam/eaton/images/the-power-of-eaton.png",
        desktop: "/content/dam/eaton/images/the-power-of-eaton.png",
        altText: "",
        alignment: 'center'
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
        altText: "",
        alignment: 'center'
      }
    };
  }

  return data;
});
