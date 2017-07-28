"use strict";
use(function () {
    var data;
    var testdata=this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "content")) {
      data = {
        links: [
          {
            text: '9PX700RT'
          },
          {
            text: '9PX1000RT'
          },
          {
            text: '9PX1500RT'
          },
          {
            text: '9PX1500RTN'
          },
          {
            text: '9PX2000RT' 
          }
        ]
      };
    } else {
      data = {
        links: [
          {
            text: 'Competitive cross reference tool',
            url: '#',
            target: '_self'
          },
          {
            text: 'Order a catalog',
            url: '#',
            target: '_self'
          },
          {
            text: 'Rack selection checklist',
            url: '#',
            target: '_self'
          },
          {
            text: 'Find a ditributor',
            url: '#',
            target: '_self'
          }
        ]
      };
    }
    
    return data;
});