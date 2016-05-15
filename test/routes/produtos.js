var express = require('../../custom-express')(); 
var request = require('supertest')(express);

describe('#ProdutosController', function() {
  it('listagem de produtos json', function(done) {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });

  it('listagem de produtos html', function(done) {
    request.get('/produtos')
      .expect('Content-Type', /html/)
      .expect(200, done)
  });

  it('cadastro de produtos com tudo preenchido', function(done) {
    request.post('/produtos')
		  .send({ titulo    : 'teste novo livro',
              preco     : 20.0,
              descricao : 'livro de teste' })
      .expect(302, done)
			.end(function(err, response) {
        done();
      });
  });
});
