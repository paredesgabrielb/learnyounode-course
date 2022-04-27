const fs = require('fs');
const filename = process.argv[2];
console.log(process.argv);


const buf = fs.readFileSync(filename);
const text = buf.toString();
const array = text.split('\n');
const lineNumber = array.length ;
console.log(lineNumber);
