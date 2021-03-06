require(['config'],function(){
    require(['jquery'],function($){
        $('#head').load('base.html .header');
        $('#foot').load('base.html .foot');
        $login = $('.head .sign ul li a');
        //这里的require请求只是确保上面的节点已经全部加载
        require(['base'],function(){      
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
        var sousuoval=[]
        var cookie = document.cookie.split('; ')
            cookie.forEach(function(item){
                var res = item.split('=');
                    
                    if(res[0] == 'sousuoVal'){
                        sousuoval = JSON.parse(res[1])
                      
                    }
            })
        //判断是不是搜索的     
        if(sousuoval != ''){
           
            console.log(sousuoval)
            //清空页码
            $page.text('');
            //生成页码按钮
            length = Math.ceil(sousuoval.total/qty);
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
            ul.innerHTML = sousuoval.map(function(item){
                        
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

            //取消这次的搜索记录
            var now = new Date();
                now.setDate(now.getDate()-1)
            document.cookie = 'sousuoVal=123;expires='+now+';path=/';

        }else{
                $.ajax({
                type:"get",
                url:"http://localhost:12345/list",
//              url:"/api/list.php",
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
//              url:"/api/list.php",
                url:"http://localhost:12345/list",
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
//              url:"/api/list.php",
                url:"http://localhost:12345/list",
                data:"pageNo="+pageNo+"&qty="+qty,
                success:function(res){
                    show(res);
                }
            })
        })
        
        }
//---------------------品牌选择---------------------
        $ppai = $('.box-r .cata');
        $ppai.on('click','span',function(){
            console.log(33)
            $.ajax({
                type:'get',
//              url:"/api/list.php",
                url:"http://localhost:12345/list",
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
//                  url:"/api/list.php",
                    url:"http://localhost:12345/list",
                    data:"pageNo="+pageNo+"&qty="+qty+"&sqty=sqty",
                    success:function(res){
                        show(res);
                    }
                })
            }
            else if($(this).hasClass('sortp')){
               $.ajax({
                    type:'get',
//                  url:"/api/list.php",
                    url:"http://localhost:12345/list",
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
                console.log(arr)
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
                            <a href="/html/detail.html?${item.id}"><img class="mimg" src="${item.imgurl}"></a>
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
