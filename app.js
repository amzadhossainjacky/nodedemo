//declaration

var express = require('express');
var mysql = require('mysql');
var ejs = require('ejs');
var mysql = require('mysql');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const { check, validationResult } = require('express-validator');

var login = require('./controllers/login');
var home = require('./controllers/home');
var logout= require('./controllers/logout');

var app = express();


///configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/login',login);
app.use('/home',home);
app.use('/logout',logout);
app.use('/assets', express.static('assets'));


///routers
app.get('/', function(req, res){
    res.send("welcome job portal");
});

//server setup

app.listen('3000', function(req, res){
    console.log('server started at 3000!');
})

