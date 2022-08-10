const winston = require("winston");
const datetime = require("../helpers/datetime");

class Logger {
  constructor(requestID, className, functionName) {
    this.requestID = requestID;
    this.className = className;
    this.functionName = functionName;
  }

  info(logMessage, data) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .info({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }

  warn(logMessage, data) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .warn({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }

  error(logMessage, data) {
    winston
      .createLogger({
        transports: new winston.transports.Console({
          format: winston.format.combine(winston.format.json()),
        }),
      })
      .error({
        requestID: this.requestID,
        date: datetime.millisecondsToYMD(new Date().getTime()),
        timestamp: new Date().getTime(),
        serviceName: process.env.SERVICE_NAME,
        className: this.className,
        functionName: this.functionName,
        logMessage: logMessage,
        data,
      });
  }
}

module.exports = {
  Logger,
};
