const result = require('dotenv').config();
const util = require('util');
const log = require('./services/log');
const eventsDictionary = require('./services/events/eventsDictionary');

const eventNames = eventsDictionary().getNames()
const appRoute = (process.env.APP_INTERFACE === 'web') ? './services/web' : './services/iot';
const app = require(appRoute)({log: log});

app.init();