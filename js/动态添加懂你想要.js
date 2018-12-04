// 封装一个函数
    // // 动态添加li  循环添加
    // var $li = $('<li> </li>');
    // $('#know_cont').append($li);
    // var $a = $('<a href="#"></a>');
    // // 创建a标签
    // $li.append($a);
    // // 创建img 标签
    // var $img = $(' <img src="img/懂你想要2.jpg" alt="">');
    // $a.append($img);
    // // 创建p标签
    // var $p = $('<p></p>');
    // $p.text('贝恩施 滑板车儿童玩具男女小孩三合一滑滑车三轮可坐可升降调节闪光轮摇摆车1-3-6岁 三合一儿童滑板车粉色');
    // $li.append($p);
    // // 创建div标签
    // var $div = $('<div></div>');
    // $div.addClass('know_price'); 
    // $li.append($div);
    // // 创建两个span
    // var $span1 = $('<span></span>')
    // var $span2 = $('<span></span>')
    // $span1.text('￥178.0')
    // $span2.text('满减')
    // $div.append($span1,$span2);
    // // 创建一个i标签
    // var $i = $('<i>查看详情</i>');
    // $div.append($i);

// 参数
// 1 img 地址  src
// 2 p的内容  p_text
// 3 span内容  s1_text   s2_text
// 4 i 的内容  i_text





for (var i = 0; i < 5; i++) {
    var $li = $('<li> </li>');
    $('#know_cont').append($li);
    var $a = $('<a href="#"></a>');
    $li.append($a);
    var $img = $(' <img src="img/懂你想要.jpg" alt="">');
    $a.append($img);
        // 动态添加li  循环添加
        var $li = $('<li> </li>');
        $('#know_cont').append($li);
        var $a = $('<a href="#"></a>');
        // 创建a标签
        $li.append($a);
        // 创建img 标签
        var $img = $(' <img src="img/懂你想要2.jpg" alt="">');
        $a.append($img);
        // 创建p标签
        var $p = $('<p></p>');
        $p.text('贝恩施 滑板车儿童玩具男女小孩三合一滑滑车三轮可坐可升降调节闪光轮摇摆车1-3-6岁 三合一儿童滑板车粉色');
        $li.append($p);
        // 创建div标签
        var $div = $('<div></div>');
        $div.addClass('know_price'); 
        $li.append($div);
        // 创建两个span
        var $span1 = $('<span></span>')
        var $span2 = $('<span></span>')
        $span1.text('￥178.0')
        $span2.text('满减')
        $div.append($span1,$span2);
        // 创建一个i标签
        var $i = $('<i>查看详情</i>');
        $div.append($i);  
}