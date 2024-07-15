import React, { useState } from "react";
import MainNavbar from "../companents/layout/MainNavbar";
import classes from "./EachCar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import EachCarDetail from "../companents/carEachCard/EachCarDetail";
import EachCarPicture from "../companents/carEachCard/EachCarPicture";
import axios from "../config/axios";

function EachCar() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [items, setItems] = useState([data]);
  // console.log("[data]", [data]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  function onEdit() {}

  console.log("data", data);

  function handleDeleteClick(itemId) {
    console.log("itemId", itemId);
    setItemToDelete(itemId);
    setShowConfirm(true);
  }

  const confirmDelete = async () => {
    // setItems(items.filter((item) => item.id !== itemToDelete));
    // console.log("itemToDelete", itemToDelete);
    // console.log("items===>", items);
    // const id = items.filter((item) => item.id !== itemToDelete);
    // console.log("id", id);
    try {
      // const res = await axios.delete(`/cars/${id}`);
      const res = await axios.delete(`/cars/${itemToDelete}`);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
    setShowConfirm(false);
    setItemToDelete(null);
    navigate("/");
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setItemToDelete(null);
  };

  return (
    <div>
      <MainNavbar />
      <div className={classes.containner}>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-warning mx-2"
            onClick={() => onEdit()}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={() => handleDeleteClick(data.id)}
          >
            Delete
          </button>
        </div>
        <div className="d-flex justify-content-around mt-5">
          <EachCarPicture data={data.carPic} />
          <EachCarDetail data={data} />
        </div>

        {showConfirm && (
          <div className={classes.overlay}>
            <div className={classes.confirmDialog}>
              <p>Are you sure you want to delete this item?</p>
              <button className="btn btn-primary" onClick={confirmDelete}>
                Yes
              </button>
              <button className="btn btn-danger" onClick={cancelDelete}>
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EachCar;
