
// ----------------------------------------------
// 获取点击按钮和ul
// var btn_top = document.querySelector('#food_btn_top');
// var ul = document.querySelector('#lunbo');
// var index = 0;

// // 给按钮注册点击事件,ul想上移动距离  45px
// food_btn_top.onclick = function () {
//     // 判断当前的index索引是否为0 如果是ul上边距离为0
//     if (index == 0) {
//         ul.style.top = 0 + 'px';
//     }
//     index ++;
//     var v = index * -45;
//     move (ul, v);
//     if (index == 3) {
//         index = 0;
//     }
// };
// var flag1 = setInterval (function () {
//     food_btn_top.onclick();
// },3000)


// $('.bott_l_food').mouseover (function () {
//     clearInterval (flag1)
// });
// $('.bott_l_food').mouseleave (function () {
//     flag1 = setInterval (function () {
//         food_btn_top.onclick();
//     },3000)
// });
// ---------------------------------------------------------------
// 封装函数
function tab(btn, selector) {

    var button = document.querySelector(btn);
    
    var ul = document.querySelector('#lunbo');
    var index = 0;
    
    // 给按钮注册点击事件,ul想上移动距离  45px
    button.onclick = function () {
        // 判断当前的index索引是否为0 如果是ul上边距离为0
        if (index == 0) {
            ul.style.top = 0 + 'px';
        }
        index ++;
        var v = index * -45;
        move (ul, v);
        if (index == 3) {
            index = 0;
        }
    };
    var flag1 = setInterval (function () {
        button.onclick();
    },3000)
    $(selector).mouseover (function () {
        clearInterval (flag1)
    });
    $(selector).mouseleave (function () {
        flag1 = setInterval (function () {
            button.onclick();
        },3000)
    });
}

tab('#food_btn_top','.bott_l_food');

// --------------------------------------------------------
// 鼠标进入小图片移动事件
function mouseover (selector) {
    $(selector).mouseover (function () {
        $(this)
          .children('a')
          .find('img')
          .addClass('active');
    });
}
// 鼠标离开小图片移动事件
function mouseleave (selector) {
    $(selector).mouseleave (function () {
        $(this)
          .children('a')
          .find('img')
          .removeClass('active');
    });
}
// 全球进口小图动画效果
mouseover ('.small_con ul li');
mouseleave ('.small_con ul li');

// 国产 食品小图动画效果
mouseover ('.midd_food_cont ul li');
mouseleave ('.midd_food_cont ul li');
//个人食品
mouseover ('.life_small_con ul li');
mouseleave ('.life_small_con ul li');

//个人美护
mouseover ('.midd_face_cont ul li');
mouseleave ('.midd_face_cont ul li');

// 母婴baby
mouseover ('.baby_small_con ul li');
mouseleave ('.baby_small_con ul li');

// 家居生活
mouseover ('.midd_family_cont ul li');
mouseleave ('.midd_family_cont ul li');

// 手机家电
mouseover ('.midd_phone_cont ul li');
mouseleave ('.midd_phone_cont ul li');
