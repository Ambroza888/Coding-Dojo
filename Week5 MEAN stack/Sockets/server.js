const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', { msg: "warap STAZ"}); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
  // let num = Math.floor((Math.random() * 1000) + 1)
  // socket.emit('random_number',{num:num})

  socket.on('posting_form', function(data){
    console.log(data)
    socket.emit('updated_message',{ msg: "whawtqwe"})
  })
});