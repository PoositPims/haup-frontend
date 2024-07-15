import React, { useContext, useEffect, useState } from "react";
import CarCard from "../companents/carEachCard/CarCard";
import classes from "./Homepahe.module.css";
import AddConfirm from "../companents/ConfirmPopup/AddConfirm";
import LayoutPage from "../companents/layout/LayoutPage";
import { CarContexts } from "../contexts/CarContexts";

function Homepage() {
  const { cars } = useContext(CarContexts);
  console.log("cars", cars);
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleDataFromChild = (childrenData) => {
    setShowPopupAdd(childrenData);
  };

  const handleAddAndClose = (childrenData) => {
    setShowPopupAdd(childrenData);
  };

  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    console.log("formData updated", formData);
    console.log("cars", cars);
  }, [cars, formData]);

  // function handleAddData(newData) {
  //   console.log("newData", newData.data.car);
  //   console.log("newData", newData.data.car);
  //   let newCar = {
  //     carBrand: newData.data.car.carBrand,
  //     carModel: newData.data.car.carModel,
  //     carRegist: newData.data.car.carRegist,
  //     province: newData.data.car.province,
  //     status: newData.data.car.status,
  //     carPic: newData.data.car.carPic,
  //   };
  //   setFormData((prev) => {
  //     const updatedFormData = [...prev, newCar];
  //     console.log("newCar", newCar);
  //     console.log("updatedFormData", updatedFormData);
  //     return updatedFormData;
  //   });
  // }

  return (
    <div>
      <LayoutPage />
      <div className={classes.contaciner}>
        <div className="d-flex justify-content-between">
          <h4>Company car</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowPopupAdd(true)}
          >
            Add car
          </button>
        </div>

        <div className={classes.cardContainer}>
          {cars?.car?.length > 0 ? (
            <>
              {cars?.car?.map((item) => (
                <CarCard
                  id={item.id}
                  key={item.id}
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
        {showPopupAdd && (
          <AddConfirm
            closePopUp={handleDataFromChild}
            addAndClase={handleAddAndClose}
          />
          // onAddData={handleAddData}
        )}
      </div>
    </div>
  );
}

export default Homepage;
