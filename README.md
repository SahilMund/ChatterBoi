# Chatter_Boi App
Realtime chat app with websockets using Node.js, Express and Socket.io with Vanilla JS on the frontend with a custom UI .



#### Usage
```
npm install
npm run dev
```
#####  Then Go to
```
 localhost:5000/
```


##### dependencies

```
"dependencies": {
    "express": "^4.17.1",
    "moment": "^2.29.0",
    "socket.io": "^2.3.0"
  }
```

* Node JS - Runtime Environment
* Express Js - Web Framework
* Socket.io -  Framework for dealing with websockets
* moment.js - Formatting dates and times

* Qs-  A querystring parser that supports nesting and arrays, with a depth limit


### Types of emit in socket.io :-

1. ### emiting the message to myself only
    ```
    socket.emit('message',"Welcome to ChartApp")
    ```
2. ###   broadcasting the message , when a user connects ,to all the users except me
    ```
     socket.broadcast.emit('message','A User has joined the chat');
    ```
3. ###  This message will display to all the users
     ``` 
       io.emit('message','A User has left the chat')
     ```