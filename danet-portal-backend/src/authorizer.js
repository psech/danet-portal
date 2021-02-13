const authorizer = require("./utils/authorizer-helper");
const logger = require("./utils/logger");

module.exports.handler = async (event) => {
  console.log("authorizer.handler has been called");

  try {
    return await authorizer.authenticate(event);
  } catch (err) {
    logger.log(err);
    return `Unauthorized: ${err.message}`;
  }
};
