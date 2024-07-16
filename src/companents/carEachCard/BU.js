import React, { useState } from "react";
import axios from "../../config/axios";

function EachCarDetail(data) {
  const [clickField, setClickField] = useState([]);

  const [carData, setCarData] = useState({
    carBrand: data.data.carBrand,
    carModel: data.data.carModel,
    carRegist: data.data.carRegist,
    province: data.data.province,
    isAvailable: data.data.isAvailable,
  });

  console.log("carData.carBrand ==>", carData.carBrand);

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
    setClickField(field);
  }

  const handleConfirm = async (field) => {
    console.log("field", field);
    console.log("inputValues[field]", inputValues[field]);

    const id = data.data.id;
    try {
      const res = await axios.put(`/cars/${id}`, {
        [field]: inputValues[field],
      });
      setCarData((prevState) => ({
        ...prevState,
        [field]: inputValues[field],
      }));
      setEditState((prevState) => ({
        ...prevState,
        [field]: false,
      }));
      console.log("res.data", res);
    } catch (err) {
      console.error(err);
    }
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

  const renderField = (field) => {
    if (field === "isAvailable") {
      return (
        <div>
          <select
            value={inputValues[field]}
            onChange={(e) => handleInputChange(e, field)}
            className="form-select form-select-lg mb-3"
          >
            <option value="true">Available</option>
            <option value="false">Not available</option>
          </select>
        </div>
      );
    } else {
      return (
        <input
          type="text"
          value={inputValues[field]}
          onChange={(e) => handleInputChange(e, field)}
        />
      );
    }
  };

  const renderValue = (field) => {
    // console.log("carData.isAvailable", carData.isAvailable);
    if (field === "isAvailable") {
      return (
        <div
          className={
            carData.isAvailable === false ? "btn btn-danger" : "btn btn-success"
          }
        >
          {carData.isAvailable === false ? "Not available" : "Available"}
        </div>
      );
    } else {
      return <span>{carData[field]}</span>;
    }
  };

  return (
    <div className="w-25">
      <>
        {Object.keys(carData).map((field) => (
          <div key={field} className="mb-3">
            {editState[field] ? (
              <>
                {renderField(field)}
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
                  {renderValue(field)}
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
