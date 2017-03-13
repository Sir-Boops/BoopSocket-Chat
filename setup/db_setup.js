// Node.JS imports
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

// Delete the old DB
if(fs.existsSync('../dbs/users.sql')) {
	fs.unlink('../dbs/users.sql', function(err) {
		if(err) {
			console.log(err);
		} else {
			// Generate the new DB
			gen_db();
		};
	});
} else {
	gen_db();
};

// Create the DB
function gen_db() {
	var db = new sqlite3.Database('../dbs/users.sql');

	// Create the table
	db.run("CREATE TABLE main.users (UUID text, username text, password text)");
};
