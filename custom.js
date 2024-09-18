(function ($) {
    "use strict";

    // Check if an element exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    // Function to fix the header on scroll
    function toggleHeaderFix() {
        $('body').toggleClass('fixed-header', $(window).scrollTop() >= 100);
    }

    // Document on Ready
    $(document).ready(function () {
        toggleHeaderFix();
    });

    // Document on Scroll
    $(window).on("scroll", toggleHeaderFix);

})(jQuery);
