function goods(app, connection) {


	app.get('/goods', function(req, res) {
		//获取请求参数
	    var id = req.query.id ? req.query.id : "" 
		
		// 编写sql语句
    	
    	var sql = `select * from goods where id=${id}`;
    	
		connection.query(sql, function(error, results, fields) {
			if(error) throw error;
//			console.log(results)
			res.send(JSON.stringify(results[0]));

		});
		
	})

}

module.exports = goods;