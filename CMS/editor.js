//富文本编辑器脚本
document.addEventListener('DOMContentLoaded',function(){
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