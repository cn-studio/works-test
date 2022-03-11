$(document).ready(function () {
    //讓首頁畫面有淡入的效果
    $('.fade-out-area').delay(500).fadeOut(1000);
    //
    Vision();
    $(window).resize(function () {
        Vision();
    });
    //函式設定 - 讓動畫撐滿畫面
    function Vision() {
        var ScreenHeight = document.body.clientHeight;
        $('.title').css({ 'height': ScreenHeight });
    }
});