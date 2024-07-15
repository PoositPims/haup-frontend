import React, { useState } from "react";
// import classes from "./EachCarDetail.module.css";

function EachCarDetail(data, field) {
  const [clickField, setClickField] = useState([]);

  const [carData, setCarData] = useState({
    carBrand: data.data.carBrand,
    carModel: data.data.carModel,
    carRegist: data.data.carRegist,
    province: data.data.province,
    isAvailable: data.data.isAvailable,
  });

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
  // console.log("editState", editState);
  function handleInputChange(e, field) {
    console.log("e", e);
    console.log("field", field);
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
    setClickField(field);
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
  console.log("clickField", clickField);
  return (
    <div className="w-25">
      <>
        {Object.keys(carData).map((field) => (
          <div key={field}>
            {editState[field] ? (
              <>
                {clickField === "isAvailable" ? (
                  <div>
                    <select
                      value={inputValues[field]}
                      onChange={(e) => handleInputChange(e, field)}
                    >
                      <option value="true">Available</option>
                      <option value="false">Not available</option>
                    </select>
                  </div>
                ) : (
                  <input
                    type="text"
                    value={inputValues[field]}
                    onChange={(e) => handleInputChange(e, field)}
                  />
                )}
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
