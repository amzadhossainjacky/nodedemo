var express = require('express');
var userModel = require.main.require('./models/userModel');
var router = express.Router();




router.get('/',function(req, res){
    res.render('admin/index');
});


router.post('/',[check('uname', 'invalid name').isEmpty(),
  check('password', 'password must be 5 character').isEmpty()
], function(req, res){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      res.redirect('/login', {errors: errors.mapped()});
    }else{
      var user ={
        username: req.body.uname,
        password: req.body.password
        };
        
        userModel.validate(user, function(status){
          if(status){
              res.cookie('username', req.body.uname);
              res.redirect('/home');
               
        }else{
            res.redirect('/login');
        }
        });
    }
   
});
module.exports = router;