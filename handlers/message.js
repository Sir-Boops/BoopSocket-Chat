// Node.JS Imports
var validate = require("validate.js");

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
			console.log("command");
		};
	};
};

module.exports.handle = handle;
