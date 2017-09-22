function saveCar(app,mysql,bodyParse){
	
	var shujuku = require('./sql.js');
	var sjMysql = mysql;
		shujuku(sjMysql);
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
			
				res.append("Access-Control-Allow-Origin", "*")

				connection.query(`SELECT * FROM user where username =  "${req.body.username}"`,function(error, results, fields) {
						//[{},{}]
						var goods = [];
						
							goods.push(results[0].userCar);
							console.log(goods)

					});
				res.send('现在发送存购物车数据')

				
		})
		







}

module.exports = saveCar