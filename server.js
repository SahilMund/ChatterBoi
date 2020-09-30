const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
  } = require('./utils/users');


const app = express();

// setup our server to handle socket.io
const server = http.createServer(app);
// handling socket,io with our server
const io = socketio(server);




// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Admin Bot';

// Run when Client Connects
// ? listening to the event i.e. connection
io.on('connection',(socket)=>{


    socket.on('joinRoom', ({ username, room }) => {

    const user = userJoin(socket.id, username, room);

     socket.join(user.room);
    
    //  ? emiting a msg to myself only
    socket.emit('message',formatMessage(botName, 'Welcome to Chatter_Boi !'))

    // ? broadcast when a user connects to all the users except me
    socket.broadcast.to(user.room).emit('message',formatMessage(botName,`${user.username} has joined the chat`));

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
})
    //  ? Runs when Client disconnects
    socket.on('disconnect',()=>{

        const user = userLeave(socket.id);
        if(user){
        // ? This msg will display to all the users
        io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`))
    
    // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    
    }
    })

    //  ? Listen for chatMessage
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message',formatMessage(user.username,msg))
    })


})

// listening to the server
const port = process.env.PORT || 5000;

server.listen(port, () =>console.log(`Server running on port ${port} 🔥`) )