// 后面也要封装函数
var index = 0;
$('.wrapper span').click (function () {
    $('.wrapper .tab-item')
      .eq(index)
      .fadeIn()
      .siblings()
      .fadeOut();
    $('.products .main')
    .eq(index)
    .fadeIn()
    .siblings()
    .fadeOut();
    index++;
    if(index == 3) {
        index = 0;
    }
});
var flag = setInterval (function () {
    $('.wrapper span').click(); 
},3000);


$('.left_life_cont').mouseover (function () {
     clearInterval(flag);
});
$('.left_life_cont').mouseleave (function () {
    flag = setInterval (function () {
        $('.wrapper span').click(); 
    },3000);
});