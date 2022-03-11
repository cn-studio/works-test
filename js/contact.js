$(document).ready(function () {
    //點擊聯繫視窗
    $('.contact-btn').click(function (e) {
        $('body').append('<div class="contact"></div>').addClass('scroll-off');
        $('.contact').append('<div class="contact-area move-defult"></div>');
        $('.contact').fadeIn(1000).css({ 'display': 'flex' })
        $('.contact-area').append('<p>嗨，有任何專業上的需求，歡迎透過下方的信箱按鈕與我聯繫。</p>');
        $('.contact-area').append('<p>email : lincn65987@gmail.com</p>');
        $('.contact-area').append('<a href="mailto:lincn65987@gmail.com" class="contact-area-btn btn">信箱</a>');
        $('.contact-area').append('<span>點擊信箱按鈕外任一處關閉</span>');
        $('.contact-area').removeClass('move-defult').addClass('move-active');
        return false;
    });
    //關閉聯繫視窗
    $('body').on('click', '.contact', function () {
        $('body').removeClass('scroll-off');
        $(this).fadeOut(1000);
        setTimeout(() => {
            $(this).remove();
        }, 1000);
    });
    //防止冒泡，觸發關閉機制
    $('body').on('click', '.contact-area-btn', function () {
        e.stopPropagation();
    });
});