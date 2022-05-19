const http = require('http');
const bl = require('bl');
const queue = [];
let count = 0;

for(var x = 2; x < process.argv.length; x++){
    const url = process.argv[x].startsWith('http') ? process.argv[x] : 'http:\\'+process.argv[x];
    //console.log(x, ' ', url);
    httpGet(url, x-2);
}



function httpGet(url,position){
    http.get(url,(response)=>{
        response.setEncoding('utf8');

        let dataItem = '';
        response.on('data',(data)=>{
            dataItem += data;
        });

        response.on('end', () => {
            queue[position] = {
                url: url,
                data: dataItem
            };

            count++;
            if(count === 3 ){
                print(queue);
            }
        });
    }).on('error',console.error);
}

function print(array){
    for(var x=0; x < array.length; x++){
        console.log(array[x].data);
    }
}