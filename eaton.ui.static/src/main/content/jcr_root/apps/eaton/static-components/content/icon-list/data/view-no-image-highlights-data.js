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
        tcsText: 'Increase life by 50<div class="icon-list-no-image-highlights__symbol">%</div>'
      },
      {
        title: 'predictpulse service',
        text: '$18B',
        tcsText: '<div class="icon-list-no-image-highlights__symbol">$</div>18B'
      }
    ]
    return data;
});
