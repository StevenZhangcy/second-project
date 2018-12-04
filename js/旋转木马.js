// xuanZhuan('#left_btn_food', '#right_btn_food', '#midd_l_food', '#food_text');

var index = 0;
var $li = $('.content');
console.log($li)
// 把所有的类名放入一个数组
var ary = ['silder1', 'silder2', 'silder3'];
// 给右侧按钮注册点击事件
$('#left_btn_food').click(function () {

    // 取出数组中的最后一个,放到数组的第一个位置
    var last = ary.pop();
    ary.unshift(last);
    // 获取li,然后给li赋值新数组的中silder
    var $list = $('#midd_l_food > ul > li');
    // 循环遍历赋值给每一li
    for (var i = 0; i < $list.length; i++) {
        $list[i].className = ary[i];
        $('#food_text').text($list[i]) 
    } 
    if ($li.className == 'silder1') {
        index = 1;
    } else if ($li.className == 'silder2') {
        index = 2;
    } else if ($li.className == 'silder3') {
        index = 3;
    }
    $('#food_text').text(index);
});
// 给左侧按钮注册点击事件
$('#right_btn_food').click(function () {
    // 取出数组中的第一个,放到数组的最后位置
    var frist = ary.shift();
    ary.push(frist);
    // 获取li,然后给li赋值新数组的中silder
    var $list = $('#midd_l_food > ul > li');
    // 循环遍历赋值给每一li
    for (var i = 0; i < $list.length; i++) {
        $list[i].className = ary[i];
        $('#food_text').text($list[i]);
    }
    if ($li.className == 'silder1') {
        index = 1;
    } else if ($li.className == 'silder2') {
        index = 2;
    } else if ($li.className == 'silder3') {
        index = 3;
    }
    $('#food_text').text(index);
});
// 自动轮播
var flag = setInterval(function () {
    $('#right_btn').click();
}, 3000);
// 当鼠标放上去的时候 停止轮播
$('#midd_l_food').mouseover(function () {
    clearInterval(flag);
});
//鼠标离开继续轮播
$('#midd_l_food').mouseleave(function () {
    flag = setInterval(function () {
        $('#right_btn').click();
    }, 3000);
});
// 封装一个函数-----------------------------------------------------------------------
function xuanZhuan(btn1, btn2, name_li, text) {
    var ary = ['silder1', 'silder2', 'silder3'];
    // 给右侧按钮注册点击事件
    $(btn1).click(function () {
        // 取出数组中的最后一个,放到数组的第一个位置
        var last = ary.pop();
        ary.unshift(last);
        // 获取li,然后给li赋值新数组的中silder
        var $list = $('' + name_li + ' > ul > li');
        // 循环遍历赋值给每一li
        for (var i = 0; i < $list.length; i++) {
            $list[i].className = ary[i];
            if ($list[i].className == 'silder1') {
                $(text).text($($list[i]).index() + 1);
            }
        }
    });
    // 给左侧按钮注册点击事件
    $(btn2).click(function () {
        // 取出数组中的第一个,放到数组的最后位置
        var frist = ary.shift();
        ary.push(frist);
        // 获取li,然后给li赋值新数组的中silder
        var $list = $('' + name_li + ' > ul > li');
        // 循环遍历赋值给每一li
        for (var i = 0; i < $list.length; i++) {
            $list[i].className = ary[i];
        }
    });
    // 自动轮播
    var flag = setInterval(function () {
        $(btn1).click();
    }, 3000);

    // 当鼠标放上去的时候 停止轮播
    $(name_li).mouseover(function () {
        clearInterval(flag);
    });
    //鼠标离开继续轮播
    $(name_li).mouseleave(function () {
        flag = setInterval(function () {
            $(btn1).click();
        }, 3000);
    });
}
//国产食品轮播
// xuanZhuan('#left_btn_food', '#right_btn_food', '#midd_l_food', '#food_text');
//个人美妆轮播
xuanZhuan('#left_btn_face', '#right_btn_face', '#midd_l_face', '#face_text');
//生活家居轮播
xuanZhuan('#left_btn_family', '#right_btn_family', '#midd_l_family', '#family_text');
// 手机家电轮播
xuanZhuan('#left_btn_phone', '#right_btn_phone', '#midd_l_phone', '#phone_text');



// ---------------------------------------------
// var index = 0;
// var $li = $('#content');
// var ary = ['silder1', 'silder2', 'silder3'];
// // 给右侧按钮注册点击事件
// $('#left_btn_food').click(function() {

//     // 取出数组中的最后一个,放到数组的第一个位置
//     var last = ary.pop();
//     ary.unshift(last);
//     // 获取li,然后给li赋值新数组的中silder
//     var $list = $('#midd_l_food > ul > li');
//     // 循环遍历赋值给每一li
//     for (var i = 0; i < $list.length; i++) {
//         $list[i].className = ary[i];

//     }
//     if ($li.className == 'silder1') {
//         index = 1;
//     } else if ($li.className == 'silder2') {
//         index = 2;
//     } else if ($li.className == 'silder3') {
//         index = 3;
//     }
//     $('#food_text').text(index);
// });