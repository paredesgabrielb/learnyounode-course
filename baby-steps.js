

let suma = 0;
process.argv.map((elem, index)=> {
    if(index > 1){
        suma = suma + parseInt(elem);
    }

});
console.log(suma);

// 'use strict'

// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
