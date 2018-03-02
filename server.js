var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usernames = {};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.on('add-user', function (username) {
        socket.username = username;
        usernames[username] = username;

        socket.emit('update-chat', 'SERVER', username +' you have joined the chatify room');

        socket.broadcast.emit('update-chat', 'SERVER', username +' has connected to the chatify room');

        io.sockets.emit('update-users', usernames);

        console.log(username + ' joined the chatify room');

    });

    socket.on('send-message', function (msg) {
        io.sockets.emit('update-chat', socket.username,msg);
    });
    
});

http.listen(8000, function () {
    console.log('listening on *:8000');
});
