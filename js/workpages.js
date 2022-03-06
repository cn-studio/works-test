$(document).ready(function () {
    //上一頁&下一頁動態切換按鈕
    var PageName = $('.works-content-area h1').html();
    var ListLeng = $('.works-content-list li').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-list li').eq(i).children('a').children('span').eq(0).html();
        if (ListName == PageName) {
            var PrevPage = $('.works-content-list li').eq(i-1).children('a').attr('href');
            var NextPage = $('.works-content-list li').eq(i+1).children('a').attr('href');
            $('.works-content-area ul li').eq(0).children('a').attr('href', PrevPage);
            $('.works-content-area ul li').eq(2).children('a').attr('href', NextPage);
            if (i-- <= 0) {
                $('.works-content-area ul li').eq(0).children('a').addClass('works-list-btn-hidden');
            }
            if (i++ >= ListLeng-3) {
                $('.works-content-area ul li').eq(2).children('a').addClass('works-list-btn-hidden');
            }
        }
    }
});