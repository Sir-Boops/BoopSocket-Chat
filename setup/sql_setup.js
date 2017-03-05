// Node.JS imports
var mysql = require('mysql');

// Local imports
var config = require('./../config.json');

// Init the mysql connection
var conn = mysql.createConnection({
	host: config.mysql.address,
	user: config.mysql.username,
	password: config.mysql.password,
	database: config.mysql.database
});

conn.connect(function(err){
	if(err){
		console.log(err);
	};

	// We are connected!
	console.log('Connected to DB');
});

// Create the USERS table
conn.query('CREATE TABLE users (name TEXT, UUID TEXT, password TEXT);', function(err, res, fields) {

	//If err
	if(err) {
		console.log(err);
	};

	console.log('Created the users Table!');
	process.exit(0)
});
