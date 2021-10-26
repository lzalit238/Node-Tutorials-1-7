const { createReadStream } = require('fs');

//  default 
//  last buffer - remainder
//  highWaterMark - control size
//  const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// highWaterMark relates directly to the buffer limit
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
 // const stream = createReadStream('./content/big.txt', {encoding: 'utf8', highWaterMark: 90000})

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result);
    console.log(`~~~~~~~~~~~~~~~`)
});

stream.on('error', (err) => console.log(err));