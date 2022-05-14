const http =  require('http');
const bl = require('bl');
const url = process.argv[2].startsWith('http') ? process.argv[2] : 'http:\\'+ process.argv[2];

http.get(url,(response)=>{
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
        if(err) return console.error(err);

        console.log(data.length);
        console.log(data.toString());
    }))

    // let dataCollected = '';
    // response.on('data', data => { 
    //     dataCollected += data;
    // } );
    // response.on('end',() => {
    //     console.log(dataCollected.length);
    //     console.log(dataCollected);
    // });
}).on('error', console.error)