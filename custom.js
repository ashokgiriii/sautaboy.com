
(function ($) {
    "use strict";

    var WEA = {};
    var plugin_track = 'assets/vendor/';
    $.fn.exists = function () {
        return this.length > 0;
    };



    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    WEA.HeaderFixd = function () {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $('body').addClass('fixed-header');
        }
        else {
            $('body').removeClass('fixed-header');
        }
    }






    // Document on Ready
    $(document).ready(function () {
        WEA.HeaderFixd(),
            $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    });

    // Document on Scrool
    $(window).on("scroll", function () {
        WEA.HeaderFixd();
    });

    // Window on Resize
    $(window).on("resize", function () {
    });


})(jQuery);