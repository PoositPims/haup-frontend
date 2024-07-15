import React, { useContext } from "react";
import LayoutPage from "../companents/layout/LayoutPage";
import classes from "./Homepahe.module.css";
import { CarContexts } from "../contexts/CarContexts";
import CarCard from "../companents/carEachCard/CarCard";

function NotAvailableCar() {
  const { cars } = useContext(CarContexts);
  const notAvailableCar = cars.car?.filter((car) => car.isAvailable === false);

  return (
    <div>
      <LayoutPage />
      <div className={classes.contaciner}>
        <h4>Company car</h4>
        <div className={classes.cardContainer}>
          {cars?.car?.length > 0 ? (
            <>
              {notAvailableCar?.map((item, index) => (
                <CarCard
                  id={item.id}
                  key={index}
                  carBrand={item.carBrand}
                  carModel={item.carModel}
                  carRegist={item.carRegist}
                  province={item.province}
                  isAvailable={item.isAvailable}
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

export default NotAvailableCar;
