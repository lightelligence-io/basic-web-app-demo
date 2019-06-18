import React, { Fragment } from "react";
import { Grid, GridItem, Headline } from "@lightelligence/react";
import { useGetDevices } from "./useGetDevices";
import { Device } from "./Device";

export const Devices = () => {
  const devices = useGetDevices();
  const deviceEntrys = devices.map(({ id, info }) => (
    <GridItem size={{ xs: 12, md: 6, lg: 4 }} key={id}>
      <Device {...info} />
    </GridItem>
  ));
  return (
    <Fragment>
      <Headline size={1}>Devices</Headline>
      <Grid>{deviceEntrys}</Grid>
    </Fragment>
  );
};
