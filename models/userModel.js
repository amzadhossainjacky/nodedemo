var db = require('./db');

module.exports ={

    validate: function(user, callback){
        var sql ="SELECT * FROM admin where username=? and password=?";
        db.execute(sql, [user.username, user.password], function(results){
            if(results){
                callback(true);
            }else{
                callback(false);
            }
        });
	},
	getByUname: function(username, callback){
		var sql = "select * from admin where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},

	einsert: function(edata, callback){
		var sql = "insert into employee values(?,?,?,?,?,?)";

		db.execute(sql, [null, edata.ename, edata.cname, edata.contact, edata.uname, edata.password], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}