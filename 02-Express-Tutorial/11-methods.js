const express = require('express');
const app = express();
let { people } = require('./data');

//static assets
app.use(express.static('./public'));

//parse form data
//built in middleware function in express that parses
//  incoming requests. if you check req.body without it 
//  then you will see that the value is undefined. 
app.use(express.urlencoded({extended: false}));

//parses form data
//this works similarly to the url encoded but handles the json 
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.json({ success: true, data: people});
});

app.post('/api/people', (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(201).json({success: true, person: name});
    }
    //res.send('posted')
    //you can pass a status(200) and see that the try catch doesn't
    //  return an error enough it fails
    res.status(404).json({success: false, msg: 'please provide name'});
})

//above is for the javascript.html
//below is for the index.html
app.post('/login', (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    if (name == 'Lily') {
        return res.json({status: 200, data: name});
        // or res.status(200).send(`Welcome: ${name}`)
    }
    res.send(`Please Provide Credentials`);
    //res.send('posted')
});

//testing postman
app.post('/api/postman/person', (req,res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(400)
        .json({data: [], success: false, msg: 'please enter a name'});
    }
    res.status(201).json({success: true, data: [...people, name]});
});

app.listen(3000, () => {
    console.log('server listening at port 3000...');
})

