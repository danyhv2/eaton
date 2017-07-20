"use strict";
use(function () {
    var data = {};    
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "homepage-categoryhighlight")) {
    	data.title = "Right now at Eaton";
        data.text = "Discover how we make an impact every day";
	    data.imgSrc = "/content/dam/eaton/images/story_board.png";
    } else {
	    data.title = "Eaton UPS At work";
	    data.text = "Discover why more companies are switching to eaton UPS.";
	    data.imgSrc = "/content/dam/eaton/images/story_board.png";
    }
    
    return data;
});