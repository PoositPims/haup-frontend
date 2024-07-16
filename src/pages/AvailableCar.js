import React, { useContext } from "react";
import classes from "./Homepahe.module.css";
import LayoutPage from "../companents/layout/LayoutPage";
import { CarContexts } from "../contexts/CarContexts";
import CarCard from "../companents/carEachCard/CarCard";

function AvailableCar() {
  const { cars } = useContext(CarContexts);
  const availableCar = cars.car?.filter((car) => car.isAvailable === true);

  return (
    <LayoutPage>
      <div className={classes.contaciner}>
        <h4>Company car</h4>
        <div className={classes.cardContainer}>
          {cars?.car?.length > 0 ? (
            <>
              {availableCar?.map((item, index) => (
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
    </LayoutPage>
  );
}

export default AvailableCar;
