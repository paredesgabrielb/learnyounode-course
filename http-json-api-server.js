const http = require('http');
const port = Number(process.argv[2]);
const routes = require('./http-json-api-routes');


const server = http.createServer(function(req, res){
    const url = new URL(req.url,`http:\\localhost:${port}`);
    const route = routes[url.pathname];
    const isoDate = new Date(url.searchParams.get('iso'));

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(route(isoDate)));
});

server.listen(port, () => console.log("Server is running..."));