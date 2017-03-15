
var res = function(msg) {

	// If just /help
	if(msg.length == 1){
		// TODO: Make a proper help menu
		return '{"sender":"Server", "msg":"Gay"}';
	};

	if(msg.length >= 2) {

		// All sub commands here
		// If /help login
		if(msg[1] == "login") {
			return('{ "sender":"Server", "msg":"Commands: <br> /login [username] [password] <br> /login create [username] [password]"}');
		};
	};
};

module.exports.res = res;
