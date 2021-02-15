const middy = require("middy");
const { cors } = require("middy/middlewares");

const slsTest = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

const external = middy(slsTest).use(cors());

module.exports = { external };
