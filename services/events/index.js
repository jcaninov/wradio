const EventEmitter = require('events');
const eventsDictionary = require('./eventsDictionary');

const eventService = function(){

    const eventEmmiter = new EventEmitter();
    const eventNames = eventsDictionary().getNames()

    return {
        list: eventNames,
        service: eventEmmiter
    }

}

module.exports = eventService;