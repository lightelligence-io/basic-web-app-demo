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

export const App = ({ browserSDK }) => {
  const changeTenant = () => browserSDK.changeTenant();
  const logout = () => browserSDK.logout();

  return (
    <Frame>
      <Navbar color="dark">
        <Menu />
        <Menu navbar>
          <MenuItem onClick={changeTenant}>Change Tenant</MenuItem>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </Menu>
      </Navbar>
      <Container
        className={`${oltStyles.uMarginTop5} ${oltStyles.uMarginBottom5}`}
      >
        <Headline size={1}>Devices</Headline>
        <Devices />
      </Container>
    </Frame>
  );
};

export default App;
