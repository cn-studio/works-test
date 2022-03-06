$(document).ready(function () {
    $('.student').click(function (e) {
        var VisionBtn = $('.vision').data('status');
        var WebBtn = $('.web').data('status');
        $('.student-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.student-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        if (VisionBtn == "off") {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        } else {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        }
        if (WebBtn == "off") {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        } else {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        }
        return false;
    });
    $('.vision').click(function (e) {
        var DataBtn = $(this).data('status');
        var DataBtnText = $(this).text();
        var WebBtn = $('.web').data('status');
        $('.visual-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        if (DataBtn == 'off' && DataBtnText == '點我') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('視覺設計');
            $(this).siblings('p').html('天盈國際<span></span>');
            $(this).siblings('h3').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal' });
        }
        if (WebBtn == 'on') {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        } else {
            $('.web-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.web-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        }
        return false;
    });
    $('.web').click(function (e) {
        var DataBtn = $(this).data('status');
        var DataBtnText = $(this).text();
        var VisualBtn = $('.vision').data('status');
        $('.web-img > img:first-child').css({ 'opacity': '1', 'visibility': 'visible' });
        $('.web-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.web-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        $('.student-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        if (DataBtn == 'off' && DataBtnText == '點我') {
            $(this).data('status', 'on');
            $(this).siblings('h3').html('資深視覺設計');
            $(this).siblings('p').html('華藝數位<span></span>');
            $(this).siblings('h3').addClass('deep-gray').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'bold', 'color': 'rgb(25, 25, 25)' });
            $(this).siblings('p').css({ 'font-family': 'Noto Sans TC, sans-serif', 'font-weight': 'normal'});
        }
        if (VisualBtn == 'on') {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '1', 'visibility': 'visible' });
            $('.visual-img > img:last-child').css({ 'opacity': '0', 'visibility': 'hidden' });
        } else {
            $('.visual-img > img:first-child').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:nth-child(2)').css({ 'opacity': '0', 'visibility': 'hidden' });
            $('.visual-img > img:last-child').css({ 'opacity': '1', 'visibility': 'visible' });
        }
        return false;
    });
});