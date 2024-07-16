import React, { useContext, useEffect, useState } from "react";
import CarCard from "../companents/carEachCard/CarCard";
import classes from "./Homepahe.module.css";
import AddConfirm from "../companents/ConfirmPopup/AddConfirm";
import LayoutPage from "../companents/layout/LayoutPage";
import { CarContexts } from "../contexts/CarContexts";
import Sidebar from "../companents/layout/Sidebar";
import { Row, Col } from "react-bootstrap";

function Homepage() {
  const { cars } = useContext(CarContexts);
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleDataFromChild = (childrenData) => {
    setShowPopupAdd(childrenData);
  };

  const handleAddAndClose = (childrenData) => {
    setShowPopupAdd(childrenData);
  };

  useEffect(() => {
    console.log("formData updated", formData);
    console.log("cars", cars);
  }, [cars, formData]);

  return (
    <div>
      <LayoutPage>
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
                    isAvailable={item.isAvailable}
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
          )}
        </div>
      </LayoutPage>
    </div>
  );
}

export default Homepage;
