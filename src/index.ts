import * as express from 'express';
import * as socketIo from 'socket.io';
import {Server, createServer} from 'http'

//TODO: вынести port в сеттинги
const app: express.Application = express();
const port: string | number = process.env.PORT || 3000;
const server: Server = createServer(app);
const io = socketIo(server);

io.on('connection', (socket: any) => {
    socket.on('message', (msg) => {
        io.sockets.emit('message', msg)
    })
});

// Set port for listen on server
server.listen(port, () => {
    console.log('Running server on port %s', port);
});

export { server, io };
