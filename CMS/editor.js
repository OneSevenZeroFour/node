//富文本编辑器脚本
document.addEventListener('DOMContentLoaded',function(){


       $goodname = $('#user-name')
       $price = $('#user-email')
       $discount = $('#user-phone')
       $imgurl = $('#user-QQ')
       $imgarr = $('#user-weibo')
       $kind = $('#category')
       $qty = $('#user-qty')
       $intro = $('#user-intro')
    var id = window.location.search.slice(1);
    console.log(id)

    if(id.length>0){
      $.ajax({
        type:"post",
        url:"http://localhost:12345/change",
        data:{
          id:id
        },
        success:function(res){
        	console.log(res)
        	console.log(888	)
           
            $goodname.val(res[0].name)
            $price.val(res[0].price)
            $discount.val(res[0].sale)
            $imgurl.val(res[0].imgurl)
            $imgarr.val(res[0].imgarr)
            $kind.val(res[0].category)
            $qty.val(res[0].sqty)
            $intro.val(res[0].description)

            console.log(res[0].name)
        }
      })
    }

    $('#c_save').click(function(){
		      var goodname = $goodname.val();
		      var price = $price.val();
		      var discount = $discount.val();
		      var imgurl = $imgurl.val();
		      var imgarr = $imgarr.val();
		      var kind = $kind.val();
		      var qty = $qty.val()
		      var intro = $intro.val();
		          console.log(goodname,price)
		          console.log(id.length)
                  console.log(intro)
		      if(id.length>0){
		          $.ajax({
		          type:"post",
		          url:"http://localhost:12345/update",
		          data:{
		            id:id,
		            goodname:goodname,
		            price:price,
		            discount:discount,
		            imgurl:imgurl,
		            imgarr:imgarr,
		            kind:kind,
		            qty:qty,
		            intro:intro
		          },
		          success:function(res){
		            window.location.href = './admin-table.html';
		          }
		        })
		      }else{
		        $.ajax({
		          type:"post",
		          url:"http://localhost:12345/insert",
		          data:{
		            goodname:goodname,
		            price:price,
		            discount:discount,
		            imgurl:imgurl,
		            imgarr:imgarr,
		            kind:kind,
		            qty:qty,
		            intro:intro
		          },
		          success:function(res){
		           	 window.location.href = './admin-table.html';
		          }
		        })
		      }
    })

    // 主图片上传
    $('#upload').on('click',function(){
            var formData = new FormData();
            //记得append("xxx")名字要跟后端一致
            // for(var i=0;i<$('#file')[0].files.length;i++){
            //     formData.append('logo', $('#file')[0].files[i]); 
            // }
            formData.append('logo',$('#file')[0].files[0]);
            // console.log($('#file')[0].files[0])
            // console.log(formData)
            $.ajax({
                url: 'http://localhost:12345/upload',
                type: 'POST',
                cache: false, //不必须
                data: formData,
                processData: false,
                contentType: false,
                success: function(data) {
                    console.log(data)
                    var imgadd = "/uploads/"+data.path;
                    $('#img').attr('src',imgadd)
                    $imgurl.val(imgadd)
                }
            })
        })

  //小图上传
  $('#upmload').on('click',function(){
    console.log(66)
        var formData = new FormData();
            //记得append("xxx")名字要跟后端一致
            for(var i=0;i<$('#mfile')[0].files.length;i++){
                formData.append('logo', $('#mfile')[0].files[i]);
            }
            // formData.append('logo',$('#file')[0].files[0]);
            // console.log($('#file')[0].files[0])
            // console.log(formData)
            $.ajax({
                url: 'http://localhost:12345/upmload',
                type: 'POST',
                cache: false, //不必须
                data: formData,
                processData: false,
                contentType: false,
                success: function(data) {
                    console.log(data)
                    var str='';
                    $('.img1').attr('src',"/uploads/"+data.path[0].filename);
                    $('.img2').attr('src',"/uploads/"+data.path[1].filename);
                    $('.img3').attr('src',"/uploads/"+data.path[2].filename);
                    $('.img4').attr('src',"/uploads/"+data.path[3].filename);
                    $('.img5').attr('src',"/uploads/"+data.path[4].filename);
                    for(var i=0;i<data.path.length;i++){
                        str+="/uploads/"+data.path[i].filename+",";
                    }
                    str=str.slice(0,-1);
                    console.log(str)
                    $imgarr.val(str);
                }
            })
  })







	//实例化编辑器
	var E = window.wangEditor
	var editor = new E('#editor')//富文本编辑器实例
	editor.create();
	
	var btn = document.getElementById('ed');//高级模式按钮
	var text = document.getElementById('user-intro')//普通文本域
	var ed = document.getElementById('editor');//富文本编辑器窗口
	var flag = 1;//开关
	btn.onclick = function(){
		//打开富文本编辑器,
		if(flag){
			btn.innerHTML = "返回普通模式"
			ed.style.display = "block";
			flag = !flag; 
			//把查看文本域内容复制到富文本编辑器		
			
			//如果有p标签,那么直接添加内容到富文本编辑器
			if(text.value.indexOf('<p>')>=0){
//				console.log('有p标签')
				editor.txt.html(text.value);
			}
			//如果没有p标签,先给内容套个p标签在插入富文本编辑器
			else if(text.value.indexOf('<p>')<0 && text.value!=''){
//				console.log('没有p标签,有内容')
				editor.txt.html(`<p>${text.value}</p>`);
			}
		}
		//关闭富文本编辑器
		else{
			btn.innerHTML = "进入高级模式"
			ed.style.display = "none";
			flag = !flag; 
			//把富文本编辑器的html直接返回到文本域		
			if(editor.txt.html()=="<p><br></p>"){
				text.value='';				
			}
			else{
				text.value = editor.txt.html();
			}
		}	
	}
	
	
			
			
			
})