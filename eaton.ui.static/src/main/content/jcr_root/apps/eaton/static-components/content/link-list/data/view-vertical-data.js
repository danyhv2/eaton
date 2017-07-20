'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && testdata == "footer1") {
	  data.view = {
			    eyebrow: 'OUR COMPANY',
			    links: [
			      {
			        title: 'About Eaton',
			        url: '#link-1',
			        target: '_self'
			      },
			      {
			        title: 'Careers',
			        url: '#link-2',
			        target: '_self'
			      },
			      {
			        title: 'Investor Relations',
			        url: '#link-3',
			        target: '_self'
			      },
			      {
			        title: 'Inclusions & diversity',
			        url: '#link-4',
			        target: '_self'
			      },
			      {
			        title: 'Ethics & compliance',
			        url: '#link-5',
			        target: '_self'
			      }
			    ]
	  }
  } else if ((typeof(testdata) != "undefined") && testdata == "footer2") {
	  data.view = {
			    eyebrow: 'POPULAR LINKS',
			    links: [
			      {
			        title: 'Product Documentation',
			        url: '#link-1',
			        target: '_self'
			      },
			      {
			        title: 'Tools & Downloads',
			        url: '#link-2',
			        target: '_self'
			      },
			      {
			        title: 'Eaton in the news',
			        url: '#link-3',
			        target: '_self'
			      },
			      {
			        title: 'Success Stories',
			        url: '#link-4',
			        target: '_self'
			      },
			      {
			        title: 'Text Link 5',
			        url: '#link-5',
			        target: '_self'
			      }
			    ]
			  }
  } else {
	  data.view = {
	    eyebrow: 'Eyebrow / Title',
	    links: [
	      {
	        title: 'Text Link 1',
	        url: '#link-1',
	        target: '_self'
	      },
	      {
	        title: 'Text Link 2',
	        url: '#link-2',
	        target: '_self'
	      },
	      {
	        title: 'Text Link 3',
	        url: '#link-3',
	        target: '_self'
	      },
	      {
	        title: 'Text Link 4',
	        url: '#link-4',
	        target: '_self'
	      },
	      {
	        title: 'Text Link 5',
	        url: '#link-5',
	        target: '_self'
	      }
	    ]
	  }
  };

  return data;
});
