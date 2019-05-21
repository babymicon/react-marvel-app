import winston from 'winston';
// define the custom settings for each transport (file, console)
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const transports = () => {
  return [
    new winston.transports.Console(options.console)
  ];
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: transports(),
  exitOnError: false // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
};

module.exports = logger;
