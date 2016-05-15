var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
	var app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());

	// use static file
	app.use(express.static('./public'));

	app.set('view engine', 'ejs');
	require('./routes/produtos')(app);
	return app;
};
