document.addEventListener('DOMContentLoaded',function(){
	
	console.log(99999)
	$('#add').click(function(){
		 window.location.href = './admin-user.html'
	})

    function showtable(){
        $.ajax({
        type:"post",
        url:"http://localhost:12345/select",
        success:function(res){
          console.log(res)
        
         
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
                            <button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
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
      showtable();
    //删除数据
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
        }
    })
})