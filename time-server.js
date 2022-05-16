const net = require('net');
const strftime = require('strftime');

const port = Number(process.argv[2]);


const server = net.createServer((socket) => {
    const date = new Date();
    const data = strftime('%Y-%m-%d %H:%M',date) ;
    socket.write(data+ "\n");
    socket.end();
});
server.listen(port);