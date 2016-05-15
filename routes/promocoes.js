var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
  app.get('/promocoes/form', function(req, res) {
    var connection = connectionFactory();
    var produtoDao = new ProdutoDao(connection);
    
    produtoDao.lista(function(error, result, fields) {
      res.render('promocoes/form', {lista:result});
    });

    app.post('/promocoes', function(req, res) {
      var promocao = req.body;

      app.get('io').emit("novaPromocao", promocao);
      res.redirect('promocoes/form');
    });

    connection.end();
  });
}
