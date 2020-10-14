const fs = require('fs'); //require filesystem to read html files
const http = require('http');

const webUi = function(log) {
    
    const init = function(){
        const httpServer = http.createServer(function handler(req, res) { //create server
            fs.readFile(__dirname + '/index.html', function (err, data) { //read html file
              if (err) {
                res.writeHead(500);
                return res.end('Error loading socket.io.html');
              }
          
              res.writeHead(200);
              res.end(data);
            });
          });
        
        httpServer.listen(8080); //listen to port 8080      
    }

    return {
        init
    }
}

module.exports = webUi;