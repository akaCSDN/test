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
            
            // alert("这里是工学")
            break;
        case '理学':
            alert("这里是理学")
            break;
        case '文学':
            alert("这里是文学")
            break;
        case '教育学':
            alert("这里是教育学")
            break;
        case '法学':
            alert("这里是法学")
            break;
        default:
            break;
    }
}