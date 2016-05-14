module.exports = function(app) {
	app.get('/produtos', function(req, res) {
    var mysql = require('mysql');

		var connection = mysql.createConnection({
			host     : 'localhost',
			port     : '1523',
			user     : 'root',
			password : 'teste123',
			database : 'fs35'
	  });
	
  	connection.query('select * from livros', 
	    function(err, result, fields) {
		    res.render('produtos/lista', {lista:result});
	    }
    );
  	connection.end();
	});
};
