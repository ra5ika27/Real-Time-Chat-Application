const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', "New User joined"));
  socket.on('createMessage', (message, callback) => {
    console.log('create message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: 1234
    // })
  });

  socket.on ('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('User', coords.latitude, coords.longitude))
  });
  socket.on('disconnect', () => {
    console.log('Client Disconnected');
  });
});
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
