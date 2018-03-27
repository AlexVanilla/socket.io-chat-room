var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.broadcast.emit('broadcast', 'hello friends!');	

	socket.on('disconnect', function () {
		console.log('user disconnected');
	});

	// Broadcast a message to connected users when someone connects or disconnects
	socket.on('connect', function(){
		socket.broadcast.emit('broadcast', 'A new user has connected');
	})
	
	//io.emit() will send the message to everyone including the sender
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(3000, function () {
	console.log('listening on *:3000');
});
