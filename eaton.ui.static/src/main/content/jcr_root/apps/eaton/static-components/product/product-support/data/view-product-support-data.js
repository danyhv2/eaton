"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "unformatted")) {
        data = {
            title: 'Need product support ?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            icon: '',
            info: '<div class="b-eyebrow-small">Technical Support Contact</div><p>Toll-free customer service</p><p>+1 800 356 7891</p>' +
            '<p>Voice</p><p>+1 800 859 9212</p>' +
            '<p>Fax</p><p>+1 800 356 7891</p>'
        }
    } else {
        data = {
            title: 'Need product support?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            icon: '',
            info: '<h3 class="product-support-component__info--title b-eyebrow-small">Technical Support Contact</h3><div class="product-support-component__info--copy b-body-copy-small"><p>Toll-free customer service</p><p>+1 800 356 7891</p>' +
            '<p>Voice</p><p>+1 800 859 9212</p></div>' +
            '<div class="product-support-component__info--copy b-body-copy-small"><p>Fax</p><p>+1 800 356 7891</p><a class="b-small-link" href="mailto:test@eaton.com">test@eaton.com</a></div>'
        }
    }

    return data;
});

