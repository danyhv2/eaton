var App = App || {};

App.Hero = (function () {
    'use strict';
	var componentClass = $('.testimony');
    var testimonyIndex;
    
    var testimonies = [{
            'testimonyPerson' : 'John Smith',
            'testimonyPosition' : 'CEO, Advance Inc.',
            'testtimonyContent' : '"Eaton excelent products has improved our efficiency as a company and is helping us to maintaing a level of quality for our services that has been greatly praised by our clients."'
        },
        {
            'testimonyPerson' : 'Alice Jones',
            'testimonyPosition' : 'IT Engineer, SkyTech Inc.',
            'testtimonyContent' : 'Eaton products has made our life in the IT infrastructure side very simple and stress free.'
        },
        {
            'testimonyPerson' : 'Michael Fritz',
            'testimonyPosition' : 'Facility Manager, Blue Code Inc.',
            'testtimonyContent' : 'I can not recommend Eaton enough, customer support, product quality, etc. They are light years ahead from any other company in their field.'
        }
    ];

	var init = function () {
        testimonyIndex = 0;
        $("#testimonyContainer").on('click', '#seeMoreTestimonies', function (event) {
            showNextTestimony();
            event.preventDefault();
        });
		console.log('Component loaded');
	};
    
    var showNextTestimony = function () {
        if (testimonyIndex === 2) {
            testimonyIndex = 0;
        }
        else {
            testimonyIndex = testimonyIndex + 1;
        }
        $("#testimonyPerson").text(testimonies[testimonyIndex]['testimonyPerson']);
        $("#testimonyPosition").text(testimonies[testimonyIndex]['testimonyPosition']);
        $("#testimonyContent").text(testimonies[testimonyIndex]['testtimonyContent']);
        return false;
    };

	var callMe = function (str) {
		console.log(str);
	};
	
	//if containing DOM element is found expose getDate() method
	if (componentClass.length > 0) {
		init();
		return {
			callMe : callMe
		};
	}
    else {
        console.log('Component not found on current page.');
    }
})();