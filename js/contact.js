$(document).ready(function () {
    //聯絡我
    $('.contact-btn').click(function (e) {
        $('body').addClass('scroll-off');
        $('.contact').fadeIn(1000);
        $('.contact-area').removeClass('move-defult').addClass('move-active');
        return false;
    });

    $('.contact').click(function (e) {
        $('body').removeClass('scroll-off');
        $('.contact').fadeOut(1000);
        $('.contact-area').removeClass('move-active').addClass('move-defult');
    });

    $('.contact-area-btn').click(function (e) {
        event.stopPropagation();
    });
});