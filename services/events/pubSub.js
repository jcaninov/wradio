const ev = require('./eventsDictionary');
//const io = require('socket.io')(httpServer) //require socket.io module and pass the http object

const pubSub = function(){
    let subscribers = []    

    // const io = require('socket.io')(httpServer) //require socket.io module and pass the http object

    return {

    }
}

pubSub.prototype.on = function(eventName, fn) {    
    this.subscribers[eventName] = this.subscribers[eventName] || [];
    this.subscribers[eventName].push(fn);
}

pubSub.prototype.off = function(eventName, fn){
    if (this.subscribers[eventName]) {
        for (var i = 0; i < this.subscribers[eventName].length; i++) {
            if (this.subscribers[eventName][i] === fn) {
            this.subscribers[eventName].splice(i, 1);
            break;
            }
        }
    }
}

pubSub.prototype.emit = function(eventName, data){
    if (this.subscribers[eventName]) {
        this.subscribers[eventName].forEach(fn => {
          fn(data);
        });
    }
}

module.exports = pubSub;