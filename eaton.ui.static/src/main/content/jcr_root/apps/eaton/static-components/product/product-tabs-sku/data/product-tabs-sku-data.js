"use strict";
use(function () {
    var data = {};

    data.toggleGraphic = {
      eyebrowCta:  {
        title: 'NETWORK SERVER STORAGE UPS',
        href: '#take-me-somewhere',
        target: '_blank'
      },

      productName: '9PX UPS',

      // set to false if you requiere postbacks insted hide/show things
      // setting graphicToggle to false adds regular <a>
      graphicToggle: true,

      // product tabs SKU use light theme
      useDarktheme: false,

      // min 1, max 3 tabs
      tabs: [
        {
          icon: 'doc-text',
          title: 'Overview',
          href: '#overview',
          target: '_blank',
          selected: true
        },
        {
          icon: 'list-items',
          title: 'Specifications',
          href: '#specifications',
          target: '_blank',
          selected: false
        },
        {
          icon: 'doc-download',
          title: 'Resources',
          href: '#Resources',
          target: '_blank',
          selected: false
        }
      ],

      dropdown: {
        label : 'How to buy',
        options : [
          {
            icon: 'headset',
            title: 'Request a quote',
            href: '#request-a-quote',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'Find a reseller',
            href: '#find-a-reseller',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'Order a catalog',
            href: '#order-a-catalog',
            target: '_blank'
          },
          {
            icon: 'phone',
            title: 'Call toll-free 1 800 365 5794',
            href: '#18003655794',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'live chat',
            href: '#live-chat',
            target: '_blank'
          }
        ]
      }
    };


    data.linkNavigation = {
      eyebrowCta:  {
        title: 'NETWORK SERVER STORAGE UPS',
        href: '#take-me-somewhere',
        target: '_blank'
      },

      productName: '9PX UPS',

      // set to false if you requiere postbacks insted hide/show things
      // setting graphicToggle to false adds regular <a>
      graphicToggle: false,

      // SKU use ligth theme
      useDarktheme: false,

      // min 1, max 3 tabs
      tabs: [
        {
          icon: 'doc-text',
          title: 'Overview',
          href: '#overview',
          target: '_blank',
          selected: false
        },
        {
          icon: 'list-items',
          title: 'Specifications',
          href: '#specifications',
          target: '_blank',
          selected: true
        },
        {
          icon: 'doc-download',
          title: 'Resources',
          href: '#Resources',
          target: '_blank',
          selected: false
        }
      ],

      dropdown: {
        label : 'How to buy',
        options : [
          {
            icon: 'headset',
            title: 'Request a quote',
            href: '#request-a-quote',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'Find a reseller',
            href: '#find-a-reseller',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'Order a catalog',
            href: '#order-a-catalog',
            target: '_blank'
          },
          {
            icon: 'phone',
            title: 'Call toll-free 1 800 365 5794',
            href: '#18003655794',
            target: '_blank'
          },
          {
            icon: 'tiles',
            title: 'Live chat',
            href: '#live-chat',
            target: '_blank'
          }
        ]
      }
    };


    return data;
});
