var handle = function(msg, res){

	// Lobby Welcome Message
	res.send("Welcome to the lobby!")

	// Check if they where send here or not
	if (msg == null){
		res.send("You can view commands via /help");
	}
};

// Export the Lobby
module.exports.handle = handle;
