
var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var LEDPin = new Gpio(4, 'out'); //declare GPIO4 an output

const gpio = function (io){

    io.sockets.on('connection', function (socket) {// WebSocket Connection
        var buttonState = 0; //variable to store button state
      
        socket.on('state', function (data) { //get button state from client
          buttonState = data;
          if (buttonState != LEDPin.readSync()) { //Change LED state if button state is changed
            LEDPin.writeSync(buttonState); //turn LED on or off
          }
        });
      });
}

module.exports = gpio;