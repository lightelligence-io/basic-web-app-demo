import React from "react";
import {
  Headline,
  Navbar,
  Menu,
  MenuItem,
  Container,
  Frame,
  oltStyles
} from "@lightelligence/react";
import "./App.css";
import { Devices } from "./Devices";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = ({ browserSDK }) => {
  const changeTenant = () => browserSDK.changeTenant();
  const logout = () => browserSDK.logout();

  return (
    <Router>
      <Frame>
        <Navbar color="dark">
          <Menu navbar>
            <MenuItem to="/devices">Devices</MenuItem>
          </Menu>
          <Menu navbar>
            <MenuItem onClick={changeTenant}>Change Tenant</MenuItem>
            <MenuItem onClick={logout}>Log out</MenuItem>
          </Menu>
        </Navbar>
        <Container
          className={`${oltStyles.uMarginTop5} ${oltStyles.uMarginBottom5}`}
        >
          <Route
            component={() => <Headline size={1}>Hello there</Headline>}
            path="/"
            exact
          />
          <Route component={Devices} path="/devices" exact />
        </Container>
      </Frame>
    </Router>
  );
};

export default App;
