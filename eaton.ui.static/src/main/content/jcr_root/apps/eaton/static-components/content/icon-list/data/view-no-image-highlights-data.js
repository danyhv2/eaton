// IconList - No Image Highlights
// Please Note: For text - currently the custom field `tcsText` is mapped to the view. - context - html
// This is done to demonstrate how the text will be split when it includes symbols.
// Post integration - Final property to be used - `text`

"use strict";
use(function () {
    var data = {};
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
    return data;
});
