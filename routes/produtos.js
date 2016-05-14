var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
	app.get('/produtos', function(req, res) {
    var mysql = require('mysql');

		var connection = connectionFactory();
	
  	connection.query('select * from livros', 
	    function(err, result, fields) {
		    res.render('produtos/lista', {lista:result});
	    }
    );
  	connection.end();
	});
};
