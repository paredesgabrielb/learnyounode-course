const fs = require('fs');
const filename = process.argv[2];


const buf = fs.readFileSync(filename);
const text = buf.toString();
const array = text.split('\n');
const lineNumber = array.length ;
console.log(lineNumber-1);
