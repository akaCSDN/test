

var pid = document.getElementById("pid");//拿到select对象
console.log(pid);
pid.onchange = function () {
    var number = pid.options[pid.selectedIndex].text;//pid.selectedIndex ①拿到选中项的索引,标签没有value的情况下，直接打印text文本内容
    // change(number);
    alert(number)
}
//     function change(number){
//         alert(number)
// }
function data() {
    var map = new Map();
    map.set(
        ("工学", { "计算机类": [1, 2, 3], "工商管理类": [4, 5, 6], "电子信息类": [7, 8, 9] }),

        ("理学", { "数学类": [11, 12, 13], "心理学类": [21, 22, 23] })
    )
}

