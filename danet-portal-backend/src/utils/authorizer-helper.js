const jwksClient = require("jwks-rsa");
const jwt = require("jsonwebtoken");
const util = require("util");
const { getEnv } = require("./env");

const jwtOptions = {
  audience: getEnv("AUDIENCE"),
  issuer: getEnv("TOKEN_ISSUER"),
};

const getPolicyDocument = (effect, resource) => {
  const policyDocument = {
    Version: "2012-10-17", // default version
    Statement: [
      {
        Action: "execute-api:Invoke", // default action
        Effect: effect,
        Resource: resource,
      },
    ],
  };
  return policyDocument;
};

// extract and return the Bearer Token from the Lambda event parameters
const getToken = (params) => {
  if (!params.type || params.type !== "TOKEN") {
    throw new Error('Expected "event.type" parameter to have value "TOKEN"');
  }

  const tokenString = params.authorizationToken;

  if (!tokenString) {
    throw new Error('Expected "event.authorizationToken" parameter to be set');
  }

  const match = tokenString.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new Error(
      `Invalid Authorization token - ${tokenString} does not match "Bearer .*"`
    );
  }

  return match[1];
};

module.exports.authenticate = (params) => {
  const token = getToken(params);
  const decoded = jwt.decode(token, { complete: true });

  if (!decoded || !decoded.header || !decoded.header.kid) {
    throw new Error("invalid token");
  }

  const client = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: getEnv("JWKS_URI"),
  });

  const getSigningKey = util.promisify(client.getSigningKey);

  return getSigningKey(decoded.header.kid)
    .then((key) => {
      const signingKey = key.publicKey || key.rsaPublicKey;
      return jwt.verify(token, signingKey, jwtOptions);
    })
    .then((decoded) => ({
      principalId: decoded.sub,
      policyDocument: getPolicyDocument("Allow", params.methodArn),
      context: { scope: decoded.scope },
    }));
};
