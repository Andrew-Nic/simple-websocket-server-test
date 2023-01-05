const webSocket = require('ws');
const PORT= 5000

const wsServer =  new webSocket.Server({
    port: PORT
});

wsServer.on('connection',function (socket) {

    console.log("a client just conected")

    socket.on('message',function (msg) {
        console.log('receive message from client ' + msg)

        // socket.send('take this back ' + msg)

        // broadcast tha msg to all conected clients
        wsServer.clients.forEach(function (client) {
            client.send('someone said: '+ msg)
        })
    })
});

console.log((new Date())+ "Server is listening on port " + PORT)