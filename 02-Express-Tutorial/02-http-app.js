const http = require('http')
const { readFileSync } = require('fs')

//get all files
const homePage = readFileSync('./app/index.html')
const homeStyles = readFileSync('./app/styles.css')
const homeImage = readFileSync('./app/logo.png')
const homeLogic = readFileSync('./app/browser-app.js')

const server = http.createServer((req, res) => {
    //console.log(req.method)
    const url = req.url
    console.log(url)
    //home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    //about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About Page</h1>')
        res.end()
    }
    //image/logo
    else if (url === './app/logo.png') {
        res.writeHead(200, { 'content-type': 'image/png' })
        res.write(homeImage)
        res.end()
    }
    //logic
    else if (url === './app/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    //404
    else if (url === '/styles.css') {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write(homeLogic)
        res.end()
    }
})

server.listen(5000)