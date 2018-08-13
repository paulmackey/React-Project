jQuery(document).ready(function () {
    jQuery(document).click(".header_scroll a",function () {
        jQuery('html,body').animate({
            scrollTop: $(".about").offset().top
        },
            'slow');
    });
});