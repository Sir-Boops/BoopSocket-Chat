// NodeJS Imports
var WebSocketServer = require('ws').Server;

// Local Imports
var lobby = require('./rooms/lobby.js');
var messages = require('./handlers/message.js');
var message = require('./handlers/send_message.js');

// Start listening
wss = new WebSocketServer({
	host: '::1',
	port: 7777});

// The Master Loop
wss.on('connection', function(ws){

	// Hello User!
	message.send('{"sender":"Server", "msg":"Welcome"}', ws);

	// Send the user to the lobby
	lobby.handle(null, ws);

	// On Message
	ws.on('message', function(msg){
		
		// Handle the message
		var res = messages.handle(msg);

		// If null don't send
		if(res) {
			message.send(res, ws);
		};
	});

});
