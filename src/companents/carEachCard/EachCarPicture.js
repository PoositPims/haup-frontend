import React from "react";

function EachCarPicture(data) {
  const carPic = data.data;
  return (
    <div>
      <img
        src={carPic}
        alt="pictureCar"
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
}

export default EachCarPicture;
