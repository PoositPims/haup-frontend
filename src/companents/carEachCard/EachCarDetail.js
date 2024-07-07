import React from "react";
import classes from "./EachCarDetail.module.css";

function EachCarDetail(data) {
  console.log("data", data.data.carBarnd);
  const eachCar = {
    carModel: data.data.carModel,
    carBrand: data.data.carBarnd,
    carRegist: data.data.carRegist,
    province: data.data.province,
    status: data.data.status,
  };
  return (
    <div className="w-25">
      <div className="d-flex justify-content-between">
        <h4>ยี่ห้อ</h4>
        <p className="">{eachCar.carBrand}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h4>รุ่นรถ</h4>
        <p>{eachCar.carModel}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h4>ทะเบียน</h4>
        <p>{eachCar.carRegist}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h4>จังหวัด</h4>
        <p>{eachCar.province}</p>
      </div>
      <div className="d-flex justify-content-between">
        <h4>สถานะ</h4>
        <p>{eachCar.status}</p>
      </div>
    </div>
  );
}

export default EachCarDetail;
