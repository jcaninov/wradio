const result = require('dotenv').config();
const util = require('util');
const log = require('./services/log');
const eventService = require('./services/events')
const RadioService = require('./services/radio')

const events = eventService();
const e = events.list;
const appRoute = (process.env.APP_INTERFACE === 'web') ? './devices/web' : './devices/iot';
const device = require(appRoute)(log, events);
const radioService = RadioService();

device.init();

events.service.on(e.input.location.countryCode, 
    () => { 
        radioService.getCountries()
            .then((data) => events.service.emit(e.display.location.countryCode, data))
            .catch((err) => log.error(err))
    }
);