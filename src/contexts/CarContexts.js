import axios from "../config/axios";
import React, { createContext, useState, useEffect } from "react";

export const CarContexts = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/cars/allCar");
        // console.log("res", res);
        // console.log("res.data", res.data);
        setCars(res.data);
      } catch (err) {
        console.log("err", err);
        // console.dir("err", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CarContexts.Provider value={{ cars, setCars }}>
        {children}
      </CarContexts.Provider>
    </>
  );
};
