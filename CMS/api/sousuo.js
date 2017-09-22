function sousuo(app,mysql,bodyParse){

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

	//站内搜索
		app.post('/sousuo',function(req,res){

			res.append("Access-Control-Allow-Origin", "*")
				console.log(req.body.value)
			connection.query(`SELECT * FROM goods WHERE category like"%${req.body.value.toLowerCase()}%" OR name like "%${req.body.value.toLowerCase()}%"`,function(error,result,filed){
					res.send(result)
			}) 
			

		})



	console.log('启动搜索模块')
}


module.exports = sousuo