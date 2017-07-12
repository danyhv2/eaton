"use strict";
use(function () {
    var featuredTopic = {};
    featuredTopic.title = 'Invest in something bigger';
    featuredTopic.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    featuredTopic.leftList = {
      title: "Stock Information",
      items: [
        { title: 'Stock information', href: '#si' },
        { title: 'SEC filings', href: '#sec'},
        { title: 'Company profile', href: '#cp'} ]
    };

    featuredTopic.rightList = {
      title: 'Financial reports',
      itmes: [
        { title: '2016 annual and sustainabillity report', href: '#annual' },
        { title: '2016 Q4 quarterty report', href: '#q4'},
        { title: 'Dividend report', href: '#report'} ]
    };

    featuredTopic.ctaHref = '#how-to';
    featuredTopic.ctaText = 'See How';

    return featuredTopic;
});
