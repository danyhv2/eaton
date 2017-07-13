"use strict";
use(function () {
    var featuredTopic = {};
    featuredTopic.title = "Designing tomorrow's innovation, today.";
    featuredTopic.paragraph = 'Together, we can create more powerful and efficient ways to keep communities and commerce running 24/7. we have resources and tools to help you solve problems every day.';

    featuredTopic.leftList = {
      title: "For design engineers",
      items: [
        { title: '2D/3D models', href: '#si' },
        { title: 'Software downloads', href: '#sec'},
        { title: 'On-demmand presentations', href: '#cp'} ]
    };

    featuredTopic.rightList = {
      title: 'For IT professionals',
      items: [
        { title: 'Installations guide', href: '#annual' },
        { title: 'Software & formware downloads', href: '#q4'},
        { title: 'IT Handbooks', href: '#report'} ]
    };

    featuredTopic.ctaHref = '#how-to';
    featuredTopic.ctaText = 'View Tools & downloads';

    return featuredTopic;
});
