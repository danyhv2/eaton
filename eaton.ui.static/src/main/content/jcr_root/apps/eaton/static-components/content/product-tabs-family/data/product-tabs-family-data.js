"use strict";
use(function () {
    var featuredTopic = {};
    featuredTopic.title = "Designing tomorrow's innovation, today.";
    featuredTopic.paragraph = 'Together, we can create more powerful and efficient ways to keep communities and commerce running 24/7. we have resources and tools to help you solve problems every day.';

    featuredTopic.leftList = {
      title: 'For design engineers',
      items: [
        { title: '2D/3D models', href: '#si', target: '_blank' },
        { title: 'Software downloads', href: '#sec' , target: '_blank'},
        { title: 'On-demmand presentations', href: '#cp', target: '_blank'} ]
    };

    featuredTopic.rightList = {
      title: 'For IT professionals',
      items: [
        { title: 'Installations guide', href: '#annual', target: '_blank' },
        { title: 'Software & formware downloads', href: '#q4', target: '_blank'},
        { title: 'IT Handbooks', href: '#report', target: '_blank'} ]
    };

    featuredTopic.mainCta =  {
      title: 'View Tools & downloads', 
      href: '#how-to',
      target: '_blank'
    };
    Href = '';

    return featuredTopic;
});
