const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
var counter = 0;
app.set('view engine', 'ejs');
const session = require('express-session');
const server = app.listen(1337);
const io = require('socket.io')(server);
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
const users = [];

io.on('connection', function (socket) { //2

  console.log(socket.id)



  socket.on('joinPlayer', function(data){
    users.push(data.name)
    socket.name = data.name;
    io.emit('announs', {data, users: users})
  })
  socket.on('disconnect', function(data){
    io.emit('leavingPlayer',{name:socket.name})
    for (let i of users){
      if (i == socket.name){
        users.pop(i)
      }
    }
    // console.log("the users",users)
    io.emit('leftOversUsers', users)

  })
  socket.on('messageToServer', (data)=>{
    // console.log(data)
    io.emit('messageToClient', {data:data, user: socket.name})
  })
  
});
