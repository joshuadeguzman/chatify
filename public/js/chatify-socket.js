$(document).ready(function () {
    var socket = io();
    $('form').submit(function () {
        socket.emit('send-message', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('connect', function () {
        while (!nickname) {
            var nickname = prompt('Please enter your name: ');
        }
        ;
        socket.emit('add-user', nickname);
    });

    socket.on('update-chat', function (username, data) {
        $('#messages').append($('<li>').text(username + ': ' + data));
        window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on('update-users', function (data) {
        $('#user-list').empty();
        $.each(data, function (key, value) {
            $('#user-list').append($('<li>').text(key));
        });

    });
});