var mysql = require('mysql');

function createConnection() {
	return mysql.createConnection({
		host     : 'localhost',
		port     : '1523',
		user     : 'root',
		password : 'teste123',
		database : 'fs35'
	});
};

module.exports = createConnection;
