//request from client to server to open a web socket and keep it open
var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
  //
  // socket.emit('createMessage', {
  //   from: 'Rasika',
  //   text: 'Hey'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

//listening to events


socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);

  jQuery('#messages').append(li);
});

//call back function for acknowledgement
jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});
