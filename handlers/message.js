//Import commands
var help = require('./../commands/help.js');
var login = require('./../commands/login.js');

var handle = function(msg_raw, res){

	// Check if JSON

	var is_json;
	
	try{
		JSON.parse(msg_raw);
	} catch(e){
		is_json = e;
	};

	// If the message is vaild JSON
	if(!is_json){
		
		//Parse the JSON
		var msg = JSON.parse(msg_raw);
		
		// Check if it's a command
		if(msg.msg.charAt(0) == "/"){

			// Split the command
			var str = msg.msg.toLowerCase().split(" ");

			// Check what the base command is
			//If Help
			if(str[0] == "/help") {
				return(help.res(str));
			};

			//If /login
			if(str[0] == "/login") {
				return(login.res(str));
			};
		};
	};

	// If all else fails return null
	return null;

};

module.exports.handle = handle;
