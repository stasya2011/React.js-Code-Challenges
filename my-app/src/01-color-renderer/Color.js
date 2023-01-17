import React from "react";

const Color = ({ hex, name }) => {
  return (
    <div className="color-square" style={{ backgroundColor: `${hex}` }}>
      {name}
    </div>
  );
};

export default Color;
