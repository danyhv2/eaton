"use strict";
use(function () {
	var data;
	var testdata=this.testdata;
	
	if ((typeof(testdata) != "undefined") && (testdata == "headline")) {
	    data = {
	    	headline: 'How to buy from Eaton',
			links: [
				{
					icon: 'list-checkmark',
					headline: {
						text: 'Register product',
						url: '#'
					},
					description: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					headline: {
						text: 'Download list/firmware',
						url: '#'
					},
					description: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'phone',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'book',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				}

			]
		};
	} else if ((typeof(testdata) != "undefined") && (testdata == "long-list")) {
		data = {
			links: [
				{
					header: 'Our power managment portfolio'
				},
				{
					icon: 'list-checkmark',
					headline: {
						text: 'Register product',
						url: '#'
					},
					description: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					headline: {
						text: 'Download list/firmware',
						url: '#'
					},
					description: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'list-checkmark',
					headline: {
						text: 'Register product',
						url: '#'
					},
					description: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					headline: {
						text: 'Download list/firmware',
						url: '#'
					},
					description: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'download',
					headline: {
						text: 'Download list/firmware',
						url: '#'
					},
					description: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				}
			]
		};
	}else {
		data = {
			links: [
				{
					icon: 'list-checkmark',
					headline: {
						text: 'Register product',
						url: '#'
					},
					description: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					headline: {
						text: 'Download list/firmware',
						url: '#'
					},
					description: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					headline: {
						text: 'Help center',
						url: '#'
					},
					description: 'Still have questions? We&quote;ve got the answers.'
				}

			]
		};
	}
	
	
    return data;
});
