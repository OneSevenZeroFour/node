
function handle(app,mysql,bodyParse){

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

	//插入数据库
		app.post("/insert", function(req, res) {
				res.append("Access-Control-Allow-Origin", "*")
				
				connection.query(`insert into goods (name,price,sale,imgurl,imgarr,category,sqty,description) values ("${req.body.goodname}","${req.body.price}","${req.body.discount}","${req.body.imgurl}","${req.body.imgarr}","${req.body.kind}","${req.body.qty}","${req.body.intro}")`,function(error, results, fields){

							
							if(error == ''){
								window.location.href = 'admin-table.html/select'
							}
								

					})
						

				res.send('你现在发送的是insert请求')
		})

	//页面更新
		app.post('/select',function(req,res){
			
				res.append("Access-Control-Allow-Origin", "*")

				connection.query('SELECT * FROM goods order by id  limit 0,20', function(error, results, fields) {
									
								res.send(results)
							});


				
		})



		console.log('已经启动xinzeng模块')

}


module.exports = handle;