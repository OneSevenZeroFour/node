var ioFunc = require("socket.io");

var http = require("http");
//创建一个服务器
var server = http.createServer();
var io = ioFunc(server);
var userlist = [];
io.on('connection', function(socket) {
    // console.log(4444)
    socket.on('chat', function(data) {
        // console.log(data)
        // console.log(data.kefu1,1000)
        // console.log(data.kefu2,2000)
        // console.log(data.kefu3,3000)
        // console.log(data.kefu4,4000)
        userlist.push({     
            id: socket.id,  
            name1:data.kefu1,
            name2:data.kefu2,
            name3:data.kefu3,
            name4:data.kefu4
        })
        io.emit("showuserlist", userlist)
    });
    socket.on('chat', function(data) {
        // console.log(555)
        // console.log(data.toId,8888)
        if(data.toId) {
            //点对点聊天
            // io.sockets.sockets[data.toId].emit("getMessage", data)
        }
    });
});
server.listen(18000);
console.log(6666)