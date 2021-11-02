const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).sendFile(path.join(__dirname+'/app', '/index.html'))// calling filepath
})

app.get('/styles.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/app', 'styles.css'))
})

app.get('/lzLogoContrast.PNG', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/app', '/lzLogoContrast.PNG'))
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen