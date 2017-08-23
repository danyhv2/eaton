"use strict";
use(function () {
  var testdata = this.testdata;
  var data = [
    {
      title: 'Hydraulics2',
      text: 'Augmented reality brings a new vision to hydraulic control',
      image: {
        mobile: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
        tablet: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
        desktop: '/content/dam/eaton/images/story_01.png',
        altText: 'Image 1'
      },
      link: {
        text: '',
        url: 'http://www.eaton.com/',
        target: '_self'
      }
    },
    {
      title: 'Lighting',
      text: 'Lighting for sports venues: how LEDs are transforming the game',
      image: {
        mobile: '/content/dam/eaton/images/FeaturedStory_Img2_mob.png',
        tablet: '/content/dam/eaton/images/FeaturedStory_Img2_mob.png',
        desktop: '/content/dam/eaton/images/story_02.png',
        altText: 'Image 2'
      },
      link: {
        text: '',
        url: 'http://www.eaton.com/',
        target: '_self'
      }
    },
    {
      title: 'Hydraulics',
      text: 'Augmented reality brings a new vision to hydraulic control',
      image: {
        mobile: '/content/dam/eaton/images/FeaturedStory_Img3_mob.png',
        tablet: '/content/dam/eaton/images/FeaturedStory_Img3_mob.png',
        desktop: '/content/dam/eaton/images/story_03.png',
        altText: 'Image 3'
      },
      link: {
        text: '',
        url: 'http://www.eaton.com/',
        target: '_self'
      }
    },
    {
      title: 'Hydraulics3',
      text: 'Augmented reality brings a new vision to hydraulic control',
      image: {
        mobile: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
        tablet: '/content/dam/eaton/images/FeaturedStory_Img2_mob.png',
        desktop: '/content/dam/eaton/images/story_02.png',
        altText: 'Image 4',
      },
      link: {
        text: '',
        url: 'http://www.eaton.com/',
        target: '_self'
      }
    },
    {
      title: 'Hydraulics5',
      text: 'Augmented reality brings a new vision to hydraulic control',
      image: {
        mobile: '/content/dam/eaton/images/FeaturedStory_Img1_mob.png',
        tablet: '/content/dam/eaton/images/FeaturedStory_Img2_mob.png',
        desktop: '/content/dam/eaton/images/story_02.png',
        altText: 'Image 5',
      },
      link: {
        text: '',
        url: 'http://www.eaton.com/',
        target: '_self'
      }
    }
  ];

  // Return an Array with 1 Item only
  //--------------
  if ((typeof(testdata) != "undefined") && (testdata == "single-item")) {
    data = [].concat(data[0]);
  }

  return data;
});
