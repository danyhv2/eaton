"use strict";
use(function () {
    var data;
    var testdata=this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "content")) {
      data = {
        links: [
          {
            text: '9PX700RT',
            url: '#'
          },
          {
            text: '9PX1000RT',
            url: '#'
          },
          {
            text: '9PX1500RT',
            url: '#'
          },
          {
            text: '9PX1500RTN',
            url: '#'
          },
          {
            text: '9PX2000RT',
            url: '#'
          }
        ]
      };
    } else {
      data = {
        links: [
          {
            text: 'Competitive cross reference tool',
            url: '#'
          },
          {
            text: 'Order a catalog',
            url: '#'
          },
          {
            text: 'Rack selection checklist',
            url: '#'
          },
          {
            text: 'Find a ditributor',
            url: '#'
          }
        ]
      };
    }
    
    return data;
});