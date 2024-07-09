import React, { useContext } from "react";
import classes from "./Homepahe.module.css";
import LayoutPage from "../companents/layout/LayoutPage";
import { CarContexts } from "../contexts/CarContexts";
import CarCard from "../companents/carEachCard/CarCard";

function AvailableCar() {
  const { cars } = useContext(CarContexts);
  const availableCar = cars.car?.filter((car) => car.status === "available");

  return (
    <div>
      <LayoutPage />
      <div className={classes.contaciner}>
        <h4>Company car</h4>
        <div className={classes.cardContainer}>
          {cars?.car?.length > 0 ? (
            <>
              {availableCar?.map((item) => (
                <CarCard
                  id={item.id}
                  carBrand={item.carBrand}
                  carModel={item.carModel}
                  carRegist={item.carRegist}
                  province={item.province}
                  status={item.status}
                  carPic={item.carPic}
                />
              ))}
            </>
          ) : (
            <p>There is no data</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AvailableCar;
