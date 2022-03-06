$(document).ready(function () {
    var HeaderHeight = $('header').height();
    var WindowWidth = window.innerWidth;
    var WorksWidth = $('.works-list').width();
    var WorksMargin = $('.works-list-m').css('margin-right');
    //
    if (WindowWidth > 960) {
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
    } else if (WindowWidth < 960 && WindowWidth > 480) {
        $('.works-list-img-area').height(WorksWidth * 0.75);
        $('.works-list-img-area').css({ 'margin-top': '2.5%', 'margin-bottom': '2.5%' });
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
    }
    else {
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': '10%', 'margin-bottom': '5%' });
        $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
        $('.works-list-img-area').eq(1).css({ 'margin-top': '12.5%' })
    }
    //
    $(window).resize(function () {
        var HeaderHeight = $('header').height();
        var WindowWidth = window.innerWidth;
        var WorksWidth = $('.works-list').width();
        var WorksMargin = $('.works-list-m').css('margin-right');
        $('.works-list-img-area').height(WorksWidth);
        $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
        if (WindowWidth > 960) {
            $('.works-list-img-area').height(WorksWidth);
            $('.works-list-img-area').css({ 'margin-top': WorksMargin, 'margin-bottom': WorksMargin });
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
        } else if (WindowWidth < 960 && WindowWidth > 480) {
            $('.works-list-img-area').height(WorksWidth * 0.75);
            $('.works-list-img-area').css({ 'margin-top': '2.5%', 'margin-bottom': '2.5%' });
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': HeaderHeight })
        }
        else {
            $('.works-list-img-area').height(WorksWidth);
            $('.works-list-img-area').css({ 'margin-top': '10%', 'margin-bottom': '5%' });
            $('.works-list-img-area').eq(0).css({ 'margin-top': HeaderHeight })
            $('.works-list-img-area').eq(1).css({ 'margin-top': '12.5%' })
        }
    });
    //
    function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            $('.works-list-img-area>div:nth-child(2)').css({ 'opacity': '0' });
        }
    }
    detectmob();
});