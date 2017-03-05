//Node.JS Imports
var mysql = require('mysql');
var uuid = require('uuid');

//Local imports
var config = require('../config.json');

var res = function(msg) {
	
	// If just /login
	if(msg.length == 1) {
		return "/help login"
	};

	// If any other sub command
	if(msg.length >= 2) {

		// If /login create
		if(msg[1] == "create") {
			//Make sure the length is correct
			if(msg.length < 4) {
				return "/help login";
			} else {

				// Connect to the MYSQL Server
				var conn = mysql.createConnection({
					host: config.mysql.address,
					user: config.mysql.username,
					password: config.mysql.password,
					database: config.mysql.database
				});

				// Start the connection
				conn.connect(function(err){
					if(err) {
						console.log(err);
					};

					// Create the account
					gen_uuid(conn, msg[2], msg[3]);
				});
			};
		};
	};
};

function gen_uuid(conn, name, password) {

	// Get a random UUID
	var user_uuid = uuid.v4();

	//Ask the database
	var query = conn.query('SELECT UUID FROM users WHERE UUID like ' + mysql.escape(user_uuid), function(err, row, fie){

		//if ERR
		if(err) {
			console.log(err);
		} else {

			//Check for a row
			if(row > 0) {
				// UUID Found!
				gen_uuid(conn);
			} else {
				check_username(conn, name, password, user_uuid);
			};
		};
	});
};


function check_username(conn, name, password, UUID) {

	// Insert into the table
	conn.query('INSERT INTO users (name, UUID, password) VALUES (' + mysql.escape(name) + ', ' + mysql.escape(UUID) + ', ' + mysql.escape(password) + ')', function(err, row, fei){

		if(err) {
			console.log(err);
		};
	});
};

module.exports.res = res;
