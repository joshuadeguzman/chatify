var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usernames = {};
var port = 8000;


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.on('add-user', function (username) {
        // Assign session username
        socket.username = username;

        // Add user to pool of users
        usernames[username] = username;

        // Update chat room with 2 param message
        socket.emit('update-chat', 'SERVER', username +' you have joined the chatify room');

        // Globally broadcast user who joined the chat room
        socket.broadcast.emit('update-chat', 'SERVER', username +' has connected to the chatify room');

        // Update pool of users display
        io.sockets.emit('update-users', usernames);

        // Log
        console.log(username + ' joined the chatify room');

    });

    // Send message
    socket.on('send-message', function (msg) {
        io.sockets.emit('update-chat', socket.username,msg);
    });

});

http.listen(port, function(){
  console.log('listening on  ' + port);
});
