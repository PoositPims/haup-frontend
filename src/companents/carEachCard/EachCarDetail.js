import React, { useState } from "react";
import classes from "./EachCarDetail.module.css";

function EachCarDetail(data, field) {
  const [carData, setCarData] = useState({
    carBrand: data.data.carBrand,
    carModel: data.data.carModel,
    carRegist: data.data.carRegist,
    province: data.data.province,
    isAvailable: data.data.isAvailable,
  });
  //   console.log("data", data);

  function checkLabel(field) {
    if (field === "carBrand") {
      return "ยี่ห้อ";
    } else if (field === "carModel") {
      return "รุ่น";
    } else if (field === "carRegist") {
      return "ป้ายทะเบียน";
    } else if (field === "province") {
      return "จังหวัด";
    } else if (field === "isAvailable") {
      return "Status";
    }
  }

  const [editState, setEditState] = useState({
    carModel: false,
    carBrand: false,
    carRegist: false,
    province: false,
    isAvailable: false,
  });

  const [inputValues, setInputValues] = useState({ ...carData });

  function handleInputChange(e, field) {
    const { value } = e.target;
    setInputValues((pre) => ({
      ...pre,
      [field]: value,
    }));
  }

  function handleEdit(field) {
    setEditState((pre) => ({
      ...pre,
      [field]: true,
    }));
  }

  const handleConfirm = (field) => {
    setCarData((prevState) => ({
      ...prevState,
      [field]: inputValues[field],
    }));
    setEditState((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };

  const handleCancel = (field) => {
    setEditState((prevState) => ({
      ...prevState,
      [field]: false,
    }));
    setInputValues((prevState) => ({
      ...prevState,
      [field]: carData[field],
    }));
  };

  return (
    <div className="w-25">
      <>
        {Object.keys(carData).map((field) => (
          <div key={field}>
            {editState[field] ? (
              <>
                <input
                  type="text"
                  value={inputValues[field]}
                  onChange={(e) => handleInputChange(e, field)}
                />
                <button
                  className="btn btn-primary"
                  onClick={() => handleConfirm(field)}
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleCancel(field)}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-between">
                  <span>{checkLabel(field)}</span>
                  <span>{carData[field]}</span>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => handleEdit(field)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </>
    </div>
  );
}

export default EachCarDetail;
