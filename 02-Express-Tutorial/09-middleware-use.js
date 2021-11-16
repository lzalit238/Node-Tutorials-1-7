const express = require('express')
const app = express()
const logger = require('./middleware/logger')
const authorize = require('./middleware/authorize')
/*
req => middleware => res
order matters: if you place the app.use after the home get
then it won't run on the home get since the response will end 
before the middle ware has a chance to run app.use(logger)

if you have several middlewares, then you can call them in an array
and they will be used  in order
api / home / products
*/

app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000.... ')
})