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
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Careers',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Investor Relations',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Inclusions & diversity',
			        url: '#link-4',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Ethics & compliance',
			        url: '#link-5',
			        target: '_self',
	                external_link: false,
	                document_download: ''
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
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Tools & Downloads',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Eaton in the news',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Success Stories',
			        url: '#link-4',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      }
			    ]
	  }
  } else if ((typeof(testdata) != "undefined") && testdata == "homepage-featuredtopic-list1") {
	  data.view = {
			    eyebrow: 'For Design Engineers',
			    links: [
			      {
			        title: '2D/3D Models',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Software Downloads',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'On demand Presentation',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      }
			    ]
			  }
  } else if ((typeof(testdata) != "undefined") && testdata == "homepage-featuredtopic-list2") {
	  data.view = {
			    eyebrow: 'For IT Professionals',
			    links: [
			      {
			        title: 'Installation Guides',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Software and firmware downloads',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'IT handbooks',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      }
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "primary-featuredtopic-list1") {
	  data.view = {
			    eyebrow: 'Stock information',
			    links: [
			      {
			        title: 'Stock information',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'SEC filings',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Company profile',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      }
			    ]
			  }
  } else if ((typeof(testdata) != "undefined") && testdata == "primary-featuredtopic-list2") {
	  data.view = {
			    eyebrow: 'Financial reports',
			    links: [
			      {
			        title: '2016 annual and sustainability report',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: '2016 Q4 quarterly report',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Dividend report',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      }
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "article-nextsteps") {
	  data.view = {
			    eyebrow: 'Downloads & Related Links',
			    links: [
			      {
			        title: 'Download Success Story Name',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_size: 'PDF 15MB',
	                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
	                document_download: 'http://google.com'
			      },
			      {
			        title: 'Market 1',
			        url: '#link-2',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Market 2',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'Sector Application',
			        url: '#link-3',
			        target: '_self',
	                external_link: false,
	                document_download: ''
			      },
			      {
			        title: 'www.microsite.com',
			        url: '#link-3',
			        target: '_self',
	                external_link: true,
	                document_download: ''
			      },
			      {
			        title: 'www.external.com',
			        url: '#link-3',
			        target: '_self',
	                external_link: true,
	                document_download: ''
			      }
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "l2-news-nextsteps1") {
	  data.view = {
			    eyebrow: 'Downloads',
			    links: [
			      {
			        title: 'Eaton Company Facts',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_size: 'PDF 8MB',
	                document_download: 'http://google.com'
			      }
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "l2-news-nextsteps2") {
	  data.view = {
			    eyebrow: 'Press Kits',
			    links: [
			      {
			        title: 'Customer Success Stories',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_size: 'PDF 8MB',
	                document_download: ''
			      },
			      {
				        title: 'Photography & video',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  },
			      {
				        title: 'White papers',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  }
			      
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "megamenu-products") {
	  data.view = {
			    eyebrow: 'Top Searches',
			    links: [
			      {
			        title: 'Electrical Circuit Protection',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_size: 'PDF 8MB',
	                document_download: ''
			      },
			      {
				        title: 'Lighting & Controls',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  },
			      {
				        title: 'Automation & Control',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  }
			      
			    ]
	 }
  } else if ((typeof(testdata) != "undefined") && testdata == "megamenu-company") {
	  data.view = {
			    eyebrow: 'Top Searches',
			    links: [
			      {
			        title: 'VAVE Project Lead',
			        url: '#link-1',
			        target: '_self',
	                external_link: false,
	                document_size: 'PDF 8MB',
	                document_download: ''
			      },
			      {
				        title: 'Senior Product Engineer',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  },
			      {
				        title: 'Senior Field Service Engineer',
				        url: '#link-1',
				        target: '_self',
		                external_link: false,
		                document_size: 'PDF 8MB',
		                document_download: ''
				  }
			      
			    ]
	 }
  } else {
	  data.view = {
	    eyebrow: 'Eyebrow / Title',
	    links: [
            {
                title: 'Text Link 1',
                url: 'http://www.eaton.com/',
                external_link: true,
                document_size: 'PDF 15MB',
                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
                document_download: ''
            },
            {
                title: 'Text Link 2',
                url: 'http://www.eaton.com/',
                external_link: false,
                document_size: 'PDF 15MB',
                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
                document_download: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf'
            },
            {
                title: 'Text Link 3',
                url: 'http://www.eaton.com/',
                external_link: false,
                document_size: 'PDF 15MB',
                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
                document_download: ''
            },
            {
                title: 'Text Link 4',
                url: 'http://www.eaton.com/',
                external_link: false,
                document_size: 'PDF 15MB',
                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
                document_download: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf'
            },
            {
                title: 'Text Link 5',
                url: 'http://www.eaton.com/',
                external_link: true,
                document_size: 'PDF 15MB',
                document_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis. ',
                document_download: ''
            }
	    ]
	  }
  };

  return data;
});
