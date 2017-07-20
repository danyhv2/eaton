"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && testdata == "homepage-pageoverview") {
    	data.title = "Eaton powers solutions for businesses worldwide";
        data.copy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id vulputate tellus. Mauris vel dapibus massa, sed laoreet diam. Integer at enim augue. Pellentesque interdum ipsum velit, nec bibendum mi congue a. Vivamus dignissim, elit nec varius laoreet, justo nunc porttitor ipsum, in molestie ex dui non ante.";
    } else {
        data.title = "The H1 header goes here";
        data.copy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id vulputate tellus. Mauris vel dapibus massa, sed laoreet diam. Integer at enim augue. Pellentesque interdum ipsum velit, nec bibendum mi congue a. Vivamus dignissim, elit nec varius laoreet, justo nunc porttitor ipsum, in molestie ex dui non ante.";
        data.cta = {
            title: "my link",
            url: "http://www.eaton.com",
            target: "_self",
        }    	
    }

    return data;
});

