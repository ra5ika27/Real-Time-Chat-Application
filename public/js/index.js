//request from client to server to open a web socket and keep it open
var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Rasika',
    text: 'Hey'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

//listening to events


socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
