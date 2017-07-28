"use strict";
use(function () {
	var data;
	var testdata=this.testdata;
	
	if ((typeof(testdata) != "undefined") && (testdata == "headline")) {
	    data = {
	    	headline: 'How to buy from Eaton',
			items: [
				{
					// image: '/content/dam/eaton/images/edit_orange_icon.png',
					image: '/content/dam/eaton/images/edit_orange_icon.png',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					image: '/content/dam/eaton/images/download_orange_icon.png',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					image: '/content/dam/eaton/images/faq_orange_icon.png',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					image: '/content/dam/eaton/images/edit_orange_icon.png',
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
					image: '/content/dam/eaton/images/edit_orange_icon.png',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					image: '/content/dam/eaton/images/download_orange_icon.png',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					image: '/content/dam/eaton/images/faq_orange_icon.png',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					image: '/content/dam/eaton/images/edit_orange_icon.png',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					image: '/content/dam/eaton/images/download_orange_icon.png',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					image: '/content/dam/eaton/images/faq_orange_icon.png',
					title: 'Help center',
					link: '#',
					target: '_self',
					text: 'Still have questions? We&quote;ve got the answers.'
				},
				{
					image: '/content/dam/eaton/images/download_orange_icon.png',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					image: '/content/dam/eaton/images/faq_orange_icon.png',
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
					image: '/content/dam/eaton/images/edit_orange_icon.png',
					title: 'Register product',
					link: '#',
					target: '_self',
					text: 'Registering hepl us keep you up-to-date with your product.'
				},
				{
					image: '/content/dam/eaton/images/download_orange_icon.png',
					title: 'Download list/firmware',
					link: '#',
					target: '_self',
					text: 'Optimize performance with the latest patch.'
				},
				{
					image: '/content/dam/eaton/images/faq_orange_icon.png',
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
