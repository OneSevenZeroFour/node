function saveCar(app,mysql,bodyParse){
	

	var connection = mysql.createConnection({
												host: 'localhost',
												user: 'root',
												password: '',
												database: 'project'
															});	
	//执行连接
		connection.connect();

	//插入
		app.use(bodyParse.json()); 
		app.use(bodyParse.urlencoded({
			extended: true
		}));

		app.post('/saveCar',function(req,res){
			
				// res.append("Access-Control-Allow-Origin", "*")
				
				connection.query(`update user set userCar = '${req.body.car}' where username ='${req.body.username}'`,function(error, results, fields){
						//[{},{}]
						console.log('已经存入购物车')

					});

				res.send('现在发送存购物车数据')

				
		})
		

	

		console.log('启动保存购物车模块')





}

module.exports = saveCar