
function handle(app,mysql,bodyParse,multer){

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




		var multer = require('multer');
		/*var upload = multer({
			//如果用这种方法上传，要手动添加文明名后缀
			dest: 'uploads/'
		})*/
		var storage = multer.diskStorage({
			//设置上传后文件路径，uploads文件夹会自动创建。
			destination: function(req, file, cb) {
				cb(null, './CMS/uploads')
			},
			//给上传文件重命名，获取添加后缀名
			filename: function(req, file, cb) {
				var fileFormat = (file.originalname).split(".");
				//给图片加上时间戳格式防止重名名
				//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
				cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
			}
		});
		var upload = multer({
			storage: storage
		});

		//单图上传
		//app.post('/upload-single', upload.single('logo'), function(req, res, next) {
		app.post('/upload', upload.any(), function(req, res, next) {	
			res.append("Access-Control-Allow-Origin","*");
			console.log(req.files)
			console.log('文件类型：%s', req.files[0].mimetype);
			console.log('原始文件名：%s', req.files[0].originalname);
			console.log((req.files[0].originalname).split("."))
			console.log('文件大小：%s', req.files[0].size);
			console.log('文件保存路径：%s', req.files[0].path);
			res.send({
				path:req.files[0].filename
			});
		});


		console.log('已经启动xinzeng模块')

}


module.exports = handle;