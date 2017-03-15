// Import local libs
var message = require('./../handlers/send_message.js');

var handle = function(msg, res){

	// Lobby Welcome Message
	message.send('{"sender":"Server", "msg":"Welcome to the lobby!"}', res);

	// Check if they where send here or not
	if (msg == null){
		message.send('{"sender":"Server", "msg":"You can view commands via /help"}', res);
	}
};

// Export the Lobby
module.exports.handle = handle;
