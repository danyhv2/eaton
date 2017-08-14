'use strict';
use(function () {

    var data = {};
    var testdata = this.testdata;

    data.anchors = [
        {
            "anchorTitle": "Product Literature",
            "anchorId": "product-literature",
            "description": "",
            "content": [
                {
                    documents: [
                        {
                            title: 'Brochure',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf',
                            date: '5/17/17',
                            isNew: true
                        },
                        {
                            title: 'Catalog',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        }
                    ]
                },
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]
                }
            ]
        },
        {
            "anchorTitle": "Manuals",
            "anchorId": "manuals",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit massa nisl, at tincidunt urna tempus vel.",
            "content": [
                {
                    documents: [
                        {
                            title: 'Brochure',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        },
                        {
                            title: 'Catalog',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        }
                    ]
                },
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            target: '_blank',
                            size: '2MB',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]

                }
            ]
        },
        {
            "anchorTitle": "Warranty, service agreement, terms and conditions",
            "anchorId": "warranty",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit massa nisl, at tincidunt urna tempus vel.",
            "content": [
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            target: '_blank',
                            size: '2MB',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]

                }
            ]
        },
        {
            "anchorTitle": "Application notes",
            "anchorId": "application-notes",
            "content": [
                {
                    documents: [
                        {
                            title: 'Brochure',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf',
                            date: '5/17/17',
                            isNew: true
                        },
                        {
                            title: 'Catalog',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        }
                    ]
                },
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]
                }
            ]
        },
        {
            "anchorTitle": "Press Releases",
            "anchorId": "press-releases",
            "content": [
                {
                    documents: [
                        {
                            title: 'Brochure',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf',
                            date: '5/17/17',
                            isNew: true
                        },
                        {
                            title: 'Catalog',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        }
                    ]
                },
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]
                }
            ]
        },
        {
            "anchorTitle": "Success Stories",
            "anchorId": "success-stories",
            "content": [
                {
                    documents: [
                        {
                            title: 'Brochure',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: 'http://www.eaton.com/ecm/groups/public/@pub/@eaton/@corp/documents/content/pct_3188515.pdf',
                            date: '5/17/17',
                            isNew: true
                        },
                        {
                            title: 'Catalog',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: true
                        }
                    ]
                },
                {
                    documents: [
                        {
                            title: 'Product Guide',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        },
                        {
                            title: 'Family Document',
                            description: 'White Paper Addresses Protection for the IE3 Revolution',
                            type: 'PDF',
                            size: '2MB',
                            target: '_blank',
                            url: '#link-to-pdf',
                            date: '5/17/17',
                            isNew: false
                        }
                    ]
                }
            ]
        }
    ];

    return data;
});
