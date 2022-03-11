$(document).ready(function () {
    //新增一個作品列表的區塊
    $('.works-content').prepend('<ul class="works-content-list"></ul>');
    //
    WorkList('#', '請點選下方作品列表', 'Portfolio');
    WorkList('portfolio-myworks.html', 'C.N | Designer 個人網站', 'Web design');
    WorkList('portfolio-queen.html', '03/08 女王節', 'Web design');
    WorkList('portfolio-handbook.html', '索引數位產品手冊', 'Graphic Design');
    WorkList('portfolio-openbook.html', 'OPENBOOK 好書獎', 'Web design');
    WorkList('portfolio-theater.html', '中大型劇場風險管理初探', 'Graphic Design');
    WorkList('portfolio-deliver.html', '您的知識餐點，正在外送中', 'Web design');
    WorkList('portfolio-taiwanarchieve.html', '台灣政府研究檔案庫', 'UI/UX design');
    WorkList('portfolio-productdm.html', '華藝學術投稿平台', 'Graphic design');
    WorkList('portfolio-bookset.html', '大學五書系列', 'Graphic Design');
    WorkList('portfolio-newyear.html', '虎來報，福虎到', 'Web design');
    WorkList('portfolio-rebuild.html', '重建斯文', 'Graphic design');
    WorkList('portfolio-ainoscosearch.html', '是科探索', 'UI/UX design');
    WorkList('portfolio-SDGS.html', 'SDGs永續發展目標主題書展', 'Web design');
    WorkList('#', '敬請期待...', 'Comming Soon');
    //函示設定 - 動態新增作品列表的內容
    function WorkList(link, name, type) {
        $('.works-content-list').append('<li><a href= ' + link + '><span>' + name + '</span><span>' + type + '</span></a><img src="image/arrow-b.svg"></li>');
    };
});