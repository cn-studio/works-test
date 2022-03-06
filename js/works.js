$(document).ready(function () {
    var HeaderHeight = $('header').height();
    var FooterHeight = $('footer').height();
    var PageName = $('.works-content-area h1').html();
    //動態作品選單
    $('.works-content').prepend('<ul class="works-content-list"></ul>');
    function WorkList(link, name, type) {
        $('.works-content-list').append('<li><a href= ' + link + '><span>' + name + '</span><span>' + type + '</span></a><img src="image/arrow-b.svg"></li>');
    };
    WorkList('theater.html', '中大型劇場風險管理初探', 'Graphic Design');
    WorkList('openbook.html', 'OPENBOOK 好書獎', 'Web design');
    WorkList('handbook.html', '索引數位產品手冊', 'Graphic Design');
    WorkList('deliver.html', '您的知識餐點，正在外送中', 'Web design');
    WorkList('bookset.html', '大學五書系列', 'Graphic Design');
    WorkList('newyear.html', '虎來報，福虎到', 'Web design');
    WorkList('rebuild.html', '重建斯文', 'Graphic design');
    WorkList('＃', '3/8女王節', 'Web design');
    WorkList('＃', '是科探索', 'UI/UX design');
    WorkList('＃', '台灣公報議事錄', 'UI/UX design');
    WorkList('＃', 'SDGS', 'Web design');
    WorkList('＃', 'C.N | Designer', 'Web design');
    WorkList('#', '敬請期待...', 'Comming Soon');
    //當前頁面增加樣式
    var ListLeng = $('.works-content-list li').length;
    for (let i = 0; i < ListLeng; i++) {
        var ListName = $('.works-content-list li').eq(i).children('a').children('span').eq(0).html();
        if (ListName == PageName) {
            $('.works-content-list li').eq(i).children('img').attr('src', 'image/pin.svg').addClass('works-list-btn-active');
        }
    }
    //移除最後一個項目的預設行為 & 跳出視窗
    $('.works-content-list').children('li').eq(ListLeng - 1).children('a').click(function (e) {
        return false
    });
    //左欄位指定高度
    var MenuHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
    //左欄位單項上下留白
    $('.works-content-area').css({ 'margin-top': HeaderHeight });
    $('.works-content-list').css({ 'top': HeaderHeight, 'height': MenuHeight });
    $(window).resize(function () {
        var HeaderHeight = $('header').height();
        var FooterHeight = $('footer').height();
        var MenuHeight = document.body.clientHeight - HeaderHeight - FooterHeight;
        $('.works-content-area').css({ 'margin-top': HeaderHeight });
        $('.works-content-list').css({ 'top': HeaderHeight, 'height': MenuHeight });
    });
});