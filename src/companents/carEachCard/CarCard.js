import React from "react";
import classes from "./CarCard.module.css";
import { NavLink } from "react-router-dom";

function CarCard({
  id,
  carBarnd,
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
        state={{ id, carBarnd, carModel, carRegist, province, status, carPic }}
      >
        <img class="card-img-top rounded" alt="card-img" src={carPic} />
        <div class="d-flex justify-content-between">
          <p>{carBarnd}</p>
          <div
            class={
              status === "not availavle" ? "btn btn-success" : "btn btn-danger"
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
