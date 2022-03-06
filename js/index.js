$(document).ready(function () {
    var ScreenHeight = document.body.clientHeight;
    var HeaderHeight = $('header').height();
    //首頁淡入轉場
    $('.fade-out-area').delay(500).fadeOut(1000);
    //首頁畫面高100%
    $('.title').css({ 'height': ScreenHeight});
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        $('.title').css({ 'height': ScreenHeight });
    });
    //header ＆ 滑鼠效果
    $(window).scroll(function () {
        var WindowScroll = $(window).scrollTop();
        var HeaderHeight = $('header').height();
        var TitleHeight = $('.title').height();
        if (WindowScroll > TitleHeight - HeaderHeight) {
            $('header').addClass('bg-color');
        } else {
            $('header').removeClass('bg-color');
        }
        if (WindowScroll >= TitleHeight / 5) {
            $('.mouse').css({ 'opacity': '0', 'visibility': 'hidden' })
        } else {
            $('.mouse').css({ 'opacity': '1', 'visibility': 'visible' })
        }
    });
    //主視覺游標效果
    $('.title').mousemove(function (e) {
        var MouseMoveX = e.clientX;
        var MouseMoveY = e.clientY;
        var WindowWidth = $(window).width();
        if (WindowWidth > 768) {
            $('.title-action-line').css({ 'top': 0 + MouseMoveY * -0.025, 'left': 0 + MouseMoveX * -0.025 });
        } else {
            $('.title-action-line').css({ 'top': 0, 'left': 0 });
        }
    });
    //首頁滑鼠圖示效果
    $('.mouse').click(function (e) {
        var HeaderHeight = $('header').height();
        var WorksFirstTop = $('.works-list').eq(0).children('.works-list-img').offset().top;
        $('html,body').animate({ scrollTop: WorksFirstTop - HeaderHeight }, 1000);
    });
});