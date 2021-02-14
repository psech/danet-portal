module.exports = {
  local: {
    REACT_APP_BASE_API_URL: "http://localhost:3000/dev/api",
    PORT: 8080,
  },
  dev: {
    REACT_APP_BASE_API_URL:
      "https://zh5ha6vjge.execute-api.ap-southeast-2.amazonaws.com/dev/api",
  },
  production: {
    REACT_APP_BASE_API_URL:
      "https://testtest12.execute-api.ap-southeast-2.amazonaws.com/dev/api",
  },
};
