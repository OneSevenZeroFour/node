function list(app, connection) {


	app.get('/list', function(req, res) {
		//获取请求参数
	    var pageNo = req.query.pageNo ? req.query.pageNo : "" 
	    var qty    = req.query.qty ? req.query.qty : "" 
	    var cate   = req.query.cate ? req.query.cate : "" 
	    var sqty   = req.query.sqty ? req.query.sqty : "" 
	    var price  = req.query.price ? req.query.price : ""  
		
	
		
		// 编写sql语句
    	var sql = "select * from goods";
    	var sql2 = 'select * from goods'//用语查询商品种数
    	// 利用条件语句拼接sql
	    if(cate){
	        sql += ` where category='${cate}'`;
	        sql2 +=` where category='${cate}'`;
	    }
	    if(sqty){
	        sql += ` order by ${sqty} desc`;
	    }
	    if(price){
	        sql += ` order by ${price}`;
	    }
	    
	    var startIdx = qty*(pageNo-1);
	
	    sql += ` limit ${startIdx},${qty}`;
   
    	
    	
    	//查询商品总数
    	var total=0
    	connection.query(sql2, function(err, r, fie) {
			console.log(r)//得到总数
			total = r.length;
			//查询数据库
			connection.query(sql, function(error, results, fields) {
				if(error) throw error;
				
//				console.log(results)
				
				// 
				var arr = {
			        'pageNo':pageNo,
			        'qty':qty,
			        'total':total,
			        'data':results,
			        'status':200,
			        'msg':'success'
			   	}
				
				res.send(JSON.stringify(arr));
	
			});
		});

	})

}

module.exports = list;