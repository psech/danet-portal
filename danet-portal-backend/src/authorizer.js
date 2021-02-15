const authorizer = require("./utils/authorizer-helper");
const logger = require("./utils/logger");

module.exports.handler = async (event) => {
  try {
    return await authorizer.authenticate(event);
  } catch (err) {
    logger.log(err);
    return `Unauthorized: ${err.message}`;
  }
};
