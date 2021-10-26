// get back the class
// if want custom extend from calss
// otherwise just for emitting and hedling events create instance 

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on and emit methods
//keep track of the order
//additional arguments
//built-in modules ultilize it

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on('testing', () => {
    console.log('some other logic not here');
});

customEmitter.emit('response', 'john', 34);