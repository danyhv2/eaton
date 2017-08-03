"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "single-carousel")) {
        data = {
            cards: [
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 1',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 2',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 3',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 4',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                }
            ]
        }
    } else {
        data =
        {
            cards: [
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 1',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 2',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 3',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 4',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 5',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 6',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton S-Series Enlosure',
                    image: '/content/dam/eaton/images/product.png',
                    image_alt: 'Image 7',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                },
                {
                    title: 'Eaton 9px Family',
                    text: 'Eaton FlexPDU& HotSwap MBP',
                    image: '/content/dam/eaton/images/product2.png',
                    image_alt: 'Image 8',
                    link: 'http://www.eaton.com/',
                    target: '_blank'
                }
            ]
        }
    }

    return data;
});
