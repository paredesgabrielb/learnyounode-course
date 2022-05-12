const fs = require('fs');

const path = process.argv[2];
const ext = process.argv[3];

fs.readdir(path, (err, list) => {
    if(err) return console.log(err)

    list.map((val,index)=>{
        if(val.endsWith(ext)){
            console.log(val);
        }


    })

});