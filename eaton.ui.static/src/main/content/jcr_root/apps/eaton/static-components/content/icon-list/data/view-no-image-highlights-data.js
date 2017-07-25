// IconList - No Image Highlights
// Please Note: For text - currently the custom field `tcsText` is mapped to the view. - context - html
// This is done to demonstrate how the text will be split when it includes symbols.
// Post integration - Final property to be used - `text`

"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && testdata == "no-image-highlights-1") {
        data.items = [
          {
            title: 'projected dividends in 2017',
            text: '$18B',
            tcsText: '<span class="icon-list-no-image-highlights__symbol">$</span>18B'
          },
          {
            title: 'earnings per share',
            text: '$1.12',
            tcsText: '<span class="icon-list-no-image-highlights__symbol">$</span>1.12'
          },
          {
            title: 'operating margin',
            text: '14.6%',
            tcsText: '14.6<span class="icon-list-no-image-highlights__symbol">%</span>'
          }
        ]
    } else if ((typeof(testdata) != "undefined") && testdata == "no-image-highlights-2") {
      data.items = [
        {
          title: 'power rating',
          text: '1500VA',
          tcsText: '1500VA'
        },
        {
          title: 'voltage',
          text: '120V',
          tcsText: '120V'
        },
        {
          title: 'frequency',
          text: '50/60Hz',
          tcsText: '50/60Hz'
        }
      ]
    } else {
      data.items = [
        {
          title: 'maximize reliability',
          text: 'Maintenance bypass',
          tcsText: 'Maintenance bypass'
        },
        {
          title: 'exclusive abm technology',
          text: 'Increase life by 50%',
          tcsText: 'Increase life by 50<span class="icon-list-no-image-highlights__symbol">%</span>'
        },
        {
          title: 'predictpulse service',
          text: '24/7 monitoring',
          tcsText: '24/7 monitoring'
        }
      ]
    }

    return data;
});
