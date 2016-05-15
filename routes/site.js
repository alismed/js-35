var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
  app.get('/', function(req, res) {
    var connection = connectionFactory();
    var produtoDao = new ProdutoDao(connection);
    
    produtoDao.lista(function(error, result, fields) {
      res.render('home/index', {livros:result});
    });

    connection.end();
  });
}
