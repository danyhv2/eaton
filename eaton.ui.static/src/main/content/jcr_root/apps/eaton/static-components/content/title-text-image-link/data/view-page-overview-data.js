"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && testdata == "homepage-pageoverview") {
    	data.title = "Eaton powers solutions for businesses worldwide";
        data.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id vulputate tellus. Mauris vel dapibus massa, sed laoreet diam. Integer at enim augue. Pellentesque interdum ipsum velit, nec bibendum mi congue a. Vivamus dignissim, elit nec varius laoreet, justo nunc porttitor ipsum, in molestie ex dui non ante.";
    } else if ((typeof(testdata) != "undefined") && testdata == "primary-pageoverview") {
        	data.title = "About Eaton";
            data.text = "Our world runs on power. Technology, transportation, energy and infrastructure absolutely depend on it. At Eaton, our vision is to deliver that power more efficiently, reliably and safely with innovative technologies that improve people’s lives, the communities where we live and work, and the planet our future generations depend upon. To meet today’s challenges, and tomorrow’s. That’s what really matters. And we’re here to make sure it works.";
    } else {
        data.title = "The H1 header goes here";
        data.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id vulputate tellus. Mauris vel dapibus massa, sed laoreet diam. Integer at enim augue. Pellentesque interdum ipsum velit, nec bibendum mi congue a. Vivamus dignissim, elit nec varius laoreet, justo nunc porttitor ipsum, in molestie ex dui non ante.";
        data.cta = {
            title: "my link",
            url: "http://www.eaton.com",
            target: "_self",
        }    	
    }

    return data;
});

