// var x=document.getElementsByTagName("option")
// console.log(x)
// var lbsj=[{
//     id:1,
//     fu:"工学",
//     children:["工1","",""]
// }]

function selectonclick(e) {
    var name=e.value;
    switch (name) {
        case '工学':
            alert("这里是工学")
            break;
        case '理学':
            alert("这里是工学")
            break;
        case '文学':
            break;
        case '教育学':
            break;
        case '法学':
            break;
        default:
            break;
    }
}