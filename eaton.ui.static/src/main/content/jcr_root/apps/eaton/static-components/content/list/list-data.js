var App = App || {};

App.List = (function (jQuery) {
    "use strict";
    var componentClass = jQuery(".list-default");

    var init = function () {
        $("#myCarousel").carousel({
            pause: true,
            interval: false,
        });
    };
    
    if (componentClass.length > 0) {
        init();
    }
})(jQuery);