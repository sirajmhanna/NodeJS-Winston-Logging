const { Logger } = require("./helpers/logger");
const logger = new Logger(961, "test", "run");

const run = (value) => {
  logger.info("Starting execution", { value });
};

run("test");
