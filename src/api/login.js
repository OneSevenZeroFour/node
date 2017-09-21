function login(app, connection) {
	//引入md5加密模块
	var crypto = require('crypto');

	function cryptPwd(password) {
		var md5 = crypto.createHash('md5');
		return md5.update(password).digest('hex');
	}

	app.get('/login', function(req, res) {

		//获取参数
		var username = req.query.username ? req.query.username : '';
		var password = req.query.password ? req.query.password : '';

		//密码转md5
		var password = cryptPwd(password);
		
//		console.log(username,password)
		//sql语句
		var sql = `select * from user where username="${username}" and password="${password}"`;

		//连接数据库查看用户名是否正确
		connection.query(sql, function(error, results, fields) {
			if(error) throw error;

			if(results[0] == undefined) {
				res.send("fail")
			} else {
				res.send("ok")
			}
		});

	})

}

module.exports = login;