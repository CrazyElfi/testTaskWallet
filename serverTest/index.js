const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
var cors = require('cors')

const app = express();
app.use(cors())
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log(msg)
        io.emit('chat message', msg);
    });
});

server.listen(7080, () => {
    console.log('listening on *:7080');
});
