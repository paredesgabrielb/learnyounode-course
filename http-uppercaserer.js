const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/plain'});
  
    if(req.method  !== 'POST'){
        res.end('Send me a POST\N');
    }

    let data='';
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        res.end(data.toString().toUpperCase());
    });

});

server.listen(Number(process.argv[2]));