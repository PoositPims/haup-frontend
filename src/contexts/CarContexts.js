import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CarContexts = createContext();

// function CarProvider({ children }) {
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([
    {
      id: 1,
      carBrand: "Honda",
      carModel: "City",
      carRegist: "กก 1234",
      province: "Bangkok",
      status: "not availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
    {
      id: 2,
      carBrand: "Toyota",
      carModel: "Altis",
      carRegist: "ขข 5555",
      province: "Songkhla",
      status: "availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
    {
      id: 3,
      carBrand: "Toyota",
      carModel: "Altis",
      carRegist: "ขข 5555",
      province: "Songkhla",
      status: "availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
    {
      id: 4,
      carBrand: "Toyota",
      carModel: "Altis",
      carRegist: "ขข 5555",
      province: "Songkhla",
      status: "not availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
    {
      id: 5,
      carBrand: "Toyota",
      carModel: "Altis",
      carRegist: "ขข 5555",
      province: "Songkhla",
      status: "not availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
    {
      id: 6,
      carBrand: "Toyota",
      carModel: "Altis",
      carRegist: "ขข 5555",
      province: "Songkhla",
      status: "not availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    },
  ]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("/cars/allCar");
  //       console.log("res.data", res.data);
  //     } catch (err) {}
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <CarContexts.Provider value={{ cars, setCars }}>
        {children}
      </CarContexts.Provider>
    </>
  );
};

// export default { CarProvider };
// export { CarContexts, CarProvider };
