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

				var key = uuid.v4();

				// Check if account name is already registered

				db.get('SELECT uuid FROM users WHERE username LIKE $name', {$name: msg[2]}, function(err, row) {

					// If !null account name already in use
					if(row){
						in_use();
					} else {

						db.run('INSERT INTO users VALUES ($uuid, $username, $password, $key)', {
		                                        $uuid: (uuid.v4()),
							$username: msg[2],
							$password: msg[3],
							$key: key
						});
					};
				});

				// Account is use function
				function in_use() {return {sender: 'Server', msg: 'Account name already in use!'};};

				// Account created! return new key
				return {sender: 'Server', msg: 'Account created', key: key};

			};
		} else {

			// Else the user is logging in!
			db.get('SELECT * FROM users WHERE username like $user',{ $user: msg[1]} ,function(err, row) {

				//Check if username and password is right
				console.log(err);
				console.log(row);

			});

		};
	};
};

module.exports.res = res;
