"use strict";
use(function () {
  var data = {};
  var testdata = this.testdata;

  if ((typeof(testdata) != "undefined") && (testdata == "primary-landing-hero")) {
    data = {
      hero: [
        {
          imageMaskEnabled: true,
          title: 'We make the future brighter.*',
          text: 'Planes. Hospitals. Factories. Data Centers. The electrical grid. These are things people depend on every day. And the companies behind them depend on us. At Eaton, we&apos;re dedicated to elevating people&apos;s lives with power management technologies that are more reliable, efficient, safe and sustainable.',
          image: {
            mobile: '/content/dam/eaton/images/Hero_Mobile.png',
            tablet: '/content/dam/eaton/images/Hero_Mobile.png',
            desktop: '/content/dam/eaton/images/Hero Images.png',
            altText: 'Test image 1'
          },
          cta: { url: 'http://www.eaton.com', text: 'See How', target: '_self' }
        }
      ]
    }
  } else if ((typeof(testdata) != "undefined") && (testdata == "article-hero")) {
    data = {
      hero: [
        {
          imageMaskEnabled: true,
          title: 'Article short headline for hero area',
          text: 'Aliquam fringilla elit at erat semper, eget dignissim consequat. Sed eget vestibulum ex. Quisque rhoncus eu ornare. Duis sollicitudin ex ac vehicula suscipit.',
          image: {
            mobile: '/content/dam/eaton/images/landing-hero--article-mobile.jpg',
            tablet: '/content/dam/eaton/images/landing-hero--article-mobile.jpg',
            desktop: '/content/dam/eaton/images/landing-hero--article-desktop.jpg',
            altText: 'Test image 1'
          },
          cta: { url: '', text: '', target: '_self' }
        }
      ]
    }
  } else if ((typeof(testdata) != "undefined") && (testdata == "homepage-landinghero")) {
    data = {
      hero: [
        {
          imageMaskEnabled: true,
          title: 'We make what matters work.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac augue porta, vulputate ex id, lobortis mauris. Nunc consequat tincidunt augue eget laoreet. Donec mattis ut turpis et elementum. Vestibulum non gravida sapien.',
          image: {
            mobile: '/content/dam/eaton/images/landing-hero--homepage01-mobile.jpg',
            tablet: '/content/dam/eaton/images/landing-hero--homepage01-mobile.jpg',
            desktop: '/content/dam/eaton/images/landing-hero--homepage01-desktop.jpg',
            altText: 'Test image 1',
            alignment: 'center'
          },
          cta: { url: 'http://www.eaton.com', text: 'See How 1', target: '_self' }

        },
        {
          imageMaskEnabled: true,
          title: 'We make big ideas work.',
          text: 'This slide uses image alignment, the same image used in desktop breakpoint is also used in mobile breakpoint. For this exsample, in mobile breakpoint, the image is Aligned to the LEFT.',
          image: {
            mobile: '/content/dam/eaton/images/Hero Images.png',
            tablet: '/content/dam/eaton/images/Hero Images.png',
            desktop: '/content/dam/eaton/images/Hero Images.png',
            altText: 'Test image 2',
            alignment: 'left'
          },
          cta: { url: 'http://www.eaton.com', text: 'See How 2', target: '_self' }

        },
        {
          imageMaskEnabled: true,
          title: 'Eaton and Cummins Inc. announce joint venture.',
          text: 'This slide uses 2 different images for Desktop and Mobile. Desktop image is 1500x668px. Mobile image is 750x1268px.',
          image: {
            mobile: '/content/dam/eaton/images/landing-hero--homepage02-mobile.jpg',
            tablet: '/content/dam/eaton/images/landing-hero--homepage02-mobile.jpg',
            desktop: '/content/dam/eaton/images/landing-hero--homepage02-desktop.jpg',
            altText: 'test image 3',
            alignment: 'center'
          },
          cta: { url: 'http://www.eaton.com', text: 'Read about our partnership', target: '_self' }
        },
        {
          imageMaskEnabled: true,
          title: 'Slide #4.',
          text: 'This slide uses image alignment, the same image used in desktop breakpoint is also used in mobile breakpoint. For this exsample, in mobile breakpoint, the image is CENTER Aligned.',
          image: {
            mobile: '/content/dam/eaton/images/Hero Images.png',
            tablet: '/content/dam/eaton/images/Hero Images.png',
            desktop: '/content/dam/eaton/images/Hero Images.png',
            altText: 'test image 4',
            alignment: 'center'
          },
          cta: { url: 'http://www.eaton.com', text: 'Long text used for testing purposes', target: '_self' }
        }
      ]
    }
  }

  else {
    data = {
      hero: [
        {
          imageMaskEnabled: true,
          title: 'We make what matters work2.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac augue porta, vulputate ex id, lobortis mauris. Nunc consequat tincidunt augue eget laoreet. Donec mattis ut turpis et elementum. Vestibulum non gravida sapien. In dignissim leo eu erat consequat bibendum.',
          image: {
            mobile: '/content/dam/eaton/images/Hero_Mobile.png',
            tablet: '/content/dam/eaton/images/Hero_Mobile.png',
            desktop: '/content/dam/eaton/images/Hero Images.png',
            altText: 'Test image 1'
          },
          cta: { url: 'http://www.eaton.com', text: 'See How', target: '_self' }
        }
      ],
      testdata: testdata
    }
  }

  return data;
});
