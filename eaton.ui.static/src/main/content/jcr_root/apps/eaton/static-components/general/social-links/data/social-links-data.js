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
      url: '#facebook',
      icon: '/content/dam/eaton/images/sociallinks/facebook.png',
      target: '_blank'
    },
    {
      title: 'Twitter',
      url: '#twitter',
      icon: '/content/dam/eaton/images/sociallinks/twitter.png',
      target: '_blank'
    },
    {
      title: 'Google+',
      url: '#google-plus',
      icon: '/content/dam/eaton/images/sociallinks/google-plus.png',
      target: '_blank'
    },
    {
      title: 'LinkedIn',
      url: '#linked-in',
      icon: '/content/dam/eaton/images/sociallinks/linked-in.png',
      target: '_blank'
    },
    {
      title: 'Pinterest',
      url: '#pinterest',
      icon: '/content/dam/eaton/images/sociallinks/pinterest.png',
      target: '_blank'
    }
  ];

  return data;
});
