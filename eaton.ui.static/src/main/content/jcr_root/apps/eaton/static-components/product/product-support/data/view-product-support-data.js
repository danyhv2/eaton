"use strict";
use(function () {
    var data = {};
    var testdata = this.testdata;

    if ((typeof(testdata) != "undefined") && (testdata == "unformatted")) {
        data = {
            title: 'Need product support ?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            info: 'Technical Support Contact Toll-free customer service +1 800 356 7891 Voice +1 800 859 9212 Fax +1 800 356 7891'
        }
    } else {
        data = {
            title: 'Need product support?',
            copy: 'We are here to provide tips and helpful information when you need it most.',
            info: '<p><strong>TECHNICAL SUPPORT CONTACT</strong></p><p>Toll-free customer service: +1 800 356 7891</p>' +
            '<p>Voice: +1 800 859 9212</p>' +
            '<p>Fax: +1 800 356 7891</p><a href="mailto:test@eaton.com">test@eaton.com</a>'
        }
    }

    return data;
});

