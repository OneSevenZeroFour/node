
/*
last-update:cjm
update:cjm

*/





//服务器,设置静态文件夹
var express = require('express');
var mysql = require('mysql');
var bodyParse = require('body-parser')
//初始化express
var app = express();

//监听窗口打开服务器
app.listen(12345);

//上传图片multer模块
var multer = require('multer')
//引入自定义模块

var handle = require('./CMS/api/sql_caozuo.js');
	handle(app,mysql,bodyParse,multer);





//指定根目录下的pubilc文件夹作为静态资源的存放地方(css,js,html,json,jpg)
app.use(express.static('src'));
app.use(express.static('CMS'));


console.log("开启服务器")
