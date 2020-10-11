const { createLogger, format, transports } = require('winston');

const getTransports = function(){
    const transportsArray = [];    
    if (process.env.LOG_TRANSPORT_CONSOLE){
        transportsArray.push(
            new transports.Console({          
                format: format.combine(
                    format.splat(),
                    format.simple()
                ),
          }))
    }
    if (process.env.LOG_TRANSPORT_CONSOLE){
        transportsArray.push(
            new transports.File({
                filename: 'combined.log', level: 'debug',
                format: format.combine(
                    format.splat(),
                    format.printf(info => `${new Date().toISOString()}, ${info.message}`)
                )
            })
        );
    }
    return transportsArray;    
}

const logger = createLogger({
    level: process.env.LOG_LEVEL,
    transports: getTransports(),
  });

module.exports = logger;