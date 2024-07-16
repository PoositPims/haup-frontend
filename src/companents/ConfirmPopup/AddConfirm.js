import React, { useContext, useState } from "react";
import classes from "./AddConfirm.module.css";
import { CarContexts } from "../../contexts/CarContexts";
import carImage from "../../img/carPig.jpeg";

function AddConfirm({ closePopUp, onAddData, addAndClase }) {
  const { addCar } = useContext(CarContexts);
  const [formData, setFormData] = useState({
    carBrand: "",
    carModel: "",
    carRegist: "",
    province: "",
    isAvailable: false,
    carPic: carImage,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "isAvailable" ? value === "true" : value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const valuetoAddCar = {
      carBrand: formData.carBrand,
      carModel: formData.carModel,
      carRegist: formData.carRegist,
      province: formData.province,
      isAvailable: formData.isAvailable,
      carPic: carImage,
    };
    addCar(valuetoAddCar);
    window.location.reload();
  };

  const handleClickClose = () => {
    closePopUp(false);
  };

  return (
    <div>
      <div className={classes.popup}>
        <div className={classes.popupInner}>
          <h2>Fill in the details</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Car Brand:
              <input
                type="text"
                name="carBrand"
                value={formData.carBrand}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Model:
              <input
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              ทะเบียนรถ:
              <input
                type="text"
                name="carRegist"
                value={formData.carRegist}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              จังหวัด:
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              <select
                className="form-select form-select-lg mb-3"
                name="isAvailable"
                onChange={handleInputChange}
                value={formData.isAvailable} // Convert boolean to string
              >
                <option value="true">Available</option>
                <option value="false">Not Availavle</option>
              </select>
            </label>
            <div>
              <button className="btn btn-primary" type="submit">
                Add
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleClickClose}
              >
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddConfirm;
