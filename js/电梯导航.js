// 当页面滚动的时候
$(window).scroll(function () {
    // 判断滚动距离大于400的时候 电梯导航显示
    if ($(window).scrollTop() > 0) {
        // $('.elevator').addClass('active');
        $('.elevator').fadeIn();
    } else {
        // $('.elevator').removeClass('active')
        $('.elevator').fadeOut();
    }
    // 判断页面滚动的距离 对应的高度  高亮显示
    if ($(window).scrollTop() >= $('#j_know').offset().top) {
        selected (7);
    }else if ($(window).scrollTop() >= $('#j_phone').offset().top) {
        selected (6);
    }else if ($(window).scrollTop() >= $('#j_family').offset().top) {
        selected (5);
    }else if ($(window).scrollTop() >= $('#j_baby').offset().top) {
        selected (4);
    }else if ($(window).scrollTop() >= $('#j_face').offset().top) {
        selected (3);
    }else if ($(window).scrollTop() >= $('#j_life').offset().top) {
        selected (2);
    }else if ($(window).scrollTop() >= $('#j_food').offset().top) {
        selected (1);
    }
    else if ($(window).scrollTop() >= $('#j_import').offset().top) {
        selected (0);
    }
});

// 点击返回按钮  页面返回顶部
// $('.elevator li a:eq(8)').on('click',function () {
//     $('html,body').animate(function () {
//         scrollTop: 0
//     },200)
// });

$('.elevator li:eq(8)').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 200)
});

//封装一个函数 给每一个li注册点击事件 页面滚动到相应的高度
function getHeight(index, name) {
    $('.elevator li').eq(index).click(function () {
        $('html,body').animate({
            scrollTop: $(name).offset().top
        }, 200)
    })
};
getHeight(0, '#j_import');
getHeight(1, '#j_food');
getHeight(2, '#j_life');
getHeight(3, '#j_face');
getHeight(4, '#j_baby');
getHeight(5, '#j_family');
getHeight(6, '#j_phone');
getHeight(7, '#j_know');

function selected (number) {
    $('.elevator ul li')
    .eq(number)
    .addClass('selected')
    .siblings()
    .removeClass('selected');
}