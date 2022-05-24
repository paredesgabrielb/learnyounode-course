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
    '/api/parsetime': (parsedUrl) => {
        const isoDate = new Date(parsedUrl.searchParams.get('iso'));
        return parsetime(isoDate);
    },
    '/api/unixtime': (parsedUrl) => {
        const isoDate = new Date(parsedUrl.searchParams.get('iso'));
        return unixtime(isoDate);
    }
}



const server = http.createServer(function(req, res){
    const urlRoute = new URL(req.url,`http:\\localhost:${port}`);
    const route = routes[urlRoute.pathname];

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(route(urlRoute)));

});

server.listen(port, () => console.log("Server is running..."));