const fs = require('fs');

function getListFile(directory, extension, callback){
    fs.readdir(directory,'utf8',(err, files)=>{
        if(err) return callback(err);

        //const list = [];
        // files.forEach((file,index) => {
        //     if(file.split('.')[1] === extension) {
        //         list.push(file);
        //     }
        // });
        files = files.filter(file => file.split('.')[1] === extension)
        return callback(null, files);
    });

}


module.exports = getListFile;