var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
	session = require('express-session');

module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: 'TheDataLeafSecret'
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/leafs.server.routes.js')(app);

	app.use(express.static('./public'));
	
	app.all('/flash', function(req, res){
  		req.flash('test', 'it worked');
  		res.redirect('/test')
	});

	app.all('/test', function(req, res){
  		res.send(JSON.stringify(req.flash('test')));
	});

	return app;
};