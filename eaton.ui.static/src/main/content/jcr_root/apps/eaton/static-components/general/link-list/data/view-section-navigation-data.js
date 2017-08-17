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
		  
	} else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {
  	  
		data.links = [
          {
            title: 'Financial reports',
            url: '#financial-reports',
            target: '_self'
          },
          {
            title: 'Stock information',
            url: '#stock-information',
            target: '_self'
          },
          {
            title: 'Corporate governance',
            url: '#corporate-governance',
            target: '_self'
          },
          {
            title: 'Investor news & presentations',
            url: '#investor-news-and-presentations',
            target: '_self'
          }
        ];
    	
        
    } else if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-careers")) {
  	  
    	data.links = [
          {
            title: 'Job opportunities',
            url: '#job-opportunities',
            target: '_self'
          },
          {
            title: 'Culture & values',
            url: '#culture-and-values',
            target: '_self'
          },
          {
            title: 'Learning & development',
            url: '#learning-and-development',
            target: '_self'
          },
          {
            title: 'Benefits',
            url: '#benefits',
            target: '_self'
          },
          {
            title: 'Wellness',
            url: '#wellness',
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
