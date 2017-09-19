function Ajax(options){

    var defaults = {
        // 请求类型
        type:'get',

        // 是否异步请求
        async:true,

        jsonpCallbackName:'callback'
    }

    // 扩展默认参数
    for(var attr in options){
        defaults[attr] = options[attr];
    }

    // 复制一份扩展后的defaults
    var opt = {};
    for(var attr in defaults){
        opt[attr] = defaults[attr];
    }

    // {id:1,qty:20} => id=1&qty=20
    var params = '';
    if(opt.data){
        for(var attr in opt.data){
            params += attr + '=' + opt.data[attr] + '&'
        }

        // 去除多余的&
        params = params.slice(0,-1);
    }

    if(opt.type.toLowerCase() === 'get' || opt.type.toLowerCase() === 'jsonp'){
        opt.url += '?'  + params;
        params = null;
    }

    // jsonp请求
    // api/goods.php?id=1&qty=20
    if(opt.type.toLowerCase() === 'jsonp'){
        var callbackName = 'getData' + parseInt(Math.random()*100000);

        // 预设全局函数
        window[callbackName] = function(res){
            try{
                res = JSON.parse(res);
            }catch(err){}

            typeof opt.success === 'function' && opt.success(res);

            // 请求成功后，移除生成script标签
            document.body.removeChild(script);
        }

        // 判断url中是否有?
        // 如果有，则&callback
        // 如果没有，则?callbak
        opt.url += (opt.url.indexOf('?')>=0 ? '&' : '?') + opt.jsonpCallbackName + '='+callbackName
        
        var script = document.createElement('script');
        script.src = opt.url;

        document.body.appendChild(script);

        return;
    }


    // 兼容浏览器写法
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(err){
        // ie低版本浏览有多种异步请求的实现
        try{
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(err){
            try{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(err){
                alert('你的浏览器太low了，这个世界不适合你');
            }
        }
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
            var res = xhr.responseText;
            try{
                res = JSON.parse(res);
            }catch(err){}

            // if(typeof opt.success === 'function'){
            //  opt.success(res)
            // }

            typeof opt.success === 'function' && opt.success(res);
        }
    }

    

    xhr.open(opt.type,opt.url,opt.async);

    // post请求必须设置请求头
    if(opt.type.toLowerCase() === 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }

    xhr.send(params);
}

var ajax = function(options){
    return new Ajax(options);
}

ajax.get = function(options){
    options.type = 'get';
    return new Ajax(options);
}
ajax.post = function(options){
    options.type = 'post';
    return new Ajax(options);
}
ajax.jsonp = function(options){
    options.type = 'jsonp';
    return new Ajax(options);
}

function Banner(options){
    var defaults  = {
        //切换按钮
        btnchange:true,
        //左右按钮
        btnlr:true,
        //图片地址数组
        img:[],
        //初始显示图片索引
        index:0,
        // fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
        showform:'horizontal',
        //轮播图放置区域
        ele:'.banner',
        //时间间隔
        gap:1000
    }
    var opt = Object.assign({},defaults,options);
    this.ele = document.querySelector(opt.ele);
    //获取图片尺寸
    this.width = this.ele.offsetWidth;
    this.height = this.ele.offsetHeight;
    //是否有数字按钮
    this.btnchange = opt.btnchange;
    //是否有左右按钮
    this.btnlr = opt.btnlr;
    //获取图片
    this.img = opt.img;
    //获取默认显示图片索引
    this.index = opt.index;
    //获取时间间隔
    this.gap = opt.gap;
    //轮播图切换样式
    this.showform = opt.showform;
    //获取长度
    this.len = this.img.length;

}
Banner.prototype = {
    //初始化
    init(){
        //给显示区域设置样式
        this.ele.style.overflow = 'hidden';
        this.ele.style.position = 'relative';
        var ul = document.createElement('ul');
        ul.style.position = 'absolute';
        // ul.style.overflow = 'hidden';
        //轮播图区域尺寸定义
        if(this.showform=='horizontal'){
            ul.style.width = this.width*(this.len+1)+'px';
            ul.style.height = this.height+'px';
            ul.style.top = 0;
        }else if(this.showform=='vertial'){
            ul.style.width = this.width+'px';
            ul.style.height = this.height*this.len+'px';
            ul.style.left =0;
        }else if(this.showform=='fade'){
            ul.style.width = this.width;
            ul.style.height = this.height;
        }else if(this.showform=='show'){
            ul.style.width = this.width;
            ul.style.height = this.height;
        }
        this.ele.appendChild(ul);
        //根据图片数组生成图片
        for(var i=0;i<this.len;i++){
            var li = document.createElement('li');
            li.style.listStyle = 'none';
            if(this.showform=='horizontal'){
               li.style.float = 'left'; 
            }
            else if(this.showform=='vertial'){
               
            }else if(this.showform=='fade'){
                li.style.position = 'absolute';
                li.style.top = 0;
                li.style.left = 0;
            }           
            var img = document.createElement('img');
            img.src = this.img[i];
            img.style.display = 'block';
            img.style.width = this.width;
            img.style.height = this.height;
            li.appendChild(img);
            ul.appendChild(li);           
        }
        if(this.showform=='horizontal'){
                ul.appendChild(ul.children[0].cloneNode(true));
                this.len++;
            }
        //判断是否需要左右按钮
        if(this.btnlr){
            //创建左按钮，并设置样式
            var spanl = document.createElement('span');
            spanl.innerHTML = '&lt;';
            spanl.style.position = 'absolute';
            spanl.style.top = '45%';
            spanl.style.left = '20px';
            spanl.style.width = '30px';
            spanl.style.height = '30px';
            spanl.style.textAlign = 'center';
            spanl.style.lineHeight = '30px';
            spanl.style.backgroundColor = '#efefef';
            spanl.style.opacity = '0.6';
            this.ele.appendChild(spanl);
            //创建右按钮，并设置样式
            var spanr = document.createElement('span');
            spanr.innerHTML = '&gt;';
            spanr.style.position = 'absolute';
            spanr.style.top = '50%';
            spanr.style.right = '20px';
            spanr.style.width = '30px';
            spanr.style.height = '30px';
            spanr.style.textAlign = 'center';
            spanr.style.lineHeight = '30px';
            spanr.style.backgroundColor = '#efefef';
            spanr.style.opacity = '0.6';
            this.ele.appendChild(spanr);
            //给左按钮绑定事件
            spanl.onclick = ()=>{
                this.index--;
                this.showPic();
            }
            //给右按钮绑定事件
            spanr.onclick = ()=>{
                this.index++;
                this.showPic();
            }
        }
        //判断是否有下方单页按钮
        if(this.btnchange){
            //创建生成单页按钮区域
            var page = document.createElement('div');
            page.style.position = 'absolute';
            page.style.left = '60%';
            page.style.bottom = '20px';
            //根据图片数量创建生成按钮，并设置样式
            for(var i=0;i<this.len-1;i++){
                var spanb = document.createElement('span');
                page.appendChild(spanb);
                spanb.style.display = 'inline-block';
                spanb.style.width = '20px';
                spanb.style.height = '20px';
                spanb.style.textAlign = 'center';
                spanb.style.margin = '0 5px';
                spanb.style.backgroundColor = '#fff';
                spanb.style.color = '#000';
                spanb.style.borderRadius = '50%';
                // spanb:hover.style.cursor = 'pointer';
                spanb.innerHTML = i+1;
                if(i==this.index){
                    spanb.style.backgroundColor = '#58bc58';
                    spanb.style.color = '#fff';
                }
            }
            this.ele.appendChild(page);
            page.onclick = (e)=>{
                var target = e.target;
                if(target.tagName.toLowerCase()=='span'){
                    this.index = target.innerText -1;

                    this.showPic();
                }
            }
        }
        this.autoPlay();

        this.ele.onmouseenter = ()=>{
            this.stop();
        }
        this.ele.onmouseleave = ()=>{
            this.autoPlay();
        }

        this.ul = ul;
        this.page = page;
    },
    stop(){
        clearInterval(this.timer);
    },
    autoPlay(){
        this.timer = setInterval(()=>{
            this.index++;
            this.showPic();
        },this.gap);
    },
    showPic(){
        if(this.index>=this.len){
            this.index = 1;
            this.ul.style.left = 0;
        }else if(this.index<0){
            this.index = this.len-2;
            this.ul.style.left = -this.width*(this.len-1)+'px';
        }
        var targetleft = -this.index*this.width;

        animate(this.ul,{left:targetleft})
        if(this.btnchange){
            for(var i=0;i<this.len-1;i++){
                this.page.children[i].style.backgroundColor =' #fff';
                this.page.children[i].style.color = '#000'; 
            }
            if(this.index==this.len-1){
                this.page.children[0].style.backgroundColor = '#58bc58';  
                this.page.children[0].style.color = '#fff'; 
            }else{

                this.page.children[this.index].style.backgroundColor = '#58bc58';  
                this.page.children[this.index].style.color = '#fff';
            }
        }
    }

}
Object.defineProperty(Banner.prototype,'constructor',{
    value:Banner
});

/* 
* @Author: Marte
* @Date:   2017-09-02 14:25:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 17:09:33
*/
require(['config'],function(){
    require(['jquery'],function($){
//------------------------添加到购物车--------------------------------------
        var addul = document.querySelector('.box .goodlist');
        var now = new Date();
        now.setDate(now.getDate());
        var cookie = cookieget('carlist');
        var arr_goodlist;
        //判断cookie中为空的情况
        if(cookie == ''){
            arr_goodlist=[]
        }else{
            arr_goodlist=JSON.parse(cookie)
        }
        // console.log(arr_goodlist)
        now.setDate(now.getDate()+10);
        //获取cookie中的数组
        function cookieget(name){
            // 先获取所有cookie
            var cookie = document.cookie;
            if(cookie.length === 0){
                return '';
            }

            // 拆分成数组
            cookie = cookie.split('; ');

            // 遍历cookie，找到想要的cookie值
            var res = '';
            cookie.forEach(function(item){
                var arr = item.split('=');

                if(arr[0] === name){
                    res = arr[1];
                }
            });
            return  res;
        }
        //给按钮绑定事件
    if(addul){
            addul.onclick = function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.className == 'addcar'){
                    var tarli = target.parentNode.parentNode;
                    var id = tarli.getAttribute('data-id');
                    var cate = tarli.getAttribute('data-category');
                    for(var i=0;i<arr_goodlist.length;i++){
                        //如果购物车中存在次商品
                        if(arr_goodlist[i].id==id){
                            arr_goodlist[i].qty++;
                            break;
                        }
                    }
                    //不存在此商品
                    if(i===arr_goodlist.length){
                        var arr_h={
                            imgurl:tarli.children[0].children[0].src,
                            title:tarli.children[1].children[0].innerText,
                            price:tarli.children[2].children[0].innerText,
                            id:id,
                            cate:cate,
                            qty:1
                        }
                        arr_goodlist.push(arr_h);                  
                    } 
                    document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/';
                    showcar(arr_goodlist);
                }
            }
        }
//----------------------小购物车中商品的生成-------------------------
        var carlist = document.querySelector('.search .shopcar ul');
        var str1 = document.querySelector('.shopcar .carbot .str1')
        var str2 = document.querySelector('.shopcar .carbot .str2')
        var goodtotal = document.querySelector('.shopcar .cart .goodtotal')
        showcar(arr_goodlist);
        function showcar(arr){
            var totalprice=0;
            var totalqty=0;
            //判断是否存在商品
            carlist.innerHTML = '';
            if(arr.length>0){
            carlist.innerHTML = arr.map(function(item){
                totalprice+=item.price*item.qty;
                totalqty+=item.qty;
            return `<li data-id="${item.id}">
                        <a href="/html/detail.html?${item.id}"><img src="${item.imgurl}"/></a>
                        <p class="listname">${item.title}</p>
                        <div class="carprice"><p><span class="pric">${item.price}</span><span class="qty">${item.qty}</span></p><button class="del">删除</button></div>
                    </li>`
            }).join('')
        }
        //显示商品数量
        str1.innerText=totalqty;
        //显示商品总价
        str2.innerText=totalprice;
        goodtotal.innerText=totalqty;
        }
//----------------------删除小购物车内的商品--------------------------
        carlist.onclick = function(e){
            e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.className=='del'){
                var tarli = target.parentNode.parentNode;
                // tarli.parentNode.removeChild(tarli);
                // 不需要删除节点，直接用删除后的cookie来覆盖
                var id = tarli.getAttribute('data-id');
                arr_goodlist.forEach(function(item,idx){
                    if(item.id==id){
                        arr_goodlist.splice(idx,1);
                        return;
                    }
                })
            }
            showcar(arr_goodlist);
            showmcar(arr_goodlist);
            document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/';           
        } 
//-----------------主购物车中商品生成-----------------------
$carList = $('.car-list');
showmcar(arr_goodlist);
function showmcar(arr){
    if($carList){
    $carList.html(
    arr.map(function(item){
        return `<li data-id="${item.id}">
                    <a href="/html/detail.html?${item.id}">
                        <img class="img-c" src="${item.imgurl}"/>
                    </a>
                    <span class="name-c">${item.title}</span>
                    <div class="goodsqty">
                        <span class="btn-jian">-</span>
                        <input class="qty-c" value="${item.qty}" type="text" />
                        <span class="btn-jia">+</span>
                    </div>
                    <span class="price-c">${item.price}</span>
                    <span class="aprice-c">${(item.price*item.qty).toFixed(2)}</span>
                    <span class="del-c">&times;</span>
                </li>`
    }).join('')
    )
    }
}
//-----------------------主购物车删除商品-----------------------
if($carList){
    $carList.on('click','span',function(){
        if($(this).hasClass('del-c')){
            $tarli = $(this).parent();
            var id = $tarli.attr('data-id');
            arr_goodlist.forEach(function(item,idx){
                if(item.id==id){
                    arr_goodlist.splice(idx,1);
                    return;
                }
            })
        showcar(arr_goodlist);
        showmcar(arr_goodlist);
        document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/'; 
        }
        //减号功能
        if($(this).hasClass('btn-jian')){
            $tarli=$(this).parent().parent();
            var id=$tarli.attr('data-id')
            arr_goodlist.forEach(function(item,idx){
                if(item.id==id){
                    item.qty--;
                    if(item.qty==0){
                        arr_goodlist.splice(idx,1);
                        return; 
                    }
                }
            })
        showcar(arr_goodlist);
        showmcar(arr_goodlist);
        document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/'; 
        }
        //加号功能
        if($(this).hasClass('btn-jia')){
            $tarli=$(this).parent().parent();
            var id=$tarli.attr('data-id')
            arr_goodlist.forEach(function(item,idx){
                if(item.id==id){
                    item.qty++;
                }
            })
        showcar(arr_goodlist);
        showmcar(arr_goodlist);
        document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/'; 
        }
    })

}
//------------------------详情页加入购物车------------------------
//判断是否在详情页
var $buycar = $('.buycar')
if($buycar.length>0){
    var num = 0;
    var imgurl = $('.mainImg').attr('src');
    var title = $('.show-r h2').text();
    var price = $('.sppp').text();
    var cate = $('.cate').text();
    $buyqty = $('.buyqty').val(num)
    $buycar.on('click','span',function(){
        //减号
        if($(this).hasClass('buyjian')){
            if($buyqty.val()>0){
                num--;
                $buyqty.val(num)
            }else{
                return;
            }
        }
        if($(this).hasClass('buyjia')){
            num++;
            $buyqty.val(num);
        }
        if($(this).hasClass('add-car')){
            var id=$(this).attr('data-id')
            if(num>0){
            for(var i=0;i<arr_goodlist.length;i++){
                        //如果购物车中存在次商品
                        if(arr_goodlist[i].id==id){
                            arr_goodlist[i].qty+=Number(num);
                            break;
                        }
                    }
            //不存在此商品,请求一次数据库，获得数据                  
            if(i===arr_goodlist.length){
                // $.ajax({
                //         type:"get",
                //         url:"/api/goods.php",
                //         data:"id="+id,
                //         success:function(res){
                //             var arr=JSON.parse(res);
                //             arr_h={
                //             imgurl:arr.imgurl,
                //             title:arr.name,
                //             price:arr.price,
                //             id:id,
                //             cate:arr.cate,
                //             qty:num
                //             }
                //         arr_goodlist.push(arr_h);  
                //         }
                //     })
                arr_h={
                    imgurl:imgurl,
                    title:title,
                    price:price,
                    id:id,
                    cate:cate,
                    qty:num
                    }
                 arr_goodlist.push(arr_h);     
                }
            }                
            showcar(arr_goodlist);
            showmcar(arr_goodlist);
            document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/';                          
        }
    })
}
//---------------------导航栏动画---------------------------------
            $spanlist = $('#head .header .nav .list');
            $listul = $('#head .header .nav .list ul');
            //判断是否是首页
            //首页不使用动画
            if($('.banner').length>0){

                $spanlist.on('mouseenter',function(){
                    
                })
                $spanlist.on('mouseleave',function(){
                    
                })
            }else{
            //其它页面使用动画
                $listul.hide();
            //设置定时器延时收起
            var timer;
            $spanlist.on('mouseenter',function(){
                clearInterval(timer);
                $listul.slideDown();           
             })
            $spanlist.on('mouseleave',function(){
                clearInterval(timer);
                timer=setTimeout(function(){
                    $listul.slideUp();  
                },600)                          
             })
            }      
//---------------------导航栏吸顶----------------------
            $nav = $('#head .header .nav');
            $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop>500){
                //当滚动条到达500时，掩藏首页的下拉导航栏
                if($('.banner').length>0){
                    $listul.hide();
                }
                $nav.css({position:'fixed',top:0,left:0})
            }else{
                //当滚动条小于500时，显示首页的下拉导航栏
                if($('.banner').length>0){
                    $listul.show();
                }
                $nav.css({position:'relative'});
            }
        })
//----------------------------点击购物车图标跳转到购物车--------------------
        var shopcar = document.querySelector('.search .shopcar .carmain')
        shopcar.onclick = function(){
            console.log(66)
            window.location.href = '/html/shopcar.html';
        }
//-----------------根据登录信息显示-------------------------
        var ulinfor = document.querySelector('.header .sign ul');
        showhead();
        function showhead(){
            var username = cookieget('username');
            ulinfor.innerHTML='';
            if(username){
                var li1 = document.createElement('li');
                li1.innerHTML = `<span class="user-na">${username}</span>,欢迎光临No5时尚广场。`;
                ulinfor.appendChild(li1);
                var li2 = document.createElement('li');
                li2.innerText = '退出';
                li2.className = 'btnout'
                ulinfor.appendChild(li2);
            }else{
                ulinfor.innerHTML = `<li>下午好,欢迎光临No5时尚广场。</li>
                                    <li><a href="/html/register.html">[登录]</a></li>
                                    <li><a href="/html/register.html">[免费注册]</a></li>`
            }
        }
//------------退出登录按钮-------------
        ulinfor.onclick = function(e){
            e=e||window.event;
            var target = e.target||e.srcElement;
            if(target.className=='btnout'){
                var now = new Date()
                now.setDate(now.getDate()-100);
                // 删除cookie
                document.cookie = 'username=xx;expires=' + now.toString()+';path=/';
                document.cookie = 'password=xx;expires=' + now.toString()+';path=/';
                window.location.reload();
            }
        } 
    })
})

/* 
* @Author: Marte
* @Date:   2017-09-02 14:25:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-08 15:00:08
*/
require(['config'],function(){
    require(['jquery'],function($){
        $shopcar = $('.search .shopcar');
        var cookie = cookieget('carlist');
        var now = new Date();
        now.setDate(now.getDate());
        var arr_goodlist;
        //判断cookie中为空的情况
        if(cookie == ''){
            arr_goodlist=[]
        }else{
            arr_goodlist=JSON.parse(cookie)
        }
        function cookieget(name){
            // 先获取所有cookie
            var cookie = document.cookie;
            if(cookie.length === 0){
                return '';
            }

            // 拆分成数组
            cookie = cookie.split('; ');

            // 遍历cookie，找到想要的cookie值
            var res = '';
            cookie.forEach(function(item){
                var arr = item.split('=');

                if(arr[0] === name){
                    res = arr[1];
                }
            });
            return  res;
        }
//----------------------购物车中商品的生成-------------------------
        var carlist = document.querySelector('.search .shopcar ul');
        var str1 = document.querySelector('.shopcar .carbot .str1')
        var str2 = document.querySelector('.shopcar .carbot .str2')
        var goodtotal = document.querySelector('.shopcar .cart .goodtotal')
        showcar(arr_goodlist);
        function showcar(arr){
            var totalprice=0;
            var totalqty=0; 
            carlist.innerHTML = '';
            carlist.innerHTML = arr.map(function(item){
                totalprice+=item.price*item.qty;
                totalqty+=item.qty;
            return `<li data-id="${item.id}">
                        <a href=""><img src="${item.imgurl}"/></a>
                        <p class="listname">${item.title}</p>
                        <div class="carprice"><p><span class="pric">${item.price}</span><span class="qty">${item.qty}</span></p><button class="del">删除</button></div>
                    </li>`
            }).join('')
        //显示商品数量
        str1.innerText=totalqty;
        //显示商品总价
        str2.innerText=totalprice;
        goodtotal.innerText=totalqty;
        }
// ----------------------删除购物车内的商品--------------------------
        carlist.onclick = function(e){
            e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.className=='del'){
                var tarli = target.parentNode.parentNode;
                // tarli.parentNode.removeChild(tarli);
                // 不需要删除节点，直接用删除后的cookie来覆盖
                var id = tarli.getAttribute('data-id');
                arr_goodlist.forEach(function(item,idx){
                    if(item.id==id){
                        arr_goodlist.splice(idx,1);
                    }
                })
            }
            showcar(arr_goodlist);
            document.cookie = 'carlist='+JSON.stringify(arr_goodlist)+';expires='+now.toUTCString()+';path=/';
        }
    })
})

/*
	封装注意事项
		* 避免报错
		* 兼容性
		* 单一性：功能单一化，一个函数只做一件事情
 */

/**
 * [获取一个范围内随机整数的方法]
 * @param  {Number} min [最小数]
 * @param  {Number} max [最大数]
 * @return {Number}     [返回的随机整数]
 */
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1))+min;
}

/**
 * [随机颜色rgb]
 * @return {String} [返回rgb(255,0,0)格式的颜色]
 */
function randomColor(){
	// rgb(255,0,0)

	// var r = parseInt(Math.random()*256);
	// var g = parseInt(Math.random()*256);
	// var b = parseInt(Math.random()*256);

	// 利用封装好的函数
	var r = randomNumber(0,255);
	var g = randomNumber(0,255);
	var b = randomNumber(0,255);


	var res = 'rgb(' + r + ',' + g + ',' + b + ')';

	return res;
}

/**
 * [获取随机验证码]
 * @return {String} [返回随机验证码]
 */
function vCode(){
	var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

	var res = '';
	for(var i=0;i<4;i++){
		// 获取随机索引值
		var idx = parseInt(Math.random()*arr_char.length);

		// 根据索引值获取字符，并拼接
		res += arr_char[idx];
	}

	return res;
}

/**
 * [获取当前元素得前一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回前一个元素]
 */
function getPreviousElement(ele){
	var res = ele.previousSibling;

	// 当前一个节点不是元素时
	if(res && res.nodeType != 1){
		res = res.previousSibling;
	}

	return res;
}

/**
 * [获取当前元素得下一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回下一个元素]
 */
function getNextElement(ele){
	var res = ele.nextSibling;

	if(res && res.nodeType != 1){
		res = res.nextSibling;
	}

	return res;
}

/**
 * [获取子元素]
 * @param  {Element} ele [当前元素]
 * @return {Array} [返回元素节点]
 */
function getChildren(ele){
	var arr = ele.childNodes;

	// 过滤
	var res =  [];
	for(var i=0;i<arr.length;i++){
		if(arr[i].nodeType == 1){
			res.push(arr[i]);
		}
	}

	return res;
}

function getFirstElementChild(){

}
function getLastElementChild(){

}

/**
 * [通过类名获取元素]
 * @param  {String} className [类名]
 * @param  {[Element]} ele [获取这个元素下代className类名元素]
 * @return {[type]}           [description]
 */
function getElementsByClassName(className,ele){
	// 判断是否支持getElementsByClassName()
	var res;

	// 判断是否传入ele
	if(!ele){
		ele = document;
	}

	// 支持
	if(ele.getElementsByClassName){
		res = ele.getElementsByClassName(className)
		return res;
	}

	/*
		如果当前浏览器不支持getElementsByClassName
		思路：
			1、通过标签名获取所有元素
				getElementsByTagName()
			2、过滤不包含className的元素
	*/
	var arr = ele.getElementsByTagName('*');
	res = [];
	for(var i=0;i<arr.length;i++){
		// 判断当前元素是否包含className这个类名
		if(arr[i].className.indexOf(className) >= 0){
			res.push(arr[i]);
		}
	}

	return res;
}
//getElementsByClassName('box');
// getElementsByClassName('box',footer);

/**
 * [获取元素css样式，兼容ie8-]
 * @param  {Element} ele  [获取样式的元素]
 * @param  {String} attr [css属性名]
 * @return {String}      [css属性值]
 */
function getCss(ele,attr){
	// 判断浏览器是否支持getComputedStyle
	if(window.getComputedStyle){
		return getComputedStyle(ele)[attr];
	}

	// ie8-
	else if(ele.currentStyle){
		return ele.currentStyle[attr];
	}

	// 返回内联样式
	else{
		return ele.style[attr];
	}

}
// getCss(box,'font-size');//16px

/**
 * [给元素添加事件的方法，支持事件捕获，兼容ie8-]
 * @param {Element} ele     [绑定事件的元素]
 * @param {String} type    [事件类型]
 * @param {Function} handler [事件处理函数]
 * @param {[Boolean]} capture [是否捕获]
 */
function addEvent(ele,type,handler,capture){
	// 判断当前浏览器是否支持addEventListener()
	if(ele.addEventListener){
		ele.addEventListener(type,handler,capture);
	}

	// ie8-
	else if(ele.attachEvent){
		ele.attachEvent('on' + type,handler);
	}

	// 其他浏览器
	else{
		ele['on' + type] = handler;
	}
}
// addEvent(box,'click',function(){},true);
// 给div添加一个点击事件


/*
	封装Cookie的增删查改
		* 添加 setCookie()
		* 删除 removeCookie()
		* 读取 getCookie()
		* 修改 利用setCookie()
	利用对象封装
		Cookie
			* set()
			* get()
			* remove()
 */

// 利用对象封装
var Cookie = {
	/**
	 * [设置cookie]
	 * @param {String} name    [cookie名]
	 * @param {String} val     [cookie值]
	 * @param {[Date]} expires [有效期]
	 * @param {[String]} path    [cookie路径]
	 */
	set:function(name,val,expires,path){
		// document.cookie = 'cartlist=1234;expires=' + now
		var cookieStr = name + '=' + val;

		// 有效期
		if(expires){
			cookieStr += ';expires=' + expires.toUTCString();
		}

		// 设置路径
		if(path){
			cookieStr += ';path=' + path;
		}

		// 写入
		document.cookie = cookieStr;
	},
	get:function(name){
		// 先获取所有cookie
		var cookie = document.cookie;
		if(cookie.length === 0){
			return '';
		}

		// 拆分成数组
		cookie = cookie.split('; ');

		// 遍历cookie，找到想要的cookie值
		var res = '';
		cookie.forEach(function(item){
			var arr = item.split('=');

			if(arr[0] === name){
				res = arr[1];
			}
		});

		return  res;
	},
	remove:function(name){
		// 利用设置过期时间达到删除的效果。
		var now = new Date();
		now.setDate(now.getDate()-100);

		// document.cookie = name +'=xxx;expires=' + now.toUTCString();
		Cookie.set(name,null,now);
	}
}

// 使用
// Cookie.set('cartlist','1234',now);
// Cookie.set('cartlist','1234');
// Cookie.get('cartlist');//1234
// Cookie.remove('cartlist');

/**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {String} attr   [css属性]
 * @param  {Number} target [目标值]
 */
/*function animate(ele,attr,target){
	var timerName = attr + 'timer';
	clearInterval(ele[timerName]);
	ele[timerName] = setInterval(function(){
		// 获取当前值
		var current = getCss(ele,attr);//10px,0.5,20em,2.4rem,40deg

		// 提取单位
		var unit = current.match(/[a-z]+$/);
		unit = unit ? unit[0] : '';

		// 提取值
		current = parseFloat(current);


		// 计算速度（最小变化值：1/-1）
		// 避免速度变成0
		var speed = (target-current)/10;
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

		// 到达目标值后清除动画定时器
		if(current === target || speed === 0){
			clearInterval(ele[timerName]);
		}

		ele.style[attr] = current + speed + unit;
	},30);
}*/
// animate(box,'left',800);//2s
// animate(box,'top',200);//5s

/**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {Object} opt   [动画属性集合]
 * @param  {Function} callback   [回调函数]
 */
function animate(ele,opt,callback){
	//如何确定哪个属性是最后完成的动画

	// 动画数量
	var timerQty = 0;

	//遍历属性
	for(var attr in opt){
		createTimer(attr);
		timerQty++;
	}
	
	function createTimer(attr){
		// 根据属性定义定时器名字
		var timerName = attr + 'timer';

		// 获取目标值
		var target = opt[attr];

		clearInterval(ele[timerName]);
		ele[timerName] = setInterval(function(){
			// 获取当前值
			var current = getCss(ele,attr);//10px,0.5,20em,2.4rem,40deg

			// 提取单位
			var unit = current.match(/[a-z]+$/);
			unit = unit ? unit[0] : '';

			// 提取值
			current = parseFloat(current);


			// 计算速度（最小变化值：1/-1）
			// 避免速度变成0
			var speed = (target-current)/10;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

			// 针对opacity属性计算速度
			if(attr === 'opacity'){
				speed = speed>0 ? 0.01 : -0.01;
			}

			// 到达目标值后清除动画定时器
			if(current === target || speed === 0){
				clearInterval(ele[timerName]);

				// 重置目标值
				current = target - speed;

				// 动画完成数量减一
				timerQty--;


				// 执行回调函数
				if(timerQty===0 && typeof callback === 'function'){
					callback();
				}
			}

			ele.style[attr] = current + speed + unit;
		},30);
	}
}


function type(data){
	// data.toString()
	// [object Array]
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
}
/*
    封装注意事项
        * 避免报错
        * 兼容性
        * 单一性：功能单一化，一个函数只做一件事情
 */
var common = {
     /**
     * [获取一个范围内随机整数的方法]
     * @param  {Number} min [最小数]
     * @param  {Number} max [最大数]
     * @return {Number}     [返回的随机整数]
     */
    randomNumber:function(min,max){
        return parseInt(Math.random()*(max-min+1))+min;
    },
    /**
     * [随机颜色rgb]
     * @return {String} [返回rgb(255,0,0)格式的颜色]
     */
    randomColor:function(){
        var r = randomNumber(0,255);
        var g = randomNumber(0,255);
        var b = randomNumber(0,255);


        var res = 'rgb(' + r + ',' + g + ',' + b + ')';

        return res; 
    },
    /**
 * [获取随机验证码]
 * @return {String} [返回随机验证码]
 */
     vCode:function(){
    var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

    var res = '';
    for(var i=0;i<4;i++){
        // 获取随机索引值
        var idx = parseInt(Math.random()*arr_char.length);

        // 根据索引值获取字符，并拼接
        res += arr_char[idx];
    }

    return res;
    },
        /**
     * [获取当前元素得前一个元素]
     * @param  {Element} ele [当前元素]
     * @return {Element}     [返回前一个元素]
     */
    getPreviousElement:function(ele){
    var res = ele.previousSibling;

    // 当前一个节点不是元素时
    if(res && res.nodeType != 1){
        res = res.previousSibling;
    }

    return res;
    },
    /**
     * [获取当前元素得下一个元素]
     * @param  {Element} ele [当前元素]
     * @return {Element}     [返回下一个元素]
     */
    getNextElement:function(ele){
    var res = ele.nextSibling;

    if(res && res.nodeType != 1){
        res = res.nextSibling;
    }

    return res;
    },
    /**
     * [获取子元素]
     * @param  {Element} ele [当前元素]
     * @return {Array} [返回元素节点]
     */
    getChildren:function(ele){
    var arr = ele.childNodes;

    // 过滤
    var res =  [];
    for(var i=0;i<arr.length;i++){
        if(arr[i].nodeType == 1){
            res.push(arr[i]);
        }
    }

    return res;
    },
    /**
     * [通过类名获取元素]
     * @param  {String} className [类名]
     * @param  {[Element]} ele [获取这个元素下代className类名元素]
     * @return {[type]}           [description]
     */
    getElementsByClassName:function(className,ele){
    // 判断是否支持getElementsByClassName()
    var res;

    // 判断是否传入ele
    if(!ele){
        ele = document;
    }

    // 支持
    if(ele.getElementsByClassName){
        res = ele.getElementsByClassName(className)
        return res;
    }

    /*
        如果当前浏览器不支持getElementsByClassName
        思路：
            1、通过标签名获取所有元素
                getElementsByTagName()
            2、过滤不包含className的元素
    */
    var arr = ele.getElementsByTagName('*');
    res = [];
    for(var i=0;i<arr.length;i++){
        // 判断当前元素是否包含className这个类名
        if(arr[i].className.indexOf(className) >= 0){
            res.push(arr[i]);
        }
    }

    return res;
    },
    /**
     * [获取元素css样式，兼容ie8-]
     * @param  {Element} ele  [获取样式的元素]
     * @param  {String} attr [css属性名]
     * @return {String}      [css属性值]
     */
    getCss:function(ele,attr){
    // 判断浏览器是否支持getComputedStyle
    if(window.getComputedStyle){
        return getComputedStyle(ele)[attr];
    }

    // ie8-
    else if(ele.currentStyle){
        return ele.currentStyle[attr];
    }

    // 返回内联样式
    else{
        return ele.style[attr];
    }

    },
    /**
     * [给元素添加事件的方法，支持事件捕获，兼容ie8-]
     * @param {Element} ele     [绑定事件的元素]
     * @param {String} type    [事件类型]
     * @param {Function} handler [事件处理函数]
     * @param {[Boolean]} capture [是否捕获]
     */
    addEvent:function(ele,type,handler,capture){
    // 判断当前浏览器是否支持addEventListener()
    if(ele.addEventListener){
        ele.addEventListener(type,handler,capture);
    }

    // ie8-
    else if(ele.attachEvent){
        ele.attachEvent('on' + type,handler);
    }

    // 其他浏览器
    else{
        ele['on' + type] = handler;
    }
    },
    /**
     * [设置cookie]
     * @param {String} name    [cookie名]
     * @param {String} val     [cookie值]
     * @param {[Date]} expires [有效期]
     * @param {[String]} path    [cookie路径]
     */
    Cookieset:function(name,val,expires,path){
        // document.cookie = 'cartlist=1234;expires=' + now
        var cookieStr = name + '=' + val;

        // 有效期
        if(expires){
            cookieStr += ';expires=' + expires.toUTCString();
        }

        // 设置路径
        if(path){
            cookieStr += ';path=' + path;
        }

        // 写入
        document.cookie = cookieStr;
    },
    Cookieget:function(name){
        // 先获取所有cookie
        var cookie = document.cookie;
        if(cookie.length === 0){
            return '';
        }

        // 拆分成数组
        cookie = cookie.split('; ');

        // 遍历cookie，找到想要的cookie值
        var res = '';
        cookie.forEach(function(item){
            var arr = item.split('=');

            if(arr[0] === name){
                res = arr[1];
            }
        });

        return  res;
    },
    Cookieremove:function(name){
        // 利用设置过期时间达到删除的效果。
        var now = new Date();
        now.setDate(now.getDate()-100);

        // document.cookie = name +'=xxx;expires=' + now.toUTCString();
        Cookie.set(name,null,now);
    },

    // 使用
    // Cookie.set('cartlist','1234',now);
    // Cookie.set('cartlist','1234');
    // Cookie.get('cartlist');//1234
    // Cookie.remove('cartlist');
    /**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {Object} opt   [动画属性集合]
 * @param  {Function} callback   [回调函数]
 */
    animate:function(ele,opt,callback){
    //如何确定哪个属性是最后完成的动画

    // 动画数量
    var timerQty = 0;

    //遍历属性
    for(var attr in opt){
        createTimer(attr);
        timerQty++;
    }
    
    function createTimer(attr){
        // 根据属性定义定时器名字
        var timerName = attr + 'timer';

        // 获取目标值
        var target = opt[attr];

        clearInterval(ele[timerName]);
        ele[timerName] = setInterval(function(){
            // 获取当前值
            var current = getCss(ele,attr);//10px,0.5,20em,2.4rem,40deg

            // 提取单位
            var unit = current.match(/[a-z]+$/);
            unit = unit ? unit[0] : '';

            // 提取值
            current = parseFloat(current);


            // 计算速度（最小变化值：1/-1）
            // 避免速度变成0
            var speed = (target-current)/10;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            // 针对opacity属性计算速度
            if(attr === 'opacity'){
                speed = speed>0 ? 0.01 : -0.01;
            }

            // 到达目标值后清除动画定时器
            if(current === target || speed === 0){
                clearInterval(ele[timerName]);

                // 重置目标值
                current = target - speed;

                // 动画完成数量减一
                timerQty--;


                // 执行回调函数
                if(timerQty===0 && typeof callback === 'function'){
                    callback();
                }
            }

            ele.style[attr] = current + speed + unit;
        },30);
    }
    },
    type:function(data){
    // data.toString()
    // [object Array]
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
    }
   }










    
    
    
    







//模块化开发配置文件
require.config({
    paths:{
        'jquery':'/lib/jquery-3.2.1',
        'jqueryui':'/lib/jquery-ui-1.12.1/jquery-ui'
    },
    shim:{
        //设置插件之间的依赖
        jqueryui:['jquery']
    }
})
require(['config'],function(){
require(['jquery'],function(){
    $('#head').load('base.html .header');
    $('#foot').load('base.html .foot');
    //获取url中的参数
    var showdetail = document.querySelector('.content .showdetail');
    var id = location.search.slice(1);
    $.ajax({
        type:"get",
        url:"/api/goods.php",
        data:"id="+id,
        success:function(res){
            console.log(res)
            var arr = JSON.parse(res)
            var imgarr=arr.imgarr.split(',');
            showdetail.innerHTML=`<p class="pf">
                        首页 > <span>面部护理</span>  >  <span class="cate">${arr.category}</span> ><span>${arr.name}</span>
                        </p>
                        <div class="show">
                            <ul>
                                <li><img src="${imgarr[0]}"/></li>
                                <li><img src="${imgarr[1]}"/></li>
                                <li><img src="${imgarr[2]}"/></li>
                                <li><img src="${imgarr[3]}"/></li>
                                <li><img src="${imgarr[4]}"/></li>
                            </ul>
                            <div class="show-m">
                                <div class="mainbox">    
                                    <img class="mainImg" src="${arr.imgurl}"/>
                                    <div class="cover"></div>
                                </div>
                                <div class="zoom">
                                    <img class="zoomImg" src=""/>
                                </div>
                                <p>分享到 :</p>
                            </div>
                            <div class="show-r">
                                <h2>${arr.name}</h2>
                                <div class="show1">
                                    <p>英文名称：<span>Lancome Hydra Zen Nuit Soothing Recharging Night Cream</span></p>
                                    <p>商品编号：<span>${arr.id}</span></p>
                                    <p>No5   价：<span class="sppp">${arr.price}</span>市场价:<span class="spp">${arr.price}</span>折扣:<span>${arr.sale}</span>折 </p>
                                    <p>特  价:<span>135.00</span><span>(不返积分)</span></p>
                                </div>
                                <div class="show2">
                                    <p>所属品牌：<span>Lancome 兰蔻</span> → <span>水份缘舒缓系列</span></p>
                                    <p>所属分类：<span>面部护理</span> → <span>润肤步骤</span> → <span>夜间</span></p>
                                    <p>用户评分:<img src="" alt=""><a href="">已有31条评论</a></p>
                                    <p>运费说明：购物满80元免费<a href="">快递查看运费详情</a></p>
                                    <p>消费保障：<span><i></i>品质承诺</span><span><i></i>货到付款</span>  <span><i></i>不满意退货</span> <span><i></i>可靠包装</span></p>
                                </div>
                                <div class="buycar">
                                <span>我要买:</span><span class="buyjian">-</span><input class="buyqty" type="text" /><span class="buyjia">+</span><span class="add-car" data-id=${arr.id}>加入购物车</span>
                                </div>
                            </div>                           
                        </div>`
        }
    })
require(['base'],function(){
    $imgall = $('.content .showdetail .show ul img');
    $imgbig = $('.content .showdetail .show .show-m .mainImg')
    console.log($imgall)
    $imgall.on('mouseover',function(){
        var idx=$(this).index();
        $imgbig.attr('src',$(this).attr('src'));
    })
//-------------------放大镜-------------------------
    //首先加载大图
    $('.zoomImg').attr('src',$('.mainImg').attr('src'));
    $('.zoom').hide();
    $('.cover').hide();
    $('.mainbox').mousemove(function(event){
        $('.zoom').show();
        $('.cover').show();
        $('.zoomImg').attr('src',$('.mainImg').attr('src'));
        //计算遮罩的定位位置
        var left=event.pageX-$('.mainbox').offset().left-50;
        var top=event.pageY-$('.mainbox').offset().top-50;                             
        if(left<0){
            left = 0;
        }else if(left > $('.mainbox').width()-100){
            left = $('.mainbox').width()-100;
        }

        if(top<0){
            top = 0;
        }else if(top > $('.mainbox').height()-100){
            top = $('.mainbox').height()-100;
        }
        $('.cover').css({left:left,top:top}); 
        $('.zoomImg').css({left:-left*2,top:-top*2});
        })

        $('.mainbox').mouseleave(function(){
            $('.zoom').hide();
            $('.cover').hide();
        })
//--------------------下方商品评论区tab切换-----------
$tabul = $('.tab-head ul')
$tabli = $tabul.find('li')
$tabli.eq(0).addClass('active');
$tabcont = $('.tab-content .tabt')
$tabcont.hide().eq(0).show()
$tabul.on('click','li',function(){
    var idx = $(this).index()
    for(var i=0;i<$tabli.length;i++){
        if(i==idx){
            $tabli.eq(i).addClass('active');
            $tabcont.eq(i).show();
        }else{
            $tabli.eq(i).removeClass('active');
            $tabcont.eq(i).hide(); 
        }
    }
})
})
})
})
/* 
* @Author: liumian
* @Date:   2017-08-31 15:03:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 16:52:12
*/
require(['config'],function(){
    require(['jquery','common','jqueryui'],function($,com,jqui){
        $('#head').load('html/base.html .header')
        $('#foot').load('html/base.html .foot')
        require(['/js/base'],function(){

        // $slidenav.show();
        // $(window).on('scroll',function(){
        //     var scrolltop = $(window).scrollTop();
        //     if(scrolltop>500){
        //         $slidenav.hide(); 
        //     }else{
        //         $slidenav.show();
        //     }       
        // })      
        // tab切换
        $tabT = $('.tab .tab-t ul');
        $content = $('.tab-cnt .content');
        // 按钮第一个高亮，内容框第一个显示，其它掩藏
        $tabT.find('li').eq(0).addClass('active');
        $content.first().nextAll().hide();
        //绑定按钮事件
        $tabT.on('mouseover','li',function(){
            var  idx = $(this).index();
            //当前按钮高亮，其它失去高亮
            $(this).addClass('active').siblings('li').removeClass('active');
            //对应内容框显示。其它隐藏
            $content.eq(idx).show().siblings('.content').hide();
        })
        //skincare的隐藏和显示
        $skin= $('.skincare .skin3 ul');
        $conts = $skin.find('li .cont');
        $contsp = $skin.find('li .skin-tl')
        $conts.hide().eq(0).show();
        $contsp.eq(0).hide();
        $skin.on('mouseover','li',function(){
            var idx = $(this).index();
            for(var i=0;i<$conts.length;i++){
                if(i==idx){
                    $contsp.eq(i).hide();
                    $conts.eq(i).show();
                }else{
                    $contsp.eq(i).show();
                    $conts.eq(i).hide();
                }       
            }
            
        })
        //makeup的隐藏和显示
        $make= $('.makeup .skin3 ul');
        $contm = $make.find('li .cont');
        $contmp = $make.find('li .skin-tl')
        $contm.hide().eq(0).show();
        $contmp.eq(0).hide();
        $make.on('mouseover','li',function(){
            var idx = $(this).index();
            for(var i=0;i<$contm.length;i++){
                if(i==idx){
                    $contmp.eq(i).hide();
                    $contm.eq(i).show();
                }else{
                    $contmp.eq(i).show();
                    $contm.eq(i).hide();
                }       
            }
            
        })
        //perfume的隐藏和显示
        $perfume = $('.perfume .skin3 ul');
        $contp = $perfume.find('li .cont');
        $contpp = $perfume.find('li .skin-tl');
        $contp.hide().eq(0).show();
        $contpp.eq(0).hide();
        $perfume.on('mouseover','li',function(){
            var idx = $(this).index();
            for(var i=0;i<$contp.length;i++){
                if(i==idx){
                    $contp.eq(i).show();
                    $contpp.eq(i).hide();
                }else{
                    $contp.eq(i).hide();
                    $contpp.eq(i).show();
                }
            }
        })
        //men的显示和隐藏
        $men = $('.men .skin3 ul');
        $contmen = $men.find('.cont');
        $contmenp = $men.find('li .skin-tl');
        $contmen.hide().eq(0).show();
        $contmenp.eq(0).hide();
        $men.on('mouseover','li',function(){
            var idx = $(this).index();
            for(var i=0;i<$contmen.length;i++){
                if(i==idx){
                  $contmen.eq(i).show();
                  $contmenp.eq(i).hide();  
                }else{
                  $contmen.eq(i).hide();
                  $contmenp.eq(i).show();  
                }                
            }
        })
        //body&hair的显示和隐藏
        $body = $('.bodyhair .skin3 ul');
        $contb = $body.find('.cont');
        $contbp = $body.find('li .skin-tl');
        $contb.hide().eq(0).show();
        $contbp.eq(0).hide();
        $body.on('mouseover','li',function(){
            var idx = $(this).index();
            for(var i=0;i<$contb.length;i++){
                if(i==idx){
                  $contb.eq(i).show();
                  $contbp.eq(i).hide();  
                }else{
                  $contb.eq(i).hide();
                  $contbp.eq(i).show();  
                }                
            }
        })
        //返顶动画
        $topbtn = $('.topbtn');
        $(document).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
            //当滚动到一定距离时，显示按钮
            if(scrollTop>800){
                $topbtn.fadeIn();
            }else{
                $topbtn.fadeOut();
            }
        })
        //绑定事件
        $topbtn.on('click',function(){
            $('html,body').stop().animate({'scrollTop':0},'slow');
        })

        //抢购倒计时
        $sales = $('.sales');
        $ptime = $('.sales ul li .time')
        var endTime = '2017/9/10 12:57:10';
        var end = Date.parse(endTime);
        var timer = setInterval(function(){
            var now = Date.now();
            var  offset = Math.floor((end-now)/1000);
            if(offset<=0){
                clearInterval(timer);
                $sales.hide();
            }
            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60);
            for(var i=0;i<$ptime.length;i++){
                $ptime.eq(i).find('span').eq(0).text(hour);
                $ptime.eq(i).find('span').eq(1).text(min);
                $ptime.eq(i).find('span').eq(2).text(sec); 
            }   
        },1000)
    })
    })
})

require(['config'],function(){
    require(['jquery'],function($){
        $('#head').load('base.html .header');
        $('#foot').load('base.html .foot');
        $login = $('.head .sign ul li a');
        //这里的require请求只是确保上面的节点已经全部加载
        require(['common','base'],function(){      
//---------------侧边栏动画------------------------------------------     
        $selist = $('.selist');
        $content = $selist.find('.content');
        $content.hide();
        var loop=true;
        $selist.on('click','.clickp',function(){
            if(loop){
               $(this).next().slideDown();
               loop=false; 
            }else{
               $(this).next().slideUp();
               loop=true; 
            }      
        })
//--------------侧边栏导航动画---------------------------------------
        // $spanlist = $('#head .header .nav .list');
        // $listul = $('#head .header .nav .list ul');
        // $spanlist.on('mouseenter',function(){
        //     $listul.slideDown();
        //  })
        // $spanlist.on('mouseleave',function(){
        //     $listul.slideUp();
        //  })   
//---------------通过api接口连接数据库，生成列表商品------------------
        var pageNo=1;
        var qty=24;
        var length;
        $goodlist = $('.goodlist');
        $page = $('.page');
        //pagepre
        $pagepre = $('.pagepre')
        $pno = $pagepre.find('.pno strong')
        $ptotal = $pagepre.find('.pno .strong')
        $total = $pagepre.find('.total strong')
        //-------------进入第一次请求--------------
        $.ajax({
                type:"get",
                url:"/api/list.php",
                data:"pageNo="+pageNo+"&qty="+qty,
                success:function(res){
                    show(res);
                }
            }        
        )
        //----------列表下端换页按钮-----------
        $page.on('click','span',function(){
            if($(this).hasClass('btnpre')){
                if(pageNo<=1){
                    return;
                }else{
                    pageNo--; 
                }              
            }else if($(this).hasClass('btnnext')){
                if(pageNo>=length){
                    return;
                }else{
                    pageNo++;
                }
            }else{
                pageNo = $(this).text();
            }
            $.ajax({
                type:"get",
                url:"/api/list.php",
                data:"pageNo="+pageNo+"&qty="+qty,
                success:function(res){
                    show(res);
                }
            })
        })
        //--------------列表前端按钮--------------------
        $pagepre.on('click','span',function(){
            //前端换页按钮
            if($(this).hasClass('prep')){
                if(pageNo<=1){
                    return;
                }else{
                    pageNo--; 
                }
            }else if($(this).hasClass('nextp')){
                if(pageNo>=length){
                    return;
                }else{
                    pageNo++;
                }
            }else{
                    return;
                }
            $.ajax({
                type:"get",
                url:"/api/list.php",
                data:"pageNo="+pageNo+"&qty="+qty,
                success:function(res){
                    show(res);
                }
            })
        })
        //---------------------品牌选择---------------------
        $ppai = $('.box-r .cata');
        $ppai.on('click','span',function(){
            console.log(33)
            $.ajax({
                type:'get',
                url:"/api/list.php",
                data:"pageNo="+pageNo+"&qty="+qty+"&cate="+$(this).text(),
                success:function(res){
                    console.log(66)
                show(res);
            } 
            })
        })     
        //----------------销量和价格排序----------------------
        $pagepre = $('.box .pagepre');
        console.log($pagepre)
        $pagepre.on('click','span',function(){
            if($(this).hasClass('sorts')){
                console.log('sorts')
                $.ajax({
                    type:'get',
                    url:"/api/list.php",
                    data:"pageNo="+pageNo+"&qty="+qty+"&sqty=sqty",
                    success:function(res){
                        show(res);
                    }
                })
            }
            else if($(this).hasClass('sortp')){
               $.ajax({
                    type:'get',
                    url:"/api/list.php",
                    data:"pageNo="+pageNo+"&qty="+qty+"&price=price",
                    success:function(res){
                        console.log(res)
                        show(res);
                    }
                }) 
            }
        })
        //-----------------生成列表画面函数--------------------
        function show(res){
            var arr = JSON.parse(res);
            //清空页码
            $page.text('');
            //生成页码按钮
            length = Math.ceil(arr.total/qty);
            for(var i=1;i<=length;i++){
                $span = $('<span/>');
                if(i==pageNo){
                    $span.addClass('btn');
                }
                $span.text(i);
                $page.append($span);
            }
            //生成上下页按钮
            $btnp = $('<span/>')
            $btnp.text('上一页')
            $btnp.addClass('btnpre')
            $btnn = $('<span/>')
            $btnn.text('下一页')
            $btnn.addClass('btnnext')
            $page.prepend($btnp)
            $page.append($btnn)
            //生成商品列表
            var ul = document.createElement('ul');
            ul.innerHTML = arr.data.map(function(item){
                return `<li data-id="${item.id}" data-cate="${item.category}">
                            <a href="/html/detail.html?${item.id}"><img src="${item.imgurl}"></a>
                            <p><a href="/html/detail.html?${item.id}">${item.name}</a></p>
                            <p>￥<span>${item.price}</span><span>${item.sale}</span>折<span class="sqty">${item.sqty}</span></p>
                            <div><button class="addcar">加入购物车</button><button>收藏</button></div>
                        </li>`
            }).join('')
            //清空商品显示区域
            $goodlist.html('');
            $goodlist.append(ul);
            //显示页码
            $pno.text(pageNo);
            $ptotal.text(length);
            $total.text(arr.total);
        }     
      })
    })
})

require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery','common'],function($,com){
        $('#head').load('base.html .header');
        $('#foot').load('base.html .foot');
        require(['base'],function(){
            //登录数据及相对应的提示
            $logname = $('.loginR .login .logname');
            $alert1 = $('.loginR .login .alert1')
            $logpass = $('.loginR .login .logpass')
            $alert2 = $('.loginR .login .alert2')
            $logcode = $('.loginR .login .logcode')
            $alert3 = $('.loginR .login .alert3')
            $code = $('.loginR .login .code')
            $logbtn = $('.loginR .login .logbtn')
            //注册数据及相对应的提示
            $regname = $('.loginR .register .regname');
            $alert4 = $('.loginR .register .alert4');
            $regnameok = $regname.siblings('img');
            $regpass = $('.loginR .register .regpass');
            $alert5 = $('.loginR .register .alert5');
            $regpassok = $regpass.siblings('img');
            $regpassr = $('.loginR .register .regpassr');
            $alert6 = $('.loginR .register .alert6');
            $regpassrok = $regpassr.siblings('img');
            $regemail = $('.loginR .register .regemail');
            $alert7 = $('.loginR .register .alert7');
            $regemailok = $regemail.siblings('img');
            $regcode = $('.loginR .register .regcode');
            $regcodeok = $regcode.siblings('img');
            $alert8 = $('.loginR .register .alert8');
            $codet = $('.loginR .register .codeText');
            $agree = $('.loginR .register .agree');
            $regbtn = $('.loginR .register .regbtn');
            $showpass = $('.loginR .register .showpass li');
            //注册验证
            //验证用户名是否存在以及合法性
            // var loop = 0;
            // console.log(loop)
            // $regbtn.attr("disabled","disabled");
            // $regbtn.css({backgroundColor:'#666'})
            // if($agree.checked){
            //    $regbtn.attr("disabled",false);
            //    $regbtn.css({backgroundColor:'#359BDD'}) 
            // }
            // if(!$agree.attr('checked')){
            //     $regbtn.attr("disabled","disabled");
            //     $regbtn.css({backgroundColor:'#666'})
            // }else{
            //     $regbtn.attr("disabled",false);
            //     $regbtn.css({backgroundColor:'#359BDD'})
            // }
            $regnameok.hide();
            $regpassok.hide();
            $regpassrok.hide();
            $regemailok.hide();
            $regcodeok.hide();
            $code.text(vCode());
            $codet.text(vCode());
            var loop1 = false;
            var loop2 = false;
            var loop3 = false;
//----------------------注册-------------------------  
            $regname.blur(function(){
                var reg = /^[a-z][\da-z\-]{5,19}$/i;
                if(!reg.test($(this).val())){
                    $(this).css({border:'1px solid #f00'});
                    $alert4.text('用户名不合法');
                    $alert4.css({color:'#f00'});
                    $regnameok.hide();
                }else{
                    $.ajax({
                        type:"get",
                        url:"/api/reg.php",
                        data:"username="+$(this).val(),
                        success: res => {
                            if(res=='fail'){
                                $(this).css({border:'1px solid #f00'})
                                $alert4.css({color:'#f00'})
                                $alert4.text('对不起，此用户名太受欢迎了，请换一个')
                                $regnameok.hide(); 
                            }else{
                                $(this).css({border:'1px solid #03AFEC'})
                                $alert4.css({color:'#03AFEC'})
                                $regnameok.show();
                                $alert4.text('')
                                loop1=true;
                            }
                        }
                    })
                }
            })
            //验证密码等级
            $regpass.keyup(function(){
                var hasNumber=false;
                var hasLetter=false;
                var hasSign=false;
                var pass = $regpass.val().trim().toUpperCase();
                for(var i=0;i<pass.length;i++){
                    if(!isNaN(pass[i])){
                        hasNumber = true;
                    }else{
                        if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90){
                            hasLetter = true;
                    }else{
                        hasSign = true;
                    }
                }
                }
                if(hasSign && (hasLetter || hasNumber)){
                    $showpass.eq(0).css({backgroundColor:'#c00'});
                    $showpass.eq(1).css({backgroundColor:'#f90'});
                    $showpass.eq(2).css({backgroundColor:'#0c0'});
                }else if(hasLetter && hasNumber){
                    $showpass.eq(0).css({backgroundColor:'#f00'});
                    $showpass.eq(1).css({backgroundColor:'#f60'});
                    $showpass.eq(2).css({backgroundColor:'#ccc'});
                }else if(hasSign || hasLetter || hasNumber){
                    $showpass.eq(0).css({backgroundColor:'#f00'});
                    $showpass.eq(1).css({backgroundColor:'#ccc'});
                    $showpass.eq(2).css({backgroundColor:'#ccc'});
                }else{
                    $showpass.eq(0).css({backgroundColor:'#ccc'});
                    $showpass.eq(1).css({backgroundColor:'#ccc'});
                    $showpass.eq(2).css({backgroundColor:'#ccc'});
                }
            })
            //验证密码合法性
            $regpass.blur(function(){
                var reg=/^\S{6,19}$/;
                if(!reg.test($regpass.val())){
                    $alert5.show();
                    $alert5.text('密码太短')
                    $alert5.css({color:'#f00'});
                    $(this).css({border:'1px solid #f00'})
                    $regpassok.hide();
                }else{
                    $regpassok.show();
                    $alert5.hide();
                    $(this).css({border:'1px solid #03AFEC'})
                }
            })
            //验证再次输入密码是否相同
            $regpassr.blur(function(){
                if($(this).val()!==$regpass.val()){
                    $alert6.show();
                    $alert6.text('两次输入密码不一致，请检查')
                    $alert6.css({color:'#f00'})
                    $(this).css({border:'1px solid #f00'})
                    $regpassrok.hide();
                }else{
                    $alert6.hide();
                    $(this).css({border:'1px solid #03AFEC'})
                    $regpassrok.show();
                    loop2=true;
                }
            })
            //验证邮箱的合法性
            $regemail.blur(function(){
                var reg=/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,}){1,2}$/i;
                if(!reg.test($regemail.val())){
                    $alert7.show();
                    $alert7.text('邮箱不合法，请重新输入');
                    $alert7.css({color:'#f00'});
                    $(this).css({border:'1px solid #f00'})
                    $regemailok.hide();
                }else{
                    $alert7.hide();
                    $(this).css({border:'1px solid #03AFEC'})
                    $regemailok.show();
                    loop3=true;
                }
            })
            //同意条款不点，无法点击按钮
            // if($agree)
            //随机验证码
            $codet.on('click',function(){
                var res = vCode();
                $(this).text(res);
            })
            //提交注册信息
            $regbtn.on('click',function(){
                //验证码
                if($regcode.val()==$codet.text()&&loop1&&loop2&&loop3){
                    $regcodeok.show();
                    $alert8.hide();
                    $.ajax({
                        type:"get",
                        url:"/api/reg.php",
                        data:"username="+$regname.val()+"&password="+$regpass.val()+"&email="+$regemail.val()+"&commit=commit",
                        success:function(res){
                          if(res=='插入数据成功'){
                            alert('恭喜注册成功')
                          }  
                        }
                    })
                }else{
                    $regcodeok.hide();
                    $alert8.show();
                    $alert8.text('以上信息填写有误');
                    $alert8.css({color:'#f00'})
                }
            })
//-------------------登录---------------------------
            //点击生成随机验证码
            $code.on('click',function(){
                var res = vCode();
                $(this).text(res);
            })
            $logbtn.on('click',function(){
                var now = new Date();
                now.setDate(now.getDate()+7);
                if($logcode.val()==$code.text()){
                    $alert3.hide();
                    $.ajax({
                        type:"get",
                        url:"/api/login.php",
                        data:"username="+$logname.val()+"&password="+$logpass.val(),
                        success:function(res){
                            if(res=='ok'){
                                if(null){
                                    location.href='/index.html';
                                    document.cookie = 'username='+$logname.val()+';expires='+now.toUTCString()+';path=/';
                                    document.cookie = 'password='+$logpass.val()+';expires='+now.toUTCString()+';path=/';
                                }else{
                                    location.href='/index.html';
                                    document.cookie = 'username='+$logname.val()+';path=/';
                                    document.cookie = 'password='+$logpass.val()+';path=/';
                                }                                
                            }else{
                                $alert3.show();
                                $alert3.text('登录信息有误，请重新输入')
                            }
                        }
                    })
                }else{
                    $alert3.show();
                    $alert3.css({color:"#f00"})
                    $alert3.text('请输入正确的验证码')
                }
            })
//----------------------------s随机验证码函数------------------------------
            function vCode(){
                var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

                var res = '';
                for(var i=0;i<4;i++){
                    // 获取随机索引值
                    var idx = parseInt(Math.random()*arr_char.length);

                    // 根据索引值获取字符，并拼接
                    res += arr_char[idx];
                }

                return res;
            }            
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        $('#head').load('base.html .header');
        $('#foot').load('base.html .foot')           
        require(['base'],function(){
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})
require(['config'],function(){
    require(['jquery'],function($){
        require(['base'],function(){
            $('#head').load('base.html .header');
            $('#foot').load('base.html .foot')
        })
    })
})