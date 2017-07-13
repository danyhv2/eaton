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
      icon: '/content/dam/eaton/images/socialmedia/facebook.png'
    },
    {
      title: 'Twitter',
      url: '#twitter',
      icon: '/content/dam/eaton/images/socialmedia/twitter.png'
    },
    {
      title: 'Google+',
      url: '#google-plus',
      icon: '/content/dam/eaton/images/socialmedia/google-plus.png'
    },
    {
      title: 'LinkedIn',
      url: '#linked-in',
      icon: '/damadmin/social/linked-in.png'
    }
  ];

  return data;
});
