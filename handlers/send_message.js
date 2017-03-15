
var send = function(msg, socket) {

	// Parse The JSON and send the message
	socket.send(msg);
	
};

module.exports.send = send;
