##  WebSocket VS  Socket.io
 
WebSockets and Socket.IO are probably two of the most popular solutions for implementing real-time communications in the modern web.

When building a real-time application, there’s a moment where you have to choose how to implement the realtime data exchange between client and server.
WebSockets and Socket.IO are probably two of the most popular solutions for implementing real-time communications in the modern web.

###  WebSockets
When talking about WebSockets, we’re referring to a web communication protocol that provides a full-duplex communication channel over a single TCP connection.
In few words, it allows interactions between client and server with a minimum overhead, allowing us to build applications that uses the advantages of real-time communications.

For instance, imagine if you’re building a chat app: you need to receive and send data as soon as possible, right?
Well, that’s the right job for WebSockets! You can just open one TCP connection and share data leaving it open as long as you need it.


###   Socket.IO
Socket.IO is a JavaScript library built on top of WebSocket… and other technologies.

In fact, it uses WebSockets when available, but it’s ready to fallback to other technologies such as Flash Socket, AJAX Long Polling, AJAX Multipart Stream and many more; that allows Socket.IO to be used in contexts where WebSockets are not supported.


##   Differences between WebSocket and Socket.IO

The main advantages of Socket.IO over WebSockets are:

* Unlike WebSocket, Socket.IO allows you to broadcast a message to all the connected clients. For instance, if you’re writing a chat application and you want to notify all the connected clients that a new user has joined the chat, you can easily broadcast that message in one shot to everyone.
  
* Using plain WebSocket, you’ll need a list of all the connected clients and then send the message directly one by one.

* Proxies and load balancers makes WebSockets hard to implement and scale. Socket.IO supports these technologies out of the box.

* As said before, Socket.IO is able to fallback to technologies other than WebSockets when the client doesn’t support it.

* If (for some reason) a WebSocket connection drops, it will not automatically reconnect… but guess what? Socket.IO handles that for you!
  
* Socket.IO APIs are built to be easier to work with.



### <U>Refernece :</U>
https://www.hackdoor.io/articles/6xQkgQo4/differences-between-websockets-and-socketio