"use strict";
use(function () {

  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "t5-category-with-list")) {

    data = {
      cards: [
        {
          title: 'Data Center Facility UPS 01',
          text: 'Emergency power system basics 01',
          image : {
            mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
            tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
            desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-2.jpg',
            altText: 'Image Alt Text'
          },
          date_text: 'November 30, 2016',
          cta: {
            url: 'http://www.eaton.com',
            target: '_self'
          }
        },
        {
          title: 'Knowledge Center',
          text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
          image : {
            mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-8.jpeg',
            tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-8.jpeg',
            desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-8.jpg',
            altText: 'Image Alt Text'
          },
          date_text: 'December 12, 2015',
          cta: {
            url: 'http://www.eaton.com',
            target: '_self'
          }
        }
      ]
    };

  } else {

    data = {
      cards: [
        {
          title: 'Data Center Facility UPS',
          text: 'Emergency power system basics',
          image : {
            mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
            tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-2.jpg',
            desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-2.jpg',
            altText: 'Image Alt Text'
          },
          date_text: 'November 30, 2016',
          cta: {
            url: 'http://www.eaton.com',
            target: '_self'
          }
        },
        {
          title: 'Knowledge Center',
          text: 'Eaton Awarded U.S. Army Corps Contract to Modernize Electrical Systems',
          image : {
            mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-8.jpeg',
            tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-8.jpeg',
            desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-8.jpg',
            altText: 'Image Alt Text'
          },
          date_text: 'December 12, 2015',
          cta: {
            url: 'http://www.eaton.com',
            target: '_self'
          }
        },
        {
          title: 'Healthcare',
          text: 'Unlock power and reverse with a modern UPS',
          image : {
            mobile: '/content/dam/eaton/images/lorempixel/technics/630x473-10.jpg',
            tablet: '/content/dam/eaton/images/lorempixel/technics/630x473-10.jpg',
            desktop: '/content/dam/eaton/images/lorempixel/technics/358x258-10.jpg',
            altText: 'Image Alt Text'
          },
          date_text: 'October 12, 2014',
          cta: {
            url: 'http://www.eaton.com',
            target: '_self'
          }
        }
      ]
    };

  }

  return data;

});
