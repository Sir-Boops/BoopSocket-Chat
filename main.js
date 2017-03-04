// NodeJS Imports
var WebSocketServer = require('ws').Server;

// Local Imports
var lobby = require('./rooms/lobby.js');
var message = require('./handlers/message.js');

// Start listening
wss = new WebSocketServer({
	host: '::1',
	port: 7777});

// The Master Loop
wss.on('connection', function(ws){

	// Hello User!
	ws.send("Welcome");

	// Send the user to the lobby
	lobby.handle(null, ws);

	// On Message
	ws.on('message', function(msg){
		
		// Handle the message
		message.handle(msg, ws);
	});

});
