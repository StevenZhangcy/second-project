// 鼠标进入li中 div向上平移50像素
$('#know_cont li').mouseenter (function () {
    $(this).children('div').addClass('active');
    $(this).addClass('active')
});

$('#know_cont li').mouseleave (function () {
    $(this).children('div').removeClass('active');
    $(this).removeClass('active')
});
