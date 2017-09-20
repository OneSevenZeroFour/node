//服务器,设置静态文件夹
var express = require('express');

//引入自定义模块






//初始化express
var app = express();
//指定根目录下的pubilc文件夹作为静态资源的存放地方(css,js,html,json,jpg)
app.use(express.static('src'));
app.use(express.static('CMS'));

//监听窗口打开服务器
app.listen(12345);
console.log("开启服务器")
