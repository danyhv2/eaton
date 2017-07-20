'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && testdata == "footer1") {
	  data.view = {
			    eyebrow: 'OUR COMPANY',
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
  } else if ((typeof(testdata) != "undefined") && testdata == "footer2") {
	  data.view = {
			    eyebrow: 'POPULAR LINKS',
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
