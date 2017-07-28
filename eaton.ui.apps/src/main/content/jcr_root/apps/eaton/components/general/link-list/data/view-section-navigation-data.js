'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

	if ((typeof(testdata) != "undefined") && testdata == "l2-news") {
		  data.links = [
		                {
		                  title: 'Press releases',
		                  url: '#terms-and-conditions',
		                  target: '_self'
		                },
		                {
		                  title: 'Media resources',
		                  url: '#privacy-policy',
		                  target: '_self'
		                },
		                {
		                  title: 'Event calendar',
		                  url: '#site-map',
		                  target: '_self'
		                }
		              ];
		
	} else {
	  data.links = [
	                {
	                  title: 'Press releases',
	                  url: '#terms-and-conditions',
	                  target: '_self'
	                },
	                {
	                  title: 'Media resources',
	                  url: '#privacy-policy',
	                  target: '_self'
	                },
	                {
	                  title: 'Event calendar',
	                  url: '#site-map',
	                  target: '_self'
	                },
	                {
	                  title: 'Lorem Ipsum',
	                  url: '#site-map',
	                  target: '_self'
	                },
	                {
	                  title: 'Dolor ipsum',
	                  url: '#site-map',
	                  target: '_self'
	                }
	              ];
		
	}


  return data;
});
