
/*
last-update:cjm
update:cjm

*/

//服务器,设置静态文件夹
var express = require('express');
var mysql = require('mysql');
var bodyParse = require('body-parser');
//初始化express
var app = express();

//监听窗口打开服务器
app.listen(12345);


//引入自定义模块

var handle = require('./CMS/api/sql_caozuo.js');
handle(app,mysql,bodyParse);
	


//引入数据库连接模块,打开数据库
var connect = require("./src/api/connect");
//connect.mysql //暴露参数,需要的时候可以用
//connect.connection //暴露参数,需要的时候可以用
connect.con();//执行连接


//reg模块
var reg = require("./src/api/reg.js") ;
reg(app,connect.connection);

//login模块
var login = require("./src/api/login.js") ;
login(app,connect.connection);

//list模块
var list = require("./src/api/list.js") ;
list(app,connect.connection);

//goods模块
var goods = require("./src/api/goods.js") ;
goods(app,connect.connection);


//指定根目录下的pubilc文件夹作为静态资源的存放地方(css,js,html,json,jpg)
app.use(express.static('src'));
app.use(express.static('CMS'));


console.log("开启服务器")
