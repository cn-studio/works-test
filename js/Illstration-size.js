$(document).ready(function () {
    //
    IllstrationSize();
    $(window).resize(function () {
        IllstrationSize();
    });
    //動態設定技術專長插圖尺寸
    function IllstrationSize() {
        var DrawHei = $('.expertise-area-img > img').width();
        var Experien = $('.experience-area-img > img').width();
        $('.expertise-area-img').css('height', DrawHei);
        $('.experience-area-img').css('height', Experien);
    }
});