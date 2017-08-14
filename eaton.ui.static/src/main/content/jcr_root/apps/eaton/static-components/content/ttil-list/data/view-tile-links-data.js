"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "primary-tiles")) {
        data = {
                element: [
                    {
                        title: 'Sustainability',
                        link: 'http://www.eaton.com'
                    },
                    {
                        title: 'Ethics & compliance',
                        link: 'http://www.eaton.com'
                    },
                    {
                        title: 'Inclusion & diversity',
                        link: 'http://www.eaton.com'
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
                        link: 'http://www.eaton.com'
                    },
                    {
                        title: 'Media Resources',
                        link: 'http://www.eaton.com'
                    },
                    {
                        title: 'Events Calendar',
                        link: 'http://www.eaton.com'
                    }
                ],
                header: 'Innovation gets noticed',
                description: 'See what people are saying about Eaton.'
            };    	
    } else if ((typeof(testdata) != "undefined") && (testdata == "with-icons")) {
        data = {
            element: [
                {
                    title: 'Aerospace',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/resource.png'
                },
                {
                    title: 'Buildings',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/overview.png'
                },
                {
                    title: 'Data centers',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/overview.png'
                },
                {
                    title: 'Healthcare',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/resource.png'
                },
                {
                    title: 'Machine',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/resource.png'
                },
                {
                    title: 'Data Centers',
                    link: 'http://www.eaton.com',
                    image: '',
                    icon: '/content/dam/eaton/images/resource.png'
                }
            ]
        }
    } else {
        data = {
                element: [
                          {
                              title: 'Aerospace',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              icon: ''
                          },
                          {
                              title: 'Buildings',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              icon: ''
                          },
                          {
                              title: 'Data centers',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/community.png',
                              icon: ''
                          },
                          {
                              title: 'Healthcare',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              icon: ''
                          },
                          {
                              title: 'Machine',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              icon: ''
                          },
                          {
                              title: 'Data Centers',
                              link: 'http://www.eaton.com',
                              image: '/content/dam/eaton/images/company-insight.png',
                              icon: ''
                          }
                      ],
                      header: 'Innovation gets noticed',
                      description: 'See what people are saying about Eaton.'
                 }
    }
    
    return data;
});