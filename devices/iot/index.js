require('./gpio/rpi_gpio')

const iot = (log, events) => {    
    const init = function() {
      setEvents(httpServer);          
    }
    
    const setEvents = (server) => {
      events.service.on(e.display.location.countryCode, (data) => io.emit('country-codes', data));
    }   

    return {
      init,
      events,
      log
    }
}

module.exports =  iot;