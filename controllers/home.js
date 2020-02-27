var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', function(req, res){
	userModel.getByUname(req.cookies['username'], function(result){
		res.render('home/index', {user: result});
	});
});


router.get('/create_employee', function(req, res){
	res.render('admin/createEmp');
});


router.post('/create_employee', function(req, res){

	var edata = {
		ename: req.body.ename,
		cname: req.body.cname,
		contact: req.body.contact,
		uname: req.body.uname,
		password: req.body.password
	}

	userModel.einsert(edata, function(status){
		if(status){
			res.send({msg: 'insert ok'});
		}else{
			res.redirect('/home/create_employee');
		}
	})
});


/*

router.get('/addemployee', function(req, res){
	res.render('home/addemployee');
});

router.post('/addemployee',function(req, res){

    var user = {
        ename: req.body.ename,
        contact: req.body.contact,
        uname: req.body.uname,
        password: req.body.password

	}
	
    userModel.insert(user, function(status){
        if(status){
			//res.redirect('/home/view_users');
			console.log('ok insert')
        }else{
            res.redirect('/home');
        }
    });
});

router.get('/view_employee', function(req, res){

	userModel.getAll(function(results){
			if(results.length > 0){
				res.render('home/view_employee', {userlist: results});
			}else{
				res.redirect('/home');
			}
		});
});


router.get('/delete/:id', function(req, res){

	userModel.delete(req.params.id, function(status){
			if(status){
				res.redirect('/home/view_employee');
			}else{
				res.redirect('/home');
			}
	});
});

router.get('/edit/:id', function(req, res){

	userModel.edit(req.params.id, function(results){
		if(results.length > 0){
			res.render('home/editemployee', {user: results});
		}else{
			res.redirect('/home');
		}
});
}); */

module.exports = router;