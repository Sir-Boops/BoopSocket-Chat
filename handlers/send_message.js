
var send = function(msg, socket, sender) {

	//Check sender
	if(!sender) {
		sender = "Server";
	};

	// Convert to JSON
	var json_msg = {
		msg: msg,
		sender: sender
	};

	// Parse The JSON and send the message
	socket.send(JSON.stringify(json_msg));
	
};

module.exports.send = send;
