import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import reportWebVitals from "./utils/reportWebVitals";
import config from "./auth_config.json";
import history from "./utils/history";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      audience={config.audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
