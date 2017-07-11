'use strict';
use(function () {

  var data = {};

  /**
  * Footer Top
  */
  data.text = 'A Eaton is a power management company with 2016 sales of $19.7 billion. We provide energy-efficient solutions that help our customers effectively manage electrical, hydraulic and mechanical power more efficiently, safely and sustainably. Eaton is dedicated to improving the quality of life and the environment through the use of power management technologies and services. Eaton has approximately 95,000 employees and sells products to customers in more than 175 countries.';


  data.linkListCompany = {
    eyebrow: 'Our Company',
    links: [
      {
        title: 'About Eaton',
        url: '#',
        target: '_blank'
      },
      {
        title: 'Careers',
        url: '#',
        target: '_blank'
      },
      {
        title: 'Investor relations',
        url: '#',
        target: '_blank'
      },
      {
        title: 'Inclusions & Diversity',
        url: '#',
        target: '_blank'
      }
    ]
  };


  data.linkListPopular = {
    eyebrow: 'Popular Links',
    links: [
      { title: 'Product Documentation', url: '#', target: '_blank' },
      { title: 'Tools & Downloads', url: '#', target: '_blank' },
      { title: 'Eaton in the news', url: '#', target: '_blank' },
      { title: 'Success stories', url: '#', target: '_blank' }
    ]
  };


  data.socialLinks = {
    eyebrow: 'Lets Talk Big Ideas',
    pageLink: {
      title: 'View all social media',
      url: '#social-media-all'
    },
    links: [
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
    ]
  };




  /**
  * Footer Bottom
  */

  data.bottom = {};

  data.bottom.linkList = {
    eyebrow: '',
    links: [
      {
        title: 'Terms & Conditions',
        url: '#terms-and-conditions',
        target: '_self'
      },
      {
        title: 'Privacy, Cookies and Data Protection Policy',
        url: '#privacy-policy',
        target: '_self'
      },
      {
        title: 'Site Map',
        url: '#site-map',
        target: '_self'
      }
    ]
  } ;

  data.bottom.copyright = '© 2017 Eaton. All Rights Reserved.'

  return data;
});
