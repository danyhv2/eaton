'use strict';
use(function () {

  var data = {};
  var testdata = this.testdata;

  data.default = {
    eyebrowCta:  {
      title: 'NETWORK SERVER STORAGE UPS',
      href: '#take-me-somewhere',
      target: '_blank'
    },

    productName: '9PX UPS',

    // set to false if you requiere postbacks insted hide/show behaviors
    // setting graphicToggle to false adds regular <a>
    graphicToggle: false,

    // SKU use dark teheme
    useDarktheme: true,

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
        icon: 'tiles',
        title: 'Models',
        href: '#models',
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
          title: 'Live chat',
          href: '#live-chat',
          target: '_blank'
        }
      ]
    }
  };

  if ((typeof(testdata) != "undefined") && (testdata == "tab-models")) {
    data.default.tabs[0].selected = false;
    data.default.tabs[1].selected = true;
    data.default.tabs[2].selected = false;
  }

  if ((typeof(testdata) != "undefined") && (testdata == "tab-resources")) {
    data.default.tabs[0].selected = false;
    data.default.tabs[1].selected = false;
    data.default.tabs[2].selected = true;
  }

  // View Variation
  // TODO: Review if the object is being cloned properly
  data.graphicToggle = data.default;
  data.graphicToggle.graphicToggle = true;

  return data;

});
