let {people} = require('../data');

const readPeople = (req, res) => {
    res.json({success: true, data: people});
};

const createPerson = (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    if (name) {
        return res.status(201).json({success: true, person: name});
    }
    //res.send('posted')
    //you can press a status(200) and see that the try catch doesn't return an error enough though it fails
    res.status(404).json({success: false, msg: 'please provide a name'});
};

const updatePerson = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return express.json({success: false, data: []});
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });

    res.status(202).json({data: newPeople, success: true});
};

const deletePerson = (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res
        .status(404)
        .json({success: false, msg: 'no matching ID found'});
    }

    people = people.filter((person) => {
        return person.id !== Number(id);
    });

    res.status(200).json({data: people, success: true});
};

module.exports = {
    createPerson,
    readPeople,
    updatePerson,
    deletePerson,
};