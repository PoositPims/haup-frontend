import React, { useState } from "react";
import MainNavbar from "../companents/layout/MainNavbar";
import CarCard from "../companents/carEachCard/CarCard";
import classes from "./Homepahe.module.css";
import AddConfirm from "../companents/ConfirmPopup/AddConfirm";

function Homepage() {
  const [showPopupAdd, setShowPopupAdd] = useState(false);
  const [formData, setFormData] = useState([
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
  ]);

  const handleDataFromChild = (childrenData) => {
    setShowPopupAdd(childrenData);
  };

  const [currentId, setCurrentId] = useState(0);

  function handleAddData(newData) {
    const newId = currentId + 1;
    let newCar = {
      id: newId,
      carBrand: newData.carBrand,
      carModel: newData.carModel,
      carRegist: newData.carRegist,
      province: newData.province,
      status: newData.status,
      carPic: newData.carPic,
    };
    setCurrentId(newId);
    console.log("formData", typeof formData);
    console.log("newData", newData);
    setFormData([...formData, newCar]);

    console.log("formData", formData);
  }

  return (
    <div>
      <MainNavbar />
      <div className={classes.contaciner}>
        <div className="d-flex justify-content-between">
          <h4>Company car</h4>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setShowPopupAdd(true)}
          >
            Add car
          </button>
        </div>
        <div className={classes.cardContainer}>
          {formData.length > 0 ? (
            <>
              {formData.map((item) => (
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

        {showPopupAdd && (
          <AddConfirm
            closePopUp={handleDataFromChild}
            onAddData={handleAddData}
          />
        )}
      </div>
    </div>
  );
}

export default Homepage;
