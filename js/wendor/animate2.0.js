// 缓冲运动
// 功能  动画

// function move(element,target,speed) {
//     clearInterval(element.sum);
//     element.sum = setInterval(function () {
//         var v = box.offsetLeft;
//         if (v == target) {
//             clearInterval(element.sum);
//             return;
//         }
//         // 判断是不是最后一步
//         if (Math.abs(target - v) < speed) {
//             box.style.left = target + 'px';
//         } else {
//             if (target > v) {
//                 v += speed;
//             } else {
//                 v -= speed;
//             }
//             box.style.left = v + 'px';
//         }
//     }, 100)

// }

function move(element,target,speed) {
    clearInterval(element.sum);
    element.sum = setInterval(function () {
        var v = element.offsetTop;
        if (v == target) {
            clearInterval(element.sum);
            return;
        }
        // 缓冲公式
        var speed = (target - v) / 10
        // 检测方向
        if (target > v) {
            speed = Math.ceil(speed);
        }else {
            speed = Math.floor(speed);
        }
        element.style.top = v + speed +'px';
    }, 10)

}