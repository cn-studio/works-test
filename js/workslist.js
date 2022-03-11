$(document).ready(function () {
    //當前頁面增加樣式
    var PageName = $('.works-content-area h1').html();
    var ListLeng = $('.works-content-list li').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-list li').eq(i).children('a').children('span').eq(0).html();
        if (ListName == PageName) {
            $('.works-content-list li').eq(i).addClass('works-list-active');
            $('.works-content-list li').eq(i).children('img').attr('src', 'image/pin.svg').addClass('works-list-btn-locally');
        }
    }

    //移除描述內容的預設行為
    $('.works-content-list li').eq(0).children('a').click(function (e) {
        return false
    });
    $('.works-content-list .works-list-active').children('a').click(function (e) {
        return false
    });
    $('.works-content-list li').eq(ListLeng - 1).children('a').click(function (e) {
        return false
    });
    //
    WorksListSize();
    $(window).resize(function () {
        WorksListSize();
    });
    //指定作品選單尺寸
    function WorksListSize(params) {
        var HeaderHeight = $('header').height();
        var FooterHeight = $('footer').height();
        var MenuHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
        $('.works-content-area').css({ 'margin-top': HeaderHeight });
        $('.works-content-list').css({ 'top': HeaderHeight, 'height': MenuHeight });
    }
});