import { useState, useEffect } from "react";
import { Device } from "@lightelligence/browser-sdk/dist/bundle";

export const useGetDevices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const { data } = await Device.getDevices();
      setDevices(data);
    };
    fetchDevices();
  }, []);

  return devices;
};
