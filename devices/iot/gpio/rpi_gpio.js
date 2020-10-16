
var Gpio = require('onoff').Gpio; //require onoff to control GPIO
var LEDPin = new Gpio(4, 'out'); //declare GPIO4 an output

const gpio = function (events){

    const init = function(){
      setEvents();
    }
    
    const setEvents = function(){
      var buttonState = 0; 
      events.service.on(e.display.location.countryCode, (data) => {
          buttonState = (data) ? 1 : 0;
          if (buttonState != LEDPin.readSync()) { //Change LED state if button state is changed
            LEDPin.writeSync(buttonState); //turn LED on or off
            setTimeout(() => {
              !buttonState
              LEDPin.writeSync(buttonState); 
            }, 1000);
          }
      });
    }

    return {
      init
    }
}

module.exports = gpio;