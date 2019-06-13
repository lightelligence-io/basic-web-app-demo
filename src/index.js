import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "@lightelligence/react/dist/index.css";
import BrowserSDK from "@lightelligence/browser-sdk/dist/bundle";
import "./index.css";
import App from "./App";

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
