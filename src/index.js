import React from "react";
import ReactDOM from "react-dom";
import "@lightelligence/styles/dist/index.css";
import "./index.css";
import App from "./App";
import BrowserSDK from "@lightelligence/browser-sdk/dist/bundle.web";

const browserSDK = new BrowserSDK({
  environment: "prod",
  clientId: "olt-portal"
});

browserSDK.getCurrentUser().then(user => {
  if (user) {
    ReactDOM.render(
      <App browserSDK={browserSDK} />,
      document.getElementById("root")
    );
  } else {
    browserSDK.login();
  }
});
