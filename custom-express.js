var express = require('express');

module.exports = function() {
	var app = express();
	//app.use(express.static('./public'));
  //app.use('/static', express.static(__dirname + '/public'));	
	app.use(express.static(__dirname + '/public'));
	app.set('view engine', 'ejs');
	require('./routes/produtos')(app);
	return app;
};
