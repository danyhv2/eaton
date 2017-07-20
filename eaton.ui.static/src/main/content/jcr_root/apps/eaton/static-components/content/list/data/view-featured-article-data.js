"use strict";
use(function () {
    var data = {
        cards: [
            {
                title: 'Data Center Facility UPS',
                link_text: 'Emergency power system basics',
                image: '/content/dam/eaton/images/Jet.png',
                mobile_image: '/content/dam/eaton/images/Jet.png',
                image_alt: 'Image 1',
                link_url: '#',
                date_text: 'November 30, 2016'
            },
            {
                title: 'Knowledge Center',
                link_text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
                image: '/content/dam/eaton/images/Tractors.png',
                mobile_image: '/content/dam/eaton/images/Tractors.png',
                image_alt: 'Image 2',
                link_url: '#',
                date_text: 'December 12, 2015'
            },
            {
                title: 'Healthcare',
                link_text: 'Unlock power and reverse with a modern UPS',
                image: '/content/dam/eaton/images/Power_Lines.png',
                mobile_image: '/content/dam/eaton/images/Power_Lines.png',
                image_alt: 'Image 3',
                link_url: '#',
                date_text: 'October 12, 2014'
            }
        ],
        
        featured_content: {
            title: 'Featured Category',
            link_text: 'Why reality is the innovation challenge',
            image: '/content/dam/eaton/images/category_highlight_secondary_Landing.png',
            mobile_image: '/content/dam/eaton/images/category_highlight_secondary_Landing.png',
            image_alt: 'Featured image',
            link_url: '#',
            date_text: 'September 23, 2013'    
        },

        /* If there is more than one carousel in the page, the carousel class has to be unique */
        carouselClassUnique: Math.floor(Math.random() * 100)
    }
    return data;
});
