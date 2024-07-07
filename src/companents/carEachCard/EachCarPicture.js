import React from "react";

function EachCarPicture(data) {
  //   console.log("data", data);
  const carPic = data.data;
  return (
    <div>
      <img src={carPic} alt="pictureCar" />
    </div>
  );
}

export default EachCarPicture;
