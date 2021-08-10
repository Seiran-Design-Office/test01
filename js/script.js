jQuery(window).on('scroll', function () {
    if (50 < jQuery(this).scrollTop()) {
        jQuery('main').addClass('.change-color');
    } else {
        jQuery('main').removeClass('.change-color');
    }
});
