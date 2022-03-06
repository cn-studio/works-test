$(document).ready(function () {
    //定義插圖長寬
    var DrawHei = $('.expertise-area-img > img').width();
    var Experien = $('.experience-area-img > img').width();
    var SectionNum = $('section').length;
    $('.expertise-area-img').css('height', DrawHei);
    $('.experience-area-img').css('height', Experien);
    $(window).resize(function () {
        var DrawHei = $('.expertise-area-img img').width();
        var Experien = $('.experience-area-img img').width();
        $('.expertise-area-img').css('height', DrawHei);
        $('.experience-area-img').css('height', Experien);
    });
    $(window).scroll(function () {
        var WindowWidth = window.innerWidth;
        var ScreenHeight = document.body.clientHeight;
        var WindowScrollTop = $(window).scrollTop();
        var SectionNum = $('section').length;
        var AboutTop = $('.about').offset().top;
        var SkillTop = $('#skill').offset().top;
        var DesignTop = $('.design').offset().top;
        var DesignHei = $('.design').height();
        var CodingTop = $('.coding').offset().top;
        var CodingHei = $('.coding').height();
        var DrawTop = $('.drawing').offset().top;
        var DrawHei = $('.drawing').height();
        //關於我輪播控制點
        for (let i = 0; i < SectionNum; i++) {
            if (WindowScrollTop * 1.25 >= $('section').eq(i).offset().top) {
                $('.dot').removeClass('dot-active');
                $('.name').removeClass('name-active');
                $('.dot').eq(i).addClass('dot-active');
                $('.dot').eq(i).prev('span').addClass('name-active');
            }
        }
        //Action版插圖
        if (WindowScrollTop > AboutTop && WindowScrollTop < SkillTop) {
            $('.action-img').css({ bottom: (WindowScrollTop - AboutTop) * 1 });
        } else {
            $('.action-img').css({ bottom: '0' });
        }
        //插圖動畫手機版
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
        $('.experience-area').each(function (index, element) {
            var thisTop = $(this).offset().top;
            if (WindowWidth <= 480) {
                $(this).removeClass('fade-in').addClass('fade-out');
                if (WindowScrollTop + ScreenHeight * 0.5 >= thisTop) {
                    $(this).removeClass('fade-out').addClass('fade-in');
                } else {
                    $(this).removeClass('fade-in').addClass('fade-out');
                }
            } else {
                $(this).removeClass('fade-out').addClass('fade-in');
            }
        });
    });
    //輪播控制點
    $('.dot').click(function (e) {
        var SrollTop = $($(this).attr('href')).offset().top;
        var HeaderHeight = $('header').height();
        $('html,body').animate({ scrollTop: SrollTop, }, 1000);
        $('.dot').removeClass('dot-active');
        $('.name').removeClass('name-active');
        $(this).addClass('dot-active');
        $(this).prev('span').addClass('name-active');
        return false;
    });
});