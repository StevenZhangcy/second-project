
// 广告部分
$('.advertisement_wrap .big_pic_close').click(function(){
    $('.advertisement_wrap').hide()
 });
 
// 二级页面
$('.hd_allsort li').mouseover(function(){
    var num = $(this).num();
 
    $(this)
    .children('div')
    .show()

    
});
$('.hd_allsort li').mouseout(function(){
    $(this)
    .children('div')
    .hide()

});

// 第一屏的轮播
var num = 0;
var maxIndex = $('.promo_wrapper .promo_wrapper_pic li').length-1;
setInterval(function(){
    
        // var num = $(this).num();
        // console.log(num);
        // console.log($('.promo_wrapper .promo_wrapper_pic li').eq(num))
       $('.promo_wrapper .promo_wrapper_pic li')
       .eq(num)
       .fadeOut();
       if(num < maxIndex){
        num++;
    }else{
        num = 0;
    }
       $('.promonum_show li')
       .eq(num)
       .addClass('cur')
       .children('i')
       .addClass('cur')
       .fadeIn()
       .parent()
       .siblings()
       
       .removeClass('cur')
       .children('i')
       .removeClass('cur');
    
       
    //    console.log(num)
       $('.promo_wrapper .promo_wrapper_pic li')
       .eq(num)
       .fadeIn();

},3000);

$('.rightarr').click(function(){
    // var num = $(this).num();
    console.log(num);
    console.log($('.promo_wrapper .promo_wrapper_pic li').eq(num))
   $('.promo_wrapper .promo_wrapper_pic li')
   .eq(num)
   .fadeOut();
   if(num < maxIndex){
    num++;
}else{
    num = 0;
}
   $('.promonum_show li')
   .eq(num)
   .addClass('cur')
   .children('i')
   .addClass('cur')
   .fadeIn()
   .parent()
   .siblings()
   
   .removeClass('cur')
   .children('i')
   .removeClass('cur');

   
   console.log(num)
   $('.promo_wrapper .promo_wrapper_pic li')
   .eq(num)
   .fadeIn();
});
$('.leftarr').click(function(){
    // var num = $(this).num();

    console.log(num);
    console.log($('.promo_wrapper .promo_wrapper_pic li').eq(num))
   $('.promo_wrapper .promo_wrapper_pic li')
   .eq(num)
   .fadeOut();
   if( num > 0){
    num--;
  }else{
    num = maxIndex;
}
   
   $('.promonum_show li')
   .eq(num)
   .addClass('cur')
   .children('i')
   .addClass('cur')
   .fadeIn()
   .parent()
   .siblings()
   
   .removeClass('cur')
   .children('i')
   .removeClass('cur');
   
   
   
   

   console.log(num)
   $('.promo_wrapper .promo_wrapper_pic li')
   .eq(num)
   .fadeIn();

   
});

//点击注册事件
$('.promonum_show li').mouseover(function(){
     num = $(this).num();
    console.log(num);
    $('.promonum_show li')
    .eq(num)
    .addClass('cur')
    .children('i')
    .addClass('cur')
    .fadeIn()
    .parent()
    .siblings()
    .removeClass('cur')
    .children('i')
    .removeClass('cur')
    // .fadeOut();

    $('.promo_wrapper .promo_wrapper_pic li')
    .eq(num)
    .fadeIn()
    .siblings()
    .fadeOut();
    
    
    
});

//第二屏四个的轮播
$('.mod_recom_list .list_arr_right').mouseover(function(){
    // if(offset().left = 0){
    $('.mod_recom_list .recom_list_cont')
    .animate({'left':-980},3000)
    $('.mod_recom_list .list_arr_right').hide();
    $('.mod_recom_list .list_arr_left').show();
    // }else {
      
    // }
    
});
$('.mod_recom_list .list_arr_left').mouseover(function(){
    $('.mod_recom_list .recom_list_cont')
    .animate({'left':0},3000);
    $('.mod_recom_list .list_arr_left').hide();
    $('.mod_recom_list .list_arr_right').show();
    
});

// 第三屏tab切换
var num = 0;
$('.leaderBoardList .rank_tab li').mouseover(function(){
    num = $(this).num();
    console.log(num);
    $(this)
     .addClass('cur')
     
     .children('a')
     .addClass('cur')
     .parent()
     .siblings()
     .removeClass('cur')
     .children('a')
     .removeClass('cur');
     $('.leaderBoardList .rank_content')
     .eq(num)
     .removeClass('none')
     .siblings('.rank_content')
     
     .addClass('none')
     
     
});
$('.leaderBoardList .rank_tab li').mouseout(function(){
    num = $(this).num();
    $(this)
     .removeClass('cur')
     
     .children('a')
     .removeClass('cur')
    //  .parent()
    //  .siblings()
    //  .removeClass('cur')
    //  .children('a')
    //  .removeClass('cur');
    // $('.leaderBoardList .rank_content')
    // .eq(num)
    // .removeClass('none')
    // .siblings()
    // .find('.rank_content')
    // .addClass('none')
     
     
});
