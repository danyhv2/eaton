// Data
'use strict';
use(function () {

  var header = {};

  header.defaultLabels = {
      country : 'United States',
      language: 'English',
      signIn: 'Sign In'
  };

  header.primaryNavigation = {
    headline: 'We make what matters work*',
    links: [
      { title: 'Products', 'menuCategory': 'mega-menu-products' },
      { title: 'Services', 'menuCategory': 'mega-menu-services' },
      { title: 'Markets', 'menuCategory': 'mega-menu-markets' },
      { title: 'Support', 'menuCategory': 'mega-menu-support' },
      { title: 'Company', 'menuCategory': 'mega-menu-company' }
    ]
  };

  return header;
});
