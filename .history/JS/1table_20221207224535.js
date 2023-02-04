document.write("<script language = javascript src = '/js/import.js'></script>");

var pid=document.getElementById("pid");//拿到select对象
    pid.onchange=function(){
        var number=pid.options[pid.selectedIndex].text;//pid.selectedIndex ①拿到选中项的索引,标签没有value的情况下，直接打印text文本内容
        change(number);
    }
    function change(number){
        
}