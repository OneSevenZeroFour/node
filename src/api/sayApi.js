function socket() {
	var ioFunc = require("socket.io");
	var http = require("http");
	var server = http.createServer();
	var io = ioFunc(server);
	
	var userlist = []; //用户列表
	var kefulist = []; //客服列表
	io.on('connection', function(socket) {
		
		//接受用户端口发送过来的信息,组成用户列表发送给客服端口
		socket.on('adduser', function(data) {
//			console.log(data)
			if(userlist[0]!=undefined){
				for(var i=0;i<userlist.length;i++){
					if(userlist[i].name == data.user){
						userlist[i].id = socket.id;
						break;
					}
				}
				if(i>=userlist.length){
					userlist.push({
						id: socket.id,
						name: data.user
					})
				}
			}else{
				userlist.push({
						id: socket.id,
						name: data.user
					})
			}
			io.emit("showuserlist", userlist)
		});
		//立即查看客服列表
		socket.on('lookkefu',function(){
			io.emit("showkefulist", kefulist)
		})
		
		
		//接受客服端口发送过来的信息,组成客服在线列表发送给客户
		socket.on('addkefu', function(data) {
			if(kefulist[0]!=undefined){
				for(var i=0;i<kefulist.length;i++){
					if(kefulist[i].name == data.kefu){
						kefulist[i].id = socket.id;
						break;
					}
				}

				if(i>=kefulist.length){
					kefulist.push({
					id: socket.id,
					name: data.kefu
					})
				}
			}else{
					kefulist.push({
					id: socket.id,
					name: data.kefu
					})
			}
//			console.log(kefulist)
			io.emit("showkefulist", kefulist)
		});
		//立即查看用户列表
		socket.on('lookuser',function(){
			io.emit("showuserlist", userlist)
		})
		
		//查看消息
		socket.on('msg',function(data){
			console.log(data)
			if(data.msg!=undefined && data.id!='' && data.id!=undefined){
				io.sockets.sockets[data.id].emit("getMsg", data.msg);
			}
		})
		
		//客服离线通知
		socket.on('rekefu',function(data){
			for(var i=0;i<kefulist.length;i++){
				if(kefulist[i].name == data.kefu){
					kefulist.splice(i,1)
				}
				//理解在发送一次客服列表
				io.emit("rekefulist", data)
//				console.log(kefulist)
			}
		})
		//用户离线通知
		socket.on('reuser',function(data){
			for(var i=0;i<userlist.length;i++){
				if(userlist[i].name == data.user){
					userlist.splice(i,1)
				}
				//理解在发送一次客服列表
				console.log(userlist,data)
				io.emit("reuserlist", data)
			}
		})
		
		
		
		
	});
	server.listen(18000);
	console.log("socket服务器开启")
}
module.exports =  socket;