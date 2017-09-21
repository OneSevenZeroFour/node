//这是连接数据库模块,连接数据库模块
	
	var mysql = require("mysql");
	
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'project'
	});
	//执行连接
	function con(){connection.connect();}

	
module.exports = {mysql,connection,con};