

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



module.exports = routes;