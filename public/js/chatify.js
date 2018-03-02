$(document).ready(function () {
    var socket = io();
    $('form').submit(function () {
        socket.emit('send-message', $('#message').val());
        $('#message').val('');
        return false;
    });

    socket.on('connect', function () {
        while (!nickname) {
            var nickname = prompt('Required: Please enter your name: ');
        }

        socket.emit('add-user', nickname);
    });

    socket.on('update-chat', function (username, data) {
        $('#messages').append(
            `
            <div class="chat-message left">
                <img class="message-avatar" src="/img/default.jpg" alt="">
                <div class="message">
                    <a class="message-author" href="#"> ` + username + ` </a>
                    <span class="message-date"> ` + moment($.now()).format('MMMM Do YYYY, h:mm:ss a') + `</span>
                    <span class="message-content">
                    ` + data + `
                    </span>
                </div>
            </div>
            
            `
        );

        var messages = document.getElementById('messages');
        messages.scrollTop = messages.scrollHeight;
    });

    socket.on('update-timestamp', function(){
        $('#last-timestamp').empty();
        $('#last-timestamp').text(moment($.now()).format('MMMM Do YYYY, h:mm:ss a'));
    });

    socket.on('update-users', function (data) {
        $('#users-list').empty();
        $.each(data, function (key, value) {
            $('#users-list').append(
                `
                <div class="chat-user">
                    <img class="chat-avatar" src="img/default.jpg" alt="">
                    <div class="chat-user-name">
                        <a href="#">` + key + `</a>
                    </div>
                </div>
                `
            );
        });

    });
});