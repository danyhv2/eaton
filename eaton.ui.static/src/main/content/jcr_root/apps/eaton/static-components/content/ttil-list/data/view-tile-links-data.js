"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "primary-tiles")) {
        data = {
                element: [
                    {
                        title: 'Sustainability',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: true
                    },
                    {
                        title: 'Ethics & compliance',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: false
                    },
                    {
                        title: 'Inclusion & diversity',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: true
                    }
                ],
                header: 'Innovation gets noticed',
                description: 'See what people are saying about Eaton.'
            };    	
    } else if ((typeof(testdata) != "undefined") && (testdata == "t11-listing-page-1")) {
        data = {
                element: [
                    {
                        title: 'About Eaton',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: ''
                    },
                    {
                        title: 'Media Resources',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: ''
                    },
                    {
                        title: 'Events Calendar',
                        link: 'http://www.eaton.com',
                        image: '',
                        imageAlt: '',
                        openNewWindow: ''
                    }
                ],
                header: 'Innovation gets noticed',
                description: 'See what people are saying about Eaton.'
            };    	
    }  else {
        data = {
                element: [
                          {
                              title: 'Aerospace',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              imageAlt: 'Test Image',
                              openNewWindow: true
                          },
                          {
                              title: 'Buildings',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              imageAlt: 'Test Image',
                              openNewWindow: true
                          },
                          {
                              title: 'Data centers',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              imageAlt: 'Test Image',
                              openNewWindow: true
                          },
                          {
                              title: 'Healthcare',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              imageAlt: 'Test Image',
                              openNewWindow: true
                          },
                          {
                              title: 'Machine',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              imageAlt: 'Test Image',
                              openNewWindow: false
                          },
                          {
                              title: 'Data Centers',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              imageAlt: 'Test Image',
                              openNewWindow: false
                          }
                      ],
                      header: 'Innovation gets noticed',
                      description: 'See what people are saying about Eaton.'
                 }
    }
    
    return data;
});