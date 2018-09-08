import * as express from 'express';
import * as socketIo from 'socket.io';
import { Server, createServer } from 'http';
import { Config } from '../config';

const app: express.Application = express();
const port: string | number = process.env.PORT || Config.port;
const server: Server = createServer(app);
const io = socketIo(server);

io.on('connection', (socket: any) => {
  socket.on('message', (msg: string) => {
    io.sockets.emit('message', msg);
  });
});

// Set port for listen on server
server.listen(port, () => {
  console.log('Running server on port %s', port);
});

export { server, io };
