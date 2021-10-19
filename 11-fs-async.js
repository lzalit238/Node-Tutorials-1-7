const { readFile, writeFile } = require('fs')
//r+: open the file for reading and writing
//w+: open the file for reading and writing, positioning the stream at the beginning of the file. 
    //The file is created if not existing
//a: open the file for writing, positioning the stream at the end of the file.
    //The file is created if not existing
//a+: open the file for reading and writing, positioning the stream at the end of the file.
    //The file is created if not existing

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${second}, ${first}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with the task')
            }
        )
    })
})
console.log('starting next task')