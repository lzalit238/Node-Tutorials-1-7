const { writeFileSync } = require('fs');

//every bit of a data is written to the end of the file

for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}

// every bit of data overwrites the last bit of data
// for (let i =0; i <10000; i++) {
// writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'w' });
// }