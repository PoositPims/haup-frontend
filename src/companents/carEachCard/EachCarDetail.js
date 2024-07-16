import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

function EachCarDetail(data) {
  const id = data.data.id;
  const [clickField, setClickField] = useState([]);
  const [carData, setCarData] = useState({
    carBrand: "",
    carModel: "",
    carRegist: "",
    province: "",
    isAvailable: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/cars/${id}`);
        const { carBrand, carModel, carRegist, province, isAvailable } =
          res.data.car;
        const filteredData = {
          carBrand,
          carModel,
          carRegist,
          province,
          isAvailable,
        };

        setCarData(filteredData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [id]);

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
          value={
            inputValues[field] !== "" ? inputValues[field] : carData[field]
          }
          onChange={(e) => handleInputChange(e, field)}
        />
      );
    }
  };

  const renderValue = (field) => {
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
    <div style={{ width: "40%" }}>
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
                  className="btn btn-danger ms-3"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-between">
                  <span>{checkLabel(field)}</span>
                  <div className="w-50 d-flex justify-content-between">
                    <span>{renderValue(field)}</span>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(field)}
                    >
                      Edit
                    </button>
                  </div>
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
