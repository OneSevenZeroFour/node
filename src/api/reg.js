function reg(app,connection) {
	//引入md5加密模块
	var crypto = require('crypto');
	function cryptPwd(password) {
	    var md5 = crypto.createHash('md5');
	    return md5.update(password).digest('hex');
	}
	app.get('/reg', function(req, res) {
		//获取参数
		//		console.log(req.query)
		var username = req.query.username ? req.query.username : '';
		var password = req.query.password ? req.query.password : '';
		var email = req.query.email ? req.query.email : '';
		var grade = req.query.grade ? req.query.grade : '';
		var gender = req.query.gender ? req.query.gender : '';
		var birthday = req.query.birthday ? req.query.birthday : '';
		var phone = req.query.phone ? req.query.phone : '';
		var commit = req.query.commit ? req.query.commit : '';

		//	    console.log(username,password,email,grade,commit)

		// 当只有用户名传入时
		if(username && (!password)) {
			//查看用户名是否已经存在
			var sql = `select username from user where username="${username}"`;
			connection.query(sql, function(error, results, fields) {
				if(error) throw error;
				// 如果用户名已经存在
				// 给前端返回一个fail
				if(results[0]==undefined){
					res.send("ok")
				}else{
					res.send("fail")
				}
			});
		}
		//当是注册提交的时候
		if(commit) {
//			// 密码md5加密
			var password = cryptPwd(password);
			var sql = `insert into user (username,password,email,grade,gender,birthday,phone) values('${username}','${password}','${email}','${grade}','${gender}','${birthday}','${phone}')`;
			
			connection.query(sql, function(error, results, fields) {
				if(error) throw error;
				if(results) {
					res.send ("插入数据成功");
				} else {
					res.send("插入失败")
				}
				
			});

		}
	})

}
module.exports = reg;