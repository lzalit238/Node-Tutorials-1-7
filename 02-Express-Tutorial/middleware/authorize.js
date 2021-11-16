const authorize = (req, res, next) => {
    //an example way of how an API key can be used
    //NOT PROPER FOR REAL USE
    //just a small example for now


    const { apikey } = req.query
    if (apikey === 'pancake')
    {    console.log('authorized')
    //modifies the request object for the next response
        req.user = { name: 'Lilzlbork', id: 123454321 }
        next()
    }
    else {
        console.log('unauthorized access')
        res.send({result:[], status: 401, message: 'unauthorized access'})
    }
}

module.exports = authorize