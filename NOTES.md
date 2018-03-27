# PROGRAMMING NOTES:
Socket.IO is composed of two parts:
* A server that integrates with (or mounts on) the Node.js HTTP Server :socket.io
* A client library that loads on the browser side: socket.io-client

You can send and receive any events you want as long as it can be encoded in JSON or binary data


## Roadmap
* Broadcast a message to connected users when someone connects or disconnects
* Add support for nicknames
* Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
* Add “{user} is typing” functionality
* Show who’s online
* Add private messaging

Different ways a user can send a message
Event when someone sends a regular message
socket.on('chat message', function(msg){
console.log('message: ' + msg);
});

When user wants to send an event to everyone
io.emit('some event', { for: 'everyone' });

If user wants to send a message to everyone excep for a certain socket, we can use the broadcast flag

`
io.on('connection', function(socket) {
		socket.broadcast.emit('hi');
});
`


