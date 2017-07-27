"use strict";
use(function () {
	var data;
	var testdata=this.testdata;
	
	if ((typeof(testdata) != "undefined") && (testdata == "headline")) {
	    data = {
	    	headline: 'How to buy from Eaton',
			items: [
				{
					icon: 'list-checkmark',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'phone',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'book',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				}

			]
		};
	} else if ((typeof(testdata) != "undefined") && (testdata == "long-list")) {
		data = {
			items: [
				{
					title: 'Our power managment portfolio'
				},
				{
					icon: 'list-checkmark',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'list-checkmark',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					icon: 'download',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				}
			]
		};
	}else {
		data = {
			items: [
				{
					icon: 'list-checkmark',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					icon: 'download',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					icon: 'help',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				}

			]
		};
	}
	
	
    return data;
});
