var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
	app.post('/produtos', function(req, res) {
    var livro = req.body;

    req.assert('titulo', 'Título deve ser preenchido').notEmpty();
    //req.assert('preco', 'Preço deve ser preenchido').notEmpty();
    req.assert('preco', 'Preço deve ser um número').isFloat();
    var errors = req.validationErrors();

    if(errors) {
      res.format({
        html: function() {
          res.status(400).render('produtos/form',
           {validationErrors: errors});
        },
        json: function() {
          res.status(400).send(errors);
        }
      });
      return;
    }

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

		var connection = connectionFactory();
		var produtoDao = new ProdutoDao(connection);
	
		produtoDao.lista(function(error, result, fields) {
			res.format({
				html: function() {
		      res.render('produtos/lista', {lista:result});
			  },
				json: function() {
		      res.json(result);
			  }
		  });
		});

  	connection.end();
	});
};
