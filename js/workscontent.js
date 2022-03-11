$(document).ready(function () {
    //
    WorksContentWidth();
    $(window).resize(function () {
        WorksContentWidth();
    });
    //定義作品陳列頁面的寬度
    function WorksContentWidth(params) {
        var WorksContentWidth = $('.works-content').width();
        var WorksListWidth = $('.works-content-list').innerWidth();
        $('.works-content-area').width(WorksContentWidth - WorksListWidth);
    }
});