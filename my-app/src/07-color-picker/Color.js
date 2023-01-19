import React from "react";

const Color = ({ hex, name, setColor }) => {
  return (
    <div
      onClick={setColor}
      className="color-square"
      style={{ backgroundColor: `${hex}` }}
    >
      {name}
    </div>
  );
};

export default Color;
