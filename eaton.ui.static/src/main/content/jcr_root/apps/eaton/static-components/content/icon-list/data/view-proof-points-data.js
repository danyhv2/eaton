// IconList - Proof points
// Please Note: For text - currently the custom field `tcsText` is mapped to the view. - context - html
// This is done to demonstrate how the text will be split when it includes symbols.
// Post integration - Final property to be used - `text`

"use strict";
use(function () {
    var data = {};
    data.items = [
      {
        title: 'of board represent diverse groups',
        text: '25%',
        tcsText: '<div class="icon-list-proof-points__fact">25</div><div class="icon-list-proof-points__symbol">%</div>',
        image: '/content/dam/eaton/images/iconlist/icon-proof-points-1.jpg'
      },
      {
        title: 'reduction of energy consumption',
        text: '19%',
        tcsText: '<div class="icon-list-proof-points__fact">19</div><div class="icon-list-proof-points__symbol">%</div>',
        image: '/content/dam/eaton/images/iconlist/icon-proof-points-2.jpg'
      },
      {
        title: 'countries served around the world',
        text: '175',
        tcsText: '<div class="icon-list-proof-points__fact">175</div>',
        image: '/content/dam/eaton/images/iconlist/icon-proof-points-3.jpg'
      }
    ]
    return data;
});
