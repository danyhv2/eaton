"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "product-features-no-image")) {
        data = {
            title: 'Need product support?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            icon: '',
            info: '<div class="b-eyebrow-small">Technical Support Contact</div><p>Toll-free customer service</p><p>+1 800 356 7891</p>'
        }
    } else {
        data = {
            title: 'Need product support?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            icon: '',
            info: '<div class="b-eyebrow-small">Technical Support Contact</div><p>Toll-free customer service</p><p>+1 800 356 7891</p>'
        }
    }

    return data;
});

