import React from "react";
import classes from "./CarCard.module.css";
import { NavLink } from "react-router-dom";

function CarCard({
  id,
  carBrand,
  carModel,
  carRegist,
  province,
  status,
  carPic,
}) {
  return (
    <div className={classes.eachCard}>
      <NavLink
        to={{
          pathname: "/eachCar",
        }}
        state={{
          id,
          carBrand,
          carModel,
          carRegist,
          province,
          status,
          carPic,
        }}
      >
        <img className="card-img-top rounded" alt="card-img" src={carPic} />
        <div className="d-flex justify-content-between">
          <p>{carBrand}</p>
          <div
            className={
              status === "not available" ? "btn btn-danger" : "btn btn-success"
            }
          >
            {status}
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
