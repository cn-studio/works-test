$(document).ready(function () {
    //點擊每個小點去滾動畫面 & 變更點的狀態
    $('.dot').click(function (e) {
        var SrollTop = $($(this).attr('href')).offset().top;
        $('html,body').animate({ scrollTop: SrollTop, }, 1000);
        $('.dot').removeClass('dot-active');
        $('.name').removeClass('name-active');
        $(this).addClass('dot-active');
        $(this).prev('span').addClass('name-active');
        return false;
    });
});