const result = require('dotenv').config();
const util = require('util');
const log = require('./services/log');

/*
var fs = require('fs'); //require filesystem to read html files
var http = require('http').createServer(function handler(req, res) { //create server
  fs.readFile(__dirname + '/index.html', function (err, data) { //read html file
    if (err) {
      res.writeHead(500);
      return res.end('Error loading socket.io.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

// var io = require('socket.io')(http) //require socket.io module and pass the http object

http.listen(8080); //listen to port 8080

*/