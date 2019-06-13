import React, { useState, useEffect } from "react";
import { Headline, Button } from "@lightelligence/react";
import { Device } from "@lightelligence/browser-sdk";
import styled from "styled-components/macro";
import "./App.css";

const StyledHeadline = styled(Headline)`
  color: rebeccapurple;
  font-family: sans-serif;
`;

export const App = ({ browserSDK }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const { data } = await Device.getDevices();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  const changeTenant = () => browserSDK.changeTenant();

  const logout = () => browserSDK.logout();

  const deviceEntrys = devices.map(({ id, info: { name } }) => (
    <li key={id}>{name}</li>
  ));

  return (
    <div>
      <StyledHeadline size={1}>Devices</StyledHeadline>
      <Button color="info" outline onClick={changeTenant}>
        Change Tenant
      </Button>
      <Button color="error" outline onClick={logout}>
        Log out
      </Button>
      <ul>{deviceEntrys}</ul>
    </div>
  );
};

export default App;
