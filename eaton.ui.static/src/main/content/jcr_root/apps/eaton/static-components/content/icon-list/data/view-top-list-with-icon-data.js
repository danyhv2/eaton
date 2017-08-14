"use strict";
use(function () {
	var data;
	var testdata=this.testdata;
	
	if ((typeof(testdata) != "undefined") && (testdata == "long-list")) {
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
	} else if ((typeof(testdata) != "undefined") && (testdata == "t1-homepage-template")) {
		data = {
			items: [
				{
					image: '/content/dam/eaton/images/Tree.png',
					title: 'Support circut',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				},
				{
					image: '/content/dam/eaton/images/Eaton_support.png',
					title: 'Eaton Knowledge center',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				},
				{
					image: '/content/dam/eaton/images/Step_by_step.png',
					title: 'Step-by-step guides',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				},{
					image: '/content/dam/eaton/images/Eaton_Workshop.png',
					title: 'Eaton workshops',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				},
				{
					image: '/content/dam/eaton/images/learning_lab.png',
					title: 'Learning laboratory',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				},
				{
					image: '/content/dam/eaton/images/Developer_salon.png',
					title: 'Developer salon',
					link: '#',
					target: '_self',
					text: 'Nulla vitae elementum massa. Phasellus cond'
				}
			]
		};
	} else {
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
