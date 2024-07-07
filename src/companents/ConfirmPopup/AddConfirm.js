import React, { useState } from "react";
import classes from "./AddConfirm.module.css";

function AddConfirm({ closePopUp, onAddData }) {
  const [formData, setFormData] = useState({
    carBrand: "",
    carModel: "",
    carRegist: "",
    province: "",
    status: "availavle",
    carPic: "https://picsum.photos/id/1/250/250",
  });
  const [showPopupAdd, setShowPopupAdd] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddData({
      carBrand: formData.carBrand,
      carModel: formData.carModel,
      carRegist: formData.carRegist,
      province: formData.province,
      status: "availavle",
      carPic: "https://picsum.photos/id/1/250/250",
    });
    setShowPopupAdd(false);
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
              Car Name:
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddConfirm;
