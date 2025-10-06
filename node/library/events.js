// Import and create object of EventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Register event handler for count event
eventEmitter.on('count', 
    value => { console.log(`Count is ${value}`); }
);

// Register event handler for count event
eventEmitter.on('count', 
    value => { console.log(`Another event handler displaying count : ${value}`); }
);

// Even Handler for end event 
eventEmitter.on('end', 
    () => { console.log('The End!'); }
);


// Raise event
eventEmitter.emit('count', 10);   // eventname, value 
console.log('Done with count and now end')
eventEmitter.emit('end')

eventEmitter.removeAllListeners('count')
console.log('Removed all event listeners and raising event again!')
eventEmitter.emit('count')
 