var http = require('http');
var fs = require('fs');

/*
in this example tou can chekc the network responses to see how
the data is starting out as a lare data file of 1.8mb and then 
changes into a chunked version of 64kb
*/

http.createServer(function (req, res) {
    //this is the non streamed so it takes much longer
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
})
    .listen(5000);