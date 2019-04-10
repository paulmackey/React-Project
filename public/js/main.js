jQuery(document).ready(function () {
    jQuery(document).on('click','.header_scroll',function () {

        jQuery('html,body').animate({
            scrollTop: $("#projects").offset().top
        },
            'slow');
    });
});
