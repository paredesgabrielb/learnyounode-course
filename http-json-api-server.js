const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

const parsetime = (isoTime) =>{
    // iso to json
    return {    "hour": isoTime.getHours(),
                "minute": isoTime.getMinutes(),
                "second": isoTime.getSeconds()
            }
}

const unixtime = (isoTime) => {
    // iso to unixtime
    return { "unixtime": isoTime.getTime() }
}


const routes = {
    '/api/parsetime': parsetime,
    '/api/unixtime':  unixtime
}

const server = http.createServer(function(req, res){
    const url = new URL(req.url,`http:\\localhost:${port}`);
    const route = routes[url.pathname];
    const isoDate = new Date(parsedUrl.searchParams.get('iso'));

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(route(isoDate)));
});

server.listen(port, () => console.log("Server is running..."));