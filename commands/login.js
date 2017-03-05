//Node.JS Imports
var mysql = require('mysql');

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
				
			};
		};
	};
};

module.exports.res = res;
