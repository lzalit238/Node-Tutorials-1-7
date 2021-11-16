const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/v1/query', (req, res) => {
    //console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.includes(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send('no products matched your search);
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)
})