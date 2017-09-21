
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

	var totalLen = 0
	//页面更新
		app.post('/select',function(req,res){
			
				res.append("Access-Control-Allow-Origin", "*")

				connection.query('SELECT * FROM goods  ',function(error, results1, fields) {
									
								totalLen = (results1.length)
								
							});
				connection.query('SELECT * FROM goods order by id  limit '+req.body.a+','+req.body.b, function(error, results, fields) {
									
								res.send({goods:results,totalLen:totalLen})
							});


				
		})
		
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

	

	//删除数据
		app.post("/delete", function(req, res) {
				res.append("Access-Control-Allow-Origin", "*")
			
					
				connection.query(`DELETE  FROM goods where id="${req.body.id}"`,function(error, results, fields){

					})
						

				res.send('你现在发送的是delete请求')
		})

	//修改页面
		app.post("/change", function(req, res) {
				res.append("Access-Control-Allow-Origin", "*")
				
				connection.query(`SELECT  * FROM  goods where id = "${req.body.id}"
`, function(error, results, fields){
									
								res.send(results)
							});
				
				
						

		})

	//更新
		app.post('/update',function(req,res){
			
				res.append("Access-Control-Allow-Origin", "*")

				connection.query(` update goods set name = "${req.body.goodname}",price = "${req.body.price}",sale = "${req.body.discount}",imgurl = "${req.body.imgurl}",imgarr = "${req.body.imgarr}",category = "${req.body.kind}" ,sqty = "${req.body.qty}",description = "${req.body.intro}" where id="${req.body.id}"`,function(error, results, fields){

							
							if(error == ''){
								window.location.href = 'admin-table.html/select'
							}
								

					})


				res.send('你现在发送的是update请求')
				
		})





		console.log('已经启动xinzeng模块')

}


module.exports = handle;