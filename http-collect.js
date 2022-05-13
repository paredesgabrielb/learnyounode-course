const http =  require('http');
const url = process.argv[2].startsWith('http') ? process.argv[2] : 'http:\\'+ process.argv[2];

http.get(url,(response)=>{
    response.setEncoding('utf8');

    let dataCollected = '';
    response.on('data', data => { 
        dataCollected += data;
    } )
    response.on('end',() => {
        console.log(dataCollected.length);
        console.log(dataCollected);
    })
}).on('error', console.error)