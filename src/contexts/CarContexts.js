import axios from "../config/axios";
import React, { createContext, useState, useEffect } from "react";

export const CarContexts = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/cars/allCar");
        setCars(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const addCar = async (newData) => {
    console.log("newData", newData);
    try {
      const res = await axios.post("/cars/createCar", newData);
      setCars((preCars) =>
        Array.isArray(preCars) ? [...preCars, res.data.car] : [res.data.car]
      );
      console.log("cars", cars);
    } catch (err) {
      console.error("err", err);
    }
  };

  return (
    <>
      <CarContexts.Provider value={{ cars, setCars, addCar }}>
        {children}
      </CarContexts.Provider>
    </>
  );
};
