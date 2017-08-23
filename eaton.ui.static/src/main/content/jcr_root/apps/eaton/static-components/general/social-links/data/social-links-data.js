'use strict';
use(function () {

  var data = {};


  data.eyebrow = 'Lets Talk Big Ideas';

  data.pageLink = {
    title: 'View all social media',
    titleA11y: 'View list of available social media',
    url: '#social-media-all'
  };

  data.links = [
    {
      title: 'Facebook',
      icon: '/content/dam/eaton/images/sociallinks/facebook.png',
      url: 'https://facebook.com',
      target: '_blank'
    },
    {
      title: 'Twitter',
      icon: '/content/dam/eaton/images/sociallinks/twitter.png',
      url: 'https://twitter.com',
      target: '_blank'
    },
    {
      title: 'Google+',
      icon: '/content/dam/eaton/images/sociallinks/google-plus.png',
      url: 'https://plus.google.com',
      target: '_blank'
    },
    {
      title: 'LinkedIn',
      icon: '/content/dam/eaton/images/sociallinks/linked-in.png',
      url: 'https://linkedin.com',
      target: '_blank'
    },
    {
      title: 'Pinterest',
      icon: '/content/dam/eaton/images/sociallinks/pinterest.png',
      url: 'https://pinterest.com',
      target: '_blank'
    }
  ];

  return data;
});
