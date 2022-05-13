'use strict'
const http = require('http');
let url = process.argv[2];

url = !url.startsWith('http')  ? `http:\\\\${url}` : url;

http.get(url, (response) =>{
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error)

// http.get(url,(response)=>{
//     response.setEncoding('utf8');

//     const { statusCode } = response;
//     if(statusCode !== 200){
//         return console.error('Status Error: ' + statusCode);
//     }

//     response.on('error',(err) => {
//         return console.error(err)
//     });

    

//     let rawdata = '';
//     response.on('data', function(data){
//         console.log(data);
//         //rawdata = data;
//     });

//     // response.on('end',() => {
//     //     try{
//     //         console.log(rawdata);
//     //     }
//     //     catch(e){
//     //         console.log(e.message);
//     //     }
//     // });

// }).on('error', (err) => console.log(err));
