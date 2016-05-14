var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
	app.get('/produtos', function(req, res) {
    var mysql = require('mysql');

		var connection = connectionFactory();
		var produtoDao = new ProdutoDao(connection);
	
		produtoDao.lista(function(error, result, fields) {
		  res.render('produtos/lista', {lista:result});
		});

  	connection.end();
	});
};
