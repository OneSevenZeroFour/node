document.addEventListener('DOMContentLoaded',function(){

	
	$('#add').click(function(){
		console.log(99999)
		 window.location.href = './admin-user.html'
	})
	var b=15
	var a=0
    function showtable(){
    		$('#list').html('');
	        $.ajax({
		        type:"post",
		        data:{a:a,b:b},
		        url:"http://localhost:12345/select",
		        success:function(res){
		        	console.log(res)
	        //HTML结构
		          var html = res.goods.map(function(item){
		            return `<tr>
		                      <td><input type="checkbox" /></td>
		                      <td>${item.id}</td>
		                      <td><a href="#">${item.name}</a></td>
		                      <td>${item.category}</td>
		                      <td class="am-hide-sm-only">${item.price}</td>
		                      <td class="am-hide-sm-only">${item.sale}</td>
		                    
		                      <td class="am-hide-sm-only">${item.sqty}</td>
		                      <td class="am-hide-sm-only">${item.description}</td>

		                      <td>
		                        <div class="am-btn-toolbar" class="allbtn">
		                          <div class="am-btn-group am-btn-group-xs">
		                            <button data-id=${item.id} class="editbtn" class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</button>
		                            <button data-id=${item.id} class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
		                            <button data-id=${item.id} class="delbtn" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>
		                          </div>
		                        </div>
		                      </td>
		                    </tr> `
		          }).join('')
		          $('#list').html(html);
		       //页码
		       var fenye = ''
		        var c_page = Math.ceil(res.totalLen/b);

	          		for(var i=0;i<c_page;i++){
	          			fenye += '<li><a>'+(i+1)+'</a></li>'
	          		} ;

	          		$('#page').html(fenye)

	       		 }
      		})
    };
      showtable();
 


    $('#list').on('click','button',function(){
        if($(this).hasClass('delbtn')){
          var id = $(this).attr('data-id');
          console.log(id)
          var ele = $(this)

        $.ajax({
            type:"post",
            url:"http://localhost:12345/delete",
            data:{
              id:id
            },
            success:function(res){
                ele.parent().parent().parent().parent().remove();


            }
          })
        }else if($(this).hasClass('editbtn')){
            var id = $(this).attr('data-id');
            window.location.href = './admin-user.html?'+id;
          //    $.ajax({
          //   type:"post",
          //   url:"http://localhost:12345/change",
          //   data:{
          //     id:id
          //   },
          //   success:function(res){
          //       console.log(res)

                
          //   }
          // })
        }
    })

    //分页
    $('#page').on('click','li',function(){

    	a = ($(this).children().html()-1)*b
    	showtable(a,b)

    })

    //品牌选择和搜索
    $("#brand").change(function(){
        var brand = $('#brand').find("option:selected").text();
        console.log(brand)
            select(brand);
    })
    $("#brandbtn").on('click',function(){
        var brand = $('#brandsearch').val();
        select(brand);
        console.log(brand)
    })
    function select(brand){
        $.ajax({
            type:"post",
            url:"http://localhost:12345/brand",
            data:{
                brand:brand
            },
            success:function(res){
               var html = res.map(function(item){
                    return `<tr>
                              <td><input type="checkbox" /></td>
                              <td>${item.id}</td>
                              <td><a href="#">${item.name}</a></td>
                              <td>${item.category}</td>
                              <td class="am-hide-sm-only">${item.price}</td>
                              <td class="am-hide-sm-only">${item.sale}</td>
                            
                              <td class="am-hide-sm-only">${item.sqty}</td>
                              <td class="am-hide-sm-only">${item.description}</td>

                              <td>
                                <div class="am-btn-toolbar" class="allbtn">
                                  <div class="am-btn-group am-btn-group-xs">
                                    <button data-id=${item.id} class="editbtn" class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</button>
                                    <button data-id=${item.id} class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
                                    <button data-id=${item.id} class="delbtn" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>
                                  </div>
                                </div>
                              </td>
                            </tr> `
                }).join('')
                $('#list').html(html); 
            }
        })
    }
})