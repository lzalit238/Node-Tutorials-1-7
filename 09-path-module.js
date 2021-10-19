const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')//joins strings together to make a file path (not absolute file path)
console.log(filePath)

const base = path.basename(filePath)//looks for the end of the file path (.txt, .html, etc.)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')//as long as the strings are accurate pieces of info, it turns into an absolute file path (completed file path)
//absolute 
console.log(absolute)