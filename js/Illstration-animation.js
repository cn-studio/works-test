$(document).ready(function () {
    $(window).scroll(function () {
        //技術專長動畫
        var WindowWidth = window.innerWidth;
        var ScreenHeight = document.body.clientHeight;
        var WindowScrollTop = $(window).scrollTop();
        var DesignTop = $('.design').offset().top;
        var DesignHei = $('.design').height();
        var CodingTop = $('.coding').offset().top;
        var CodingHei = $('.coding').height();
        var DrawTop = $('.drawing').offset().top;
        var DrawHei = $('.drawing').height();
        //if判斷，在行動裝置下，畫面滾動到指定位置插圖動畫開啟
        //else if判斷，在平板、電腦裝置下，插圖動畫常駐撥放
        //else判斷，在手機裝置下，插圖畫面常駐為關閉
        if (WindowWidth <= 480 && WindowScrollTop + ScreenHeight * 0.5 >= DesignTop && WindowScrollTop <= DesignTop + DesignHei) {
            $('.design').children('img').eq(1).css('animation', 'design1-5 2.5s linear infinite');
            $('.design').children('img').eq(2).css('animation', 'design1-4 1.25s linear infinite alternate');
            $('.design').children('img').eq(3).css('animation', 'design1-3 2.5s linear infinite');
            $('.design').children('img').eq(4).css('animation', 'design1-2 1.25s linear infinite alternate');
        } else if (WindowWidth >= 480) {
            $('.design').children('img').eq(1).css('animation', 'design1-5 2.5s linear infinite');
            $('.design').children('img').eq(2).css('animation', 'design1-4 1.25s linear infinite alternate');
            $('.design').children('img').eq(3).css('animation', 'design1-3 2.5s linear infinite');
            $('.design').children('img').eq(4).css('animation', 'design1-2 1.25s linear infinite alternate');
        }
        else {
            $('.design').children('img').css('animation', 'none');
        }
        //
        //if判斷，在行動裝置下，畫面滾動到指定位置插圖動畫開啟
        //else if判斷，在平板、電腦裝置下，插圖動畫常駐撥放
        //else判斷，在手機裝置下，插圖畫面常駐為關閉
        if (WindowWidth <= 480 && WindowScrollTop + ScreenHeight * 0.5 >= CodingTop && WindowScrollTop <= CodingTop + CodingHei) {
            $('.coding').children('img').eq(0).css('animation', 'coding1-5 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(1).css('animation', 'coding1-4 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(2).css('animation', 'coding1-3 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(3).css('animation', 'coding1-2 2.5s ease-in-out infinite');
        } else if (WindowWidth >= 480) {
            $('.coding').children('img').eq(0).css('animation', 'coding1-5 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(1).css('animation', 'coding1-4 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(2).css('animation', 'coding1-3 2.5s ease-in-out infinite');
            $('.coding').children('img').eq(3).css('animation', 'coding1-2 2.5s ease-in-out infinite');
        }
        else {
            $('.coding').children('img').css('animation', 'none');
        }
        //
        //if判斷，在行動裝置下，畫面滾動到指定位置插圖動畫開啟
        //else if判斷，在平板、電腦裝置下，插圖動畫常駐撥放
        //else判斷，在手機裝置下，插圖畫面常駐為關閉
        if (WindowWidth <= 480 && WindowScrollTop + ScreenHeight * 0.5 >= DrawTop && WindowScrollTop <= DrawTop + DrawHei) {
            $('.drawing').children('img').eq(0).css('animation', 'drawing1-4 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(2).css('animation', 'drawing1-3 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(3).css('animation', 'drawing1-2 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(4).css('animation', 'drawing1-1 2.5s linear infinite alternate');
        } else if (WindowWidth >= 480) {
            $('.drawing').children('img').eq(0).css('animation', 'drawing1-4 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(2).css('animation', 'drawing1-3 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(3).css('animation', 'drawing1-2 2.5s linear infinite alternate');
            $('.drawing').children('img').eq(4).css('animation', 'drawing1-1 2.5s linear infinite alternate');
        } else {
            $('.drawing').children('img').css('animation', 'none');
        }
    });
});