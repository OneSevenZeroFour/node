
function xinzeng(express,mysql){

	var shujuku = require('./sql.js');
	var sjMysql = mysql;
	shujuku(sjMysql);

	var app = express()

			
		app.post("/insert", function(req, res) {
			res.append("Access-Control-Allow-Origin", "*")
			res.send('你现在发送的是insert请求')
		})


}


module.exports = xinzeng