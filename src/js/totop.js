document.addEventListener('DOMContentLoaded', function(){
    var totop = document.getElementById("totop");
    toTop.onclick = function(){
        // 先获取滚动条滚动过的距离
        var scrollTop = window.scrollY;
        var timer = setInterval(function(){
            if(window.scrollY <= 0){
                clearInterval(timer);
            }
            scrollBy(0,-100);
        },20);
    }
});