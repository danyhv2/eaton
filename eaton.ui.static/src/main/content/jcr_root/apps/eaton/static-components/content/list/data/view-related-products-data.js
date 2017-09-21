"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "single-carousel")) {
        data = [
            {
                cards: [
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText:'Image 1'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          tablet: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          desktop: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText: 'Image 2',
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile: '/content/dam/eaton/images/products/product-3-thumbnail.png',
                          tablet: '/content/dam/eaton/images/products/product-3-thumbnail.png',
                          desktop: '/content/dam/eaton/images/products/product-3-thumbnail.png',
                          altText: 'Image 3',
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          tablet: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          desktop: '/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText: 'Image 4',
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    }
                ],
                header: 'Designed to work together',
                description: 'Discover other Eaton products and accesories built to enhance this product.'
            }

        ]
    } else {
        data =
            {
                cards: [
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-3-thumbnail.png',
                          altText:'Image 1'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText:'Image 2'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-3-thumbnail.png',
                          altText:'Image 3'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText:'Image 4'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-3-thumbnail.png',
                          altText:'Image 5'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText:'Image 6'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton S-Series Enlosure',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-3-thumbnail.png',
                          altText:'Image 7'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    },
                    {
                        title: 'Eaton 9px Family',
                        text: 'Eaton FlexPDU& HotSwap MBP',
                        image: {
                          mobile:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          tablet:'/content/dam/eaton/images/lorempixel/technics/1000x1000-4.jpeg',
                          desktop:'/content/dam/eaton/images/products/product-1-thumbnail.png',
                          altText:'Image 8'
                        },
                        link: 'http://www.eaton.com/',
                        target: '_blank'
                    }
                ],
                header: 'Designed to work together',
                description: 'Discover other Eaton products and accesories built to enhance this product.'
            }
    }

    return data;
});
