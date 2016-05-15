var mysql = require('mysql');
var databaseName = 'fs35';

if(process.env.NODE_ENV == 'test') {
  databaseName = 'fs35_test';
}

function createConnection() {
	return mysql.createConnection({
		host     : 'localhost',
		port     : '1523',
		user     : 'root',
		password : 'teste123',
		database : databaseName
	});
};

module.exports = createConnection;
