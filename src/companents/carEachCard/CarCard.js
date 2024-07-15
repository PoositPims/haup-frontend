import React from "react";
import classes from "./CarCard.module.css";
import { NavLink } from "react-router-dom";

function CarCard({
  id,
  carBrand,
  carModel,
  carRegist,
  province,
  isAvailable,
  carPic,
}) {
  console.log("isAvailable", isAvailable);

  return (
    <div className={classes.eachCard}>
      <NavLink
        to={{
          pathname: "/each-car",
        }}
        state={{
          id,
          carBrand,
          carModel,
          carRegist,
          province,
          isAvailable,
          carPic,
        }}
      >
        <img className="card-img-top rounded" alt="card-img" src={carPic} />
        <div className="d-flex justify-content-between">
          <p>{carBrand}</p>
          <div
            className={
              isAvailable === false ? "btn btn-danger" : "btn btn-success"
            }
          >
            {isAvailable === false ? "Not available" : "Available"}
          </div>
        </div>
        <p>{carModel}</p>
        <p>{carRegist}</p>
        <p>{province}</p>
      </NavLink>
    </div>
  );
}

export default CarCard;
