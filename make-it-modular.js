const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, (err, data)=>{
    if(err) return console.error(err);
    
    data.map(function(file){
        console.log(file);
    })

})