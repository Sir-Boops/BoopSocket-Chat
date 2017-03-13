//Node.JS Imports
var uuid = require('uuid');
var sqlite3 = require('sqlite3').verbose();

// Load the DB
var db = new sqlite3.Database('./dbs/users.sql', 'OPEN_READWRITE | OPEN_CREATE');

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

				// Create a UUID
				db.run('INSERT INTO users VALUES ($uuid, $username, $password)',{

					$uuid: (uuid.v4()),
					$username: msg[2],
					$password: msg[3]

				});

				// New account has been created!
				return "Account created!";

			};
		} else {

			// Else the user is logging in!
			db.get('SELECT * FROM users WHERE username like $user',{ $user: msg[1]} ,function(err, row) {

				//Check if username and password is right
				console.log(row);

			});

		};
	};
};

module.exports.res = res;
