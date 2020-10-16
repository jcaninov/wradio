const fs = require('fs'); //require filesystem to read html files
const http = require('http');
const socketio = require('socket.io');


const webUi = (log, events) => {    
    const init = function() {
      const httpServer = http.createServer(function handler(req, res) { //create server
        fs.readFile(__dirname + '/index.html', function (err, data) { //read html file
          if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
          }
      
          res.writeHead(200);
          res.end(data);
        });
      });
      
      setEvents(httpServer);    
      httpServer.listen(8080); //listen to port 8080     
    }
    
    const setEvents = (server) => {
      const e = events.list;

      var io = socketio(server);

      io.on('connect', (socket) => {              
        socket.on('state', function (data) { 
          debugger;
        });
        socket.on('get-country-codes', function (data) {
          events.service.emit(e.input.location.countryCode) 
        });        
      });      

      events.service.on(e.display.location.countryCode, (data) => io.emit('country-codes', data));
    }   

    return {
      init,
      events,
      log
    }
}

module.exports =  webUi;