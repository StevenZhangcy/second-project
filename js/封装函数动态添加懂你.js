// 封装一个函数
function addpic(pic) {
    // 动态添加li  循环添加
    var $li = $('<li> </li>');
    $('#know_cont').append($li);
    var $a = $('<a href="#"></a>');
    // 创建a标签
    $li.append($a);
    // 创建img 标签
    var $img = $(' <img src="' + pic.src + '" alt="">');
    $a.append($img);
    // 创建p标签
    var $p = $('<p></p>');
    $p.text(pic.p_text);
    $li.append($p);
    // 创建div标签
    var $div = $('<div></div>');
    $div.addClass('know_price');
    $li.append($div);
    // 创建两个span
    var $span1 = $('<span></span>')
    var $span2 = $('<span></span>')
    $span1.text(pic.s1_text)
    $span2.text(pic.s2_text)
    $div.append($span1, $span2);
    // 创建一个i标签
    var $i = $('<i>查看详情</i>');
    $div.append($i);
}
var pic01 = {
    src: 'img/懂你想要2.jpg',
    p_text: '贝恩施 滑板车儿童玩具男女小孩三合一滑滑车三轮可坐可升降调节闪光轮摇摆车1-3-6岁 三合一儿童滑板车粉色',
    s1_text: '￥178.0',
    s2_text: '满减',
}
addpic(pic01);

var pic02 = {
    src: 'img/懂你想要.jpg',
    p_text: '超级电脑装备吃鸡专用（2018完整升级版）',
    s1_text: '￥12800.0',
    s2_text: '满减',
}
addpic(pic02);
var pic03 = {
    src: 'img/懂你想要1.jpg',
    p_text: '重返狼群（2018完整升级版）',
    s1_text: '￥66.0',
    s2_text: '满减',
}
addpic(pic03);
var pic04 = {
    src: 'img/懂你想要3.jpg',
    p_text: '兄弟（新版）',
    s1_text: '￥166.0',
    s2_text: '满减',
}
addpic(pic04);
var pic05 = {
    src: 'img/懂你想要4.jpg',
    p_text: '你是我的小丫小苹果',
    s1_text: '￥266.0',
    s2_text: '满减',
}
addpic(pic05);
var pic06 = {
    src: 'img/懂你想要5.jpg',
    p_text: '创建新的ul',
    s1_text: '￥188.0',
    s2_text: '满减',
}
addpic(pic06);


// 参数
// 1 img 地址  src
// 2 p的内容  p_text
// 3 span内容  s1_text   s2_text
// 4 i 的内容  i_text



// ---------------------------------------------------------