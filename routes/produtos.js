var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
	app.post('/produtos', function(req, res) {
    var livro = req.body;

		var connection = connectionFactory();
		var produtos = new ProdutoDao(connection);

	  produtos.salva(livro, function(exception, result) {
	    res.redirect('/produtos'); 
	  });
	});

	app.get('/produtos/form', function(req, res) {
	 res.render('produtos/form'); 
	});

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
