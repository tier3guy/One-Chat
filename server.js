const io = require('socket.io')(3000);
const users = {};

io.on('connection', (socket) => {
  console.log('connection build sucessfully');
  socket.on('new-user-joined', name => {
    console.log(`${name} connected`);
    users[socket.id] = name;
    socket.broadcast.emit('joining',name);
  });
  socket.on('send-message', message => {
    socket.broadcast.emit('recieve',{message : message, name : users[socket.id]});
  })
  socket.on('disconnect', () => {
    console.log('user disconnected');
    socket.broadcast.emit('user-disconnected', {name: users[socket.id]});
  });
})
